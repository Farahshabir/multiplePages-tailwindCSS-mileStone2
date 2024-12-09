import Image from "next/image";
import pic1 from "@/app/images/pic1.png";

export default function SectionOne() {
  return (
    <div className="flex justify-between items-center py-16 px-8 bg-gray-50">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn with expert anytime anywhere</h1>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Create Account
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image className="w-full h-auto" src={pic1} alt="Learn with experts" />
      </div>
    </div>
  );
}
