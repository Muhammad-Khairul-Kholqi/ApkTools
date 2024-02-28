import React from "react";

const About = () => {
    return(
        <div>
            <div className="mt-[100px] px-[30px]">
                <div className="text-center">
                    <h1 className="text-[30px] font-bold text-gray-700">About</h1>
                </div>

                <div className="flex justify-center">
                    <p className="text-start w-[700px] text-[20px] mt-[20px]">
                        What is GC Tools?
                    </p>
                </div>

                <div className = "flex justify-center" >
                    <p className = "text-start w-[700px] text-[17px] mt-[20px]" >
                        GC Tools is a Website that provides Free Tools that can make it easier
                        for a Frontend Person to build a Website, <span className="font-semibold italic">in Indonesian GC means Fast Movement </span> 
                        the Intention is to make the Website more Developer Friendly and Efficient.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;