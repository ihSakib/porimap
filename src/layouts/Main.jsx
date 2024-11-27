import React from "react";
import useConversion from "../hooks/useConversion";

export default function Main() {
  const { inputValues, types, handleInputChange, handleSelectChange } =
    useConversion();

  return (
    <main className="bg-gray-50">
      <section className=" flex flex-col justify-center  lg:flex-row gap-5 px-6 md:px-10 py-8 md:py-10 mx-auto">
        {/* Input Section */}
        <div className="flex-grow-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex gap-4 items-center mb-6">
            <select
              name="from"
              id="from"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none "
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
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none "
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
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500  appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <input
              type="number"
              name="toValue"
              value={inputValues.toValue}
              onChange={handleInputChange}
              placeholder="লিখুন..."
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="flex-grow-1 overflow-auto bg-white p-6 rounded-lg shadow-sm">
          <table className="w-full border-collapse border border-gray-300 text-center text-sm md:text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">এককের নাম</th>
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
                <td className="border border-gray-300 px-4 py-2">১৪৩৭৪.৮</td>
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
                <td className="border border-gray-300 px-4 py-2">ক্রান্তি</td>
                <td className="border border-gray-300 px-4 py-2">৭২</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">তিল</td>
                <td className="border border-gray-300 px-4 py-2">৩.৬</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="land-links-section flex justify-center items-center flex-col pb-10">
        <h2 class="text-center text-lg md:text-xl font-bold mb-4">
          বাংলাদেশের ভূমি বিষয়ক গুরুত্বপূর্ণ লিংক
        </h2>
        <ul class="flex gap-x-4 gap-y-2 px-10 flex-wrap justify-center ">
          <li>
            <a
              href="https://www.land.gov.bd/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              ভূমি মন্ত্রণালয়
            </a>
          </li>
          <li>
            <a
              href="https://mutation.land.gov.bd/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              নামজারি (Mutation)
            </a>
          </li>
          <li>
            <a
              href="https://map.land.gov.bd/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              ভূমি ম্যাপ (Land Map)
            </a>
          </li>
          <li>
            <a
              href="https://eporcha.gov.bd/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              ই-পর্চা
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
