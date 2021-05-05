import List from './List';
import { useState } from 'react';
import Item from '../classes/Item';

function FormList() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        event.preventDefault()
        const item = new Item(text)

        setItems([...items, item])
        setText("")
    }

    function deleteItem(item) {
        const filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    function onDone(item) {
        const updatedItems = items.map((it) => {
            if (it.id === item.id) {
                it.isDone = !it.isDone;
            }
            return it;
        })
        setItems(updatedItems);
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    onChange={(event) => { setText(event.target.value) }}
                    value={text}
                >

                </input>
                <button onClick={addItem}>Add</button>
            </form>
            <List items={items} deleteItem={deleteItem} onDone={onDone}></List>
        </div>
    )
}

export default FormList;