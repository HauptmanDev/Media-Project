import React, {ChangeEvent, useEffect, useRef, useState} from 'react';

interface IPropsSomeFile {
    callbackFileData: (fileURL: string, fileData: File) => void
}

const InputSomeFile: React.FC<IPropsSomeFile> = ({callbackFileData}) => {
//state
    const [fileURL, saveFileURL] = useState();
    const [fileData, saveFileData] = useState();

    // console.log(fileURL, fileBlobURL, fileData);

    useEffect(() => {
        callbackFileData(fileURL, fileData)
    }, [fileURL, fileData]);

    //ref
    const inputFile = useRef<HTMLInputElement>(null);

//methods
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputFile.current!.click();
    };

    const onSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const formData = new FormData();
        const newFile = e.target.files && e.target.files[0];
        reader.onloadend = () => {
            // saveFile(newFile);
            saveFileURL(window.URL.createObjectURL(newFile)); // blob-url
            newFile && formData.append('file', newFile, newFile.name);
            saveFileData(formData.get('file'));
        };
        newFile && saveFileURL(reader.readAsDataURL(newFile));
    };

    return (
        <>
        <span>
            <input type='file' ref={inputFile} style={{display: 'none'}} onChange={(e) => {
                onSaveFile(e)
            }}/>
            <button onClick={() => onButtonClick()}>add</button>
        </span>
        </>
    );
};

export default InputSomeFile;
