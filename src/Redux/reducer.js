import {ADD_LIST, ADD_CARD} from './actionTypes'
import {saveData, loadData} from '../localStorage'

const initState = {
    lists : loadData('lists') || 
        [
        {
            title: "first List",
            id: 0,
            cards : [
                {
                    id: 2,
                    title : "card1"
                },
                {
                    id: 3,
                    title : "card2"
                }
            ]
        },
        {
            title: "second List",
            id: 1,
            cards : [
                {
                    id: 4,
                    title : "card1"
                }
            ]
        }
    ]
}

export const reducer = (state = initState,{type, payload})=>{
    // console.log(type, payload);
    switch(type){

        case ADD_LIST:
            let updatedState = [...state.lists, payload]
            saveData('lists', updatedState)
            return{
                ...state,
                lists : updatedState
            }

        case ADD_CARD: 
            let newState = state.lists.map(item => String(item.id) === String(payload.listId) 
                                    ? {...item, cards: [...item.cards, payload.card]}
                                    : item)
            saveData('lists', newState)
            return{
                ...state,
                lists: newState
            }
        default:
            return state
    }
}