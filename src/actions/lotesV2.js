import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";


export const storeEntradaReferencia=(formValues)=>{
    return async(dispatch)=>{
        try {
            const entradaReferencia={
                referenciaIntelisis:formValues.referenciaIntelisis.label,
                compraId:formValues.referenciaIntelisis.id,
                compraId2:formValues.referenciaIntelisis2.id,
                compraId3:formValues.referenciaIntelisis3.id,
                compraId4:formValues.referenciaIntelisis4.id,
                compraId5:formValues.referenciaIntelisis5.id,
                fecha:'10/04/2023',
                numeroEntrada:formValues.numeroEntrada,
            }
            const resp = await fetchConToken(`lotesv2/store-entrada-referencia`,entradaReferencia,'POST')
            const bodystore = await resp.json();    

            if(bodystore.ok){
                Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:`Registro realizado con éxito`,
                    icon:'success'
                })
                //dispatch(loteStartAddNew(bodystoredetalletrue.resultado[0]))
            }else{
                Swal.fire('Error',JSON.stringify(bodystore.msg),'error')
            }


        } catch (error) {
            console.log(error);
        }
    }
};

export const entradaLoading=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotesv2/getEntradaReferencia')
            const body= await resp.json(); 
            const registros=body.resultado;
            
            if(body.ok){
                dispatch(getEntradasReferenciaLoaded(registros))
            }else{
                Swal.fire('Error',JSON.stringify(body.msg),'error')
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const getEntradasReferenciaLoaded=(registros)=>({
    type:types.lotev2GetEntradasReferenciaLoaded,
    payload:registros
})

export const loadEntradasLotes=(formulario)=>{

    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotesv2/getEntradas/${formulario.entradaReferencia}/${formulario.nroPallet}`)
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                dispatch(setEntradasLotes(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const loadEntradasLotesIsNotAnulados=(formulario)=>{
    console.log('cargadita',formulario)
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotesv2/getEntradasIsNotAnulado/${formulario.entradaReferencia}/${formulario.nroPallet}`)
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                dispatch(setEntradasLotes(registros))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const setEntradasLotes=(registros)=>({
    type:types.lotev2GetEntradasLotes,
    payload:registros
})

export const loadExisteEan=(formulario)=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotesv2/valida-ean/${formulario.ean}`)
            const body= await resp.json(); 
            const registros=body.resultado;
            if(body.ok){
                dispatch(setExisteEan(registros))
                dispatch(getArticuloAutomatizado(registros[0].Cuenta))
            }
            else{
                dispatch(setExisteEan(null))
            }
            dispatch(setEanBuscado(formulario.ean))
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

const setExisteEan=(registros)=>({
    type:types.lotev2ExisteEan,
    payload:registros
})
const setEanBuscado=(registros)=>({
    type:types.lotev2EanBuscado,
    payload:registros
})

export const loadExisteEan0=()=>({
    type:types.lotev2ExisteEan0,
    payload:null
})
export const changeModalSttepper=(value)=>({
    type:types.loteV2ChangeModalStteper,
    payload:value
})
export const changeModalPrintUnique=(value)=>({
    type:types.loteV2ChangeModalPrintUnique,
    payload:value
})

export const setRegistroselectedlotev2=(value)=>({
    type:types.lotev2setSelected,
    payload:value
})



export const descargaLibroVenta=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-electronico-ventas`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro31=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-1`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro32=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-2`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro33=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-3`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro37=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-7`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro39=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-9`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro312=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-12`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro313=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-13`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro317=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-17`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibro315=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:12,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-anual-3-15`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setVentas(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const descargaLibroMayor=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-mayor`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setLibro(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setLibro=(resultado)=>({
    type:types.loteV2LibroMayorElectronico,
    payload:resultado
})

export const descargaLibroCompras1=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-compras1`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setLibroCompras1(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setLibroCompras1=(resultado)=>({
    type:types.loteV2LibroCompras1Electronico,
    payload:resultado
})

export const descargaLibroCompras2=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-compras2`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setLibroCompras2(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setLibroCompras2=(resultado)=>({
    type:types.loteV2LibroCompras2Electronico,
    payload:resultado
})
export const setVentas=(resultado)=>({
    type:types.loteV2LibroElectronicoVenta,
    payload:resultado
})


export const getArticulo=(articulo)=>{
    return async(dispatch)=>{
        try {
                const resp=await fetchConToken(`lotesv2/getProductoByCodigo/${articulo}`)
                const body= await resp.json(); 
                const registro=body.resultado;
                
                if(body.ok){
                    dispatch(setArticulo(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const getArticuloAutomatizado=(articulo)=>{
    return async(dispatch)=>{
        try {
                const resp=await fetchConToken(`lotesv2/getProductoByCodigo/${articulo}`)
                const body= await resp.json(); 
                const registro=body.resultado;
                
                if(body.ok){
                    dispatch(setArticulo(registro))
                    dispatch(setActiveArticuloSeleccionado(registro[0]))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

export const setArticulo=(resultado)=>({
    type:types.loteV2ArticuloBuscar,
    payload:resultado
})


export const setActiveArticuloSeleccionado=(resultado)=>({
    type:types.loteV2ArticuloSeleccionado,
    payload:resultado
})


export const storeEanArticuloCB=(eanInput,articuloSeleccionado)=>{
    return async(dispatch)=>{
        try {
            const bodys={
                "codigo":eanInput,
                "tipoCuenta":"Articulos",
                "cuenta":articuloSeleccionado.articulo,
                "cantidad":1,
                "unidad":"pza"
            }
            const resp = await fetchConToken(`lotesv2/store-ean`,bodys,'POST')
            const bodystore = await resp.json();    

            if(bodystore.ok){
                Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:`Registro EAN registrado con éxito`,
                    icon:'success'
                })
            }else{
                Swal.fire('Error',JSON.stringify(bodystore.msg),'error')
            }


        } catch (error) {
            console.log(error);
        }
    }
};

export const storeEntradaLoteV2=(articuloSeleccionado,seriesLotesCantidades,eanInput,fechaVencimientoConsultado,vidaUtil,filtrosHeaderLotesv2,cbReturn,ean)=>{
    return async(dispatch)=>{
        try {
            const eanCreador=(ean==null)? 1 : 0;
            const bodys={
                "ean":eanInput,
                "nroEntrada":filtrosHeaderLotesv2.entradaReferencia,
                "nroPallet":filtrosHeaderLotesv2.nroPallet,
                "codigoArticuloPu":articuloSeleccionado.articulo,
                "codigoProveedor":'',
                "descripcionArticulo":articuloSeleccionado.descripcion,
                "loteReal":seriesLotesCantidades.serieLote,
                "fechaVencimiento":fechaVencimientoConsultado,
                "cantidad":parseFloat(seriesLotesCantidades.cantidad),
                "vidaUtil":vidaUtil,
                "largo":parseFloat(seriesLotesCantidades.largo),
                "alto":parseFloat(seriesLotesCantidades.alto),
                "ancho":parseFloat(seriesLotesCantidades.ancho),
                "estado":"REGISTRADO",
                "referenciaEntradaId":filtrosHeaderLotesv2.entradaReferencia,
                "qrAsociado":cbReturn.Codigo,
                "eanCreador":eanCreador
            }
            
            const resp = await fetchConToken(`lotesv2/store-entrada-lote`,bodys,'POST')
            const bodystore = await resp.json();    

            if(bodystore.ok){
                Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:`Registro realizado con éxito`,
                    icon:'success'
                })
            }else{
                Swal.fire('Error',JSON.stringify(bodystore.msg),'error')
            }


        } catch (error) {
            console.log(error);
        }
    }
};

export const storeCB=(articuloSeleccionado,seriesLotesCantidades,fechaVencimientoConsultado)=>{
    return async(dispatch)=>{
        try {
            console.log('seriesLotesCantidades',seriesLotesCantidades)
            const bodys={
                "articulo":articuloSeleccionado.articulo,
                "serieLote":seriesLotesCantidades.serieLote,
                "cantidad":parseFloat(seriesLotesCantidades.cantidad),
                "fechaVencimiento":(fechaVencimientoConsultado===null)? seriesLotesCantidades.fechaVencimiento:fechaVencimientoConsultado,
                
            }
            
            const resp = await fetchConToken(`lotesv2/store-cb-v2`,bodys,'POST')
            const bodystore = await resp.json();    
            
            if(bodystore.ok){
                Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:`Registro QR realizado con éxito`,
                    icon:'success'
                })

                dispatch(setCbStore(bodystore.resultado[0]))
            }else{
                Swal.fire('Error',JSON.stringify(bodystore.msg),'error')
            }


        } catch (error) {
            console.log(error);
        }
    }
};

export const setSerieLotes=(registros)=>({
    type:types.lotev2SetSerieLote,
    payload:registros
})
export const setVidaUtilManual=(registros)=>({
    type:types.setVidaUtilManual,
    payload:registros
})

export const procesarImposAfectar=(registros)=>{
    return async(dispatch)=>{
        //console.log('registros x',registros)
        await dispatch(setImpoToProcess([{}]))
        await dispatch(setFiltrosHeader(registros))
        
        await dispatch(loadImposAfectar(registros.entradaReferencia))
    }
}
export const setFiltrosHeader=(registros)=>({
    type:types.lotev2SetFiltrosHeader,
    payload:registros
})

export const loadImposAfectar=(idEntradaReferencia)=>{
    return async(dispatch)=>{
        try {
                const resp=await fetchConToken(`lotesv2/getImposByTarja/${idEntradaReferencia}`)
                const body= await resp.json(); 
                const registros=body.resultado;
                if(body.ok){
                    dispatch(setImpoToProcess(registros))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setFiltrosAfectar=(registros)=>({
    type:types.lotev2SetFiltrosAfectar,
    payload:registros
})
export const setCbStore=(registros)=>({
    type:types.lotev2SetCbStore,
    payload:registros
})

export const descargaLibroDiario1=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-diario1`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setLibroDiario1(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setLibroDiario1=(resultado)=>({
    type:types.loteV2LibroDiario1,
    payload:resultado
})

export const descargaLibroDiario2=(formValues)=>{
    return async(dispatch)=>{
        try {
                const parametros={
                    empresa:"PU",
                    anio:formValues.anio,
                    mes:formValues.mes,
                    usuario:"almacen"
                }
                const resp=await fetchConToken(`reportes/reporte-libro-diario2`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    dispatch(setLibroDiario2(registro))
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información o su sesión a expirado, intentelo nuevamente','error')
                    //dispatch(logout());
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setLibroDiario2=(resultado)=>({
    type:types.loteV2LibroDiario2,
    payload:resultado
})



export const loadEntradaIntelisis=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotesv2/getReferenciaIntelisis')
            const body= await resp.json(); 
            if(body.ok){
                dispatch(setEntradaIntelisis(body.resultado))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setEntradaIntelisis=(resultado)=>({
    type:types.setLotesV2EntradaIntelisis,
    payload:resultado
})


export const loadNumeroEntrada=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotesv2/getEntradaReferencia')
            const body= await resp.json(); 
            if(body.ok){
                dispatch(setNumeroEntrada(body.resultado))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setNumeroEntrada=(resultado)=>({
    type:types.lotev2GetEntradasReferenciaLoaded,
    payload:resultado
})
export const getQrParking=(formulario)=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken(`lotesv2/getQrParking/${formulario.tipo}/${formulario.movid}`)
            const body= await resp.json(); 
            if(body.ok){
                dispatch(setResultadoQrParking(body.resultado[0].resultqr))
            }
            else{
                dispatch(setResultadoQrParking(null))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
export const setResultadoQrParking=(resultado)=>({
    type:types.lotev2setResultadoQrParking,
    payload:resultado
})

export const loadImpoToProcess=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('lotesv2/getImposToProcess')
            const body= await resp.json(); 
            if(body.ok){
                dispatch(setImpoToProcess(body.resultado))
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}
const setImpoToProcess=(resultado)=>({
    type:types.setImpoToProcess,
    payload:resultado
})


export const anularEntradaLote=(row,estado,filtrosHeaderLotesv2)=>{
    return async(dispatch)=>{
        try {
            const bodyx={
                id:row.id,
                estado:estado,
            }
            const resp = await fetchConToken(`lotesv2/actualizaEstado`,{bodyx},'PUT')
            const body = await resp.json();
            if(body.ok){
                dispatch((loadEntradasLotes(filtrosHeaderLotesv2)));
                Swal.fire({
                    confirmButtonColor: '#1976d2',
                    title:'Eliminado!',
                    text:'El registro ha sido eliminado.',
                    icon:'success'
                })
                //eliminamos qrAsociado
                dispatch(eliminaQrAsociado(row.qrAsociado,row.codigopu));
                //eliminamos Ean(previa validacion)
                if(row.eanCreador){
                    dispatch(eliminaQrAsociado(row.ean,row.codigopu));
                }
            }else{
                console.log(body);
                Swal.fire('Error',JSON.stringify(body.msg),'error')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eliminaQrAsociado=(codigo,cuenta)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`lotesv2/eliminacb/${codigo}/${cuenta}`,{},'DELETE')
            const body = await resp.json();
            if(body.ok){
                return true;
            }else{
                console.log(body);
                Swal.fire('Error',JSON.stringify(body.msg),'error')
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export const spAfectaV3=(almacenDestino,importacion,entradaReferencia,nroPallet,formValuesData)=>{
    return async(dispatch)=>{
        try {
                const afecta={
                    //almacenOrigen:"LU001",
                    almacenDestino:almacenDestino,
                    //cantidad:cantidad,
                    //articulo:articulo,
                    impoId:importacion,
                    nroEntradaReferencia:entradaReferencia,
                    nroPallet:nroPallet
                }
                //console.log('afecta',afecta);
                const resp = await fetchConToken(`lotesv2/afectav3`,afecta,'POST')
                const body = await resp.json();    
                if(body.ok){
                    const ultimo = body.resultado.recordsets.pop();
                    //const ultimo = body.resultado;
                    console.log('ultimo: ',ultimo)
                    Swal.fire({
                        confirmButtonColor: '#1976d2',
                        title:(ultimo[0].cod===1)? 'Éxito': 'Error',
                        //text:body.resultado[0].msg,
                        //title: 'Resultado',
                        text: JSON.stringify(ultimo[0].msg),
                        icon:(ultimo[0].cod===1)? 'success' : 'error'
                        //icon:'success'
                    })
                    //dispatch(loadDetalleArticulo(articulo,importacion));
                    dispatch(loadEntradasLotesIsNotAnulados(formValuesData))
                }else{
                    Swal.fire('Error',JSON.stringify(body.msg),'error')
                }
            
        } catch (error) {
            console.log(error);
        }
    }
};


export const getRsPU=(articulo,tipo)=>{
    return async(dispatch)=>{
        try {

                const parametros={
                    articulo:articulo,
                    tipo:tipo
                }
                const resp=await fetchConToken(`lotesv2/getRsFechaVencimientoPu`,parametros,'PUT')
                const body= await resp.json(); 
                const registro=body.resultado;
                if(body.ok){
                    if(tipo=='RS'){
                        dispatch(setRS(registro))
                    }
                    if(tipo=='RSfv'){
                        dispatch(setRSfv(registro))
                    }
                }
                else{
                    Swal.fire('Error','Se produjo un problema al obtener la información de fecha de vencimiento','error')
                }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

const setRS=(resultado)=>({
    type:types.setRS,
    payload:resultado
})

const setRSfv=(resultado)=>({
    type:types.setRSfv,
    payload:resultado
})

export const setActiveDetalleAfectarV3=(entradas,formValuesData)=>{
    return async(dispatch)=>{
        try {
                //1. ponemos en 0 todos los readys en sql
                const parametros={
                    nroEntrada:formValuesData.entradaReferencia,
                    nroPallet:formValuesData.nroPallet
                }
                const resp=await fetchConToken(`lotesv2/putReestableceStateReady`,parametros,'PUT')
                const body= await resp.json(); 
                if(body.ok){
                    //2. actualizamos en 1 solo los seleccionados=entradas
                    if(entradas.length>0){
                        const parametrosready={
                            entradasLotes:entradas,
                        }
                        const respready=await fetchConToken(`lotesv2/actualiza-entrada`,parametrosready,'PUT')
                        const bodyready= await respready.json(); 
                        if(bodyready.ok){
                            dispatch(setActiveDetalleAfectarV3procede(entradas))
                        }
                        else{
                            Swal.fire('Error',`Se produjo un problema al actualizar en 1 campo ready de nroEntrada ${formValuesData.nroEntrada}`,'error')
                        }
                    }
                }
                else{
                    Swal.fire('Error',`Se produjo un problema al actualizar en 0 campo ready de nroEntrada ${formValuesData.nroEntrada}`,'error')
                }
                
        } catch (error) {
            console.log(error)
            Swal.fire('Error',JSON.stringify(error),'error')
        }
    }
}

const setActiveDetalleAfectarV3procede=(registro)=>({
    type:types.setActiveDetalleAfectarV3,
    payload:registro
})