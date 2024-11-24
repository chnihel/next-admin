//La fonction configureStore de Redux Toolkit est utilisée pour créer un store Redux
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authReducer from "./slices"

const Store = configureStore({
    //Les reducers définissent comment l'état de l'application change en réponse à des actions.
    reducer:{
        auth:authReducer,
    }
})
//Store.getState renvoie l'état global actuel du store.
//ReturnType permet de déduire automatiquement le type de cet état.
export type RootState=ReturnType<typeof Store.getState>
//Cette ligne exporte un type AppDispatch, qui correspond au type de la méthode dispatch du store.
export type AppDispatch=typeof Store.dispatch
export default Store
