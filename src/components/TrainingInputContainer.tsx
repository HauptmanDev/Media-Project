import React from 'react';
import Video from "./video/Video";
import InputSomeFile from './common/InputSomeFile';
import Audio from "./audio/Audio";
import Image from "./image/Image";

const TrainingInputContainer: React.FC = () => {
    return (
        <div>
            <Image/>
            <Audio/>
            <Video/>
        </div>
    );
};

export default TrainingInputContainer;
