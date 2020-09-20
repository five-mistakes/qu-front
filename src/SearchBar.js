import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import App2 from './datepicker/App2'
import { format } from 'date-fns';

const SearchBar = () => {
    const [showDatepicker, setShowDatePicker] = useState(true);
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

    const toggleCalendar = (e) => {
        setShowDatePicker(false);
        setShowCalendar(true);
    }

    const handleSelectDate = (date) => {
        setDate(date);
        setShowDatePicker(true);
        setShowCalendar(false);
    }

    const closeCalendar = () => {
        setShowDatePicker(true);
        setShowCalendar(false);
    }

    const handleClick = () => {
        setShowCalendar(!showCalendar)
    }

    return (
        <div>
            <form className='searchBar'>
                <div className="searchBar__location">
                    <h5>Location</h5>
                    <input
                        type="text" className="searchBar__locationInput"
                        placeholder="Where are you going?"
                    />
                </div>
                <hr />
                <div className="searchBar__checkIn"
                    toggleCalendar={toggleCalendar}
                    handleSelect={toggleCalendar}
                    onClick={handleClick}
                    >
                        <h5>Check in</h5>
                        <p>{date}</p>
                </div>
                <hr />
                <div className="searchBar__checkOut"
                    toggleCalendar={toggleCalendar}
                    handleSelect={toggleCalendar}
                    onClick={handleClick}
                    >
                        <h5>Check out</h5>
                        <p>{date}</p>
                        
                </div>
                <hr />
                <div className="searchBar__guests">
                    <h5>Guests</h5>
                    <p>Add guests</p>
                </div>
                <>
                <IconButton className="searchBar__button">
                    <SearchIcon className="searchBar__buttonIcon"/>
                </IconButton>
                </>
                
            </form>
            {showCalendar && <App2
                handleSelect={toggleCalendar}
                toggleCalendar={toggleCalendar}
                handleSelectDate={handleSelectDate}
                closeCalendar={closeCalendar}
                showDatepicker={showDatepicker}
                date={date}
                showCalendar={showCalendar}
            />}
        </div>
    )
}

export default SearchBar
