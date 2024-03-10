import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import cardsData from './cardsData';
import { GoClock } from "react-icons/go";
import { GoPencil } from "react-icons/go";

const CardForms = () => {
    AOS.init();

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-[30px] py-[50px] px-[30px]">
                {cardsData.map((card, index) => (
                    <Link key={index} to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={card.imgSrc} alt={`Card ${index}`} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED]">{card.title}</h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">{card.date}</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">{card.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CardForms;
