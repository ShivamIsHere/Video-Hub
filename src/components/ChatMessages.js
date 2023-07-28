import React from 'react'

const chatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img  className = "w-8 h-8" alt="user" src="https://cdn0.iconfinder.com/data/icons/education-2-27/32/user_staff_person_man_profile_boss_circle-512.png"/>
    
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default chatMessage;
