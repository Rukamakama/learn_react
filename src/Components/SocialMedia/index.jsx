import React from 'react';
import './index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FACEBOOK = 'facebook-f';
const INSTAGRAM = 'instagram';
const TWEETER = 'twitter';

const SocialMedia = ({medias}) => {
    return (
        <div className='medias'>
            {
                medias.map((media) =>
                    <div className='icon'>
                        <FontAwesomeIcon icon={['fab', media]} size="lg"/>
                    </div>)
            }
        </div>
    );
};

export {FACEBOOK, INSTAGRAM, TWEETER};
export default SocialMedia;