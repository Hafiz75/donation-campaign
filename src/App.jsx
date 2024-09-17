import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
import Root from "./components/Root"
import Home from "./components/home/Home";

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children:[
                {
                    path:'/',
                    element: <Home />,
                    loader: ()=> fetch('/data.json')
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router = {router}></RouterProvider>
        </div>
    );
};

export default App;