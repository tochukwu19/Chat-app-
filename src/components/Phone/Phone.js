import React from 'react'
import "./Phone.css"
import Messages from "../Messages/Messages"
import avatar from "../../images/avatar.jpg"
import arrowLeft from "../../images/back.png"
import more from "../../images/more.png"
import next from "../../images/next.png"
import dog1 from "../../images/dog-image-1.jpg"
import dog2 from "../../images/dog-image-2.jpg"
import dog3 from "../../images/dog-image-3.jpg"


const Phone = () => {
    return (
        <div className="outer-Frame">
           <div className="inner-Frame">
             <div className="notch">
             </div>
             {/* Headings */}
             <div className="header"> 
                <div className="header-left">   
                    <img src={arrowLeft} alt="arrowLeft"
                    className="arrow-left"
                    ></img>
                    <img src={avatar} alt="avatar"
                    className="avatar"
                    ></img>
                    <div className="head-text">
                        <h4>Samuel Green</h4>
                        <p>Available to walk</p>
                    </div>
                </div>
                <img src={more} alt="more"
                    className="more"
                    ></img>
             </div>
             
             {/* Messages */}
             <div className="messages">
                <Messages content="That sounds great.I’d be happy with that."
                width="170" color="#EDE5F4"/>

                <Messages content="Could you send over some pictures of your dog, please?" width="170" color="#EDE5F4"/>
                
                <div className="dog-container">
                    <img src={dog1} alt="dogs"
                        className="dogs"
                        ></img>
                    <img src={dog2} alt="dogs"
                        className="dogs"
                        ></img>
                    <img src={dog3} alt="dogs"
                        className="dogs"
                        ></img>
                </div>

                <Messages content="Here are a few pictures. She’s a happy girl!" width="170" auto="auto" col="#BBB8C2"/>

                <Messages content="Can you make it?" width="110" auto="auto" col="#BBB8C2"/>

                <Messages content="She looks so happy! The time we discussed works. How long shall I take her out for?" width="170" color="#EDE5F4"/>

                {/* Payments */}
                <div className='pay'>
                    <div>
                    </div>
                    <p>30 minutes walk</p>
                    <h3>$25</h3>
                </div>

                <div className='pay'>
                    <div>
                    </div>
                    <p>1 hour walk</p>
                    <h3>$49</h3>
                </div>

                {/* The form */}
                <div className="form">
                    <input name="send" className="send-input" placeholder="Type a message.." />
                    <img src={next} alt="next"
                        className="next"
                        ></img>
                </div>
             </div>
           </div>
        </div>
    )
}


export default Phone;
