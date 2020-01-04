import React, {ChangeEvent, useRef, useState} from 'react';

interface IPropsSomeFile {
    callbackFileData: (fileData: string, fileURL: string) => void
}

const InputSomeFile: React.FC<IPropsSomeFile> = ({callbackFileData}) => {

    const [file, saveFile] = useState();
    const [fileURL, saveFileURL] = useState();
    const [fileData, saveFileData] = useState();


    const inputFile = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputFile.current!.click();
    };


    const onSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
        // const reader = new FileReader();
        const formData = new FormData();
        const newFile = e.target.files && e.target.files[0];
        saveFile(newFile);
        saveFileURL(window.URL.createObjectURL(newFile));
        newFile && formData.append('image', newFile, newFile.name);
        saveFileData(formData.get('image'));
        callbackFileData(fileURL, fileData)
    };

    return (
        <>
        <span>
            <input type='file' ref={inputFile} style={{display: 'none'}} onChange={(e) => {
                onSaveFile(e)
            }}/>
            <button onClick={() => onButtonClick()}>add</button>
        </span>
            {/*<div>*/}
            {/*    <img style={{width: '200px', height: '200px'}} src={fileURL} alt={'some file'}/>*/}
            {/*</div>*/}
        </>
    );
};

export default InputSomeFile;
