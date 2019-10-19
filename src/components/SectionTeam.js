import React from 'react';
import TeamCard from './TeamCard';
import { name, surname, loremIpsum } from 'react-lorem-ipsum';

export default function SectionTeam({title}) {
  return (
    <section id='team'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>{title}</h1>
            <hr></hr>
          </div>
        </div>
        <div className='row'>
          <div className='col col-4'>
            <TeamCard
            gender='male'
            fullname={name('male')} {...surname()}
            position='Developer'
            description={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
          <div className='col col-4'>
            <TeamCard
            gender='female'
            fullname={name('female')} {...surname()}
            position='Designer'
            description={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
          <div className='col col-4'>
            <TeamCard
            gender='male'
            fullname={name('male')} {...surname()}
            position='Manager'
            description={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}