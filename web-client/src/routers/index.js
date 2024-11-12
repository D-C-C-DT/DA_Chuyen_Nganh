import AboutUS from '../components/AboutUS';
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../page/Home';
import LearningPaths from '../page/LearningPaths';
import Privacy from '../page/Privacy/Index';
import Terms from '../page/Terms';

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
    },
    {
        path: "/privacy",
        element: <Privacy />
    },
    {
        path: "/terms",
        element: <Terms />
    },
    {
        path: "/about-us",
        element: <AboutUS />
    }]
},]