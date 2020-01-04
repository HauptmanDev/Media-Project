import React, {useRef} from 'react';

const AudioInputFile: React.FC = () => {
    const inputFile = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputFile.current!.click();
    };

    return (
        <span>
            <input type='file' ref={inputFile} style={{display: 'none'}}/>
            <button onClick={() => onButtonClick()}>add</button>
        </span>
    );
};

export default AudioInputFile;
