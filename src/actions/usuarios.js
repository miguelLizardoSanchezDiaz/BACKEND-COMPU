import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const setActiveUsuario=(registro)=>({
    type:types.setActiveUsuario,
    payload:registro
})

export const usuarioStore=(formValues)=>{
    return async(dispatch)=>{
        try {
            const usuario={
                rol_id:1,
                usuario:formValues.usuario,
                nombres:formValues.nombres,
                apellidos:formValues.apellidos,
                cargo:formValues.cargo,
                area:formValues.area,
                email:formValues.email,
                password:formValues.password
            }
            const resp = await fetchConToken(`auth/new`,usuario,'POST')
            const body = await resp.json(); 
            console.log('chato',body);
            if(body.ok){
                Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:`Registro realizado con éxito`,
                    icon:'success'
                })
                //dispatch(usuarioAdd(body.resultado[0]))
            }else{
                Swal.fire('Error',JSON.stringify(body.msg),'error')

                /*Swal.fire({
                    confirmButtonColor: 'rgb(26 68 119)',
                    title:'Éxito',
                    text:JSON.stringify(body.msg),
                    icon:'error'
                })*/
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const usuarioAdd=(articuloDetalle)=>({
    type:types.addArticuloDetalle,
    payload:articuloDetalle
})
