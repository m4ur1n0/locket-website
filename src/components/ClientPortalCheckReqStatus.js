import React, { useState } from 'react'

/*
we are going to assume the return from the confirmation code request (i.e. request info) will look like this:

{
    confirmation_num : int
    type_of_service : str
    company : str
    request_date : str
    status : str
}

*/

const ClientPortalCheckReqStatus = () => {
    const [requests, setRequests] = useState([]);
    // const [requests, setRequests] = useState([
    //     {
    //         confirmation_num : 1234,
    //         type_of_service : "Analysis",
    //         company : "Company 1",
    //         request_date : "06/22/2004",
    //         status : "Done!"
    //     },
    //     {
    //         confirmation_num : 5678,
    //         type_of_service : "Analysis",
    //         company : "Company 2",
    //         request_date : "11/12/1999",
    //         status : "Pending"
    //     }
    // ])
    const [conf, setConf] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(conf) // this will be an api call later
        setConf("")
    }

    const handleChange = (e) => {
        setConf(e.target.value);
    }

  return (
    <div className='client-portal-check-request-status-section mt-10'>
      <h1 className='client-portal-check-request-status-title'>Curious about the status of your request?</h1>
      <h3>Enter your confirmation code: </h3>

      <form className='check-request-confirmation-code-form' onSubmit={handleSubmit}>
        <input className='request-confirmation-code-input'
            type='text'
            id='confirmation-code'
            placeholder='Confirmation code'
            value={conf}
            onChange={handleChange}
        />
        <button type='submit' className='check-request-confirmation-code-submit-button'>Submit</button>

      </form>


      {requests.length === 0 && <h2 className='no-pending-requests-message'>No pending requests at the moment...</h2>} {/* conditionally render the 'no shit' message */}

      <div className='request-status-cards-list flex flex-col mt-2'>
        {requests.map((item, index) => (
            <div className='request-status-card m-2 flex flex-row border border-black' key={index}>
                <p><strong>Conf: </strong> {item.confirmation_num}</p>
                <p><strong>Service: </strong> {item.type_of_service}</p>
                <p><strong>Company: </strong> {item.company}</p>
                <p><strong>Requested: </strong> {item.request_date}</p>
                <p><strong>Status: </strong> {item.status}</p>
            </div>
        ))}
      </div>


    </div>
  )
}

export default ClientPortalCheckReqStatus
