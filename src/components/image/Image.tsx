import React, {useState} from 'react';
import InputSomeFile from "../common/InputSomeFile";

interface IPropsImage {

}

const Image: React.FC<IPropsImage> = () => {
//state
    const [imageURL, changeImageURL] = useState('');
    const [imageData, changeImageData] = useState('');


    const saveData = (fileURL: string, fileData: string) => {
        changeImageURL(fileURL);
        changeImageData(fileData)
    };

    return (
        <>
            <InputSomeFile callbackFileData={saveData}/>
            <div>
                <img style={{width: '200px', height: '200px'}} src={imageURL} alt={'some file'}/>
            </div>

        </>
    );
};

export default Image;
