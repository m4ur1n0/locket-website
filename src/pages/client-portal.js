
import ClientPortalLegalSection from '@/components/ClientPortalLegalSection'
import ClientPortalTitle from '@/components/ClientPortalTitle'
import ClientRequestServiceForm from '@/components/ClientRequestServiceForm'
import React from 'react'

const ClientPortal = () => {
  return (
    <>
    <ClientPortalTitle />

    <ClientRequestServiceForm /> {/* to implement proper handling of the submit function, drill down state from here to dictate whether we should show 'thanks for requesting' or the form */}

    {/* <ClientPortalCheckReqStatus /> */}

    <ClientPortalLegalSection />

    
    </>
  )
}

export default ClientPortal
