import './sidebar.css'
import {RssFeed, WorkOutline, Chat, PlayCircle, Group, Bookmark, HelpOutline, Event, School} from "@mui/icons-material"
import { Users } from '../../dummyData'
import CloseFriend from '../closefriend/CloseFriend'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <Chat className='sidebarIcon' />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItems">
            <PlayCircle className='sidebarIcon' />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItems">
            <Group className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItems">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItems">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItems">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItems">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItems">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>

        <button className="sidebarButton">Show more</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar