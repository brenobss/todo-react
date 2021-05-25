import { makeStyles } from "@material-ui/core";
import FormList from './components/FormList';
import './App.css';
import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/listReducer';
import modalReducer from './reducers/modalReducer';

const SAVED_ITEMS = "savedItems";

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        maxWidth: 600,
    }
})

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState)
    } else {
        //*
        return { "list": [], "modal": false };
    }
}

const allReducers = combineReducers({
    list: listReducer,
    modal: modalReducer,
})

const store = createStore(allReducers, loadState());

store.subscribe(() => {
    persistState(store.getState())
})



function App() {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <div className={classes.container}>
                <FormList></FormList>
            </div>
        </Provider>
    )
}

export default App;