export default function listReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "DELETE_ITEM":
            const newItems = state.filter(item => item.id !== action.payload)
            let counter = 0;
            return newItems.map(item => {
                item.id = counter;
                counter++;
                return item;
            })
        case "CHANGE_DONE":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.isDone = !item.isDone
                }
                return item;
            })
        default:
            return state;
    }
}