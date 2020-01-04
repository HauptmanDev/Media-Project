import React from 'react';
import video from './../../src/media/giphy.gif'

const Video: React.FC = () => {

    // const [video, setVideo] = useState();
    // const [videoURL, setVideoURL] = useState();
    // const [fileData, setFileData] = useState();

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <input type="file"/>
            <video width='300px' height='300px'>
                <source src={'http://techslides.com/demos/sample-videos/small.mp4'}/>
            </video>
        </div>
    );
};

export default Video;
