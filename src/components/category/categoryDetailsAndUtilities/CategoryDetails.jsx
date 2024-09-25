import { useLoaderData } from "react-router-dom";
import { saveThisItem } from "../../utilities/utilities";

const CategoryDetails = () => {
  /* fetch data from App.jsx */
  const clickedItem = useLoaderData();
  const { id, img, price, title, description, color } = clickedItem;

  function handleItem() {
    /* 
When I call `saveThisItem` twice (once for saving the donation amount and once for saving the donation ID), the function checks the item in the localStorage for the existence which save is in the name of `donationId` each time. 

- When I save the donation ID, it check the `localStorage` to see if the ID already exists in the `donationId` array this id not save in the "donationId's" array. If the ID doesn't exist, it's saved in `localStorage`.
- When I save the donation amount, it also checks for the item's existence by id of `donationId`. If the ID is already saved in `donationId`, the amount will not be saved because the condition prevents it for save.

-so here I save amount first and then save the id
*/
    saveThisItem("donationAmount", id, price);
    saveThisItem("donationId", id);
  }
  return (
    <div className="mx-5 md:mx-16 lg:mx-28 mt-5 md:mt-10 lg:mt-16 mb-5 md:mb-12 lg:mb-24">
      {/* container of button and img */}
      <div className="relative">
        {/* we donate just clicking this 'Donate' button and here we set the button position by absolute */}
        <button
          onClick={handleItem}
          style={{ backgroundColor: color.textColor }}
          className="text-sm md:base text-white px-3 md:px-6 py-[6px] md:py-3 md:text-lg font-semibold rounded-[4px] absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8"
        >
          Donate ${price}
        </button>
        <img
          src={img}
          className="w-full max-h-[600px] mb-2 md:mb-5 lg:mb-10 rounded-lg"
          alt={title}
        />
      </div>
      {/* title */}
      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#0B0B0B] mb-[2px] md:mb-6">
        {title}
      </h3>
      {/* description */}
      <p className="text-sm md:text-base text-[rgba(11,11,11,0.70)] leading-7">
        {description}
      </p>
    </div>
  );
};

export default CategoryDetails;
