import React, { useContext } from 'react'
import "./leftBar.scss"
import Friends from "../../assets/friends.png";
import Groups from "../../assets/group.jpeg";
import MarketPlace from "../../assets/market.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/Event.jpeg";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video.png";
import Messages from "../../assets/messages.jpeg";
import Funds from "../../assets/funds.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import DP from "../../assets/manjpeg.jpeg"
import { AuthContext } from '../../context/authContext';
import propic2 from "../../assets/manjpeg.jpeg"


const Leftbar = () => {
  const { currentUser} = useContext(AuthContext);
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
           <img src={propic2} alt="" className='dp'/> 
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="" />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Funds} alt="" />
            <span>Funds</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Leftbar
