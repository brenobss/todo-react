export default function modalReducer(state = false, action) {
    switch (action.type) {
        case 'HIDE_MODAL':
            return state = false;
        case 'SHOW_MODAL':
            return state = true;
        default:
            return state;
    }
}