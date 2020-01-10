import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {PAGE_VIDEO_PATH, PAGE_IMAGE_PATH, PAGE_AUDIO_PATH} from "./Routes";


const Header: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <NavLink to={PAGE_IMAGE_PATH}>Image</NavLink>
            <NavLink to={PAGE_AUDIO_PATH}>Audio</NavLink>
            <NavLink to={PAGE_VIDEO_PATH}>Video</NavLink>
        </div>
    );
};

export default Header;
