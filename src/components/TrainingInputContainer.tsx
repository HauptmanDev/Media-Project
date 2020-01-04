import React from 'react';
// import './App.css';
import InputSomeFile from "./audio/InputSomeFile";

const TrainingInputContainer: React.FC = () => {
    return (
        <div>
            <InputSomeFile callbackFileData={(fileData, fileURL)=>{
                // save data fileData, fileURL
            }}/>
        </div>
    );
};

export default TrainingInputContainer;
