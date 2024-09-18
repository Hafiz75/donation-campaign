import { Link } from "react-router-dom";

/* this card comes from App.jsx and Donated.jsx. initial of the website means '/' card comes from App.jsx but when I clicked donation in the Navbar , this time card  come from Donated.jsx */
/* donationPage is boolean value come from Donated.jsx. its value all time is true. its use for card styling when we are in the Donated component by clicking donation button in the navbar. This value set... css style apply or not, 'View Details' button show or not, price show or not */
const Category = ({card, donationPage}) => {
    const {id, category, title, img, description, price, color} = card
    const {backgroundColor, categoryBackgroundColor, textColor} = color

    return (
    <Link to = {`/category/${id}`}>
            <div style={{backgroundColor: backgroundColor}} className={`rounded-md ${donationPage && 'md:flex items-center pb-4 md:pb-0'} `}>
            <img src={img} alt="" />
            {/* card category and title container */}
            <div>
                {/* category */}
                {/* here I use inline style may be tailwind Arbitrary values doesn't support dynamic value. I faced problem before */}
                <p style={{color: textColor, backgroundColor: categoryBackgroundColor}} className="rounded-[4px] mt-3 ml-3 inline-block px-2 py-[2px] font-medium">{category}</p>
                {/* title */}
                <h4 style={{color: donationPage?'#0B0B0B':textColor}} className={`${donationPage ? 'pb-0':'pb-4' } text-lg font-semibold ml-3`}>{title}</h4>
                {/* price */}
                {/* this price appear when we clicked donation button in Navbar */}
                <p style={{color: textColor}} className={`${donationPage ? 'flex' : 'hidden'} ml-3 font-semibold mb-4`}>${price}</p>
                {/* this button appear when we clicked donation button in Navbar */}
                <button style={{backgroundColor: textColor}} className={`${donationPage ? 'flex' : 'hidden'} text-white ml-3 px-4 py-2 rounded-md`}>View Details</button>
            </div>
        </div>
    </Link>
    );
};

export default Category;