import React from 'react';
import { Outlet } from 'react-router-dom';

const StartScreen = () =>{
    return(
        <>
            <main>
                <Outlet/>
            </main>
        
        </>
    )
}

export default StartScreen
