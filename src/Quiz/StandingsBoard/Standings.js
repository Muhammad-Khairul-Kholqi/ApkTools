import React from "react";
import JuaraSatu from "../../Assets/one.png";
import JuaraDua from "../../Assets/two.png";
import JuaraTiga from "../../Assets/three.png";
import Aos from "aos";

const Standings = () => {
    Aos.init()
    return (
        <div>
            <div className="mt-[100px] px-[30px]">
                <div className="text-center">
                    <p className="text-[30px] font-bold">Standings Board</p>
                </div>

                <div className="flex flex-wrap justify-center gap-[20px] mt-[50px]">
                    <div className="bg-white shadow-lg rounded-[5px] p-[20px]"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <div className="flex justify-center">
                            <img src={JuaraDua} className="w-[80px]" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-500 mt-[10px]">2nd</p>
                            <div className="flex justify-center">
                                <hr className="h-1 bg-gray-500 w-[10px] rounded-[5px] mt-[2px]" />
                            </div>
                            <p className="w-[200px] text-[13px] mt-[20px]">Congratulations <span className="text-yellow-500 font-bold">Khairul Kholqi</span> for getting <span className="text-yellow-500 font-bold">2nd</span> place after completing the quiz.</p>
                        </div>
                        <div className="text-center mt-[20px]">
                            <button className="bg-yellow-500 hover:bg-yellow-600 py-[5px] px-[15px] text-white rounded-[3px]">Share</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-[5px] p-[20px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="flex justify-center">
                            <img src={JuaraSatu} className="w-[80px]" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-500 mt-[10px]">1nd</p>
                            <div className="flex justify-center">
                                <hr className="h-1 bg-gray-500 w-[10px] rounded-[5px] mt-[2px]" />
                            </div>
                            <p className="w-[200px] text-[13px] mt-[20px]">Congratulations <span className="text-red-500 font-bold">Khairul Kholqi</span> for getting <span className="text-red-500 font-bold">1nd</span> place after completing the quiz.</p>
                        </div>
                        <div className="text-center mt-[20px]">
                            <button className="bg-red-500 hover:bg-red-600 py-[5px] px-[15px] text-white rounded-[3px]">Share</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-[5px] p-[20px]"
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                    >
                        <div className="flex justify-center">
                            <img src={JuaraTiga} className="w-[80px]" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-500 mt-[10px]">3nd</p>
                            <div className="flex justify-center">
                                <hr className="h-1 bg-gray-500 w-[10px] rounded-[5px] mt-[2px]" />
                            </div>
                            <p className="w-[200px] text-[13px] mt-[20px]">Congratulations <span className="text-blue-500 font-bold">Khairul Kholqi</span> for getting <span className="text-blue-500 font-bold">3nd</span> place after completing the quiz.</p>
                        </div>
                        <div className="text-center mt-[20px]">
                            <button className="bg-blue-500 hover:bg-blue-600 py-[5px] px-[15px] text-white rounded-[3px]">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Standings;