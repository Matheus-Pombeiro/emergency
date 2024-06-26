import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return (
        <main className="default-page">
            <Outlet />
        </main>
    );
};

export default DefaultPage;