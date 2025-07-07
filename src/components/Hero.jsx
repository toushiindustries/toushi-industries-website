import React, { useRef, useState } from "react";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import video2 from "../assets/video2.mp4";
import ImageCard from "./ImageCard";

const videos = [video2];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div class="w-full h-[169vh] bg-[#f2f2f2] overflow-hidden flex flex-col max-xss:h-[300vh] xss:max-xs:h-[300vh] xs:max-sm:h-[330vh] sm:max-md:h-[215vh] md:max-lg:h-[151vh] lg:max-xl:h-[149vh] xl:max-2xl:h-[168vh]">
      <div class="relative h-[80vh] w-full flex items-center justify-center max-xss:h-[50vh] xss:max-xs:h-[50vh] xs:max-sm:h-[70vh] sm:max-md:h-[60vh] md:max-lg:h-[70vh] lg:max-xl:h-[70vh]">
        <video
          ref={videoRef}
          src={videos[currentVideo]}
          class="absolute top-0 left-0 w-full h-full object-cover max-xss:flex max-xss:items-center"
          autoPlay
          muted
          loop
          onEnded={handleVideoEnd}
        />
        <div class="flex text-center items-end justify-center w-full h-full z-20">
          <div class="font-notosanssunuwar flex flex-col z-10 text-white w-full leading-6 mb-[5vh] max-xss:leading-2 xss:max-xs:leading-3 2xl:mb-[8rem] 2xl:mr-[75rem] xl:max-2xl:mb-[6rem] xl:max-2xl:mr-[45rem] lg:max-xl:mb-[3rem] 2xl:max-3xl:mr-[60rem]">
            <h1 class="font-medium text-[36px] drop-shadow-lg max-xss:text-[25px] xss:max-xs:text-[30px]">
              Toushi Industries
            </h1>
            <p class="ml-2 text-[24px] mt-4 drop-shadow-lg max-xss:ml-0 max-xss:text-[17px] xss:max-xs:text-[20px] xss:max-xs:ml-0">
              Where Light Meets Design
            </p>
          </div>
        </div>
      </div>
      <div class="w-full h-[70vh] flex flex-col max-xss:h-[215vh] xss:max-xs:h-[215vh] xs:max-sm:h-[210vh] sm:max-md:h-[120vh] md:max-lg:h-[52vh] lg:max-xl:h-[60vh]">
        <div class="text-3xl flex items-center justify-center h-[15vh] max-xss:h-[10vh] xss:max-xs:h-[10vh] xs:max-sm:h-[10vh] sm:max-md:h-[10vh] md:max-lg:h-[12vh] lg:max-xl:h-[12vh]">
          Lighting
        </div>
        <div class="flex justify-around h-[55vh] max-xss:flex-col max-xss:items-center max-xss:h-[205vh] max-xss:w-full max-xss:gap-2 max-xss:justify-center xss:max-xs:h-[205vh] xss:max-xs:flex-col xss:max-xs:items-center xss:max-xs:w-full xss:max-xs:gap-2 xss:max-xs:justify-center xs:max-sm:h-[200vh] xs:max-sm:flex-col xs:max-sm:items-center xs:max-sm:w-full xs:max-sm:gap-2 xs:max-sm:justify-center sm:max-md:h-[110vh] sm:max-md:flex-wrap sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center sm:max-md:gap-x-10 sm:max-md:gap-y-4 md:max-lg:h-[40vh] lg:max-xl:h-[48]">
          <ImageCard image={image5} text="Magnetic Track Light" />
          <ImageCard image={image6} text="Antiglare COBs" />
          <ImageCard image={image7} text="Facade Highlighting" />
          <ImageCard image={image8} text="Office Linear Profiles" />
        </div>
      </div>
      <div class="flex justify-around mt-10 max-xss:flex max-xss:flex-col max-xss:items-center max-xss:text-center max-xss:justify-center max-xss:gap-5 max-xss:h-[30vh] max-xss:mb-10 xss:max-xs:h-[30vh] xss:max-xs:flex xss:max-xs:flex-col xss:max-xs:items-center xss:max-xs:text-center xss:max-xs:justify-center xss:max-xs:gap-5 xss:max-xs:mb-10 xs:max-sm:h-[45vh] xs:max-sm:flex xs:max-sm:flex-col xs:max-sm:items-center xs:max-sm:text-center xs:max-sm:justify-center xs:max-sm:gap-10 xs:max-sm:mb-10 sm:max-md:h-[30vh] sm:max-md:flex-wrap sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center sm:max-md:gap-x-10 sm:max-md:gap-y-4 sm:max-md:text-center md:max-lg:h-[20vh] md:max-lg:justify-center md:max-lg:items-center md:max-lg:mx-5 md:max-lg:gap-4 md:max-lg:mb-[5vh] lg:max-xl:h-[14vh] lg:max-xl:text-center lg:max-xl:justify-center lg:max-xl:gap-4 xl:max-2xl:h-[14vh] xl:max-2xl:text-center xl:max-2xl:justify-center xl:max-2xl:gap-4 2xl:h-[14vh] 2xl:text-center 2xl:justify-center 2xl:gap-15">
        <div class="leading-6 xs:max-sm:leading-8 sm:max-md:w-[40%] md:max-lg:flex md:max-lg:flex-col md:max-lg:gap-1">
          <div class="text-[24px] font-tinos xs:max-sm:text-[30px]">
            Unique Designs
          </div>
          <p class="text-[18px] xs:max-sm:text-[21px]">
            Standout, exclusive interior lighting
          </p>
        </div>
        <div class="leading-6 xs:max-sm:leading-8 sm:max-md:w-[40%] md:max-lg:flex md:max-lg:flex-col md:max-lg:gap-1">
          <div class="text-[24px] font-tinos xs:max-sm:text-[30px]">
            Tailored Guidance
          </div>
          <p class="text-[18px] xs:max-sm:text-[21px]">
            Lighting aligned with your vision
          </p>
        </div>
        <div class="leading-6 xs:max-sm:leading-8 sm:max-md:w-[40%] md:max-lg:flex md:max-lg:flex-col md:max-lg:gap-1">
          <div class="text-[24px] font-tinos xs:max-sm:text-[30px]">
            Premium Materials
          </div>
          <p class="text-[18px] xs:max-sm:text-[21px]">
            Durable fixtures for aesthetic facination
          </p>
        </div>
        <div class="leading-6 xs:max-sm:leading-8 sm:max-md:w-[40%] md:max-lg:flex md:max-lg:flex-col md:max-lg:gap-1">
          <div class="text-[24px] font-tinos xs:max-sm:text-[30px]">
            End-to-end Support
          </div>
          <p class="text-[18px] xs:max-sm:text-[21px]">
            Seamless service from choice to installation
          </p>
        </div>
      </div>
      <div class="bg-black w-full h-10 flex items-center justify-around max-xss:relative max-xss:text-xs max-xss:h-[5vh] xss:max-xs:h-[5vh] xss:max-xs:text-xs xs:max-sm:h-[5vh] xs:max-sm:text-md sm:max-md:h-[5vh] md:max-lg:h-[4vh] lg:max-xl:h-[5vh] xl:max-2xl:h-[4vh] 2xl:h-[5vh]">
        <p class="text-white font-playfairdisplay">Coming soon</p>
        <p class="text-white">© 2025 Toushi Industries. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Hero;
