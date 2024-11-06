import { Outlet } from "react-router-dom";
import HeaderDefault from "./HeaderDefault";

const DefaultLayout = () => {
    return (
        <>

            <HeaderDefault />

            <Outlet></Outlet>
            <strong>Hello</strong>
        </>
    )
};

export default DefaultLayout;