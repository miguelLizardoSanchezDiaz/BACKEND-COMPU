import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin=(email,password)=>{
    return async(dispatch)=>{//dispatch puedo usar gracias a thunk
        const usuario={
            usuario:email,
            password
        }
        const resp=await fetchSinToken('auth',usuario,'POST');
        const body=await resp.json();

        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                id:body.id,
                name:body.nombres,
                usuario:body.usuario,
                rolid:body.rolid,
            }))
        }
        else{
            Swal.fire('Error',body.msg,'error')
        }
    }
}
export const startRegister=(email,password,name)=>{
    return async(dispatch)=>{
        const resp=await fetchSinToken('auth/new',{email,name,password},'POST');
        const body=await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                id:body.id,
                name:body.name,
                usuario:body.usuario,
                rolid:body.rolid
            }))
        }else{
            Swal.fire('Error',body.msg,'error')
        }
    }
}

export const startChecking=()=>{
    return async(dispatch)=>{
        
        const resp=await fetchConToken('auth/renew');
        const body=await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                id:body.id,
                name:body.name,
                usuario:body.usuario,
                rolid:body.rolid
            }))
        }else{
            //Swal.fire('Error',body.msg,'error')
            dispatch(checkingFinish());
            dispatch(logout());
        }
    }
}

const checkingFinish=()=>({
    type:types.authCheckingFinish
})

const login=(user)=>({
    type:types.authLogin,
    payload:user
})

export const startLogout=()=>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
    }

}
const logout=()=>({
    type:types.authLogout
})

export const loadUsers=()=>{
    return async(dispatch)=>{
        try {
            const resp=await fetchConToken('auth/getUsers')
            const body= await resp.json(); 
            const registros=body.registro;
            if(body.ok){
                dispatch(setUsersList(registros))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const setUsersList=(registros)=>({
    type:types.userList,
    payload:registros
})
