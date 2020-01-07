import React, {useState} from 'react'
import {Range} from 'react-range';


const Video: React.FC = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <input type="file"/>
            <video width='300px' height='300px'>
                <source src={'http://techslides.com/demos/sample-videos/small.mp4'}/>
            </video>
            <SuperSimple/>
        </div>
    );
};

export default Video;

const SuperSimple: React.FC = () => {
    const [values, setState] = useState([50]);
    return (
        <Range
            step={0.1}
            min={0}
            max={50}
            values={values}
            onChange={values => setState(values)}
            renderTrack={({props, children}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '5px',
                        width: '300px',
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