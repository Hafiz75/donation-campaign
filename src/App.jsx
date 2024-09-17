import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
import Root from "./components/Root"
import Home from "./components/home/Home";
import CategoryDetails from "./components/category/categoryDetails/CategoryDetails";

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
                },
                {
                    path: '/category/:id',
                    element: <CategoryDetails />,
                    loader: async({params})=>{
                        const data = await fetch('/data.json').then(res=> res.json())

                        const clickedItem = data.find(item=> item.id == params.id)
                        return clickedItem
                    }
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