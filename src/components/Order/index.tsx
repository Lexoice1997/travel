"use client";

import React from "react";
import CustomDatePicker from "../Datepicker";
import SelectField from "../Select";

const PEOPLES = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5 Design", label: "5" },
  { value: "5>", label: "5>" },
];

const LOCATIONS = [
  { value: "1", label: "Nukus" },
  { value: "2", label: "Tashkent" },
  { value: "3", label: "New York" },
  { value: "4", label: "Berlin" },
  { value: "5 Design", label: "Chicago" },
];

function Order() {
  return (
    <section className="sm:mt-24 mt-16">
      <div className="bg-white p-8 rounded-xl">
        <div className="flex justify-between sm:flex-row flex-col items-start ">
          <div className="sm:w-1/2 w-full sm:mr-10 mr-0">
            <div className="w-full mb-4 sm:mr-10 mr-0">
              <input
                type="text"
                className="border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0"
                placeholder="+998972411997"
              />
              <p className="text-gray-500 text-lg mt-2">
                What is your phone number?
              </p>
            </div>
            <div className="w-full mb-4">
              <SelectField placeHolder="Location" options={LOCATIONS} />
              <p className="text-gray-500 text-lg mt-2">
                Where do you wanna go?
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <div className="w-full mb-4">
              <input
                type="text"
                className="border-gray-400 border rounded-md w-full p-[14px] outline-none sm:mr-10 mr-0"
                placeholder="5"
              />
              <p className="text-gray-500 text-lg mt-2">How many people?</p>
            </div>
            <div className="w-full mt-2">
              <CustomDatePicker />
              <p className="text-gray-500 text-lg">
                Where do you want to go there?
              </p>
            </div>
          </div>
        </div>

        <button className="block mx-auto mt-8 text-semibold sm:text-3xl text-2xl text-white bg-blue-500 sm:px-40 px-16 py-4 rounded-xl hover:bg-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
          Explore
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl sm:text-3xl">
          Popular Searches:{" "}
          <span className="text-gray-500">
            Hiking, Starbucks, Fishing, Hotels
          </span>
        </h3>
      </div>
    </section>
  );
}

export default Order;
