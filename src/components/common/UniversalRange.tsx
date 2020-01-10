import React, {useState} from 'react'
import {Range} from 'react-range';

interface IProps {
    changeTime: (value: number) => void,
    currentTime: number;
}

const UniversalRange: React.FC<IProps> = ({changeTime, currentTime}) => {
    const [values, setState] = useState([0]);
    const onChangeRange = (values: Array<number>) => {
        changeTime(values[0]);
        setState(values)
    };

    return (
        <Range
            step={1}
            min={0}
            max={100}
            values={[currentTime]}
            onChange={values => onChangeRange(values)}
            renderTrack={({props, children}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '5px',
                        width: '500px',
                        backgroundColor: '#ccc'
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({props}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '10px',
                        width: '5px',
                        backgroundColor: '#999'
                    }}
                />
            )}
        />
    );
};

export default UniversalRange;