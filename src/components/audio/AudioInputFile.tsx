import React, {ChangeEvent, useRef, useState} from 'react';

const AudioInputFile: React.FC = () => {

    const [picture, savePicture] = useState();
    const [pictureURL, savePictureURL] = useState();
    const [pictureData, savePictureData] = useState();


    const inputFile = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputFile.current!.click();
    };


    const onSavePicture = (e: ChangeEvent<HTMLInputElement>) => {
        // const reader = new FileReader();
        const formData = new FormData();

        const newPicture = e.target.files && e.target.files[0];
        savePicture(newPicture);
        savePictureURL(window.URL.createObjectURL(newPicture));
        newPicture && formData.append('image', newPicture, newPicture.name);
        savePictureData(formData.get('image'))
    };

    return (
        <>
        <span>
            <input type='file' ref={inputFile} style={{display: 'none'}} onChange={(e) => {
                console.log('asd');
                onSavePicture(e)
            }}/>
            <button onClick={() => onButtonClick()}>add</button>
        </span>
            <div>
                <img style={{width: '200px', height: '200px'}} src={pictureURL} alt={'some picture'}/>
            </div>
        </>
    );
};

export default AudioInputFile;
