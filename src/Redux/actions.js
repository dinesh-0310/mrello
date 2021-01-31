import {ADD_LIST,ADD_CARD} from './actionTypes'
import {v4 as uuid} from 'uuid'

export const addList = title=>({
    type : ADD_LIST,
    payload:{
        title,
        id: uuid(),
        cards : []
    }
})

export const addCard = (listId, title)=>({
    type : ADD_CARD,
    payload:{
        card :{
            title,
            id : uuid()
        },
        listId
    }
})
