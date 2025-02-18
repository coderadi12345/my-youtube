import { comment } from 'postcss'
import React from 'react'
import { data } from 'react-router-dom'

const commentData = [
    {
        name: "Aditya",
        text: "lorem ipsum dollar",
        replies: [
            {
                name: "Aditya",
                text: "lorem ipsum dollar",
                replies: [
        
                ]
            },
        ]
    },
    {
        name: "Aditya",
        text: "lorem ipsum dollar",
        replies: [
            {
                name: "Aditya",
                text: "lorem ipsum dollar",
                replies: [
        
                ]
            },
        ]
    },
    {
        name: "Aditya",
        text: "lorem ipsum dollar",
        replies: [
            {
                name: "Aditya",
                text: "lorem ipsum dollar",
                replies: [
        
                ]
            },
        ]
    },

]

const Comment = ({data}) => {
    const {name,text,replies} = data
    return (<div className='flex shadow-sm bg-gray-100 p-2 '>
        <img
        className='w-12 h-12'
        alt='user'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        
        <div className='px-3'>
            <p className='font-bold '>{name}</p>
            <p>{text}</p>
        </div>

    </div>)
}

const CommentList = ({comments}) =>{
    return comments.map((comment,index) => (
       <div >
                 <Comment data={comment}/>
                 <div className='pl-5 border border-l-black ml-5'>
                    <CommentList comments={comment.replies}/>
                 </div>
                 </div>
      ))
       
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-5 '>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer