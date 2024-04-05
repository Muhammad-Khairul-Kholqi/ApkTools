import React from "react";
import CardCategoryQuiz from "./CardCategoryQuiz";
import "../Style/CategoryQuiz.css";
import { PiMedal } from "react-icons/pi";
import { Link } from "react-router-dom";

const CategoryQuiz = () => {
    return (
        <div>
            <div className="mt-[100px]">
                <div className="text-center px-[20px]">
                    <p className="font-bold text-[25px]">
                        Category <span className="quiz-line">Quizzz</span>
                    </p>

                    <p className="mt-[10px]">Choose the quiz below, master it, improve your skills and become the top of the standings.</p>
                    
                    <div className="flex justify-center">
                        <Link to="/quizz-standings-board">
                            <button className="flex flex-col items-center mt-[30px] border border-1 px-[10px] py-[5px] border-gray-600 text-gray-600 hover:border-[#1C57D5] hover:text-[#1C57D5]">
                                <PiMedal />
                                <p>Standings Board</p>
                            </button>
                        </Link>
                    </div>
                </div>


                <div>
                    <CardCategoryQuiz />
                </div>
            </div>
        </div>
    )
}

export default CategoryQuiz;
