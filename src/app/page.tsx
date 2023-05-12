import CustomDatePicker from "@/components/Datepicker";
import SelectField from "@/components/Select";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo_black_text.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PopularSwiper from "@/components/PopularSwiper";
import RecentlySwiper from "@/components/RecentlySwiper";

// import required modules

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

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="max-w-[1440px] m-auto px-4">
        <header className="py-10 flex justify-between items-center">
          <Image src={logo} width={150} height={150} alt="Logo" className="hover:cursor-pointer" />
          <nav>
            <ul className="flex justify-between items-center text-lg text-gray-600">
              <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Explore
              </li>
              <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Top Cities
              </li>
              <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Blog
              </li>
              <li className="hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Help
              </li>
            </ul>
          </nav>
        </header>
        <section className="flex justify-between items-center mt-20">
          <div className="mr-4">
            <h1 className="text-[80px] font-semibold leading-normal">
              You can give us a tour to Remember forever!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere dicta
              delectus modi nobis molestiae beatae soluta cupiditate qui accusamus tempora ratione
              fugiat, ullam reprehenderit aliquid corporis nisi quisquam. Quas, mollitia quisquam,
              quis nulla nam minus corporis impedit illum beatae ab voluptate perspiciatis
              exercitationem alias expedita dolorem? Quaerat, voluptatem? Animi?
            </p>
          </div>
          <div className="flex justify-between">
            <div className="mr-2">
              <div className="bg-gray-600 h-[250px] w-[250px] mb-2 rounded-xl"></div>
              <div className="bg-gray-600 h-[250px] w-[250px] rounded-xl"></div>
            </div>
            <div className="bg-gray-600 h-[510px] w-[350px] rounded-xl"></div>
          </div>
        </section>
        <section className="mt-24">
          <div className="flex justify-between items-start bg-white p-8 rounded-xl">
            <div className="w-1/4">
              <SelectField placeHolder="Location" options={LOCATIONS} />
              <p className="text-gray-500 text-lg mt-4">Where do you wanna go?</p>
            </div>
            <div className="w-1/4">
              <SelectField placeHolder="People" options={PEOPLES} />
              <p className="text-gray-500 text-lg mt-4">How many people?</p>
            </div>
            <div className="w-1/4">
              <CustomDatePicker />
              <p className="text-gray-500 text-lg mt-4">Where do you want to go there?</p>
            </div>
            <button className="text-semibold text-3xl text-white bg-blue-500 px-10 py-4 rounded-xl hover:bg-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Explore
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-3xl">
              Popular Searches:{" "}
              <span className="text-gray-500">Hiking, Starbucks, Fishing, Hotels</span>
            </h3>
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-5xl text-center font-semibold">Popular Destination</h2>
          <div className="flex justify-between mt-16 h-[570px]">
            <PopularSwiper />
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-5xl text-center font-semibold">About Us</h2>
          <p className="text-2xl text-center font-semibold mt-8 text-gray-500">
            We planned beautiful destination every weekend
          </p>
          <div className="flex justify-between mt-14">
            <div className="w-1/3 h-[500px] bg-gray-600 mr-6 rounded-xl"></div>
            <div className="w-1/3 h-[500px] bg-gray-600 mr-6 rounded-xl"></div>
            <div className="w-1/3 h-[500px] bg-gray-600 rounded-xl"></div>
          </div>
          <p className="text-gray-500 text-center w-1/3 m-auto mt-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero vel, ut
            voluptates in aperiam ducimus est omnis ipsa obcaecati fuga quaerat expedita reiciendis
            nisi magni nulla, consequatur rerum animi?
          </p>
          <div className="flex justify-between w-1/2 m-auto mt-10">
            <div>
              <h3 className="text-blue-400 text-4xl font-semibold text-center">4.5k+</h3>
              <p className="mt-2 text-md">Our Explores</p>
            </div>
            <div>
              <h3 className="text-blue-400 text-4xl font-semibold text-center">15k+</h3>
              <p className="mt-2 text-md">Destinations</p>
            </div>
            <div>
              <h3 className="text-blue-400 text-4xl font-semibold text-center">35k+</h3>
              <p className="mt-2 text-md">Year Experience</p>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-5xl text-center font-semibold">Recently Viewed Trips</h2>
          <p className="text-2xl text-center font-semibold mt-8 text-gray-500">
            Some recent trip photos are shared in front of you
          </p>
          <div className="mt-10 flex justify-between h-[640px]">
            <RecentlySwiper />
          </div>
        </section>
        <section className="flex justify-between mt-24 items-center">
          <div className="w-2/5 mr-24">
            <div className="flex justify-between mb-4">
              <div className="w-1/2 h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
              <div className="w-1/2 h-[250px] bg-gray-600 rounded-xl"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
              <div className="w-1/2 h-[250px] bg-gray-600 rounded-xl"></div>
            </div>
          </div>
          <div className="w-3/5">
            <h3 className="text-5xl font-semibold">We always try to give you are best service</h3>
            <p className="font-md text-gray-500 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum harum autem veritatis
              iste quisquam molestiae! Magnam dolore ipsam ut, adipisci magni aliquid eaque illum
              odit ab assumenda quis eligendi aliquam?
            </p>
            <div className="flex justify-between mt-10">
              <div>
                <h3 className="text-blue-400 text-4xl font-semibold text-center">4.5k+</h3>
                <p className="mt-2 text-md">Our Explores</p>
              </div>
              <div>
                <h3 className="text-blue-400 text-4xl font-semibold text-center">15k+</h3>
                <p className="mt-2 text-md">Destinations</p>
              </div>
              <div>
                <h3 className="text-blue-400 text-4xl font-semibold text-center">35k+</h3>
                <p className="mt-2 text-md">Year Experience</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-24 flex justify-between">
          <div className="w-1/2 mt-10">
            <h2 className="text-7xl font-semibold">Let is enjoy the world is beaty with 50% off</h2>
            <p className="mt-8 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio porro
              ut? Impedit, amet ad!
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[300px] font-bold">50%</h1>
          </div>
        </section>
        <footer className="flex justify-between mt-24 pb-10">
          <div>
            <Image src={logo} width={100} height={100} alt="Logo" />
            <p className="mt-6 text-gray-500">Continue Travellian 2023 all rights reserved.</p>
            <h3 className="mt-14 font-semibold text-5xl">Follow Us On</h3>
            <nav className="mt-6">
              <ul className="flex justify-between">
                <li>instagram</li>
                <li>telegram</li>
                <li>facebook</li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-5xl">Menu</h3>
            <nav className="mt-6">
              <ul className="text-gray-500 font-2xl">
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Home
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Explore
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Blog
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Cities
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Help
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-5xl">Information</h3>
            <nav className="mt-6">
              <ul className="text-gray-500 font-2xl">
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Destination
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  About Us
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Things
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Recently Trip
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Best Sevice
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Discount
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-5xl">Contact</h3>
            <nav className="mt-6">
              <ul className="text-gray-500 font-2xl">
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  +123 456 789
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  Explore
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  info@Travellian.com
                </li>
                <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                  1245, New Yorkm USA
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
