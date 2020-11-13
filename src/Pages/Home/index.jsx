import React, {Component} from 'react';
import './index.css'
import Header from "../../Components/Header";
import Landing from "../../Components/Landing";
import {POST_OWNER, STR_ABOUT, STR_POST} from "../../strings";
import Post from "../../Components/Post";
import './index.css'
import Carousel from "../../Components/Carousel";

class Home extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <Header name={POST_OWNER} navItems={[STR_ABOUT, STR_POST]}/>
                <Landing/>
                <Post revert={false}/>
                <Post revert={true}/>
                <Carousel/>
            </div>
        );
    }
}

export default Home;