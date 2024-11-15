import MeetTeamBoardSection from '@/components/MeetTeamBoardSection'
import MeetTeamCohortSection from '@/components/MeetTeamCohortSection'
import MeetTeamHero from '@/components/MeetTeamHero'
import React from 'react'
import random_photo from '../../public/random_photo.png'

/*
Meet the team board section expects a list of board member objects that will look like this:

{
    headshot_path : str
    name : str
    description : str
    linkedin : str
}

*/

const MeetTeam = () => {
    const example_board = [
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Theo Maurino',
            description : 'theo rules the world, lotta great stuff',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Kris Yun',
            description : 'Kris is cool too...',
            linkedin : 'https://www.google.com'
        }
    ]

    const example_cohort = [
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Theo Maurino',
            description : 'theo rules the world, lotta great stuff',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Kris Yun',
            description : 'Kris is cool too...',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Theo Maurino',
            description : 'theo rules the world, lotta great stuff',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Kris Yun',
            description : 'Kris is cool too...',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Theo Maurino',
            description : 'theo rules the world, lotta great stuff',
            linkedin : 'https://www.google.com'
        },
        {
            headshot_path : '../../public/random_photo.png',
            name : 'Kris Yun',
            description : 'Kris is cool too...',
            linkedin : 'https://www.google.com'
        }
    ]


  return (
    <>
    <MeetTeamHero />

    <MeetTeamBoardSection board_members={example_board} />

    <MeetTeamCohortSection cohort_members={example_cohort} />

    </>
  )
}

export default MeetTeam
