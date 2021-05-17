import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 25,
        padding: 20,
        marginTop: 15,
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgb(0, 162, 255);',
    }
});

function Card(props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;