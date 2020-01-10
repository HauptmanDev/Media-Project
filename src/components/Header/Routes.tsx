import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Video from "../video/Video";
import Audio from "../audio/Audio";
import Image from "../image/Image";

export const PAGE_IMAGE_PATH = '/image';
export const PAGE_AUDIO_PATH = '/audio';
export const PAGE_VIDEO_PATH = '/video';


const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path='/' render={() => <Redirect to={PAGE_IMAGE_PATH}/>}/>
            <Route path={PAGE_IMAGE_PATH} render={() => <Image/>}/>
            <Route path={PAGE_VIDEO_PATH} render={() => <Video/>}/>
            <Route path={PAGE_AUDIO_PATH} render={() => <Audio/>}/>
        </div>
    );
};

export default Routes;
