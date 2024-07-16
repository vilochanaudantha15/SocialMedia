import React, { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authContext';
import my from "../../assets/manjpeg.jpeg"

const Stories = () => {
    const { currentUser} = useContext(AuthContext);
    //Temporary Dumy Data//
    const stories = [
        {
            id:1,
            name:"John Doe",
            img:"https://wallpaperaccess.com/full/1905160.jpg"
        },
        {
            id:2,
            name:"John Doe",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX3oqq83eJsYGYsgNJ57F1KUBoqZsUclCmw&usqp=CAU"
        },
        {
            id:3,
            name:"John Doe",
            img:"https://wallpaperaccess.com/full/1905160.jpg"
        },
        {
            id:4,
            name:"John Doe",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX3oqq83eJsYGYsgNJ57F1KUBoqZsUclCmw&usqp=CAU"
        },
        
    ]
  return (
    <div className='stories'>
        <div className="story">
            <img src={my} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
     {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt=""/>
            <span>{story.name}</span>
        </div>
     ))}
    </div>
  )
}

export default Stories
