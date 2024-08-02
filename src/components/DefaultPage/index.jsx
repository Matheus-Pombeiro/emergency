import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DefaultPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/");
    }, []);

    return (
        <main className="default-page default-page-mobile xl:default-page-desktop">
            <Outlet />
        </main>
    );
};

export default DefaultPage;