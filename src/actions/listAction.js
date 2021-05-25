import Item from '../classes/Item';

export function addItem(text, id) {
    const item = new Item(text, id);
    return { type: "ADD_ITEM", payload: item }
}

export function deleteItem(id) {
    return { type: "DELETE_ITEM", payload: id }
}

export function changeDone(id) {
    return { type: "CHANGE_DONE", payload: id }
}