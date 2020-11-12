import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import './index.css'
import Title, {SIZE_SMALL} from '../Title';
import {STR_ADD_POST, CREAT_POST, STR_DESC, STR_TITLE, STR_POST, POST_URL} from '../../Constants/strings'
import {ACTION_UPDATE_TITLE, ACTION_UPDATE_PHOTO, ACTION_UPDATE_DESCRIPTION} from '../../Constants/actions'
import Text from '../Text';
import PostDisplay from "../Post";

const initialPost = {title: '', description: '', photo: null}
const reducer = (post, action) => {
    switch (action.type) {
        case ACTION_UPDATE_TITLE:
            return {...post, title: action.value}
        case ACTION_UPDATE_DESCRIPTION:
            return {...post, description: action.value}
        case ACTION_UPDATE_PHOTO:
            return {...post, photo: action.value}
    }
}
/*
* Upload file mosh
* https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
* */
const PostFrom = () => {
    const [post, dispatchPost] = useReducer(reducer, initialPost)
    const [imgFile, setImgFile] = useState(null)

    useEffect(() => {
        if (!imgFile) {
            return
        }
        const imgUrl = URL.createObjectURL(imgFile)
        dispatchPost({type: ACTION_UPDATE_PHOTO, value: imgUrl})

        return () => URL.revokeObjectURL(imgUrl)
    }, [imgFile])

    onsubmit = () => {
        if(post.title && post.description && imgFile){
            const data = new FormData()
            data.append('photo', post.photo)
            /*data.append('photo', imgFile) when the sever support file upload*/
            data.append('title', post.title)
            data.append('description', post.description)
            axios.post(POST_URL, data, {}).then(res => {
                // TODO: display a confirmation box here
                console.log(res.status)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const onUpload = (event) => {
        const checkMimeType=()=>{
            const file = event.target.files[0]
            const types = ['image/png', 'image/jpeg', 'image/gif']
            if (types.every(type => file.type !== type)) {
                const err = file.type+' is not a supported format\n';
                event.target.value = null // discard selected file
                console.log(err)
                return false;
            }
            return true;
        }

        const maxSelectFile=()=>{
            let files = event.target.files
            if (files.length !== 1) {
                const msg = 'Only 1 image can be uploaded at a time'
                event.target.value = null // discard selected file
                console.log(msg)
                return false;
            }
            return true;
        }
        if (checkMimeType() && maxSelectFile()){
            setImgFile(event.target.files[0])
        }
    }

    return (
        <>
            <div className='postForm'>
                <Title text={STR_ADD_POST} size={SIZE_SMALL}/>
                <Text text={CREAT_POST}/>
                <form onSubmit={e => { e.preventDefault(); }}>
                    <div className='upload'>
                        <input type='file' name='postImage'
                               onChange={onUpload}/>
                    </div>
                    <div className='inputs'>
                        <label htmlFor={STR_TITLE} className='htmlFor'> {STR_TITLE} </label>
                        <input type='text' value={post.title} name={STR_TITLE} id={STR_TITLE}
                               onChange={e => dispatchPost({
                                   type: ACTION_UPDATE_TITLE, value: e.target.value
                               })} placeholder='title' required/>

                        <label htmlFor={STR_DESC} className='htmlFor'> {STR_DESC} </label>
                        <textarea value={post.description} name={STR_DESC} id={STR_DESC}
                                  onChange={e => dispatchPost({
                                      type: ACTION_UPDATE_DESCRIPTION, value: e.target.value
                                  })} placeholder='description' required/>
                        <button className='btnPost' onClick={onsubmit}>{STR_POST}</button>
                    </div>
                </form>
            </div>
            <PostDisplay revert={false} socialMedia={false} post={post}/>
        </>
    );
};

export default PostFrom;