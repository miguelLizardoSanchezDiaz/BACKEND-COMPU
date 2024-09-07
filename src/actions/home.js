//import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
//import { types } from "../types/types";

export const getCategorias = async () => {
    try {
        const resp = await fetchConToken('web/api/categorias')
        //const resp = await fetchConToken('web/api/productos-categoria?categoriaCode=101&limit=10')
        const body = await resp.json();
        // console.log('getImportacion x', body);
        return body;
    } catch (error) {
        console.log(error)
        throw error
    }
};

export const getSliders = async () => {
    try {
        const resp = await fetchConToken('web/api/sliders')
        const body = await resp.json();
        //console.log('getImportacion x', body);
        return body;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getProductsCategoria = async (categoriaCode, limit = 10, page = 1) => {
    try {
        const url = `web/api/productos-categoria?categoriaCode=${categoriaCode}&limit=${limit}&page=${page}`;
        const resp = await fetchConToken(url);
        const body = await resp.json();
        console.log('body', body);
        return body;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getProducto = async (sku) => {
    try {
        const url = `web/api/producto?sku=${sku}`;
        const resp = await fetchConToken(url)
        const body = await resp.json();
        //console.log('getImportacion x', body);
        return body;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getMasVendidos = async () => {
    try {
        const resp = await fetchConToken('web/api/mas-vendidos')
        const body = await resp.json();
        //console.log('getImportacion x', body);
        return body;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getOfertas = async () => {
    try {
        const resp = await fetchConToken('web/api/ofertas')
        const body = await resp.json();
        //console.log('getImportacion x', body);
        return body;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getMarcas = async (categoriaCode) => {
    try {
        const url = `web/api/marcas?categoriaCode=${categoriaCode}`;
        const resp = await fetchConToken(url);
        const body = await resp.json();
        console.log('body', body);
        return body;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// export const getProcesadores = async (categoriaCode) => {
//     try {
//         const url = `web/api/procesadores?categoriaCode=${categoriaCode}`;
//         const resp = await fetchConToken(url);
//         const body = await resp.json();
//         return body;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

// export const getRams = async (categoriaCode) => {
//     try {
//         const url = `web/api/ram?categoriaCode=${categoriaCode}`;
//         const resp = await fetchConToken(url);
//         const body = await resp.json();
//         return body;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

// export const getStorages = async (categoriaCode) => {
//     try {
//         const url = `web/api/storages?categoriaCode=${categoriaCode}`;
//         const resp = await fetchConToken(url);
//         const body = await resp.json();
//         return body;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

// export const getGraficos = async (categoriaCode) => {
//     try {
//         const url = `web/api/graficos?categoriaCode=${categoriaCode}`;
//         const resp = await fetchConToken(url);
//         const body = await resp.json();
//         return body;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

export const getPrecioRango = async (categoriaCode) => {
    try {
        const url = `v1/web/api/prrecio-rango?categoriaCode=${categoriaCode}`;
        const resp = await fetchConToken(url);
        const body = await resp.json();
        return body;
    } catch (error) {
        console.log(error);
        throw error;
    }
};