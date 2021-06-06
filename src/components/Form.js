import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../actions/listAction';
import { hideModal } from '../actions/modalAction'
export default function Form() {

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const items = useSelector(state => state.list)

    function itemId(items) {
        if (items) {
            let size = items.length;
            return size
        } else {
            return 0;
        }
    }

    function onAddItem(event) {
        event.preventDefault()

        if (text) {
            dispatch(addItem(text, itemId(items)))
            setText("");
        }
        dispatch(hideModal())
    }
    return (
        <form>
            <input
                type="text"
                onChange={(event) => { setText(event.target.value) }}
                value={text}
                autoFocus
                className="input"
            >

            </input>
            <button
                className="buttonModal"
                onClick={onAddItem}
            >
                add
            </button>

        </form>
    )
}