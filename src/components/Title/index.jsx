const Title = ({ title, subtitle }) => {
    return (
        <>
            <h1 className="title h1">{title}</h1>
            <h2 className="title h2">{subtitle}</h2>
        </>
    );
};

export default Title;