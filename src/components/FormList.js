import List from './List';
import { useState } from 'react';

function FormList() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        event.preventDefault()
        setItems([...items, text])
        setText("")
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
            <List items={items}></List>
        </div>
    )
}

export default FormList;