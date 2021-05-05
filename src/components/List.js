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

function List(props) {
    const classes = useStyles();
    return (
        <ul>
            {props.items.map(item => <li
                className={classes.item}
                key={item.id}>
                <Card>
                    {item.text}
                    <div>
                        <button
                            onClick={() => { props.onDone(item) }}>
                            <BtnCheck done={item.isDone} />
                        </button>
                        <button
                            onClick={() => { props.deleteItem(item) }}>
                            <DeleteForeverIcon />
                        </button>
                    </div>
                </Card>
            </li>
            )}
        </ul>
    )
}

export default List;