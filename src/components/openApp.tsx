import React from 'react';

export const openApp = () => {
    const openApp = () => {
        window.location.href = 'fonotherapp:';
    };

    return (
        <button className='rounded-lg p-5 bg-cyan-500 w-52' onClick={openApp}>Abrir App</button>
    )
};

export default openApp;
