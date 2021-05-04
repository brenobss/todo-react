import { makeStyles } from "@material-ui/styles";
import FormList from './components/FormList';

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        maxWidth: 900,
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