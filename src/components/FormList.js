import List from './List';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { showModal } from '../actions/modalAction';

function FormList() {

    const dispatch = useDispatch();


    return (

        <div className="formList">
            <header>
                <h1>To Do</h1>
                <button className="addButton" onClick={() => { dispatch(showModal()) }}>+</button>
            </header>
            <List></List>
            <Modal>

            </Modal>
        </div >

    )
}

export default FormList;