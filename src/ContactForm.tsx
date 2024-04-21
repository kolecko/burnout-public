import './ContactForm.scss';
import {ChangeEvent, FormEvent, useState} from "react";
import {createFirebaseApp, createFirebaseDefaultConfig, firebaseWriteForm} from "./database/firebase";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const fireBaseApp = createFirebaseApp(createFirebaseDefaultConfig())

    const handleChange = (e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        setFormData({ ...formData, [element.name]: element.value});
    };
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        firebaseWriteForm(fireBaseApp, formData.name, formData.email, formData.subject, formData.message)

    }

    return (
    <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send Message</button>
    </form>);
}


export default ContactForm;