
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css"

function Profile() {
  return (
    <>
    <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="ProfileRight">
            <div className="profileRighttop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="Assets/posts/3.jpeg" alt="" />
                    <img className="profileUserImg" src="Assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="ProfileInfoName">Safak Kochagolu</h4>
                    <span className="ProfileInfoDesc">hello my friends!</span>
                </div>
                </div>
            <div className="profileRightbottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        
        </div>
        
      </div>
    </>
  )
}

export default Profile