const defaultStore = {
    inputValue: '',
    list: ["头部按摩", "腿部按摩"]
}
export default (store = defaultStore, action) => {
    if(action.type === "inputChange") {
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.inputValue = action.value;
        return newStore
    }
    if(action.type === "addItem") {
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.list.push(newStore.inputValue)
        newStore.inputValue = ''
        return newStore
    }
    if(action.type === "deleteItem"){
        let newStore = JSON.parse(JSON.stringify(store))
        newStore.list.splice(action.index,1)
        return newStore
    }
    return store
}