import React from "react";
import CardCategoryQuiz from "./CardCategoryQuiz";

const CategoryQuiz = () => {
    return (
        <div>
            <div className="mt-[100px]">
                <div className="text-center">
                    <p className="font-bold text-[25px]">Category Quizzz</p>
                    <p className="mt-[10px]">Choose the quiz below, master it and improve your skills.</p>
                </div>

                <div>
                    <CardCategoryQuiz />
                </div>
            </div>
        </div>
    )
}

export default CategoryQuiz;