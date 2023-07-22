import "./Profile.css";
import image from "../Image/Profile.jpg"
import instagram from "../Image/instagram.png"
import linkedin from "../Image/linkedin.png"
import twitter from "../Image/twitter.png"
import github from "../Image/github.avif"
import mail from "../Image/mail.png"




function Profile(){
    return(
        <>
        
        <div className="profile-con1">
            
        <div className="profile-about">
                <h1 className="about-head">I'M DINESH BABU </h1>
                <h4 className="about-head">Student</h4>
                <p>I am studying for a B.E. in Computer Science Engineering at Kongu Engineering College. I expect to graduate in 2024.</p>
                <hr/>
                <p>Interests: Front-end Development,Back-end Development,Web Designs</p>
                <hr/>
                <div className="profile-links">
                    <div className="profile-icons"><a href="mailto:dineshbabu.r56@gmail.com" target="_blank"><img src={mail}/></a></div>
                    <div className="profile-icons"><a href="https://github.com/Dinesh-db" target="_blank"><img src={github}/></a></div>
                    <div className="profile-icons"><a href="https://www.linkedin.com/in/dineshbabu56/" target="_blank"><img src={linkedin}/></a></div>
                    <div className="profile-icons"><a href="https://twitter.com/Dinesh10231496?t=zGsc7yRd6HSjY0tt0zKwwQ&s=08" target="_blank"><img src={twitter}/></a></div>
                    <div className="profile-icons"><a href="https://www.instagram.com/dinesh_.db_/" target="_blank"><img src={instagram}/></a></div>
                </div>
            </div>
            <div className="profile-img">
                <img src={image}/>
            </div>
        </div>
        </>
    );
}

export default Profile;