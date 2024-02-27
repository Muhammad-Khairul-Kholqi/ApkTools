import React from "react";

import ButtonCategoryTools from "./ButtonCategoryTools";
import Logo from '../Assets/logo.png'

const CategoryTools = () => {
    return(
        <div>
            <div className = "mt-[60px] bg-[#F2F5F7] bg-cover bg-center py-[50px] px-[30px]" >
                <p className="text-center mb-[20px] text-[30px]">Category Tools</p>
                <ButtonCategoryTools />
            </div>

            <div className="text-center p-[30px]">
                <h1 className="text-[25px] font-medium.">Select the category of tool you will use</h1>
                <p className="text-[18px] mt-[10px]">Good Luck :)</p>
            </div>

             <div className="flex justify-center">
                <img className="w-[50px]" src={Logo} draggable="false" />
            </div>
        </div>
    )
}

export default CategoryTools;
