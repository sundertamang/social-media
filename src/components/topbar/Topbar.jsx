import './topbar.css'
import {Chat, Notifications, Person, Search} from '@mui/icons-material'

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className='logo'>My Social</span>
        </div>
        <div className="topbarCenter">
          <div className='searchbar'>
            <Search className='searchIcon'/>
            <input placeholder='Search for friend, post or video' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLinks">Homepage</span>
            <span className="topbarLinks">Timeline</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItems">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItems">
            <Chat/>
            <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItems">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>

          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>

    </div>
  )
}

export default Topbar

