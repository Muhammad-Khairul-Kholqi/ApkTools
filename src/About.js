import React from "react";

const About = () => {
    return(
        <div>
            <div className="mt-[100px] mb-[50px] px-[30px]">
                <div className="text-center">
                    <h1 className="text-[30px] font-bold text-gray-700">About</h1>
                </div>

                <div className = "mt-[20px]" >
                    <div className="flex justify-center">
                        <p className="text-start w-[700px] text-[20px] font-bold">
                            What is GC Tools?
                        </p>
                    </div>

                    <div className = "flex justify-center" >
                        <p className = "text-start w-[700px] text-[17px] mt-[20px]" >
                            GC Tools is a Website that provides Free Tools that can make it easier
                            for a Frontend Person to build a Website,
                            <span className="font-semibold italic">in Indonesian GC means Gerak Cepat </span> 
                            the Intention is to make the Website more Developer Friendly and Efficient.
                        </p>
                    </div>
                </div>

                <div className = " mt-[40px]" >
                     <div className="flex justify-center">
                        <p className="text-start w-[700px] text-[20px] font-bold">
                            What is the Vision and Mission of GC Tools ?
                        </p>
                    </div>

                    <div className = "flex justify-center" >
                        <p className = "text-start w-[700px] text-[17px] mt-[20px]" >
                            <span className="font-bold italic">Visi:</span>
                            <br />
                            To become the primary resource that accelerates and simplifies Frontend development, 
                            supporting the developer community with innovative free tools, and contributing to the 
                            creation of superior web user experiences.
                        </p>
                    </div>

                    <div className = "flex justify-center" >
                        <p className = "text-start w-[700px] text-[17px] mt-[20px] font-bold italic" >
                            Misi:
                        </p>
                    </div>

                    <div className = "flex justify-center mb-[10px]" >
                        <p className = "text-start w-[700px] text-[17px]" >
                            Provide a high quality range of free tools to expedite the Frontend development process.
                        </p>
                    </div>

                    <div className = "flex justify-center mb-[10px]" >
                        <p className = "text-start w-[700px] text-[17px]" >
                            Create a collaborative platform for sharing knowledge and experiences among Frontend developers.
                        </p>
                    </div>

                    <div className = "flex justify-center" >     
                        <p className = "text-start w-[700px] text-[17px]" >
                            Support the growth and sustainability of GC Tools through ongoing development and maintenance efforts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;