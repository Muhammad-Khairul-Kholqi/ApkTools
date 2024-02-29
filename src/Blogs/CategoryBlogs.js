import React from "react";

import AllExplanation from "./Explanation/AllExplanation";

const CategoryBlogs = () => {
    return(
        <div>
            <div className="mt-[100px] mx-[30px]">
                <div>
                    <div className = "flex justify-center" >
                        <h1 className = "text-start w-[750px] text-[30px] mb-[20px]" >
                            Explanation 
                        </h1> 
                    </div>
                    <AllExplanation /> 
                </div>

                <div className="mt-[20px]">
                    <div className = "flex justify-center" >
                        <h1 className = "text-start w-[750px] text-[30px] mb-[20px]" >
                            Learning Resources
                        </h1> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBlogs;