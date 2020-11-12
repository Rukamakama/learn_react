import React, {Component} from 'react';
import Landing from "../../Components/Landing";
import PostDisplay from "../../Components/Post";
import './index.css'
import Carousel from "../../Components/Carousel";
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../../Components/SocialMedia";

class Home extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <Landing/>
                <div className='landingImage'/>
                <PostDisplay/>
                <PostDisplay revert={false}/>
                <Carousel/>
                <div className='bottomMedia'><SocialMedia medias={[FACEBOOK, TWEETER, INSTAGRAM]}/></div>
            </div>
        );
    }
}

export default Home;