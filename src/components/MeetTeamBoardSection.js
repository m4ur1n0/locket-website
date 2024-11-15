import React from 'react'

/*
Meet the team board section expects a list of board member objects that will look like this:

{
    headshot_path : str
    name : str
    description : str
    linkedin : str
}

*/

const MeetTeamBoardSection = ( {board_members} ) => {

    const link_to_linkedin = (link) => {
        //implement functionality later....
        console.log(link);
    }

  return (
    <div className='meet-the-team-board-section'>
      <div className='flexbox-of-board-members-rows flex flex-row flex-wrap'>
        {board_members.map((member, index) => (
            <div className='board-member-individual m-10' key={index} onClick={() => link_to_linkedin(member.linkedin)}>
                <img className='board-member-individual-headshot' src={member.headshot_path} />
                <h3 className='board-member-individual-name'>{member.name}</h3>
                <p className='board-member-job-description'>{member.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default MeetTeamBoardSection
