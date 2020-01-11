import React, {useRef, useState} from 'react';
import InputSomeFile from "../common/InputSomeFile";


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
                <div>
                    <button onClick={onPlayPause}>{titlePlayPause}</button>
                </div>
            </div>
        </>
    );
};

export default Audio;
