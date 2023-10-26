import './ModalWindow.css'
import { FaXmark } from "react-icons/fa6";

const ModalWindow = props => (
    <div className='Modal-wrap'>
        <FaXmark className='x-btn' onClick={props.cancelWindow}/>
        <p>Are you sure you want to delete?</p>
        <button className='btn-modal cancel' onClick={props.cancelWindow}>Cancel</button>
        <button className='btn-modal delete' onClick={props.deleteItem}>Delete</button>
    </div>
)

export default ModalWindow