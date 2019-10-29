import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../store/actionType'

const defaultStore = {
    inputValue: '',
    list: []
}
export default (store = defaultStore, action) => {
    if(action.type === INPUT_CHANGE) {
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.inputValue = action.value
        return newStore
    }
    if(action.type === ADD_ITEM) {
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.list.push(newStore.inputValue)
        newStore.inputValue = ''
        return newStore
    }
    if(action.type === DELETE_ITEM) {
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.list.splice(action.index, 1)
        return newStore
    }
    if(action.type === GET_LIST){ 
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.list = action.item
        return newStore
    }
    return store
}