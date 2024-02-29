import './ProgressBar.css';

const ProgressBar = ({
    progressBarRef,
    audioRef,
    timeProgress,
    duration
}) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };
    return (
        <main className='progress-container'>
            <div className="progress">
                <span className="current-time current">{formatTime(timeProgress)}</span>
                <input
                    type="range"
                    ref={progressBarRef}
                    defaultValue='0'
                    onChange={handleProgressChange} />
                <span className="time">{formatTime(duration)}</span>
            </div>
        </main>

    );
};

export default ProgressBar;