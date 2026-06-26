type MonitorMockupProps = {
    src: string;
    alt: string;
};

function MonitorMockup({ src, alt }: MonitorMockupProps) {
    return (
        <div className="monitor">
            <div className="monitor-screen">
                <div className="monitor-camera"></div>
                <img src={src} alt={alt} />
            </div>
            <div className="monitor-stand-neck"></div>
            <div className="monitor-stand-base"></div>
        </div>
    );
}

export default MonitorMockup;
