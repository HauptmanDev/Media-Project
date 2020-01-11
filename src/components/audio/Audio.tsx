import React, {useRef, useState} from 'react';
import InputSomeFile from "../common/InputSomeFile";
import VolumeIcon from "../assets/VolumeIcon.png";


interface IPropsAudio {

}

const Audio: React.FC<IPropsAudio> = () => {
//state
    const [audioURL, setAudioURL] = useState('');
    const [audioFile, setAudioFile] = useState();

    const audioRef = useRef<HTMLVideoElement>(null);
    const [titlePlayPause, changeTitlePlayPause] = useState('Play');

    const saveData = (fileURL: string, fileData: File) => {
        console.log(fileURL, fileData);
        setAudioURL(fileURL);
        setAudioFile(fileData)
    }

    const onPlayPause = () => {
        if (audioRef.current!.paused) {
            audioRef.current!.play();
            changeTitlePlayPause('Pause')
        } else {
            audioRef.current!.pause();
            changeTitlePlayPause('Play')
        }
    };

    const setVolume = (volumeValue: number) => {
        audioRef.current!.volume = volumeValue
    };

    //https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3

    return (
        <>
            <InputSomeFile callbackFileData={(fileURL, fileData) => saveData(fileURL, fileData)}/>
            <div>
                <audio controls ref={audioRef}>
                    <source src='https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                            type="audio/mpeg"/>
                    {/*<source src={audioURL} type="audio/mpeg"/>*/}
                    <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                        <a href={audioURL}>ссылка на аудио</a></p>
                </audio>
                <div style={{margin: '10px'}}>
                    <button style={{margin: '10px'}} onClick={onPlayPause}>{titlePlayPause}</button>
                    <img style={{width: '50px', height: '50px'}} src={VolumeIcon} alt="VolumeIcon"/>
                    <input type="range" min={0} max={100} onChange={(e) => {
                        setVolume(+e.currentTarget.value / 100)
                    }
                    }/>
                </div>
            </div>
        </>
    );
};

export default Audio;
