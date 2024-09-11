import './online.css'

function Online({user}) {
  return (
    <li className="rightbarFriend">
            <div className="rightbarImgProfileContainer">
              <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
          </li>
  )
}

export default Online
