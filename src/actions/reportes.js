import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const loadFiltrosHeaderRpt=(registros)=>(
    //console.log('recibe',registros)
{
    
    type:types.filtrosHeaderRackRpt,
    payload:registros
}
)

export const loadInventario=(formulario)=>{
    console.log('load inventario rpt')
    return async(dispatch)=>{
        try {
            const parametros={
                sucursal:formulario.sucursal,
                almacen:formulario.almacen,
                ubicacion:formulario.ubicacion,
                usuario:formulario.usuario,
                fechaInicio:formulario.fechaInicio,
                fechaFin:formulario.fechaFin
            }
            const resp=await fetchConToken('reportes/inventario',parametros,'PUT')
            const body= await resp.json(); 
            const registros=body.resultado;
            
            if(body.ok){
                //dispatch(setAlmacenesList(registros))
                dispatch(setInventarioLoad(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const loadRptSaldos=(formulario)=>{
    console.log('load inventario rptZZZ')
    return async(dispatch)=>{
        try {
            const parametros={
                sucursal:formulario.sucursal,
                almacen:formulario.almacen,
                fabricante:formulario.fabricanteslbl,
                categoria:formulario.categoriaslbl,
                barraQrArticulo:formulario.barraQrArticulo
            }
            console.log(parametros)
            const resp=await fetchConToken('reportes/reporte-saldos-inventario',parametros,'PUT')
            const body= await resp.json(); 
            const registros= await body.resultado;
            if(body.ok){
                dispatch(setInventarioLoad(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setInventarioLoad=(registro)=>({
    type:types.getInventarioLoadedRpt,
    payload:registro
})


export const loadFiltrosHeaderRptConsulta=(registros)=>({
    type:types.filtrosHeaderRackRptConsulta,
    payload:registros
})

export const loadInventarioConsulta=(formulario)=>{
    console.log('load inventario rpt consulta')
    return async(dispatch)=>{
        try {
            const parametros={
                sucursal:formulario.sucursal,
                almacen:formulario.almacen,
                sku:formulario.sku
            }
            const resp=await fetchConToken('reportes/consulta-serielote',parametros,'PUT')
            const body= await resp.json(); 
            const registros=body.resultado;
            
            if(body.ok){
                //dispatch(setAlmacenesList(registros))
                dispatch(setInventarioLoadConsulta(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setInventarioLoadConsulta=(registro)=>({
    type:types.getInventarioLoadedRptConsulta,
    payload:registro
})



export const loadFabricantesBysucursal=(sucursal)=>{
    console.log('loadFabricantesBysucursal rpt')
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`reportes/getFabricantesBySucursal/${sucursal}`)
            const body= await resp.json(); 
            const registros=body.registro;
            
            if(body.ok){
                dispatch(setFabricantesBysucursal(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setFabricantesBysucursal=(registro)=>({
    type:types.setFabricantesBysucursal,
    payload:registro
})


export const loadCategoriasBysucursal=(sucursal)=>{
    console.log('loadCategoriasBysucursal rpt')
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`reportes/getCategoriasBySucursal/${sucursal}`)
            const body= await resp.json(); 
            const registros=body.registro;
            
            if(body.ok){
                dispatch(setCategoriasBysucursal(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setCategoriasBysucursal=(registro)=>({
    type:types.setCategoriasBysucursal,
    payload:registro
})