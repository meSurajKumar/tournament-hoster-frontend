import {configureStore} from "@reduxjs/toolkit";
import incdecReducer from './reducers/index'
import tournamentReducer from './reducers/tournamentReducer'

export default configureStore({
    reducer:{
        number:incdecReducer,
        tournamentReducer:tournamentReducer
    }
})