import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Root from "./components/Root";
const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
        }
    ])
    return (
        <div>
            <RouterProvider router = {router}></RouterProvider>
        </div>
    );
};

export default App;