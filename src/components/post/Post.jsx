import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData';

function Post({post}) {
    
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=> u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg' />
                    <span className='postUserName'>{Users.filter(u=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div> 

            <div className="postCenter">
                <span className='postText'>{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/Assets/like.png" alt="" />
                    <img className='likeIcon' src="/Assets/heart.png" alt="" />
                    <span className="PostlikeCounter">{post.like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className='postCommentText'>{post.comment } comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post