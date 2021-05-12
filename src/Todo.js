import { makeStyles } from "@material-ui/core";
import FormList from './components/FormList';
import './Todo.css';

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        maxWidth: 600,
    }
})

function Todo() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <FormList></FormList>
        </div>
    )
}

export default Todo;