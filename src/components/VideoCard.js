import React from "react";
import './videoCard.css'
import {Link, NavLink} from "react-router-dom";

export default  function VideoCard(props) {
    const dirlink = 'detail/' + props.id
    return (
        <div className="videoCard">
            <div class="card">
                <div class="thumbnail"><img class="left"
                                            src={props.info.thumbnails.high.url}/>
                </div>
                <div class="right">
                    <h1>{props.info.title}</h1>
                    <div class="author">
                        <h2>{props.info.channelTitle}</h2>
                    </div>
                    <div class="separator"></div>
                    <p>{props.info.description}</p>
                </div>

                <ul>
                    <li><i class="fa.fa-eye.fa-2x"></i></li>
                    <li><i class="fa fa-heart-o fa-2x"></i></li>
                    <li><i class="fa fa-envelope-o fa-2x"></i></li>
                    <li><i class="fa fa-share-alt fa-2x"></i></li>
                </ul>
                <div class="fab"><NavLink to= {dirlink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg></NavLink></div>
            </div>
        </div>
    )

}
