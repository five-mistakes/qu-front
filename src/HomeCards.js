import React from 'react'
import './HomeCards.css'

const HomeCards = () => {
    return (
        <div className="homeCards">
            <div className="homeCards__card">
                <div className="homeCards__cardImg card_Img1">
                    <img src="https://i.pinimg.com/originals/1b/be/21/1bbe21275d2cb7055448696be4ab27b8.jpg" />
                </div>
                <div className="homeCards__cardInfo">
                    <h3>Unique Stays</h3>
                    <p>Spaces that are more than just a place to sleep.</p>
                </div>
            </div>
            <div className="homeCards__card middle">
                <div className="homeCards__cardImg card_Img2">
                    <img src="http://www.magiciancardtricks.com/uploads/5/6/4/1/5641235/s431054849200788171_p4_i2_w640.jpeg"/>
                </div>
                <div className="homeCards__cardInfo">
                    <h3>Online Experiences</h3>
                    <p>Unique activities we can do together, led by a world of hosts.</p>
                </div>
            </div>
            <div className="homeCards__card">
                <div className="homeCards__cardImg card_Img3">
                    <img src="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/slideshow/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390"/>
                </div>
                <div className="homeCards__cardInfo">
                    <h3>Entire homes</h3>
                    <p>Comfortable private places, with room for friends or family.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCards
