import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    boxHolder: '',
    boxSize: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        navigate('/mailboxes');
    };

    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={ _handleSubmit } className="mail-box">
                <label>
                    Boxholder:
                    <input name="boxHolder" placeholder="Boxholder name" onChange={ _handleChange } value={ formData.boxHolder } />
                </label>
                <label>
                    Box Size:
                <select name="boxSize" onChange={ _handleChange } value={ formData.boxSize } >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                </label>
                <button>Create Mailbox</button>
            </form>
        </main>
    )
};

export default MailboxForm;