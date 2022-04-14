import React, { useState } from 'react'
import Logo from '../assets/hashi4.png'
import { Link } from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder"
import CancelIcon from '@material-ui/icons/Cancel';
import TwitterIcon from "@material-ui/icons/Twitter";
import '../styles/Navbar.css'
import DiscordImage from '../assets/discord.png'
import OpenSeaImage from '../assets/opensea.png'
import ReactTooltip from 'react-tooltip';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const openMenu = () => {
        setOpenLinks(true);
    };
    const closeMenu = () => {
        setOpenLinks(false);
    };
    

   
    return (
        <div>
            <ReactTooltip effect="solid" />
            <div className="navbar" >

                <div className="NavContainer" >
                    <Link  to="/"><img className="Logo" src={Logo} alt="description" /></Link>
                    <div className="LinksContainer">
                        <div className='linkNav' data-tip="Comming soon."> DAF </div>
                        <div className='linkNav' data-tip="Comming soon."> Partners </div>
                        <div className='linkNav' data-tip="Comming soon."> Portfolio </div>
                        <a href="mailto:info.hashiclub@gmail.com"><div className='linkMail' data-tip="info.hashiclub@gmail.com"> Become a pioneer </div></a>
                    </div>
                    <div className="SocialLinks">
                    <a href="https://twitter.com/ClubHashi"><TwitterIcon className="iconImage" /> </a> <img src={DiscordImage}  alt="discordImage" className="iconImage" data-tip="Stay tunned." ></img> <img src={OpenSeaImage}  alt="discordImage" className="iconImage" data-tip="Stay tunned." ></img>
                    </div>

                </div>

                <div className="rightSide" >
                    <button className="iconreorder" onClick={openMenu} id={openLinks ? "close" : "open"}>
                        <ReorderIcon />
                    </button>

                    <div className="menuRigth"  id={openLinks ? "open" : "close"} onClick={closeMenu}>
                        <button className="iconreorder" onClick={closeMenu}>
                            <CancelIcon />
                        </button>
                       
                        <div className="footerMenu"> <a href="https://twitter.com/ClubHashi"><TwitterIcon className="iconImage" /> </a>
                        <div className='comming-soon color-white heading3 margin-top-xl'>Content <br></br>   comming <br></br>  soon..</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
