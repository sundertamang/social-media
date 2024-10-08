
import './rightbar.css'


function Rightbar({profile}) {

 

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City: </span>
          <span className="rightbarInfoValue">New york</span>
        </div>
      </div>

      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From: </span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
      </div>

      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="Assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anna Johnson</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mary Jane</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">peter parker</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">steve jobs</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">james bond</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Bruce wayne</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}

export default Rightbar