import { makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { changeDone, deleteItem } from '../actions/listAction';

const useStyles = makeStyles({
    btnCheck: {
        color: 'blue'
    },
})

function BtnCheck(props) {
    const classes = useStyles();
    if (props.done) {
        return (
            <CheckCircleIcon className={classes.btnCheck} />
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
                        onClick={() => { dispatch(changeDone(props.item.id)) }}>
                        <BtnCheck done={props.item.isDone} />
                    </button>
                    <button
                        onClick={() => { dispatch(deleteItem(props.item.id)) }}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;