import React, {useState} from 'react';
import './index.css'
import Title, {SIZE_SMALL} from '../Title';
import {STR_ADD_POST, CREAT_POST, STR_DESC, STR_TITLE} from '../../strings'
import Text from "../Text";

const PostFrom = () => {
    const [post, setPost] = useState({title: '', description: ''});

    return (
        <div className='postForm'>
            <Title text={STR_ADD_POST} size={SIZE_SMALL}/>
            <Text text={CREAT_POST}/>
            <div className='inputs'>
                <div className='upload'>

                </div>
                <form>
                    <label htmlFor={STR_TITLE} className='htmlFor'> {STR_TITLE} </label>
                    <input type="text" value={post.title} name={STR_TITLE} id={STR_TITLE}
                           onChange={e => setPost({...post, title: e.target.value})}/>

                    <label htmlFor={STR_DESC} className='htmlFor'> {STR_DESC} </label>
                    <input type="text" value={post.description} name={STR_DESC} id={STR_DESC}
                           onChange={e => setPost({...post, description: e.target.value})}/>
                    <button className='btnPost'>POST</button>
                </form>
            </div>
            {/*<h3>title: {post.title}</h3>*/}
            {/*<h3>description: {post.description}</h3>*/}
        </div>
    );
};

export default PostFrom;