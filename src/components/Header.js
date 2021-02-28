import { Avatar, Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import React, { useState } from 'react';
import logo from '../assets/logo_lol-removebg-preview.png';
import SearchBar from './SearchBar';

const Header = ({ handleSubmit, enterprise, setEnterprise }) => {
    console.log(enterprise);
    const [toggle, setToggle] = useState(false);

    return (
        <>
        <div className={"header active"} >
            <img 
                className={ "noDisplay"} 
                src={logo}
                alt="SmartQ logo"
            />
            <Typography style={{fontSize: 30}} >SmartQ</Typography>
            <div className="header__center2">
                <p>{ enterprise ? 'Check current queue' : 'Explore your bookings'}</p>
                <p>{ enterprise ? 'Dashboard' : 'Facilities'}</p>
            </div> 

            <div className="header__right">
                <Button>
                    <p className={"active"}>
                            { enterprise ? 'Migration Office Blagoevgrad': 'Become a partner' }
                    </p>
                </Button>
                <Button 
                    onClick={() => setToggle(!toggle)} >
                        <LanguageIcon
                            className={"active"}
                        />
                        <ExpandMoreIcon 
                            className={"active"}
                        />
                </Button>
                {toggle && 
                    <div className="header__globe passive">
                        <ul>
                            <li onClick={() => { setEnterprise(false); setToggle(false)}}>User</li>
                            <li onClick={() => { setEnterprise(true); setToggle(false)}}>Partner</li>
                        </ul>
                    </div>}
                <IconButton className="avatar__button">
                    <Avatar  className="header__avatar" />
                </IconButton>
            </div>
        </div>
        <SearchBar handleSubmit={handleSubmit} enterprise={enterprise}/>
        </>
    )
}

export default Header
