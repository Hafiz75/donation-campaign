import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
import Root from "./components/Root"
import Home from "./components/home/Home";
import CategoryDetails from "./components/category/categoryDetails/CategoryDetails";
import Donated from "./components/donated/Donated";
import { getId } from "./components/donated/utilities/utilities";

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
                },
                {
                    path: '/donation',
                    element: <Donated />,
                    loader: async()=>{
                        const data = await fetch('/data.json').then(res=> res.json())
                        /* I get id by calling getId function which defined in utilities.js. I borrowed id from localStorage */
                        const savedIds = getId()
                        /* here data's item's id check with savedIds by find if match this */
                        const donated = data.filter(item=> savedIds.find(savedId=> savedId == item.id))
                        return donated
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