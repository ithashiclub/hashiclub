import React, { useState } from 'react'
import Logo from '../assets/has3.png'
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
                        
                    </div>
                    <div className="SocialLinks">
                    <a href="https://twitter.com/ClubHashi"><TwitterIcon className="iconImage" /> </a> <img src={DiscordImage} width={25} height={18} alt="discordImage" className="iconImage" data-tip="Stay tunned." ></img> <img src={OpenSeaImage} width={21} height={21} alt="discordImage" className="iconImage" data-tip="Stay tunned." ></img>
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
                        <img src={DiscordImage} width={60} height={50} alt="discordImage" className="iconImage" ></img> <img src={OpenSeaImage} width={60} height={60} alt="discordImage" className="iconImage" ></img></div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
