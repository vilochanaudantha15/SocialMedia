import React from 'react'
import "./profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DP from "../../assets/manjpeg.jpeg";
import Posts from "../../components/posts/Posts"


const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://c4.wallpaperflare.com/wallpaper/634/597/281/range-rover-velar-luxury-suv-4k-2017-wallpaper-preview.jpg" alt="" className='cover'/>
        <img src={DP} alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='http://facebook.com'>
              <FacebookIcon fontSize='large'/>
            </a>
            <a href='http://'>
              <InstagramIcon fontSize='large'/>
            </a>
            <a href='http://'>
              <TwitterIcon fontSize='large'/>
            </a>
            <a href='http://'>
              <LinkedInIcon fontSize='large'/>
            </a>
            <a href='http://'>
              <PinterestIcon fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Canada</span>
              </div>

              <div className="item">
                <LanguageIcon/>
                <span>English</span>
              </div>
             
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
