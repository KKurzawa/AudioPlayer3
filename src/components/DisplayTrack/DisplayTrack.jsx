import { BsMusicNoteBeamed } from 'react-icons/bs';
import "./DisplayTrack.css"

const DisplayTrack = ({
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    handleNext
}) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <main className='audio-image'>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleNext}
            />
            <div className="flex flex-col audio-info">
                <div className="audio-image ">
                    <img className='album-cover' src={currentTrack.thumbnail} alt="audio avatar" />
                </div>
                <div className="text">
                    <p className="title">{currentTrack.title}</p>
                    <p>{currentTrack.artist}</p>
                </div>
            </div>
        </main>
    );
};
export default DisplayTrack;