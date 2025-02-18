import React, { useEffect, useState } from 'react'
import { toggleMenu } from './utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from './constant'

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions,setSuggestions] = useState([])
  const [showSuggestion,setShowSuggestion] = useState(false)

  useEffect(() =>{

    const timer =  setTimeout(() => getSearchSuggestion(),200)

    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])

const getSearchSuggestion = async () =>{
  console.log("API" + searchQuery)
  const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
  const json  = await data.json()

  setSuggestions(json[1])

}

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
        <div>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full'
             type='text'
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             onFocus={() => setShowSuggestion(true)}
             onBlur={()=> setShowSuggestion(false)}
             />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'
            >Search</button>

        </div>
        {showSuggestion && (
        <div className='fixed bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg '>
          <ul>
            {suggestions.map((s)=> (
             <li key ={s} className='py-2 px-3 shadow-sm hover: bg-gray-100'>
              {s}
             </li>
            ))}
            
          </ul>
        </div>
        )}
        </div>
        <div className='col-span-1'>
            <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        </div>
    </div>
  )
}

export default Head


