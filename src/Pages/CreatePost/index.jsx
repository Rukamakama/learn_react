import React, {Component} from 'react';
import './index.css'
import SocialMedia, {FACEBOOK, INSTAGRAM, TWEETER} from "../../Components/SocialMedia";
import PostFrom from "../../Components/PostForm";

class CreatePost extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='landingImage'/>
                <PostFrom/>
                <div className='bottomMedia'><SocialMedia medias={[FACEBOOK, TWEETER, INSTAGRAM]}/></div>
            </div>
        );
    }
}

export default CreatePost;