import './nav.css';
import { useState, useRef } from 'react';

function NavigationBar(){
    const[volumeState,setVolumeState]=useState("volume_off")
    const audioRef = useRef(null);

    function handleVolumeChange(){
        if(volumeState==="volume_up"){
            setVolumeState("volume_off")
            audioRef.current.pause();
        }
        else if(volumeState==="volume_off"){
            setVolumeState("volume_up")
            audioRef.current.play();
        }
    }
    return(
    <div id="navigationbar">
        <audio ref={audioRef}>
            <source src="./willow.mp3" type="audio/mp3" />
            <p>Your browser does not support the audio element.</p>
        </audio>
        <li id="navlist">
            <h1 id="navlogo">doris morales</h1>
            <a className="navitems">designs</a>
            <a className="navitems">projects</a>
            <a className="navitems">about</a>
            <span class="material-symbols-outlined" id="volumeicon" onClick={handleVolumeChange}>{volumeState}</span>
        </li>
    </div>
)}

export default NavigationBar;