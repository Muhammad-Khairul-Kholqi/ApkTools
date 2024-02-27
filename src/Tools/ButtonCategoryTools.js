import React from "react";
import { Link } from "react-router-dom";

const ButtonCategoryTools = () => {
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-[15px]">
                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Button 
                        </p>
                    </div>
                </Link>

                <Link to="/category-forms">
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Form 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Navbar 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Card 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Dark Mode 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Form Login 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Input 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            Loaders 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            DOM Js 
                        </p>
                    </div>
                </Link>

                <Link>
                    <div className = "py-[7px] px-[12px] border-solid border-[1px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                        <p>
                            UI/UX
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ButtonCategoryTools;