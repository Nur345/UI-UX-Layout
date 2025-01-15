import React from 'react'
import "./CommunitiesTrending.css"
import Hiking from "../Images/Hiking.png"
import dot from "../Images/dot.png"
import Tesla from "../Images/Tesla.png"
import Car from "../Images/Car.png"
import heart from "../Images/heart.png"
import comment from "../Images/comment.png"

const CommunitiesTrending = () => {
  return (

 <div className='communities-trending-box'>
            <div className='communities-container'>
                <div className='communities-main-container'>
                    <div className='communities-header'>
                        <h>Communities to follow</h>
                    </div>

                    <div className='communities-card-one'>

                        <div className='communities-card-left-content'>
                            <img src={Hiking} alt="Hiking" />

                            <div className='communities-card-content'>
                                <h className="communities-name">Hiking Champs</h>
                                <p className='communities-address'>@hike_clubb</p>
                            </div>
                            <button className='communities-button' type='submit'>Join Now</button>
                        </div>

                        <div className='communities-card-below-content'>

                            <p className='communities-below'>Hiking</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Swimming</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Cycling</p>
                        </div>
                    </div>

                    <div className='communities-card-one'>

                        <div className='communities-card-left-content'>
                            <img src={Hiking} alt="Hiking" />

                            <div className='communities-card-content'>
                                <h className="communities-name">Hiking Champs</h>
                                <p className='communities-address'>@hike_clubb</p>
                            </div>
                            <button className='communities-button' type='submit'>Join Now</button>
                        </div>

                        <div className='communities-card-below-content'>

                            <p className='communities-below'>Hiking</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Swimming</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Cycling</p>
                        </div>
                    </div>

                    <div className='communities-card-one'>

                        <div className='communities-card-left-content'>
                            <img src={Hiking} alt="Hiking" />

                            <div className='communities-card-content'>
                                <h className="communities-name">Hiking Champs</h>
                                <p className='communities-address'>@hike_clubb</p>
                            </div>
                            <button className='communities-button' type='submit'>Join Now</button>
                        </div>

                        <div className='communities-card-below-content'>

                            <p className='communities-below'>Hiking</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Swimming</p>
                            <img src={dot} alt="dot" />

                            <p className='communities-below'>Cycling</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='trending-container'>
                <div className='trending-main-container'>
                    <div className='trending-header'>
                        <h>Trending Posts</h>
                    </div>

                    <div className='trending-card-one'>
                        <div className='trending-card-top'>
                            <img src={Tesla} alt="Tesla" />
                            <h className="trending-name">Tesla</h>
                            <p className='trending-address'>@tesla</p>
                            <button className='trending-button' type='submit'>View Post</button>
                        </div>

                        <div className='trending-card-middle'>
                            <img src={Car} alt="car" />
                            <p className='trending-card-middle-text'>Electric Cars, Solar & Clean Energy - @Tesla</p>
                        </div>

                        <div className='trending-card-below'>
                            <img src={heart} alt="heart" />
                            <p className='trending-card-below-text'>22.4k</p>

                            <img src={comment} alt="msg" />
                            <p className='trending-card-below-text'>2.4k</p>
                        <p className='trending-card-below-date-year'>Jan 13, 2024</p>
                        </div>

                    </div>

                    <div className='trending-card-one'>
                        <div className='trending-card-top'>
                            <img src={Tesla} alt="Tesla" />
                            <h className="trending-name">Tesla</h>
                            <p className='trending-address'>@tesla</p>
                            <button className='trending-button' type='submit'>View Post</button>
                        </div>

                        <div className='trending-card-middle'>
                            <img src={Car} alt="car" />
                            <p className='trending-card-middle-text'>Electric Cars, Solar & Clean Energy - @Tesla</p>
                        </div>

                        <div className='trending-card-below'>
                            <img src={heart} alt="heart" />
                            <p className='trending-card-below-text'>22.4k</p>

                            <img src={comment} alt="msg" />
                            <p className='trending-card-below-text'>2.4k</p>
                        <p className='trending-card-below-date-year'>Jan 13, 2024</p>
                        </div>
                    </div>

                    <div className='trending-card-one'>
                        <div className='trending-card-top'>
                            <img src={Tesla} alt="Tesla" />
                            <h className="trending-name">Tesla</h>
                            <p className='trending-address'>@tesla</p>
                            <button className='trending-button' type='submit'>View Post</button>
                        </div>

                        <div className='trending-card-middle'>
                            <img src={Car} alt="car" />
                            <p className='trending-card-middle-text'>Electric Cars, Solar & Clean Energy - @Tesla</p>
                        </div>

                        <div className='trending-card-below'>
                            <img src={heart} alt="heart" />
                            <p className='trending-card-below-text'>22.4k</p>

                            <img src={comment} alt="msg" />
                            <p className='trending-card-below-text'>2.4k</p>
                        <p className='trending-card-below-date-year'>Jan 13, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

  )
}

export default CommunitiesTrending