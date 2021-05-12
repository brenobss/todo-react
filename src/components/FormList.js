import List from './List';
import { useEffect, useState } from 'react';
import Item from '../classes/Item';
import Modal from './Modal';

const SAVED_ITEMS = "savedItems";

function FormList() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    const [showModal, setShowModal] = useState(false);

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

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onHideModal(e) {
        let target = e.target;
        if (target.id === "modal") {
            setShowModal(false);
        }
    }

    return (
        <div>
            <header>
                <h1>Todo</h1>
                <button className="addButton" onClick={() => { setShowModal(true) }}>+</button>
            </header>
            <List items={items} deleteItem={deleteItem} onDone={onDone}></List>
            <Modal show={showModal} onHideModal={onHideModal}>
                <form>
                    <input
                        type="text"
                        onChange={(event) => { setText(event.target.value) }}
                        value={text}
                    >

                    </input>
                    <button onClick={addItem}>Add</button>
                </form>
            </Modal>
        </div>
    )
}

export default FormList;