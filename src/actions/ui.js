import { types } from "../types/types";

export const uiOpenLote=()=>({
    type:types.uiOpenLote
})
export const uiCloseLote=()=>({
    type:types.uiCloseLote
})
export const uiMenuName=(menu)=>({
    type:types.uiMenuName,
    payload:menu
})
export const uiOpenUsuario=()=>({
    type:types.uiOpenUsuario
})
export const uiCloseUsuario=()=>({
    type:types.uiCloseUsuario
})

export const uiOpenNoQr=()=>({
    type:types.uiOpenModalNoQr
})
export const uiCloseNoQr=()=>({
    type:types.uiCloseModalNoQr
})

export const uiOpenValidaToken=()=>({
    type:types.uiOpenValidaToken
})
export const uiCloseValidaToken=()=>({
    type:types.uiCloseValidaToken
})

export const uiOpenloading=()=>({
    type:types.uiOpenLoading
})
export const uiCloseloading=()=>({
    type:types.uiCloseLoading
})

export const uiCloseSucDescuentos=()=>({
    type:types.uiCloseSucursalesDescuentos
})
export const uiOpenSucDescuentos=()=>({
    type:types.uiOpenSucursalesDescuentos
})

export const uiCloseSucDescuentosDet=()=>({
    type:types.uiCloseSucursalesDescuentosDet
})
export const uiOpenSucDescuentosDet=()=>({
    type:types.uiOpenSucursalesDescuentosDet
})

export const uiCloseSucDetalle=()=>({
    type:types.uiCloseModalSucursalDet
})
export const uiOpenSucDetalle=()=>({
    type:types.uiOpenModalSucursalDet
})