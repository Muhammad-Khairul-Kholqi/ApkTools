import {React, useState} from "react";
// import { Link } from "react-router-dom";

import Logo from '../Assets/logo.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
    const [DropDownTools, setDropDownTools] = useState(false);

    const toggleDropdownTools = () => {
        setDropDownTools(!DropDownTools);
    };

    const [dropDownLanguage, setDropDownLanguage] = useState(false);

    const toggleDropdownLanguage = () => {
        setDropDownLanguage(!dropDownLanguage);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center py-[15px] px-[5%]">
                <div>
                    {/* <Link to="/"> */}
                        <div className="flex gap-[5px] items-center cursor-pointer">
                            <img className="w-[40px]" src={Logo} alt="Logo" />
                            <p className="text-[#3C66D4] text-[15px] leading-[17px] font-semibold">GC <br /> Tools</p>
                        </div>
                    {/* </Link> */}
                </div>

                <div className="flex gap-[20px] items-center">
                    {/* <Link> */}
                        <div>
                            <p>Home</p>
                        </div>
                    {/* </Link> */}

                    {/* <Link> */}
                        <div>
                            <p>All</p>
                        </div>
                    {/* </Link> */}

                    <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdownTools}>
                        <p className="admin">Tools</p>
                        <IoMdArrowDropdown className={`transition-transform transform ${DropDownTools ? 'rotate-180' : ''}`}/>
                    </div>

                    {DropDownTools && (
                        <div className="absolute top-full right-0 mr-[170px] mt-[-15px] bg-white shadow-md rounded-md p-5 text-[15px] z-10">
                            <ul>
                                <li>
                                    {/* <Link to="/account-admin"> */}
                                        <div className = "" >
                                            <p>Form</p>
                                        </div>
                                    {/* </Link> */}
                                </li>
                                <li>
                                    {/* <Link to = "/signin" > */}
                                        <div className = "mt-[5px]" >
                                            <p>Button</p>
                                        </div>
                                    {/* </Link> */}
                                </li>

                                <li>
                                    {/* <Link to = "/signin" > */}
                                        <div className = "mt-[5px]" >
                                            <p>Navbar</p>
                                        </div>
                                    {/* </Link> */}
                                </li>

                                <li>
                                    {/* <Link to = "/signin" > */}
                                        <div className = "mt-[5px]" >
                                            <p>Card</p>
                                        </div>
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    )}

                    <div div className = "flex gap-[5px] items-center cursor-pointer"
                    onClick = {toggleDropdownLanguage} >
                        <p className="admin">Framework</p>
                        <IoMdArrowDropdown className={`transition-transform transform ${dropDownLanguage ? 'rotate-180' : ''}`}/>
                    </div>

                    {dropDownLanguage && (
                        <div className="absolute top-full right-0 mr-[70px] mt-[-15px] bg-white shadow-md rounded-md p-5 text-[15px] z-10">
                            <ul>
                                <li>
                                    {/* <Link to="/account-admin"> */}
                                        <div className = "" >
                                            <p>Laravel</p>
                                        </div>
                                    {/* </Link> */}
                                </li>
                                <li>
                                    {/* <Link to = "/signin" > */}
                                        <div className = "mt-[5px]" >
                                            <p>React Js</p>
                                        </div>
                                    {/* </Link> */}
                                </li>

                                <li>
                                    {/* <Link to = "/signin" > */}
                                        <div className = "mt-[5px]" >
                                            <p>Vue Js</p>
                                        </div>
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
