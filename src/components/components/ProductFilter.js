import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Range, getTrackBackground } from 'react-range';
import { ContenidoFiltro } from './ContenidoFiltro';
{/*label: "Dell", count: 1  */}

const filterData = {
  categories: [
    "Computadoras",
    "Oficina y/o Hogar",
    "Edición de Video",
    "Ingeniería y Arquitectura",
    "Diseño Gráfico",
    "Gamer"
  ],
  brands: [
    { label: "Dell" },
    { label: "HP" },
    { label: "TEC" }
  ],
  processors: [
    { label: "Celeron"},
    { label: "Core i3" },
    { label: "Core i5" }
  ],
  ram: [
    { label: "4GB" },
    { label: "8GB" },
    { label: "4GB" },
  ],
  storage: [
    { label: "256GB"},
    { label: "512GB"},
    { label: "1TB"},
    { label: "2TB"},
    { label: "Doble almacenamiento" }
  ],
  graphics: [
    { label: "Integrados" },
    { label: "5GB" },
    { label: "6GB" }
  ],
  priceRange: {
    min: 1700,
    max: 8300
  }
};

// Configuración del slider
const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
      },
    },
    {
      breakpoint: 393,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
      },
    },
  ],
};

// Componente CategoryFilter
const CategoryFilter = ({ categories, selectedCategories, onCategoryClick }) => (
  <div className='category-filter'>
    <h3>Categorías</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {categories.map((category, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedCategories.includes(category) ? 'selected' : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente BrandFilter
const BrandFilter = ({ brands, selectedBrands, onBrandClick }) => (
  <div className='category-filter'>
    <h3>Marca</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {brands.map((brand, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedBrands.includes(brand.label) ? 'selected' : ''}`}
          onClick={() => onBrandClick(brand.label)}
        >
          {brand.label}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente PriceFilter
const PriceFilter = ({ priceRange }) => {
  const [values, setValues] = useState([priceRange.min, priceRange.max]);
  const STEP = 100;
  const MIN = priceRange.min;
  const MAX = priceRange.max;

  return (
    <div>
      <h3>Filtrar por precio</h3>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '100%',
              background: getTrackBackground({
                values,
                colors: ['#C5C5C5', '#520FDA', '#C5C5C5'],
                min: MIN,
                max: MAX
              }),
              borderRadius: '5px',
              margin: '1em 0'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '18px',
              width: '18px',
              borderRadius: '50%',
              backgroundColor: '#520FDA',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            
          </div>
        )}
      />
      <div className="price-values" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight:'600' }}>
        <span>S/{values[0]}</span>
        <span>S/{values[1]}</span>
      </div>
    </div>
  );
};

// Componente ProcessorFilter
const ProcessorFilter = ({ processors, selectedProcessors, onProcessorClick }) => (
  <div className='category-filter'>
    <h3>Modelo de Procesador</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {processors.map((processor, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedProcessors.includes(processor.label) ? 'selected' : ''}`}
          onClick={() => onProcessorClick(processor.label)}
        >
          {processor.label}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente RamFilter
const RamFilter = ({ ram, selectedRam, onRamClick }) => (
  <div className='category-filter'>
    <h3>Memoria Ram</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {ram.map((ramOption, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedRam.includes(ramOption.label) ? 'selected' : ''}`}
          onClick={() => onRamClick(ramOption.label)}
        >
          {ramOption.label}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente StorageFilter
const StorageFilter = ({ storage, selectedStorage, onStorageClick }) => (
  <div className='category-filter'>
    <h3>Almacenamiento</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {storage.map((storageOption, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedStorage.includes(storageOption.label) ? 'selected' : ''}`}
          onClick={() => onStorageClick(storageOption.label)}
        >
          {storageOption.label}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente GraphicsFilter
const GraphicsFilter = ({ graphics, selectedGraphics, onGraphicsClick }) => (
  <div className='category-filter'>
    <h3>Gráficos</h3>
    <Slider {...sliderSettings} className='custom-slider'>
      {graphics.map((graphicsOption, index) => (
        <button
          key={index}
          id={`filter-button`} 
          className={`${selectedGraphics.includes(graphicsOption.label) ? 'selected' : ''}`}
          onClick={() => onGraphicsClick(graphicsOption.label)}
        >
          {graphicsOption.label}
        </button>
      ))}
    </Slider>
  </div>
);

// Componente Principal ProductFilter
const ProductFilter = ({ isOpen, onClose }) => {
  
  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <ContenidoFiltro onCloseContenido={onClose}/>
    </div>
  );
};

export default ProductFilter;