import { makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from './Card';

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
    return (
        <li >
            <Card>
                {props.item.text}
                <div>
                    <button
                        onClick={() => { props.onDone(props.item) }}>
                        <BtnCheck done={props.item.isDone} />
                    </button>
                    <button
                        onClick={() => { props.deleteItem(props.item) }}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;