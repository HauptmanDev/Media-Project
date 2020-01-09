import React from 'react';
import InputSomeFile from "../common/InputSomeFile";

interface IPropsAudio {

}

const Audio: React.FC<IPropsAudio> = () => {
//state

    return (
        <>
            <InputSomeFile callbackFileData={(fileURL, fileData) => console.log(fileURL, fileData)}/>
            {/*<img> </img>*/}
        </>
    );
};

export default Audio;
