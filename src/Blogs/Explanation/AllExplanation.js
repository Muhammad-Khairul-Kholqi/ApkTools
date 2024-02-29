import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import HtmlExplanation from './ExplanatioinCode/HtmlExplanation';
import CssExplanation from './ExplanatioinCode/CssExplanation';
import JsExplanation from './ExplanatioinCode/JsExplanation';

const AllExplanation = () => {
  const items = [
    { title: 'What is HTML?', content: <HtmlExplanation /> },
    { title: 'What is CSS?', content: <CssExplanation /> },
    { title: 'What is JavaScript?', content: <JsExplanation /> },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
        <div className="w-full max-w-[700px] mx-auto">
            {items.map((item, index) => (
            <div key={index} className="mb-4">
                <div
                className={`p-4 cursor-pointer flex justify-between items-center border-b ${
                    activeIndex === index ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleClick(index)}
                >
                <span className="">{item.title}</span>
                {activeIndex === index ? <BsChevronUp /> : <BsChevronDown />}
                </div>
                {activeIndex === index && (
                <div className="p-4 border-b">
                    <p>{item.content}</p>
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
  );
};

export default AllExplanation;
