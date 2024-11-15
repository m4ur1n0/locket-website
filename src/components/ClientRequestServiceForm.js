import React, { useState } from 'react'

const ClientRequestServiceForm = () => {

    // create state variables to hold the values from the controlled form
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [valid, setValid] = useState(false);

    const changeName = (e) => {
        setName(e.target.value);
        setValid(name.trim() && company.trim() && email.trim());
    }

    const changeCompany = (e) => {
        setCompany(e.target.value);
        setValid(name.trim() && company.trim() && email.trim());
    }

    const validateEmail = (email) => {
        if (email.trim()) {
            return email; // later will return email if it is a VALID email
        }

        return ""; // will keep the email state var empty til we get a valid email (do some focusing, don't allow submit, etc.)
    }

    const changeEmail = (e) => {
        setEmail(validateEmail(e.target.value)); // set it to the validated input (which is "" if invalid)
        setValid(name.trim() && company.trim() && email.trim());
    }

    const changeComments = (e) => {
        setComments(e.target.value);
        setValid(name.trim() && company.trim() && email.trim());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valid) {
            console.log(`NAME : ${name}\nCOMPANY : ${company}\nEMAIL : ${email}\nCOMMENTS : ${comments}`); // later this will be some api call
            setName("");
            setCompany("");
            setEmail("");
            setComments("");
            setValid(false);
        }
    }

  return (
    <div className='service-request-form-containment-card p-4 border border-black mt-10'>
        <form className='service-request-intake-form' onSubmit={handleSubmit}>
            {/* we may want to style the form as a grid in future, for now sticking with flexes */}
            <div className='service-request-form-inputs flex flex-col'>
                <div className='serive-request-form-inputs-row1 flex flex-row'>
                    <label htmlFor='name'>Name</label>
                    <input className='service-request-form-name-input'
                        id='name'
                        type='text'
                        placeholder='Name of contact'
                        value={name}
                        onChange={changeName}
                    />

                    <label htmlFor='company'>Organization</label>
                    <input className='service-request-form-company-input'
                        id='company'
                        type='text'
                        placeholder='Name of organization'
                        value={company}
                        onChange={changeCompany}
                    />
                </div> 

                <div className='serive-request-form-inputs-row2 flex flex-row'>
                    <label htmlFor='email'>Email</label>
                    <input className='service-request-form-email-input'
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={changeEmail}
                    />

                </div> 

                <div className='serive-request-form-inputs-row3 flex flex-row'>
                    <label htmlFor='comments'>Comments</label>
                    <input className='service-request-form-comments-input'
                        id='comments'
                        type='text'
                        placeholder='Comments...'
                        value={comments}
                        onChange={changeComments}
                    />

                </div> 

                <button type='submit' className='service-request-form-submission-button mt-4'>Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default ClientRequestServiceForm
