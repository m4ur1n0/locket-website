import React from 'react'

/*
Meet the team cohort section expects a list of cohort member objects that will look like this:

{
    headshot_path : str
    name : str
    linkedin : str
}

*/

const MeetTeamCohortSection = ( {cohort_members}) => {

    const link_to_linkedin = (linkedin_link) => {
        // implement functionality later
        console.log(linkedin_link);
    }

  return (
    <div className='meet-the-team-page-cohort-section mt-10'>
        <div className='flexbox-of-cohort-members-rows flex flex-row flex-wrap'>
            {cohort_members.map((member, index) => (
                <div className='cohort-member-individual m-10' key={index} onClick={() => link_to_linkedin(member.linkedin)}>
                    <img className='cohort-member-individual-headshot' src={member.headshot_path} />
                    <h3 className='cohort-member-individual-name'>{member.name}</h3>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default MeetTeamCohortSection
