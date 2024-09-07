import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const importacionLoading=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotes/getImportacion')
            const body= await resp.json(); 
            //console.log('getImportacion',body);
            const registros=body.registro;
            if(body.ok){
                dispatch(getImportacionLoaded(registros))
            }else{
                Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                dispatch(logout());
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const getImportacionLoaded=(registros)=>({
    type:types.getImportacionLoaded,
    payload:registros
})

export const categoriaByidImportacion=(importacion)=>{
    
    return async(dispatch)=>{
        try {
            //console.log('go importacion',importacion);
            if(importacion){
                const resp=await fetchConToken(`lotes/getCategoriasById/${importacion.id}`)
                const body= await resp.json(); 
                //console.log('categoriaByidImportacion',body);
                const registro=body.registro;
                if(body.ok){
                    dispatch(getCategoriasLoaded(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const getCategoriasLoaded=(registro)=>({
    type:types.getCategoriasLoaded,
    payload:registro
})

export const loadDetalleArticulo=(articulo,activeImportacion)=>{
    return async(dispatch)=>{
        try {
            if(articulo){
                //console.log('activeImportacion',activeImportacion.id);
                const objeto={
                    impoPUid:activeImportacion.id,
                    articulo:articulo.impoPUarticulo
                }
                const resp=await fetchConToken(`lotes/getLotesByArticulo`,objeto,'PUT')
                const body= await resp.json(); 
                const registro=body.registro;
                if(body.ok){
                    dispatch(setDetalleArticulo(registro))
                }else{
                    dispatch(setDetalleArticulo([]))
                }

                dispatch(activeAfectar(false))
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const setDetalleArticulo=(registro)=>({
    type:types.setDetalleArticulo,
    payload:registro
})

export const marcasByidImportacion=(importacion)=>{
    
    return async(dispatch)=>{
        try {
            //console.log('go marcas',importacion);
            if(importacion){
                const resp=await fetchConToken(`lotes/getMarcasById/${importacion.id}`)
                const body= await resp.json(); 
                //console.log('categoriaByidImportacion',body);
                const registro=body.registro;
                if(body.ok){
                    dispatch(getMarcasLoaded(registro))
                }else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const getMarcasLoaded=(registro)=>({
    type:types.getMarcasLoaded,
    payload:registro
})


export const setActiveImportacion=(registro)=>({
    type:types.setActiveImportacion,
    payload:registro
})

export const imprimeRS=(activeDetalleArticuloRS)=>{
    return async(dispatch)=>{
        try {
            if(activeDetalleArticuloRS){
                let codigos='';
                activeDetalleArticuloRS.forEach(function(detalle,index) {
                    //console.log(index);
                    codigos=(index >= 1)? codigos+','+detalle.id:codigos+detalle.id;
                  });
                
                const parametro={
                    codigos
                }
                //console.log('codigos rs',codigos);
                const resp=await fetchConToken(`lotes/imprimirRS`,parametro,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                //console.log('registroxsss',body)
                if(body.ok){
                    dispatch(setImpresionRS(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const imprimeQR=(activeDetalleArticuloRS)=>{
    return async(dispatch)=>{
        try {
            if(activeDetalleArticuloRS){
                let codigos='';
                activeDetalleArticuloRS.forEach(function(detalle,index) {
                    codigos=(index >= 1)? codigos+','+detalle.id:codigos+detalle.id;
                });
                
                const parametro={
                    codigos
                }
                const resp=await fetchConToken(`lotes/imprimirQR`,parametro,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setImpresionQR(registro))
                }else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const imprimeRO=(activeDetalleArticuloRS)=>{
    return async(dispatch)=>{
        try {
            if(activeDetalleArticuloRS){
                let codigos='';
                activeDetalleArticuloRS.forEach(function(detalle,index) {
                    codigos=(index >= 1)? codigos+','+detalle.id:codigos+detalle.id;
                  });
                
                const parametro={
                    codigos
                }
                //console.log('codigos rs',codigos);
                const resp=await fetchConToken(`lotes/imprimirRO`,parametro,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                console.log('registroxsss QR',body)
                if(body.ok){
                    dispatch(setImpresionRO(registro))
                }else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const setImpresionRO=(resultado)=>({
    type:types.setImpresionRO,
    payload:resultado
})
export const setImpresionQR=(resultado)=>({
    type:types.setImpresionQR,
    payload:resultado
})
export const setImpresionRS=(resultado)=>({
    type:types.setImpresionRS,
    payload:resultado
})
export const setActiveArticulo=(registro)=>({
    type:types.setActiveArticulo,
    payload:registro
})

export const busca=(filtrosHeader,filtrosBtn,activeImportacion)=>{    
    return async(dispatch)=>{
        //console.log('vamo a buscar')
        try {
            //console.log('filtrosBtn',filtrosHeader)
            //console.log('filtrosBtn',filtrosBtn)
            if(activeImportacion && filtrosHeader && filtrosBtn){
                const filtros={
                    articulo:filtrosHeader.impoPUarticulo,
                    categoria:filtrosHeader.impoPUcategoria,
                    marca:filtrosHeader.impoPUmarca,
                    neutral:(filtrosBtn.neutral)? 'neutral':'',
                    warning:(filtrosBtn.warning)? 'warning':'',
                    success:(filtrosBtn.success)? 'success':'',
                    cantidadSinAfectar:(filtrosBtn.afectar)? 1:''
                }
                const resp=await fetchConToken(`lotes/getImportacionById/${activeImportacion.id}`,filtros,'PUT')
                const body= await resp.json(); 
                const registro=body.registro;
                //console.log(' FILTR',filtros)
                //console.log('body FILTR',body)

                if(body.ok){
                    dispatch(getArticulosLoaded(registro))
                }else{
                    Swal.fire('Error','No pudimos recuperar ningún articulo, inténtelo nuevamente o comuniquese con el administrador del sistema','error')
                    dispatch(logout());
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

const logout=()=>({
    type:types.authLogout
})

export const buscaBtn=(color,activo)=>{    
    return async(dispatch)=>{
        try {
            console.log('busca '+color,activo)

            if(color==='neutral' && activo===true){
                dispatch(buscaArticuloBtn('neutral'))
            }
            else if(color==='warning' && activo===true){
                dispatch(buscaArticuloBtn('warning'))
            }
            else if(color==='success' && activo===true){
                dispatch(buscaArticuloBtn('success'))
            }

            else if(color==='neutral' && activo===false){
                dispatch(buscaArticuloBtn('warning'))
                dispatch(buscaArticuloBtn('success'))
            }
            else if(color==='warning' && activo===false){
                dispatch(buscaArticuloBtn('neutral'))
                dispatch(buscaArticuloBtn('success'))
            }
            else if(color==='success' && activo===false){
                dispatch(buscaArticuloBtn('neutral'))
                dispatch(buscaArticuloBtn('warning'))
            }
            else{
                dispatch(buscaArticuloBtn(''))
            }
        } catch (error) {
            console.log(error)
        }
    }
}


const buscaArticuloBtn=(color)=>({
    type:types.buscaPorArticulosBtn,
    payload:color
})

export const getTarjas=(activeImportacion)=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotes/getTarja/${activeImportacion.id}`)
            const body= await resp.json(); 
            const registro=body.resultado;
            //console.log('getTarjas',registro)
            if(body.ok){
                dispatch(getTarjasLoaded(registro))
            }else{
                Swal.fire('Error','Inténtelo nuevamente o comuníquese con el administrador del sistema','error')
                dispatch(logout());
            }
       
        } catch (error) {
            console.log(error)
        }
    }
}
const getTarjasLoaded=(registro)=>({
    type:types.setTarja,
    payload:registro
})
export const getTraspaso=(activeImportacion)=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotes/getTranspasoInve/${activeImportacion.id}`)
            const body= await resp.json(); 
            const registro=body.resultado;
            //console.log('getTraspaso',registro)
            if(body.ok){
                dispatch(getTraspasoLoaded(registro))
            }else{
                Swal.fire('Error','Inténtelo nuevamente o comuníquese con el administrador del sistema','error')
                dispatch(logout());
            }
       
        } catch (error) {
            console.log(error)
        }
    }
}
const getTraspasoLoaded=(registro)=>({
    type:types.setTraspaso,
    payload:registro
})
export const articulosByImportacion=(importacion)=>{
    return async(dispatch)=>{
        try {
            //console.log('buscando todos...')
            if(importacion){
                const filtros={
                    articulo:"",
                    categoria:"",
                    marca:"",
                    color:"",
                    cantidadSinAfectar:""
                }
                const resp=await fetchConToken(`lotes/getImportacionById/${importacion.id}`,filtros,'PUT')
                const body= await resp.json(); 
                const registro=body.registro;
                //console.log('registroooooooo',registro)
                if(body.ok){
                    dispatch(getArticulosLoaded(registro))
                }else{
                    Swal.fire('Error','No pudimos recuperar ningún articulo, inténtelo nuevamente o comuniquese con el administrador del sistema','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const getArticulosLoaded=(registro)=>({
    type:types.getArticulosLoaded,
    payload:registro
})

export const getCamposLogisticos=(articulo)=>{
    return async(dispatch)=>{
        try {
            //console.log('todos')
            if(articulo){
                const objeto={
                    codigoArticulo:articulo.impoPUarticulo
                }
                const resp=await fetchConToken(`lotes/getDatosLogisticos/`,objeto,'PUT')
                const body= await resp.json(); 
                const resultado=body.resultado;
                if(body.ok){
                    dispatch(setCamposLogisticos(resultado[0]))
                }else{
                    Swal.fire('Error','No pudimos recuperar ningún articulo, inténtelo nuevamente o comuniquese con el administrador del sistema','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const setCamposLogisticos=(campos)=>({
    type:types.setCamposLogisticos,
    payload:campos
})

export const getImportacionInfoById=(importacion)=>{
    return async(dispatch)=>{
        try {
            //console.log('todos')
            if(importacion){
                const resp=await fetchConToken(`lotes/getImportacionInfoById/${importacion.id}`)
                const body= await resp.json(); 
                const registro=body.registro;
                //console.log('registro[0] info:',registro[0])
                if(body.ok){
                    dispatch(getImportacionInfoByIdLoaded(registro[0]))
                }else{
                    Swal.fire('Error','No pudimos recuperar ningún articulo, inténtelo nuevamente o comuniquese con el administrador del sistema','error')
                    dispatch(logout());
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const getImportacionInfoByIdLoaded=(registro)=>({
    type:types.activeImportacionInfo,
    payload:registro
})
const loteStartAddNew=(articuloDetalle)=>({
    type:types.addArticuloDetalle,
    payload:articuloDetalle
})

export const setActiveDetalleArticulo=(registro)=>({
    type:types.setActiveDetalleArticulo,
    payload:registro
})

export const setActiveDetalleArticuloRS=(registro)=>({
    type:types.setActiveDetalleArticuloRS,
    payload:registro
})
export const setClearDetalleArticuloRS=()=>({
    type:types.setClearDetalleArticuloRS,
})
export const setClearTarja=()=>({
    type:types.setClearTarja
})

export const setActiveFiltroHeader=(registro)=>({
    type:types.activeFiltroHeader,
    payload:registro
})

export const setActiveFiltroBtn=(registro)=>({
    type:types.activeFiltroBtn,
    payload:registro
})

export const setClearDetalleArticulo=()=>({
    type:types.setClearDetalleArticulo,
})

export const clearActiveArticulo=()=>({
    type:types.clearActiveArticulo,
})
export const setClearImpresionRS=()=>({
    type:types.setClearImpresionRS,
})
export const clearFiltroBtn=()=>({
    type:types.clearFiltroBtn,
})

export const clearFiltroHeader=()=>({
    type:types.clearFiltroHeader,
})


export const setClearListDetalleArticulo=()=>({
    type:types.setClearListDetalleArticulo,
})


export const loadAlmacenes=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotes/getAlmacenes')
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setAlmacenesList(registros))
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const setAlmacenesList=(registros)=>({
    type:types.loadAlmacenes,
    payload:registros
})


export const detalleArticuloStore=(formValues,activeArticulo,activeImportacion,filtrosHeader,filtrosBtn)=>{
    return async(dispatch)=>{
        try {

            const resp = await fetchConToken(`lotes/getImpoLotesCabeceraById/${activeImportacion.id}`)
            const body = await resp.json(); 
            if(body.ok){
                //console.log('true',body.registro[0])
                const detalle={
                    loteId:body.registro[0].id,
                    articuloCodigo:activeArticulo.impoPUarticulo,
                    almacen:formValues.almacen,
                    lote:formValues.serieLote,
                    cantidad:formValues.cantidad,
                    usuario:"",
                    importacionID:activeImportacion.id,
                    fechaVencimiento:formValues.fechaVencimiento
                }
                console.log('envia nuevo true',detalle);
                const resp = await fetchConToken(`lotes/storeDetalleArticulo`,detalle,'POST')
                const bodystoredetalletrue = await resp.json();    
                //console.log('devuelve NUEVO true',bodystoredetalletrue);
                if(bodystoredetalletrue.ok){
                    Swal.fire({
                        confirmButtonColor: 'rgb(26 68 119)',
                        title:'Éxito',
                        text:`Registro realizado con éxito`,
                        icon:'success'
                    })
    
                    dispatch(loteStartAddNew(bodystoredetalletrue.resultado[0]))
                }else{
                    Swal.fire('Error',bodystoredetalletrue.msg,'error')
                }
            }
            else{
                //console.log('false',body)
                const cabecera={
                    importacionId:activeImportacion.id
                }
                const resp = await fetchConToken(`lotes/storeCabeceraArticulo`,cabecera,'POST')
                const bodystore = await resp.json();
                //console.log('bodystore',bodystore)

                if(bodystore.ok){
                    const detalle={
                        //loteId:activeArticulo.impoLTid,
                        loteId:bodystore.resultado[0].id,
                        articuloCodigo:activeArticulo.impoPUarticulo,
                        almacen:formValues.almacen,
                        lote:formValues.serieLote,
                        cantidad:formValues.cantidad,
                        usuario:"",
                        importacionID:activeImportacion.id,
                        fechaVencimiento:formValues.fechaVencimiento
                    }
                    //console.log('envia nuevo ',detalle);
                    const resp = await fetchConToken(`lotes/storeDetalleArticulo`,detalle,'POST')
                    const bodystoredetalle = await resp.json();    
                    //console.log('devuelve NUEVO ',bodystoredetalle);
                    if(bodystoredetalle.ok){
                        Swal.fire({
                            confirmButtonColor: 'rgb(26 68 119)',
                            title:'Éxito',
                            text:`Registro realizado con éxito`,
                            icon:'success'
                        })
        
                        dispatch(loteStartAddNew(bodystoredetalle.resultado[0]))
                    }else{
                        Swal.fire('Error',bodystoredetalle.msg,'error')
                    }
                }
                else{
                    Swal.fire('Error',bodystore.msg,'error')
                }
            }

            // dispatch(buscav2(filtrosHeader,filtrosBtn,activeImportacion));

        } catch (error) {
            console.log(error);
        }
    }
};

export const detalleArticuloUpdatePersistente=(formValues,activeArticulo,activeImportacion)=>{
    return async(dispatch)=>{
        try {
                const detalle={
                    almacen:formValues.almacen,
                    lote:formValues.serieLote,
                    cantidad:formValues.cantidad,
                    usuario:"",
                    fechaVencimiento:formValues.fechaVencimiento
                }
                //console.log('edita',detalle);
                const resp = await fetchConToken(`lotes/updateDetalleArticulo/${formValues.id}`,detalle,'PUT')
                const body = await resp.json();    
                //console.log('devuelve EDITADO true',body);
                if(body.ok){
                    /*Swal.fire({
                        confirmButtonColor: 'rgb(26 68 119)',
                        title:'Éxito',
                        text:`Registro realizado con éxito`,
                        icon:'success'
                    })*/
    
                    dispatch(loteStartUpdateDetalleArticulo(body.resultado[0]))
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
            
        } catch (error) {
            console.log(error);
        }
    }
};

const loteStartUpdateDetalleArticulo=(articulo)=>({
    type:types.detalleArticuloEditadoPersistente,
    payload:articulo
});

export const detalleArticuloUpdate=(type)=>({
    type:types.detalleArticuloUpdate,
    payload:type
});

export const activeArticuloUpdate=(type)=>({
    type:types.activeArticuloUpdate,
    payload:type
});

export const changeFiltroBtn=(color)=>({
    type:types.changeFiltroBtn,
    payload:color
});
export const detalleArticuloDelete=(detalle)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`lotes/deleteDetalleArticulo/${detalle.id}`,{},'DELETE')
            const body = await resp.json();
            if(body.ok){
                dispatch(detalleArticuloEliminaRedux());
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

export const spAfectaV1=(importacion,articulo,usuarioId)=>{
    return async(dispatch)=>{
        try {
                const afecta={
                    importacionId:importacion.id,
                    codigoArticulo:articulo.impoPUarticulo,
                    usuarioId:usuarioId
                }
                //console.log('afecta',afecta);
                const resp = await fetchConToken(`lotes/afecta`,afecta,'POST')
                const body = await resp.json();    
                //console.log('devuelve AFECTA',body);
                if(body.ok){
                    const ultimo = body.resultado.recordsets.pop();
                    console.log('ultimo: ',ultimo)
                    Swal.fire({
                        confirmButtonColor: '#1976d2',
                        title:(ultimo[0].cod===0)? 'Nada por afectar': (ultimo[0].cod===2)? 'Error': 'Éxito',
                        //text:body.resultado[0].msg,
                        //title: 'Resultado',
                        text: JSON.stringify(ultimo[0].msg),
                        icon:(ultimo[0].cod===0)? 'warning' : (ultimo[0].cod===2)? 'error':'success'
                        //icon:'success'
                    })
                    dispatch(loadDetalleArticulo(articulo,importacion));
                    
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
            
        } catch (error) {
            console.log(error);
        }
    }
};

export const activeAfectar=(estado)=>({
    type:types.activeAfectar,
    payload:estado
});

export const camposLogisticosUpdate=(formValues)=>{
    return async(dispatch)=>{
        try {

                const resp = await fetchConToken(`lotes/updateDatosLogisticos`,formValues,'POST')
                const body = await resp.json();    
                if(body.ok){

                    Swal.fire({
                        confirmButtonColor: '#1976d2',
                        title:(body.resultado[0].cod===0)? 'Nada por actualizar': (body.resultado[0].cod===2)? 'Error': 'Éxito',
                        text:body.resultado[0].msg,
                        icon:(body.resultado[0].cod===0)? 'warning' : (body.resultado[0].cod===2)? 'error':'success'
                    })
                    console.log(body)
                    //dispatch(loteStartUpdateDetalleArticulo(body.resultado[0]))
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
            
        } catch (error) {
            console.log(error);
        }
    }
};

const updateCamposLogisticos=(articulo)=>({
    type:types.detalleArticuloEditadoPersistente,
    payload:articulo
});