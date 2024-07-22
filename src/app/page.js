import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import ConsultationCard from "@/components/ConsultationCard";
import Featured from "@/components/Featured";
import DevelopmentSection from "@/components/DevelopmentSection";
import Industries from "@/components/Industries";
import ProjectCarousel from "@/components/ProjectCarousel";
import DiscussCard from "@/components/DiscussCard";
import DevelopmentPhase from "@/components/DevelopmentPhase";
import { FaqSection } from "@/components/FaqSection";
import ProjectCarouselMobile from "@/components/ProjectCarouselMobile";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#F2F4F7] py-5 h-[63rem] md:h-[56.4rem] overflow-hidden px-12 md:px-24 lg:px-36 mb-10 relative">
        <div className=" w-full flex">
          <Navbar />
        </div>
        <img src="/phone-screens-grp.png" alt="hero" className="hidden md:block absolute top-0 lg:right-[-30rem] xl:right-[-20rem] 2xl:right-0 md:right-[-35rem] z-10" />
        <div className={`relative w-[37.5rem] ${inter.className} font-extrabold text-[1.5rem] md:text-[2.5rem] my-[2.5rem] z-20`}>
          <h1><span className=" text-[#FFBA00]">User-Centric Excellence</span> <span className=" font-semibold"> : Our</span></h1>
          <h1>App Development services </h1>
          <h1 className=" font-semibold">Tackles Your Pain Points</h1>
        </div>
        <p className=" lg:w-[37.5rem] mb-[2rem] font-medium text-base md:text-lg z-20">
          Experience a Seamless Digital Journey with <span className=" text-[#80A948] font-bold">Desun</span> -
          Where Every Line of Code Resolves Your Challenges
          and <span className="text-[#FFBA00] font-bold">Elevates Your App Experience to Unparalleled Heights.</span>
        </p>
        <ConsultationCard />
      </div>
      <hr />
      <div className="my-[2rem]">
        <Featured />
      </div>
      <hr />
      <div className="flex md:flex-row flex-col px-12 md:px-24 lg:px-36 md:space-x-[6rem] lg:space-x-[10rem] xl:space-x-[18rem] py-10">
        <div className=" space-y-4">
          <h1 className={`${inter.className} font-bold lg:text-[2rem] xl:text-[2.3rem]`}>Full development cycle</h1>
          <p className=" text-sm font-semibold">We use proven technologies</p>
          <div className=" space-y-3">
            <h1 className=" font-semibold">Web</h1>
            <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ <br />
              Nuxt / MySQL / Laravel / GO lang / django / Python</p>
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold">Mobile</h1>
            <div>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / <br/>
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </div>
          </div>
        </div>
        <div>
          <DevelopmentSection />
        </div>
      </div>
      <div className=" bg-[#F2F4F7] px-12 md:px-24 lg:px-36 pt-[3rem]">
        <h1 className={`${inter.className} font-bold text-[2.4rem]`}>Developed more than <span className=" text-[#80A948]">100</span> </h1>
        <h2 className={`${inter.className} font-bold text-[2.4rem] mb-7`}>projects in <span className="text-[#80A948]">15</span> industries</h2>
        <Industries />
        <ProjectCarousel />
        <ProjectCarouselMobile/>
      </div>
      <div className="flex md:flex-row flex-col md:py-0 py-7 md:h-[22rem] h-[45rem] justify-around items-center bg-gradient-to-r from-[#FABC1F] to-[#7CA546]">
        <div className=" mb-5 md:mb-0">
          <h1 className={` text-white text-[2.4rem] font-bold ${inter.className}`}>Let's discuss</h1>
          <h1 className={` text-white text-[2.4rem] font-bold ${inter.className}`}>Your project</h1>
          <p className={` text-white text-xs font-medium ${inter.className} mt-7`}>Let's figure out how to create an effective application, <br/>
          its cost and terms of its development</p>
        </div>
        <DiscussCard />
      </div>
      <DevelopmentPhase />

      <div className=" flex flex-col md:flex-row justify-between bg-[#F2F4F7] items-center py-20 px-20">
        <div className=" px-10">
          <h1 className={`${inter.className} font-bold text-[2.3rem]`}>Our team</h1>
          <p className=" font-medium my-6">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
          <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-start">
            <div>
              <p className={`${inter.className} font-bold text-[2.3rem] `}>28</p>
              <p className=' font-medium text-[#667085] md:text-xs text-xl'>team members</p>
            </div>
            <div>
              <p className={`${inter.className} font-bold text-[2.3rem]`}>+100</p>
              <p className=' font-medium text-[#667085] md:text-xs text-xl'>projects</p>
            </div>
            <div>
              <p className={`${inter.className} font-bold text-[2.3rem]`}>7 years</p>
              <p className=' font-medium text-[#667085] md:text-xs text-xl'>in IT sphere</p>
            </div>
          </div>
          <p className=" font-medium mt-6">
            All the necessary specialists - from a designer to a tester - are on our staff. 
            We hire the best specialists in the market. It's expensive but worth it
          </p>
        </div>
        <div className=" md:w-3/6 w-full shadow-xl rounded-lg md:mt-0 mt-8">
          <img src="/team.png" alt="team" className=" h-full w-full" />
        </div>
      </div>

      <h1 className={`${inter.className} font-bold text-[2.3rem] px-32 mt-[2rem]`}>FAQ</h1>
      <FaqSection />
    </main>
  );
}
