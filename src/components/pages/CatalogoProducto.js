import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomSelect from "../components/CustomSelect";
import ProductFilter from "../components/ProductFilter";
import { ContenidoFiltro } from '../components/ContenidoFiltro';
import { MdGridOn } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { ImEqualizer2 } from "react-icons/im";
import { Grilla } from '../components/Grilla';
import { List } from '../components/List';
import { getCategorias, getProductsCategoria } from '../../actions/home';
import { Pagination } from '../components/Pagination';

export const CatalogoProducto = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [view, setView] = useState('grid');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productos, setProductos] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const categoria = queryParams.get('categoria') || '';
  const limit = parseInt(queryParams.get('limit'), 10) || 10;
  const page = parseInt(queryParams.get('page'), 10) || 1;

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await getCategorias();
        setCategories(result);
        if (categoria) {
          setSelectedCategory(categoria);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    loadCategories();
  }, [categoria]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        if (selectedCategory) {
          const result = await getProductsCategoria(selectedCategory, limit, page);
          setProductos(result.productos || []);
          setTotalProductos(result.total || 0);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory, limit, page]);

  const handleCategoryChange = (option) => {
    setSelectedCategory(option.value);
    navigate(`/catalogo-producto?categoria=${option.value}&limit=${limit}&page=1`); // Usar navigate para cambiar la ruta
  };

  const handlePageChange = (newPage) => {
    navigate(`/catalogo-producto?categoria=${selectedCategory}&limit=${limit}&page=${newPage}`); // Usar navigate para cambiar la ruta
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="producto-page position-relative font-family-montserrat">
      <div className="producto-titulo">
        <h4 className='txt-semibold txt-center txt-titulo'>{productos.length} Productos encontrados</h4>
      </div>
      <div className="producto-header">
        <CustomSelect
          options={
            categories.map(category => ({ value: category.categoriaCodigo, label: category.categoriaNombre }))
          }
          onChange={handleCategoryChange}
          value={categories.find(cat => cat.categoriaCodigo === selectedCategory) || null}
        />
        <div className='producto-view flex-container'>
          <div className="producto-view-options align-center flex-container justify-content">
            <button
              id="filtro-btn"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className='boton-filtro'>
              <ImEqualizer2 className="icon-equalizer" size={16} />
              Filtrar
            </button>
            <ProductFilter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
          </div>
          <div className='shop-view'>
            <h5>Vista</h5>
            <MdGridOn className={`pointer ${view === 'grid' ? 'active' : ''}`} size={22} onClick={() => setView('grid')} />
            <FaList className={`pointer ${view === 'list' ? 'active' : ''}`} size={20} onClick={() => setView('list')} />
          </div>
        </div>
      </div>
      <div className='contenido-producto'>
        <div className='contenido-filtro'>
          <ContenidoFiltro onCloseContenido={isFilterOpen ? () => setIsFilterOpen(false) : undefined} />
        </div>
        {view === 'grid' ? <Grilla productos={productos} /> : <List productos={productos} />}
      </div>
      <Pagination
        totalProductos={totalProductos}
        productosPorPagina={limit}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};