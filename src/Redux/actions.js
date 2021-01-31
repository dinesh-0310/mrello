import {ADD_LIST,ADD_CARD,DELETE_LIST,EDIT_LIST, DELETE_CARD, EDIT_CARD} from './actionTypes'
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

export const deleteList =(listId) =>({
    type: DELETE_LIST,
    payload : listId
})

export const editList = (listId, newTitle) =>({
    type : EDIT_LIST,
    payload :{
        listId,
        newTitle
    }
}) 

export const deleteCard =(listId, cardId) =>({
    type: DELETE_CARD,
    payload : {
        listId,
        cardId
    }
})

export const editCard = (listId, cardId, newTitle) =>({
    type : EDIT_CARD,
    payload :{
        listId,
        cardId,
        newTitle
    }
}) 