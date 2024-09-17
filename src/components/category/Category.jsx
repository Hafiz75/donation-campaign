

const Category = ({card}) => {
    const {id, category, title, img, description, color: colorObj} = card

    return (
        <div style={{backgroundColor:colorObj.backgroundColor}} className="rounded-md">
            <img src={img} alt="" />
            {/* card category and title container */}
            <div>
                {/* category */}
                {/* here I use inline style may be tailwind doesn't support dynamic class value. I faced problem before */}
                <p style={{color: colorObj.textColor, backgroundColor: colorObj.categoryBackgroundColor}} className="rounded-[4px] mt-3 ml-3 inline-block px-2 py-[2px] font-medium">{category}</p>
                {/* title */}
                <h4 style={{color: colorObj.textColor}} className="text-lg font-semibold ml-3 mb-4">{title}</h4>
            </div>
        </div>
    );
};

export default Category;