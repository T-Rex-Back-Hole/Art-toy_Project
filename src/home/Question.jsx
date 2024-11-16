import React, { useState } from "react";


function Question() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      question: "What is our Art Toy store all about?",
      answer:
        "Our Art Toy store is all about providing unique, artist-designed collectible toys...",
    },
    {
      question: "Where do Art Toys originate from?",
      answer:
        "Art Toys originated from the urban and street art scene, gaining popularity...",
    },
    {
      question: "What makes Art Toys different from regular toys?",
      answer:
        "Art Toys are different from regular toys because they focus on artistic expression...",
    },
    {
      question: "What types of Art Toys do we offer?",
      answer:
        "We offer various types of Art Toys, including vinyl figures, resin models...",
    },
  ];

  const toggleAnswer = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <>
      <section id="q-and-a" className="bg-[#B47AEA] p-6 lg:p-12">
        <h1 className="text-center text-white text-4xl font-bold mb-6 lg:text-5xl lg:mb-12">
          Art toy: Q&A
        </h1>

        <div className="max-w-xl mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="mb-2">
              <div
                className="bg-white p-4 rounded-lg flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-gray-800 font-medium text-sm lg:text-base">
                  {question.question}
                </span>
                <span className="text-purple-500 text-xl font-bold">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openQuestion === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } bg-gray-100 rounded-lg mt-2`}
              >
                <div className="p-4 text-gray-700 text-sm lg:text-base">
                  {question.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Question;
