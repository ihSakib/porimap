import React, { useState } from "react";
import useConversion from "../hooks/useConversion";
import xCursor from "../cancel.png";

export default function Main() {
  const { inputValues, types, handleInputChange, handleSelectChange } =
    useConversion();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setModalOpen(false);
    }
  };

  return (
    <main className="bg-transparent grow w-full flex flex-col justify-center">
      <section className=" flex flex-col  md:w-2/3 lg:w-2/5 mx-auto justify-center  gap-5  py-8 md:py-10 px-10 md:px-0 -mt-10">
        {/* Input Section */}
        <div className="flex-grow-2 bg-white/30 backdrop-blur-sm p-6 rounded-lg ">
          <div className="flex gap-4 items-center mb-6">
            <select
              name="from"
              id="from"
              className="border border-gray-100 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none "
              onChange={handleSelectChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="base">বর্গফুট</option>
              <option value="shotok">শতক</option>
              <option value="acre">একর</option>
              <option value="katha">কাঠা</option>
              <option value="bigha">বিঘা</option>
              <option value="kani">কানি</option>
              <option value="gonda">গন্ডা</option>
              <option value="kora">কড়া</option>
              <option value="kranti">ক্রান্তি</option>
              <option value="til">তিল</option>
            </select>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <select
              name="to"
              id="to"
              className="border border-gray-100 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none "
              onChange={handleSelectChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="base">বর্গফুট</option>
              <option value="shotok">শতক</option>
              <option value="acre">একর</option>
              <option value="katha">কাঠা</option>
              <option value="bigha">বিঘা</option>
              <option value="kani">কানি</option>
              <option value="gonda">গন্ডা</option>
              <option value="kora">কড়া</option>
              <option value="kranti">ক্রান্তি</option>
              <option value="til">তিল</option>
            </select>
          </div>

          <div className="flex   gap-4 items-center">
            <input
              type="number"
              name="fromValue"
              value={inputValues.fromValue}
              onChange={handleInputChange}
              placeholder="লিখুন..."
              className="border border-gray-100 bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500  appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <input
              type="number"
              name="toValue"
              value={inputValues.toValue}
              onChange={handleInputChange}
              placeholder="লিখুন..."
              className="border border-gray-100 bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
          </div>
        </div>

        {/* Modal open button */}
        <button
          onClick={() => setModalOpen(true)}
          className="  bg-white/30 backdrop-blur-sm  hover:bg-slate-200 transition-all duration-100 py-2 rounded-lg"
        >
          গুরুত্বপূর্ণ একক সমূহ
        </button>

        {/* Modal Section */}
        {isModalOpen && (
          <div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
            style={{ cursor: `url(${xCursor}), auto` }}
            onClick={handleClose}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-sm w-[80%]  md:w-1/2 lg:w-2/5 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <table className="w-full border-collapse border border-gray-300 text-center text-sm md:text-base">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      এককের নাম
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      পরিমাণ (বর্গফুট)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">শতক</td>
                    <td className="border border-gray-300 px-4 py-2">৪৩৫.৬</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">একর</td>
                    <td className="border border-gray-300 px-4 py-2">৪৩৫৬০</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">কাঠা</td>
                    <td className="border border-gray-300 px-4 py-2">৭১৮.৭৪</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">বিঘা</td>
                    <td className="border border-gray-300 px-4 py-2">
                      ১৪৩৭৪.৮
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">কানি</td>
                    <td className="border border-gray-300 px-4 py-2">১৭৪২৪</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">গন্ডা</td>
                    <td className="border border-gray-300 px-4 py-2">৮৭১.২</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">কড়া</td>
                    <td className="border border-gray-300 px-4 py-2">২১৭.৮</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      ক্রান্তি
                    </td>
                    <td className="border border-gray-300 px-4 py-2">৭২</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">তিল</td>
                    <td className="border border-gray-300 px-4 py-2">৩.৬</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
