import {useEffect, useState} from 'react'
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
import Root from "./components/Root"
import Home from "./components/home/Home";
import CategoryDetails from "./components/category/categoryDetailsAndUtilities/CategoryDetails";
import ShowDonatedItems from './components/donated/ShowDonatedItems';
import { getItems } from "./components/category/categoryDetailsAndUtilities/utilities/utilities";
import Statistics from "./components/statistics/Statistics";

const App = () => {
    /* here I use state for tracking Donation amount clicking by a button in CategoryAndDetails component */
    const [yourDonation, setYourDonation] = useState(0)
    /* this variable has faked data and this data use in Statistics component for showing in pie chart */
    const totalDonation = 500
    /* here I declare a function. this function show us update data of 'Your Donation' in the pie chart which is in the Statistics component this function call into Statistics component. as a result when we click the 'Statistics' button in the nav call this function and show update data   */
       const updateDonationAmount =()=>{
        const donationAmount = getItems('donationAmount')
        setYourDonation(donationAmount)
        }
        /* setting yourDonation(this state use for update the data of pie chart which comes from Statistics component ) in initial point by calling above function bcz when we didn't click the 'Donate' button in the CategoryDetails and click the 'Statistics' button is in nav which comes from NavBar.jsx after click this button not show update data in the pie chart. So prevent this behavior I call this function in useEffect  */
         useEffect(() => {
    updateDonationAmount();
  }, []);

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
                    element: <ShowDonatedItems />,
                    loader: async()=>{
                        const data = await fetch('/data.json').then(res=> res.json())
                        /* I get id by calling getId function which defined in utilities.js. I borrowed id from localStorage */
                        const savedIds = getItems('donationId')
                        /* here data's item's id check with savedIds by find if match this */
                        const donated = data.filter(item=> savedIds.find(savedId=> savedId == item.id))
                        return donated
                    }
                },
                {
                    path: '/statistics',
                    element: <Statistics yourDonation={yourDonation} totalDonation={totalDonation} updateDonationAmount={updateDonationAmount} />
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