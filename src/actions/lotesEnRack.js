import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import { setVidaUtilManual } from "./lotesV2";

export const loadSucursales=()=>{
    return async(dispatch)=>{
        try {

            const resp=await fetchConToken('lotes-en-rack/getSucursales')
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setSucursalList(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const loadSucursalesByUsuario=(usuario)=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotes-en-rack/getSucursalesByUsuario?usuario=${usuario}`)
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setSucursalList(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setSucursalList=(registros)=>({
    type:types.getSucursalesRack,
    payload:registros
})

export const loadAlmacen=(almacenID)=>{
    return async(dispatch)=>{
        try {

            const resp=await fetchConToken(`lotes-en-rack/getAlmacen/${almacenID}`)
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setAlmacenesList(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const loadAlmacenByUsuario=(almacenID)=>{
    return async(dispatch)=>{
        try {

            const resp=await fetchConToken(`lotes-en-rack/getAlmacenTienda/${almacenID}`)
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setAlmacenesList(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setAlmacenesList=(registros)=>({
    type:types.getAlmacenesRack,
    payload:registros
})

export const loadInventario=(sucursal,almacen,ubicacion,usuario,dias)=>{
    return async(dispatch)=>{
        try {
            const parametros={
                sucursal:sucursal,
                almacen:almacen,
                ubicacion:ubicacion,
                usuario:usuario,
                dias:dias
            }
            const resp=await fetchConToken('lotes-en-rack/getInventario',parametros,'PUT')
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
const setInventarioLoad=(registro)=>({
    type:types.getInventarioLoaded,
    payload:registro
})


export const loadValidaQr=(qrCbArt)=>{
    return async(dispatch)=>{
        try {
            const parametros={
                inputCodigo:qrCbArt
            }
            const resp=await fetchConToken('lotes-en-rack/valida-qr',parametros,'PUT')
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                //console.log('la validacion retorna',registros)
                dispatch(setValidaQr(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setValidaQr=(registro)=>({
    type:types.validarQr,
    payload:registro
})

export const storeInventario=(articulo,serieLote,cantidad,usuario,estado,ubicacion,almacen,sucursal,salidaloteid,entradaloteid,modulo)=>{
//export const storeInventario=(articulo,serieLote,cantidad,usuario,estado,ubicacion,almacen,sucursal,ultimo)=>{
    //console.log('store inv ultimo '+salidaloteid,entradaloteid)
    return async(dispatch)=>{
        try {
            const parametros={
                articulo:articulo,
                serieLote:serieLote,
                cantidad:cantidad,
                usuario:usuario,
                estado:estado,
                ubicacion:ubicacion,
                almacen:almacen,
                sucursal:sucursal,
                salidaloteid:salidaloteid,
                entradaloteid:entradaloteid,
                modulo:modulo
                
            }
            const resp=await fetchConToken('lotes-en-rack/store-inventario',parametros,'POST')
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                if(registros[0].entradaLoteId !==null && registros[0].salidaLoteId !==null){
                    dispatch(imprimeQRRack(registros[0].id))
                }
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const loadFiltrosHeader=(registros)=>({
    type:types.filtrosHeaderRack,
    payload:registros
})

export const loadFiltrosModal=(registros)=>({
    type:types.filtrosModalRack,
    payload:registros
})

export const loadVidaUtil=(serieLote,articulo)=>{
    return async(dispatch)=>{
        try {
            const parametros={
                serieLote:serieLote,
                articulo:articulo
                
            }
            const resp=await fetchConToken('lotes-en-rack/vida-util',parametros,'PUT')
            const body= await resp.json(); 
            //const registros=body.registro;
            if(body.ok){
                dispatch(loadVidaUtilRedux(body.resultado[0]))
                dispatch(setVidaUtilManual(null))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const loadVidaUtilRedux=(vidautil)=>({
    type:types.getVidaUtil,
    payload:vidautil.VidaUtilM
})

export const loadFechaVencimiento=(serieLote,articulo,fabricante)=>{
    return async(dispatch)=>{
        try {
            const parametros={
                articulo:articulo,
                fabricante:fabricante,
                serieLote:serieLote
                /*articulo:"F071524009",
                fabricante:"Christian Dior",
                serieLote:"1K06"*/
            }
            const resp=await fetchConToken('lotes/getFechaVencimiento',parametros,'PUT')
            const body= await resp.json(); 
            if(body.ok){
                dispatch(loadFechaVencimientoRedux(body.registro[0]))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const loadFechaVencimientoRedux=(fechavencimiento)=>({
    type:types.getFechaVencimiento,
    payload:fechavencimiento.fechaVencimiento
})
const resSalidaEntradaLote=(ultimo)=>({
    type:types.resSalidaEntradaLote,
    payload:ultimo
})
export const spAfectaLotesEnRAck=(sucursal,almacen,articulo,cantidad,serieLote,posicionRack,usuario)=>{
    return async(dispatch)=>{
        try {
                const afecta={
                    sucursal:sucursal,
                    almacen:almacen,
                    articulo:articulo,
                    cantidad:cantidad,
                    serieLote:serieLote
                } 
                //console.log('afecta',afecta);
                const resp = await fetchConToken(`lotes-en-rack/afecta-lotes-en-rack`,afecta,'POST')
                const body = await resp.json();    
                console.log('devuelve AFECTA',body);
                if(body.ok){
                    const ultimo = body.resultado
                    dispatch(resSalidaEntradaLote(ultimo))
                    //dispatch(storeInventario(articulo,serieLote,cantidad,usuario,'alta',posicionRack,almacen,sucursal,ultimo.salidaLoteId,ultimo.entradaLoteId));
                    if(ultimo.cod===1){
                        //dispatch(storeInventario(articulo,serieLote,cantidad,usuario,'alta',posicionRack,almacen,sucursal,ultimo));
                        dispatch(storeInventario(articulo,serieLote,cantidad,usuario,'alta',posicionRack,almacen,sucursal,ultimo.salidaLoteId,ultimo.entradaLoteId,'LOTE-EN-RACK'));
                    }
                    dispatch(loadInventario(sucursal,almacen,posicionRack,usuario,2));

                    Swal.fire({
                        confirmButtonColor: '#1976d2',
                        title:(ultimo.cod===1)? 'Transacción realizada con éxito': (ultimo.cod===1)? 'Éxito': 'Advertencia',
                        //text:body.resultado[0].msg,
                        //title: 'Resultado',
                        html: '1. Inventario no se pudo actualizar.<br> 2. '+JSON.stringify(ultimo.msg),
                        icon:(ultimo.cod===0)? 'warning' : (ultimo.cod===2)? 'error':'success'
                        //icon:'success'
                    })
                    //dispatch(loadDetalleArticulo(articulo,importacion));
                    
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
            
        } catch (error) {
            console.log(error);
        }
    }
};

export const eliminaInventario=(row,sucursal,almacen,posicionRack,usuario)=>{
    return async(dispatch)=>{
        try {
            console.log('row desde action',row)
            const resp = await fetchConToken(`lotes-en-rack/deleteInv/${row.id}`,{},'DELETE')
            const body = await resp.json();
            if(body.ok){
                //dispatch(detalleArticuloEliminaRedux());
                dispatch(loadInventario(sucursal,almacen,posicionRack,usuario,2))
                Swal.fire({
                    confirmButtonColor: '#1976d2',
                    title:'Eliminado!',
                    text:'El registro ha sido eliminado.',
                    icon:'success'
                })
                

            }else{
                console.log(body);
                Swal.fire('Error',JSON.stringify(body.msg),'error')
            }
        } catch (error) {
            console.log(error);
        }
    }
}
const detalleArticuloEliminaRedux=()=>({
    type:types.detalleArticuloDelete
    //payload:eliminado
});


export const imprimeQRRack=(codigo)=>{
    return async(dispatch)=>{
        try {
            if(codigo){
                const parametro={
                    codigos:codigo
                }
                const resp=await fetchConToken(`lotes-en-rack/imprimirQR`,parametro,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    console.log(body);
                    dispatch(setImpresionQR(registro))
                }else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const setImpresionQR=(resultado)=>({
    type:types.setImpresionQRrack,
    payload:resultado
})


export const loadSerieLote=(sucursal,almacen,articulo)=>{
    return async(dispatch)=>{
        try {
            const parametros={
                sucursal:sucursal,
                almacen:almacen,
                articulo:articulo
            }
            const resp=await fetchConToken('lotes-en-rack/getSerieLote',parametros,'PUT')
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                dispatch(setSerieLote(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setSerieLote=(registro)=>({
    type:types.getSerieLoteVidaUtilLoad,
    payload:registro
})

export const setActiveSerieLoteCheck=(registro)=>({
    type:types.setActiveSerieLoteCheck,
    payload:registro
})


export const limpiaLotesRack=(sucursal,almacen,articulo,activeDetalleSerieLotes)=>{
    return async(dispatch)=>{
        try {
            if(activeDetalleSerieLotes){

                let codigos='';
                let cantidades=0;
                activeDetalleSerieLotes.forEach(function(detalle,index) {
                    //codigos=(index >= 1)? codigos+','+detalle.id:codigos+detalle.id;
                    codigos=(index >= 1)? codigos+','+detalle.serielote:detalle.serielote;
                    cantidades=cantidades+detalle.stock;
                });

                const afecta={
                    sucursal:sucursal,
                    almacen:almacen,
                    articulo:articulo,
                    cantidad:cantidades,
                    serieLotes:codigos
                }
                console.log('afecta limpia',afecta);
                const resp = await fetchConToken(`lotes-en-rack/limpia-lotes-en-rack`,afecta,'POST')
                const body = await resp.json();    
                if(body.ok){
                    const ultimo = body.resultado

                    dispatch(loadSerieLote(sucursal,almacen,articulo))

                    Swal.fire({
                        confirmButtonColor: '#1976d2',
                        title:(ultimo.cod===1)? 'Transacción realizada con éxito': (ultimo.cod===1)? 'Éxito': 'Advertencia',

                        html: JSON.stringify(ultimo.msg),
                        icon:(ultimo.cod===0)? 'warning' : (ultimo.cod===2)? 'error':'success'
                    })
                    
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
                
            }
        } catch (error) {
            console.log(error);
        }
    }
};