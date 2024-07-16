import React from 'react'
import "./rightBar.scss"
import propic from "../../assets/manjpeg.jpeg"
import propic2 from "../../assets/manjpeg.jpeg"
import propic3 from "../../assets/manjpeg.jpeg"
import propic4 from "../../assets/person.png"
import propic0 from "../../assets/manjpeg.jpeg"



const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
              <div className="userInfo">
                <img src={propic4} alt="" />
                <span>Vilochana Udantha</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic}  alt="" />
                <span>Vilochana Udantha</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
              <div className="userInfo">
                <img src={propic2} alt="" />
                <p>
                <span>Susan</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic3} alt="" />
                <p>
                <span>Amila</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
          </div>
          
          <div className="user">
              <div className="userInfo">
                <img src={propic0} alt="" />
                <p>
                <span>John</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <p>
                <span>Udantha</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
          </div>

          
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Vilo</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Pole</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Susan</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Bimal</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Sentos</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Linux</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Suneth</span>
              </div>
             
          </div>

          <div className="user">
              <div className="userInfo">
                <img src={propic} alt="" />
                <div className="online"/>
                <span>Diana</span>
              </div>
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
