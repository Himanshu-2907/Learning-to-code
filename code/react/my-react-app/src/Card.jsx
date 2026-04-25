import profilePic from "./assets/profile.jpg"
function Card(){
    return(
        <div className="card">
           <img className="card-image"src={profilePic} alt="profile picture"></img>
           <h2 className="card-title">Bro Code</h2>
           <p className="card-text">This guy is teaching me React</p>
        </div>
    )
}export default Card;