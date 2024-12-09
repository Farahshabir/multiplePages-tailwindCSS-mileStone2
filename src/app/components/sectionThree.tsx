import Image from "next/image";
import course1 from "@/app/images/course1.png";
import course2 from "@/app/images/course2.png";
import course3 from "@/app/images/course3.png";
import course4 from "@/app/images/course4.png";
import course5 from "@/app/images/course5.png";
import course6 from "@/app/images/course6.png";
import course7 from "@/app/images/course7.png";
import course8 from "@/app/images/course8.png";
import course9 from "@/app/images/course9.png";
import course10 from "@/app/images/course10.png";
import photo from "@/app/images/photo.png";
import feature1 from "@/app/images/feature1.png";
import feature2 from "@/app/images/feature2.png";
import feature3 from "@/app/images/feature3.png";
import feature4 from "@/app/images/feature4.png";
import recent1 from "@/app/images/recent1.png";
import recent2 from "@/app/images/recent2.png";
import recent3 from "@/app/images/recent3.png";
import { FaStar } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
// import { LuUser2 } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";

export default function SectionThree() {
  return (
    <>
      <div className="py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Best selling courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border rounded-lg shadow-lg">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={course1} alt="" />
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-500">DESIGN</span>
                <span className="text-gray-500">$57</span>
              </div>
              <p className="font-medium mb-4">Machine Learning A-Z Hands-On Python & R in Data...</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">5.0</span>
                <span className="ml-4">265.7K students</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-lg">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={course2} alt="" />
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-500">DEVELOPMENT</span>
                <span className="text-gray-500">$57</span>
              </div>
              <p className="font-medium mb-4">The Complete 2021 Web Development Bootcamp</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">5.0</span>
                <span className="ml-4">265.7K students</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-lg">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={course3} alt="" />
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-500">BUSINESS</span>
                <span className="text-gray-500">$57</span>
              </div>
              <p className="font-medium mb-4">Learn Python Programming Masterclass</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">5.0</span>
                <span className="ml-4">265.7K students</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-lg">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={course4} alt="" />
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-500">MARKETING</span>
                <span className="text-gray-500">$57</span>
              </div>
              <p className="font-medium mb-4">The Complete Digital Marketing Course-12 Courses in 1</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">5.0</span>
                <span className="ml-4">265.7K students</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-lg">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={course5} alt="" />
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-500">IT & SOFTWARE</span>
                <span className="text-gray-500">$57</span>
              </div>
              <p className="font-medium mb-4">Reiki Level I, II and Master/Teacher Program</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">5.0</span>
                <span className="ml-4">265.7K students</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl font-semibold text-center mb-8">Our feature courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[feature1, feature2, feature3, feature4].map((feature, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-lg">
                <Image className="w-full h-48 object-cover rounded-t-lg" src={feature} alt="" />
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-500">HEALTH & FITNESS</span>
                    <span className="text-gray-500">$14.00</span>
                  </div>
                  <p className="font-medium mb-4">Investing In Stocks The Complete Course! (13 H...)</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">5.0</span>
                    <span className="ml-4">(357,914)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    {/* <LuUser2 /> */}
                    <span className="ml-1">265.7K students</span>
                    <FiBarChart />
                    <span className="ml-1">Beginner</span>
                    <LuClock4 />
                    <span className="ml-1">6 hour</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl font-semibold text-center mb-8">Recently added courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[recent1, recent2, recent3].map((recent, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-lg">
                <Image className="w-full h-48 object-cover rounded-t-lg" src={recent} alt="" />
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-500">DESIGN</span>
                    <span className="text-gray-500">$57</span>
                  </div>
                  <p className="font-medium mb-4">The Python Mega Course: Build 10 Real World Applications</p>
                  <hr className="my-2" />
                  <div className="flex items-center text-sm text-gray-500">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">5.0</span>
                    <PiStudent />
                    <span className="ml-4">265.7K students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
