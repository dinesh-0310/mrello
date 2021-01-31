import {ADD_LIST, ADD_CARD} from './actionTypes'

const initState = {
    lists : [
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
            return{
                ...state,
                lists : updatedState
            }

        case ADD_CARD: 
            return{
                ...state,
                lists: state.lists.map(item => String(item.id) === String(payload.listId) 
                                                ? {...item, cards: [...item.cards, payload.card]}
                                                : item)
            }
        default:
            return state
    }
}