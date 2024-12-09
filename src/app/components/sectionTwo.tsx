import Image from "next/image";
import frame1 from "@/app/images/frame1.png";
import frame2 from "@/app/images/frame2.png";
import frame3 from "@/app/images/frame3.png";
import frame4 from "@/app/images/frame4.png";
import frame5 from "@/app/images/frame5.png";
import frame6 from "@/app/images/frame6.png";
import frame7 from "@/app/images/frame7.png";
import frame8 from "@/app/images/frame8.png";
import frame9 from "@/app/images/frame9.png";
import frame10 from "@/app/images/frame10.png";
import frame11 from "@/app/images/frame11.png";
import frame12 from "@/app/images/frame12.png";

export default function SectionTwo() {
  return (
    <>
      <div className="py-5 px-5 w-[1200px] ml-8">
        <h1 className="text-4xl text-center text-black mt-2">Browse Top Categories</h1>
        <div className="mt-3 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <div className="flex items-center justify-center bg-[#EBEBFF] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame1} alt="Category 1" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 2 */}
          <div className="flex items-center justify-center bg-[#E1F7E3] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame2} alt="Category 2" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 3 */}
          <div className="flex items-center justify-center bg-[#FFF2E5] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame3} alt="Category 3" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 4 */}
          <div className="flex items-center justify-center bg-[#FFF0F0] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame4} alt="Category 4" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 5 */}
          <div className="flex items-center justify-center bg-[#FFFFFF] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame5} alt="Category 5" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 6 */}
          <div className="flex items-center justify-center bg-[#F5F7FA] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame6} alt="Category 6" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 7 */}
          <div className="flex items-center justify-center bg-[#EBEBFF] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame7} alt="Category 7" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 8 */}
          <div className="flex items-center justify-center bg-[#F5F7FA] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame8} alt="Category 8" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 9 */}
          <div className="flex items-center justify-center bg-[#FFF2E5] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame9} alt="Category 9" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 10 */}
          <div className="flex items-center justify-center bg-[#FFEEE8] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame10} alt="Category 10" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 11 */}
          <div className="flex items-center justify-center bg-[#E1F7E3] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame11} alt="Category 11" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>

          {/* Category 12 */}
          <div className="flex items-center justify-center bg-[#FFF2E5] w-[312px] h-[104px] m-2">
            <Image className="w-[64px] h-[64px] mx-4" src={frame12} alt="Category 12" />
            <div>
              <p className="mt-[21px] ml-[-3px] text-lg font-semibold">Label</p>
              <span className="mt-[53px] text-sm text-[#6E7485]">63,476 Courses</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-black">
            We have more categories & subcategories. <span className="font-bold text-orange-600 cursor-pointer">Browse All</span>
          </p>
        </div>
      </div>
    </>
  );
}
