import CustomDatePicker from "@/components/Datepicker";
import SelectField from "@/components/Select";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo_black_text.svg";

import "swiper/css";
import "swiper/css/pagination";

import PopularSwiper from "@/components/PopularSwiper";
import RecentlySwiper from "@/components/RecentlySwiper";

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
      <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
        <Header />
        <section className="flex flex-col lg:justify-between lg:flex-row">
          <div className="mr-4">
            <h1 className="text-[50px] font-semibold lg:leading-normal lg:text-[80px] leading-none">
              You can give us a tour to Remember forever!
            </h1>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              facere dicta delectus modi nobis molestiae beatae soluta
              cupiditate qui accusamus tempora ratione fugiat, ullam
              reprehenderit aliquid corporis nisi quisquam. Quas, mollitia
              quisquam, quis nulla nam minus corporis impedit illum beatae ab
              voluptate perspiciatis exercitationem alias expedita dolorem?
              Quaerat, voluptatem? Animi?
            </p>
          </div>
          <div className="flex justify-between sm:mt-16 mt-10">
            <div className="sm:mr-2 mr-6 sm:block hidden">
              <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] sm:mb-2 mb-4 rounded-xl"></div>
              <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] rounded-xl"></div>
            </div>
            <div className="bg-gray-600 sm:h-[510px] sm:w-[350px] h-[316px] w-full rounded-xl"></div>
          </div>
        </section>
        <section className="sm:mt-24 mt-16">
          <div className="flex justify-between items-start bg-white p-8 rounded-xl">
            <div className="w-1/4">
              <SelectField placeHolder="Location" options={LOCATIONS} />
              <p className="text-gray-500 text-lg mt-4">
                Where do you wanna go?
              </p>
            </div>
            <div className="w-1/4">
              <SelectField placeHolder="People" options={PEOPLES} />
              <p className="text-gray-500 text-lg mt-4">How many people?</p>
            </div>
            <div className="w-1/4">
              <CustomDatePicker />
              <p className="text-gray-500 text-lg mt-4">
                Where do you want to go there?
              </p>
            </div>
            <button className="text-semibold text-3xl text-white bg-blue-500 px-10 py-4 rounded-xl hover:bg-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
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
        <section className="sm:mt-24 mt-16">
          <h2 className="sm:text-5xl text-3xl text-center font-semibold">
            Popular Destination
          </h2>
          <div className="flex sm:justify-between mt-10 sm:mt-16 mt-10 justify-center h-[530px] sm:h-[550px]">
            <PopularSwiper />
          </div>
        </section>
        <section className="sm:mt-24 mt-16">
          <h2 className="sm:text-5xl text-3xl text-center font-semibold">
            About Us
          </h2>
          <p className="sm:text-2xl text-lg text-center font-semibold mt-8 text-gray-500">
            We planned beautiful destination every weekend
          </p>
          <div className="flex justify-between sm:mt-14 mt-8">
            <div className="sm:w-1/3 w-full sm:h-[500px] h-[350px] bg-gray-600 sm:mr-6 mr-0 rounded-xl"></div>
            <div className="sm:w-1/3 h-[500px] bg-gray-600 mr-6 rounded-xl hidden sm:block"></div>
            <div className="sm:w-1/3 h-[500px] bg-gray-600 rounded-xl hidden sm:block"></div>
          </div>
          <p className="text-gray-500 text-center sm:w-1/3 w-full m-auto sm:mt-10 sm:text-lg mt-4 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            libero vel, ut voluptates in aperiam ducimus est omnis ipsa
            obcaecati fuga quaerat expedita reiciendis nisi magni nulla,
            consequatur rerum animi?
          </p>
          <div className="flex justify-between sm:w-1/2 m-auto sm:mt-10 mt-6">
            <div>
              <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                4.5k+
              </h3>
              <p className="mt-2 text-md">Our Explores</p>
            </div>
            <div>
              <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                15k+
              </h3>
              <p className="mt-2 text-md">Destinations</p>
            </div>
            <div>
              <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                35k+
              </h3>
              <p className="mt-2 text-md">Year Experience</p>
            </div>
          </div>
        </section>
        <section className="sm:mt-24 mt-16">
          <h2 className="sm:text-5xl text-3xl text-center font-semibold">
            Recently Viewed Trips
          </h2>
          <p className="sm:text-2xl text-lg text-center font-semibold mt-8 text-gray-500">
            Some recent trip photos are shared in front of you
          </p>
          <div className="sm:mt-10 mt-6 flex justify-between sm:h-[650px] h-[620px]">
            <RecentlySwiper />
          </div>
        </section>
        <section className="flex justify-between sm:flex-row flex-col-reverse  sm:mt-24 mt-16 items-center">
          <div className="sm:w-2/5 w-full sm:mr-24 mr-0 mt-8 sm:mt-0">
            <div className="flex justify-between sm:flex-row flex-col mb-4">
              <div className="sm:w-1/2 w-full h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
              <div className="sm:w-1/2 w-full h-[250px] bg-gray-600 rounded-xl sm:mt-0 mt-6"></div>
            </div>
            <div className="sm:flex hidden justify-between">
              <div className="w-1/2 h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
              <div className="w-1/2 h-[250px] bg-gray-600 rounded-xl"></div>
            </div>
          </div>
          <div className="sm:w-3/5 w-full">
            <h3 className="sm:text-5xl text-3xl font-semibold">
              We always try to give you are best service
            </h3>
            <p className="font-md text-gray-500 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              harum autem veritatis iste quisquam molestiae! Magnam dolore ipsam
              ut, adipisci magni aliquid eaque illum odit ab assumenda quis
              eligendi aliquam?
            </p>
            <div className="flex justify-between sm:w-1/2 m-auto sm:mt-10 mt-6">
              <div>
                <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                  4.5k+
                </h3>
                <p className="mt-2 text-md">Our Explores</p>
              </div>
              <div>
                <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                  15k+
                </h3>
                <p className="mt-2 text-md">Destinations</p>
              </div>
              <div>
                <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
                  35k+
                </h3>
                <p className="mt-2 text-md">Year Experience</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:mt-24 mt-10 flex justify-between sm:flex-row flex-col">
          <div className="sm:w-1/2 w-full sm:mt-10 mt-0">
            <h2 className="sm:text-7xl text-5xl font-semibold">
              Let is enjoy the world is beaty with 50% off
            </h2>
            <p className="sm:mt-8 mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem optio porro ut? Impedit, amet ad!
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="sm:text-[300px] text-[120px] font-bold">50%</h1>
          </div>
        </section>
        <footer className="flex justify-between sm:flex-row flex-col sm:mt-24 mt-16 pb-10">
          <div>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Logo"
              className="sm:w-[100px] sm:h-[100px] w-[150px] h-[150px]"
            />
            <p className="sm:mt-6 mt-0 text-gray-500">
              Continue Travellian 2023 all rights reserved.
            </p>
            <h3 className="sm:mt-14 mt-8 font-semibold sm:text-5xl text-4xl">
              Follow Us On
            </h3>
            <nav className="sm:mt-6 mt-4">
              <ul className="flex justify-between">
                <li>instagram</li>
                <li>telegram</li>
                <li>facebook</li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
              Menu
            </h3>
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
            <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
              Information
            </h3>
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
            <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
              Contact
            </h3>
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
