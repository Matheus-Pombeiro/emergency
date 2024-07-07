import Title from "../../components/Title";

const NotFound = () => {
    return (
        <>
            <Title 
                title="Page Not Found"
                subtitle="Sorry, but we couldn't find this page"
            />

            <figure className="not-found-container">
                <img src="/assets/number-page-not-found.png"/>
            </figure>
        </>
    );
};

export default NotFound;