import React from "react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-center p-4 mt-auto">
      <section className="land-links-section flex justify-center items-center flex-col pb-10 ">
        <h2 className="text-center text-lg md:text-xl font-bold mb-4">
          বাংলাদেশের ভূমি বিষয়ক গুরুত্বপূর্ণ লিংক
        </h2>
        <ul className="flex gap-x-4 gap-y-2 px-10 flex-wrap justify-center ">
          <li>
            <a
              href="https://www.land.gov.bd/"
              target="_blank"
              className="text-gray-900 hover:underline"
            >
              ভূমি মন্ত্রণালয়
            </a>
          </li>
          <li>
            <a
              href="https://mutation.land.gov.bd/"
              target="_blank"
              className="text-gray-900 text-gray hover:underline"
            >
              নামজারি (Mutation)
            </a>
          </li>
          <li>
            <a
              href="https://map.land.gov.bd/"
              target="_blank"
              className="text-gray-900 hover:underline"
            >
              ভূমি ম্যাপ (Land Map)
            </a>
          </li>
          <li>
            <a
              href="https://eporcha.gov.bd/"
              target="_blank"
              className="text-gray-900 hover:underline"
            >
              ই-পর্চা
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p className="text-gray-700 text-sm" style={{ wordSpacing: "0.1em" }}>
          &copy; ২০২৪ স্বত্তাধিকারী -{" "}
          <a
            href="https://ihsakib.pegasustravelers.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            ইফতেখার সাকিব
          </a>
        </p>
      </section>
    </footer>
  );
}
