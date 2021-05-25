import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../actions/modalAction";
import Card from "./Card";
import Form from "./Form";

function Modal() {

    const dispatch = useDispatch()

    const showModal = useSelector(state => state.modal)

    function onHideModal(e) {
        let target = e.target;
        if (target.id === "modal") {
            dispatch(hideModal())
        }
    }

    return (
        <div id="modal" onClick={onHideModal} className={showModal ? "modal" : "hide"}>
            <Card className="cardModal">
                <Form></Form>
            </Card>
        </div >
    )
}

export default Modal;