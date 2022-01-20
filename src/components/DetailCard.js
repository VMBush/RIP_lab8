import React from "react";
import './detailCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";



export default function DetailCard(props) {
    const params = useParams()
    const id = params.id
    const item = props.info[id].snippet
    return (
        <div className='detailCard'>
            <div id="container">


                <div className="product-details">


                    <h1>{item.title}</h1>

                    <span className="hint-star star">

		</span>

                    <p className="information">{item.description}</p>

                    <div className="control">



                    </div>

                </div>



                <div className="product-image">

                    <img
                        src={item.thumbnails.high.url}
                        alt="Omar Dsoky"/>


                </div>

            </div>
        </div>
    )
}