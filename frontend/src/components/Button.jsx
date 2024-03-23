import React from "react";

export default function Button({ label }) {
  return (
    <button
      type="button"
      className="rounded-md mt-4 text-white w-full bg-gray-900  px-2.5 py-1.5 text-base shadow-sm ring-1 ring-inset ring-gray-300 transition-colors duration-200 ease-in-out hover:bg-gray-800 delay-150"
      style={{ transitionDelay: "0.01s" }}
    >
      {label}
    </button>
  );
}
