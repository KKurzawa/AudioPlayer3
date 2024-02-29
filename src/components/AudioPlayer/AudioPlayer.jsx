import { useRef, useState } from 'react';
import { tracks } from '../../utils/utils';
import { MdOutlineQueueMusic } from "react-icons/md";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";
import Controls from '../Controls/Controls';
import DisplayTrack from "../DisplayTrack/DisplayTrack";
import ProgressBar from "../ProgressBar/ProgressBar";
import './AudioPlayer.css'
import List from '../List/List';

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [open, setOpen] = useState(false)
    const [musicNumber, setMusicNumber] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    return (
        <main className="audio-player">
            <article className="main-container">
                <section className='audio-player-header'>
                    <h3 id="left-header">Now Playing {trackIndex + 1}/{tracks.length}</h3>
                    {/* <i onClick={() => setOpen(prev => !prev)}><MdOutlineQueueMusic /></i> */}
                </section>
                <DisplayTrack
                    {...{
                        currentTrack,
                        audioRef,
                        setDuration,
                        progressBarRef,
                        handleNext
                    }} />
                <ProgressBar
                    {...{ progressBarRef, audioRef, timeProgress, duration }} />
                <Controls
                    {...{
                        audioRef,
                        progressBarRef,
                        duration,
                        setTimeProgress,
                        tracks,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack,
                        handleNext,
                        isPlaying,
                        setIsPlaying
                    }}
                />
                {/* <List props={{ open, setOpen, musicNumber, setMusicNumber, isPlaying, setIsPlaying, audioRef }} /> */}
            </article>
        </main>
    );
};
export default AudioPlayer;