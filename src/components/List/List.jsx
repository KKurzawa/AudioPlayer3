import './List.css'
import { tracks } from '../../utils/utils'
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import { timer } from '../../utils/timer';

export const List = ({ props: { open, setOpen, musicNumber, setMusicNumber, isPlaying, setIsPlaying, audioRef } }) => {

    const [play, setPlay] = useState(false);
    function handleClick() {
        setMusicNumber();
        musicNumber;
        isPlaying;
        setIsPlaying();
        audioRef;
    }

    function handlePlayingAudio() {
        if (play) {
            audioRef.current.pause();
            setPlay(false)
        } else {
            audioRef.current.play();
            setPlay(true)
        }
        console.log('handlePlayingAudio')
    }

    return (
        <div className={`list ${open ? 'show' : ''}`}>
            <div className="header">
                <div>
                    <i className="react-icons">
                        <MdOutlineQueueMusic />
                    </i>
                    <span className='music-list'>Music List</span>
                </div>
                <i className='react-icons' onClick={() => setOpen(false)}>
                    <IoMdClose />
                </i>
            </div>
            <ul>
                {tracks.map((music, index) => (
                    <li key={music.id} onClick={() => {
                        handlePlayingAudio();
                    }} className={`${musicNumber === index ? 'playing' : 'not-playing'}`}>
                        <div className="row">
                            <span>{music.title}</span>
                            <p>{music.artist}</p>
                        </div>
                        <Duration music={music} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default List

const Duration = ({ music }) => {
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        const audio = new Audio(music.src)
        audio.onloadedmetadata = function () {
            if (audio.readyState > 0) {
                setDuration(audio.duration)
            }
        }
        console.log(music)
    }, [music])
    return (
        <span className='duration'>{timer(duration)}</span>
    )
}