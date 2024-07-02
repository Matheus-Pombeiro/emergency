import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return (
        <main className="default-page default-page-mobile xl:default-page-desktop">
            <Outlet />
        </main>
    );
};

export default DefaultPage;