import './closefriend.css'

function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilePicture} alt="person" />
            <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}

export default CloseFriend