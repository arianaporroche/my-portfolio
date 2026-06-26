type PhoneMockupProps = {
    src: string;
    alt: string;
};

function PhoneMockup({ src, alt }: PhoneMockupProps) {
    return (
        <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-inner">
                <img src={src} className="phone-screen" alt={alt} />
            </div>
        </div>
    );
}

export default PhoneMockup;
