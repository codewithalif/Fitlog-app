import Image from "next/image";
import HerImage from "../../../../public/banner.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-[1400px] px-3  my-10">
      <div
        className="
          flex flex-col  rounded-lg border border-[#25282f]
          bg-[#15171c] px-5 py-6
          sm:px-6 sm:py-8
          md:flex-row md:px-8 md:py-16
          lg:px-10
        "
      >
        {/* Left Content */}
        <div
          className="
            flex-1 py-5
            sm:py-8
            md:py-10
            lg:py-15
          "
        >
          {/* Small Heading */}
          <p className="mb-3 text-[8px] font-bold font-inter uppercase tracking-[0.08em] text-[#c6ff00] sm:text-[12px]">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-[27px] font-black uppercase 
              text-white
              sm:text-[32px]
              md:text-[35px]
              lg:text-5xl
              font-oswald"
          >
            Train with intent. Log
            <br />
            every set.
          </h1>

          {/* Description */}
          <p
            className="
              mt-3 py-2
              text-[10px] leading-5 text-gray-400
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
              font-inter
              pt-5
          "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch
            <br className="hidden sm:block" />
            the weeks work add up.
          </p>

          {/* Button */}
          <Link
            href="#CartItem"
            className="mt-4 inline-block rounded-[4px] bg-[#c6ff00] px-5 py-2.5 text-[10px] font-extrabold uppercase text-black transition hover:bg-[#b5ed00] sm:px-6 sm:py-3 font-inter"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Workout Image */}
        <div
          className="
            flex items-center justify-center
            pt-4
            sm:pt-5
            md:w-[40%] md:pt-0
            lg:mr-10
          "
        >
          <Image
            src={HerImage}
            alt="Workout illustration"
            priority
            className="
              h-auto
              w-[180px]
              sm:w-[210px]
              md:w-[400px] "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;