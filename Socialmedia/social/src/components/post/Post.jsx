import React, { useState } from 'react'
import "./postlike.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Link } from "react-router-dom";
import Comments from '../comments/Comments';
import propic2 from "../../assets/manjpeg.jpeg"





const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false)


//
const liked = false;

  console.log(post);
  return (
    <div className='post'>
      <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={propic2} alt="" />
          <div className="details">
           <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
            <span>{post.name}</span>
            
           </Link>
           <span className='date'>1 min ago</span>
          </div>
          <MoreHorizIcon/>
        </div>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt=''/>
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
          12 Likes
        </div>

        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
         <TextsmsIcon/>
          12 Comments
        </div>

        <div className="item">
         <ShareIcon/>
          Share
        </div>
      </div>
    { commentOpen && <Comments/>}
    </div>
    </div>
  )
}

export default Post
