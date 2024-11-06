import DefaultLayout from '../layout/DefaultLayout';
import Home from '../page/Home';

export const routers = [{
    path: "/",
    element: <DefaultLayout></DefaultLayout>,
    children: [{
        path: "",
        element: <Home />
    }, {}]
},]