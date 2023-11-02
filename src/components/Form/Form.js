import './Form.css'
import { FaXmark } from "react-icons/fa6";


const Form = ({formData, onChangeInput, addData, name, close, nameBtn}) => {
    return (
        <>
            <form className='form-wrap' >
                <div className='title-wrap'>
                    <h3>{name}</h3>
                    <FaXmark className='formX-btn' onClick={close}/>
                </div>
                <div className='inputs-wrap'>
                    <div className='input-wrap'>
                        <label >Category</label>
                        <input required type='text' name='Category' value={formData.Category} onChange={onChangeInput} />
                    </div>
                    <div className='input-wrap'>
                        <label >Name</label>
                        <input required type='text' name='Name' onChange={onChangeInput} value={formData.Name}/>
                    </div>
                    <div className='input-wrap'>
                        <label >Quantity</label>
                        <input required type='number' name='Quantity' onChange={onChangeInput} value={formData.Quantity}/>
                    </div>
                    <div className='input-wrap'>
                        <label >Price</label>
                        <input required  type='number' name='Price' onChange={onChangeInput} value={formData.Price}/>
                    </div>
                    <div className='input-wrap'>
                        <label>Description</label>
                        <textarea type='textarea' name='description' />
                    </div>
                </div>
                <div className='btn-wrap'>
                    <button onClick={close} className='btn-modal'>Cancel</button>
                    <button onSubmit={addData} className='btn-modal'>{nameBtn}</button>
                </div>

            </form>
        </>
    )
}

export default Form;
