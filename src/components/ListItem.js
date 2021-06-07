import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { changeDone, deleteItem } from '../actions/listAction';

function BtnCheck(props) {
    if (props.done) {
        return (
            <CheckCircleIcon className="btnCheck" />
        )
    } else {
        return (
            <CheckCircleIcon />
        )
    }
}

function ListItem(props) {
    const dispatch = useDispatch();
    return (
        <li className={props.item.isDone ? "done" : ""}>
            <Card>
                {props.item.text}
                <div>
                    <button
                        className="btn"
                        onClick={() => { dispatch(changeDone(props.item.id)) }}>
                        <BtnCheck done={props.item.isDone} />
                    </button>
                    <button
                        className="btn trash"
                        onClick={() => { dispatch(deleteItem(props.item.id)) }}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;