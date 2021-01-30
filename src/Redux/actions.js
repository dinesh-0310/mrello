import {ADD_LIST} from './actionTypes'
import {v4 as uuid} from 'uuid'

export const addList = title=>({
    type : ADD_LIST,
    payload:{
        title,
        id: uuid(),
        cards : []
    }
})
