import "../Css/sidemenu.css"
import { Link } from "wouter";
import maharashtra from "../Images/sidemenu_maharashtra.avif"
import NewDelhi from "../Images/sidemenu_New delhi.png"
import Gujrat from "../Images/sidemenu_gujrat.png";
import andhrapradesh from "../Images/sidemenu_andhrapradesh.png";
import Rajastan from "../Images/sidemenu_rajastan.webp";
import avatar from "../Images/Profile.png"
import { Button } from "@mui/material";

function Sidemenu(props) {
    const { userData, removeData } = props;

    function removedata() {
        removeData();
    }

    return (
        <>
            <div className="sidemenu_main_conatiner">
                <div className="sidemenu">
                    <div className="sidemenu_content">
                        <h4>Statewise Radios</h4>
                        <div className="sidemenu_box" ><img id="sidemenu_img1" src={maharashtra} alt="" /><Link href="/" ><p>Maharashtra</p></Link></div>
                        <div className="sidemenu_box"><img id="sidemenu_img2" src={NewDelhi} alt="" /><Link href="/NewDelhi"><p>New Delhi</p></Link></div>
                        <div className="sidemenu_box"><img id="sidemenu_img3" src={Rajastan} alt="" /><Link href="/Rajastani"><p>Rajasthan</p></Link></div>
                        <div className="sidemenu_box"><img id="sidemenu_img4" src={Gujrat} alt="" /><Link href="/Gujrat"><p>Gujarat</p></Link></div>
                        <div className="sidemenu_box"><img id="sidemenu_img5" src={andhrapradesh} alt="" /><Link href="/AndhraPradesh"><p>Andhra Pradesh</p></Link></div>
                        <h5>User features</h5>

                        <div className="sidemenu_box"><img id="sidemenu_img6" src={avatar} alt="" /><Link href="/Profile"><p>Profile</p></Link></div>
                         
                          {!userData && (
                        <div id="signuplogin" className="sidemenu_box"><Link href="/login"><p>Login</p></Link> <p>/</p> <Link href="/signin"><p>Sign In</p></Link></div>
                            )}
                        {/* Conditionally render logout button if userData exists */}
                        {userData && (
                            <div><Button id="signuplogin" onClick={removedata}>Logout</Button></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidemenu;
