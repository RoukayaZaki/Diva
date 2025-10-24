interface VideoPlayerProps {
    src: string;
}

function VideoPlayer({ src }: VideoPlayerProps) {
    return (
        <div className="video-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                width="100%"
                style={{ objectFit: 'cover' }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
