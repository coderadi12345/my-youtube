import React from 'react'
import { toggleMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5  m-2 shadow-lg '>
        <div className='flex col-span-1 '>
            <img  onClick={() => toggleMenuHandler()}
            className='h-8 mx-2 cursor-pointer'
            alt='menu'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png'/>
            <a href='./'>
           <img  className = 'h-8'alt='youtube-logo'
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
       </a>
        
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full'
             type='text'/>
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'
            >Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s'/>
        </div>
    </div>
  )
}

export default Head