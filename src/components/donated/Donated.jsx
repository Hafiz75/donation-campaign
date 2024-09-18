import { Link, useLoaderData } from "react-router-dom";
import Category from "../category/Category";
import { useState } from "react";

const Donated = () => {
    const [seeFull, setSeeFull] = useState(false)
    /* this fetch data comes from App.jsx */
  const donated = useLoaderData();
  /* here donated sliced or not by condition */
  let filterDonated = donated.length > 4 ? donated.slice(0,4) : donated
  /* Here, I set a condition that checks whether the donated array has any items. If it contains one or more items, it returns true and renders the first expression. If it doesn't have any items, it returns false and renders the second expression, which displays a message. */
  return donated.length > 0 ? (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-3 md:pt-12 px-3 md:px-16 lg:px-28 mb-5 md:mb-10">
        {/* Initially, seeFull is set to false, so the displayed data comes from the filterDonated array (which holds 1 to 4 items). When we click the 'See All' button, seeFull is set to true, and the complete donated array is mapped, allowing us to see 4 additional items. */}
        {(seeFull?donated:filterDonated).map((card, idx) => (
          <Category card={card} donationPage={true} key={idx} />
        ))}
      </div>
      <div className="flex justify-center mb-5 md:mb-24 lg:mb-28">
        {/* conditionally render this button. initially seeFull value is false, but this condition (!seeFull) false turn into true. when we click the 'See All' button, seeFull turn into true but this condition (!seeFull) return false. as a result button will not appear after clicked the button */}
        {donated.length > 4 && !seeFull ? (
          <button onClick={()=> setSeeFull(true)} className="bg-[#009444] text-white font-semibold px-3 md:px-6 py-[6px] md:py-3 rounded-lg">
            See All
          </button>) : ''
        }
      </div>
    </>
    
  ) : (
    /* show this message when donated is empty */
    <div className="flex flex-col justify-center items-center gap-5 min-h-[70vh]">
    <h3 className="text-2xl md:text-5xl font-bold">You not donated yet.</h3>
    <Link to = '/'>
    <button className="bg-[#009444] text-white font-semibold px-3 md:px-6 py-[6px] md:py-3 rounded-lg">
            Back To Home
          </button>
    </Link>
    </div>
  );
};

export default Donated;
