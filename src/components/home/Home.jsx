import { useLoaderData } from 'react-router-dom';
import Banner from './Banner'
import Category from '../category/Category';
const Home = () => {
    const data = useLoaderData()
    return (
        <div>
           <Banner />
           {/* Extract card from here */}
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-3 md:pt-12 px-3 md:px-16 lg:px-28 mb-5 md:mb-24 lg:mb-36'>
           {
            data.map((card, idx)=> <Category card = {card} key = {idx}/>)
           }
           </div>
        </div>
    );
};

export default Home;