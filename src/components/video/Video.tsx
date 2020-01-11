import React, {useEffect, useRef, useState} from 'react'
import UniversalRange from '../common/UniversalRange'

const Video: React.FC = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [titlePlayPause, changeTitlePlayPause] = useState('Play');
    const [currentTime, changeCurrentTime] = useState();
    const [curMinTime, changeCurMinTime] = useState('00');
    const [curSecTime, changeCurSecTime] = useState('00');
    const [durMinTime, changeDurMinTime] = useState('00');
    const [durSecTime, changeDurSecTime] = useState('00');

    const onPlayPause = () => {
        if (videoRef.current!.paused) {
            videoRef.current!.play();
            changeTitlePlayPause('Pause')
        } else {
            videoRef.current!.pause();
            changeTitlePlayPause('Play')
        }
    };

    const onFullScreen = () => {
        if (videoRef.current!.requestFullscreen) {
            videoRef.current!.requestFullscreen();
        }
    };

    const changeTime = (value: number) => {
        videoRef.current!.currentTime = videoRef.current!.duration * (value / 100)
    };

    const updateTime = () => {
        let currentTime = videoRef.current!.currentTime * (100 / videoRef.current!.duration);
        changeCurrentTime(currentTime);
        let curmins = Math.floor(videoRef.current!.currentTime / 60);
        let cursecs = Math.floor(videoRef.current!.currentTime - curmins * 60);
        let durmins = Math.floor(videoRef.current!.duration / 60);
        let dursecs = Math.floor(videoRef.current!.duration - durmins * 60);
        if (cursecs < 10) {
            let cursecsNew = `0${cursecs}`;
            changeCurSecTime(`${cursecsNew}`)
        } else changeCurSecTime(`${cursecs}`);

        if (curmins < 10) {
            let curminsNew = `0${curmins}`;
            changeCurMinTime(`${curminsNew}`)
        } else changeCurMinTime(`${curmins}`);


        if (dursecs < 10) {
            let dursecsNew = `0${dursecs}`;
            changeDurSecTime(`${dursecsNew}`)
        } else changeDurSecTime(`${dursecs}`);


        if (durmins < 10) {
            let durminsNew = `0${durmins}`;
            changeDurMinTime(`${durminsNew}`)
        } else changeDurMinTime(`${durmins}`);

    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <input type="file"/>
            <video ref={videoRef} width='500px' height='300px' onTimeUpdate={updateTime}>
                <source src={'http://mirrors.standaloneinstaller.com/video-sample/page18-movie-4.mp4'}/>
            </video>
            <div>
                <UniversalRange changeTime={changeTime} currentTime={currentTime}/>
                <div style={{display: "flex", backgroundColor: "black", padding: '5px', flexDirection: "row"}}>
                    <button onClick={onPlayPause}>{titlePlayPause}</button>
                    <div style={{}}>
                        <span style={{color: "white"}}>{curMinTime}:{curSecTime}</span>
                        <span style={{color: "white"}}>/</span>
                        <span style={{color: "white"}}>{durMinTime}:{durSecTime}</span>
                    </div>

                    <button onClick={onFullScreen}>Full Screen</button>
                    {/*<button>Stop</button>*/}
                </div>
            </div>
        </div>
    );
};

export default Video;
