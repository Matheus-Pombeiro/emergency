const Footer = () => {
    const date = new Date;
    const year = date.getFullYear();

    return (
        <footer className="footer footer-mobile xl:footer-desktop">
            <p className="footer-p"><a className="footer-a" href="https://www.linkedin.com/in/matheus-pombeiro/" target="_blank" rel="noopener noreferrer">Matheus Pombeiro</a> | {year}</p>
        </footer>
    );
};

export default Footer;