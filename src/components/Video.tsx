import React, {useEffect, useState, ChangeEvent} from 'react';
import poster from './../media/user.svg'
import video from './../../src/media/giphy.gif'

const Video: React.FC = () => {

    const [video, setVideo] = useState();
    const [videoURL, setVideoURL] = useState();
    const [fileData, setFileData] = useState();

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const formData = new FormData();
        const newFile = e.target.files && e.target.files[0];
        reader.onloadend = () => {
        setVideo(newFile);
        setVideoURL(window.URL.createObjectURL(newFile));
        newFile && formData.append('myVideo', newFile, newFile.name);
        setFileData(formData.get('myVideo'))
        };
        // newFile && reader.readAsDataURL(newFile)
    };

    return (
        <div>
            <input type="file" onChange={(e) => upload(e)}/>
            <video width='300px' height='300px' controls>
                <source src={videoURL}/>
            </video>
        </div>
    );
};

export default Video;
