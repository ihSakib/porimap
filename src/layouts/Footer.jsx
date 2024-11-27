import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-auto">
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
    </footer>
  );
}
