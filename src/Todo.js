import { makeStyles } from "@material-ui/core";
import FormList from './components/FormList';
import './Todo.css';

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        maxWidth: 450,
    }
})

function Todo() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>Todo</h1>
            <FormList></FormList>

        </div>
    )
}

export default Todo;