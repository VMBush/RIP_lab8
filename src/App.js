import {BrowserRouter, Route, Link, Switch, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";
import VideoCard from './components/VideoCard.js'
import DetailCard from "./components/DetailCard";
import "./App.css"



const getVideosByName = async (name = '') =>{
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD4ECa0a1mGKr6Psf1GYrcuExIDppu2XmU&part=snippet&q=${name}&chart=mostPopular&maxResults=10`)
        .then((response) => {
            return response.json();
        }).catch(()=>{
            return {resultCount:0, results:[]}
        })
    return res
}

function App() {

    const [searchValue, setSearchValue] = useState('лягушки');

    const [loading, setLoading] = useState(false)

    const [videos, setVideos] = useState([])

    const handleSearch = async () =>{
        await setLoading(true);
        const { items } = await getVideosByName(searchValue);
        await setVideos(items);
        await setLoading(false)
    }

    return (
        <BrowserRouter basename="/" >
            <div>
                <ul className='head'>
                    <li>
                        <Link  to="/">Главная страница</Link>
                    </li>
                    <li>
                        <Link to="/search">Страница поиска</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <h1 className="head">Добро пожаловать на страницу поиска чудесных видеозаписей про лягушек и не только</h1>
                    </Route>
                    <Route path="/search">

                        <div className={`container ${loading && 'containerLoading'}`}>
                            {loading && <div className="loadingBg"><Spinner animation="border"/></div>}
                            <div className="input">
                                <input className="inputField" value={searchValue} onChange={(event => setSearchValue(event.target.value))}/>
                                <Button className="inputField" disabled={loading} onClick={handleSearch}>Искать</Button>
                            </div>
                            {!videos.length && <div>
                                <h1 className="search-error">К сожалению, пока ничего не найдено :(</h1>
                            </div>}

                            <Row xs={4} md={4} className="g-4">
                                {videos.map((item, index) => {

                                    return <VideoCard key={index} info={item.snippet} id={index} />

                                })}
                            </Row>
                        </div>
                    </Route>
                    <Route path="/detail/:id">


                        <DetailCard info={videos}/>




                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;