import React from 'react';
import TeamBody from './TeamBody';
import TeamTitle from './TeamTitle';
import { Avatar } from 'react-lorem-ipsum';

export default function TeamCard({gender, fullname, position, description}) {
  return (
    <div className='member-card'>
      <div className='columns align-center'>
        <Avatar gender={gender} className="avatar" width="200" height="200" alt="Avatar" />
        <TeamTitle
        fullname={fullname}
        position={position}
        />
        <TeamBody
        description={description}
        />
      </div>
    </div>
  )
}