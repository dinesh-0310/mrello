import {ADD_LIST, ADD_CARD, DELETE_LIST, EDIT_LIST,DELETE_CARD, EDIT_CARD,DRAG_HAPPENED} from './actionTypes'
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

        case DELETE_LIST:
            let afterDeletedLists = state.lists.filter(item => String(item.id) !== String(payload))
            saveData('lists', afterDeletedLists)

            return{
                ...state,
                lists : afterDeletedLists
            }

        case EDIT_LIST:
            let editedLists = state.lists.map(item => String(item.id) === String(payload.listId)
                                    ? {...item, title : payload.newTitle}
                                    : item)
            saveData('lists', editedLists)
            return{
                ...state,
                lists : editedLists
            }

        case DELETE_CARD:
            let afterDeleteCard = state.lists.map(item=> String(item.id) === String(payload.listId) 
                                            ? {...item, cards : item.cards.filter(card => String(card.id) !== String(payload.cardId))}
                                            : item)
            saveData('lists', afterDeleteCard)                         
            return{
                ...state,
                lists : afterDeleteCard
            }

        case EDIT_CARD:
            let afterEditCard = state.lists.map(item=> String(item.id) === String(payload.listId) 
                                            ? {...item, cards : item.cards.map(card => String(card.id) === String(payload.cardId)
                                                                            ? {...card, title : payload.newTitle}
                                                                            : card)}
                                            : item)
            saveData('lists', afterEditCard)                         
            return{
                ...state,
                lists : afterEditCard
            }
         case DRAG_HAPPENED:
            const {dropIdStart, dropIdEnd,
                dropIndexStart, dropIndexEnd,
                draggableId,type} = payload
                console.log(type);
            //dragginng lists
            if(type === "list"){
                const list = state.lists.splice(dropIndexStart, 1);
                state.lists.splice(dropIndexEnd, 0, ...list)
            }
            //in the same list 
            else if(dropIdStart === dropIdEnd){
                const list = state.lists.find(list => list.id == dropIdStart)
                console.log(list);
                const card = list.cards.splice(dropIndexStart, 1 )
                console.log("card",card);
                list.cards.splice(dropIndexEnd, 0 ,...card)
            }

            //another list 
            else if(dropIdStart !== dropIdEnd){
                //finding list where list start
                const listStart = state.lists.find(list => dropIdStart == list.id)
                //pull out card from list
                const card = listStart.cards.splice(dropIndexStart, 1);
                //finding list where list end
                const listEnd = state.lists.find(list => dropIdEnd == list.id)
                //put the card in new list
                listEnd.cards.splice(dropIndexEnd, 0,...card)
            }
            return{
                ...state,
                lists : state.lists
            }
        default:
            return state
    }
}