"use client";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function RecentlySwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={3}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mr-8">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl font-semibold mt-4">Birthplace Music Museum</h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto, architecto
              nobis ipsum quaerat repellendus asperiores, ullam suscipit odit repudiandae cum
              incidunt numquam exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default RecentlySwiper;
