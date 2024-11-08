import DefaultLayout from '../layout/DefaultLayout';
import Home from '../page/Home';
import LearningPaths from '../page/LearningPaths';

export const routers = [{
    path: "/",
    element: <DefaultLayout></DefaultLayout>,
    children: [{
        path: "",
        element: <Home />
    },
    {
        path: "/learning-paths",
        element: <LearningPaths />
    }]
},]