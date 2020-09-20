import React, {useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import SearchBar from './SearchBar'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeStyle = () => {
       if (window.scrollY >=80) {
        setNavbar(true) 
        } else {
            setNavbar(false)
        }
    } 

    window.addEventListener('scroll', changeStyle)

    return (
        <>
        <div className={navbar ? "header passive" : "header active"} >
            <img 
                className={navbar ? "header__icon" : "noDisplay"} 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="airbnb logo"
            />
            <img 
                className="header__icon"
                src="https://www.uokpl.rs/fpng/f/422-4227907_airbnb-logo-white.png" 
            />
            {navbar ? <div className="header__center">
                            <input 
                                placeholder="Start your search"
                                label="location" 
                                type="text" 
                                className={navbar ? "passive" : "active"}
                            />
                            <SearchIcon />
                        </div>
                        :
                        <div className="header__center2">
                            <p>Places to stay</p>
                            <p>Experiences</p>
                            <p>Online Experiences</p>
                        </div> }

            <div className="header__right">
                <Button>
                    <p className={navbar ? "passive" : "active"}>
                            Become a host
                    </p>
                </Button>
                <Button 
                    onClick={() => setToggle(!toggle)} >
                        <LanguageIcon
                            className={navbar ? "passive" : "active"}
                        />
                        <ExpandMoreIcon 
                            className={navbar ? "passive" : "active"}
                        />
                </Button>
                {toggle && 
                    <div className="header__globe passive">
                        <ul>
                            <li>English (US)</li>
                            <li>USD</li>
                        </ul>
                    </div>}
                <IconButton className="avatar__button">
                    <Avatar  className="header__avatar" />
                </IconButton>
            </div>
        </div>
        <SearchBar />
        </>
    )
}

export default Header
