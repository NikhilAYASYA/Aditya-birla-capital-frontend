import Link from "next/link";
import checkIcon from "../../../public/check.svg";
import { APP_IMAGE_STYLE } from "@/constants/constant";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const ProgramAdvantageSection = ({ downloadAppSectionData }) => {
  return (
    <section className="mt-20 md:mt-14" aria-labelledby="Download the ABCD App">
      <MaxWidthContainer>
        <div
          className="flex flex-col items-center bg-[#FFF4D9] rounded-4xl p-5 px-6 lg:px-8 md:flex-row
    md:gap-0 md:relative"
        >
          <div className="transform translate-y-[-4.8rem] md:translate-y-[-5rem] lg:ml-5 flex justify-center items-center w-full md:w-1/2">
            {downloadAppSectionData?.media?.length > 0 &&
              downloadAppSectionData.media.map((item, index) => (
                <img
                  key={index}
                  src={item?.image?.url}
                  alt={item?.image?.alternativeText || "image"}
                  className={APP_IMAGE_STYLE[index]?.style}
                  loading="lazy"
                />
              ))}
          </div>
          <div className="flex flex-col w-full p-2 md:w-1/2 mt-[-3rem] md:mt-0">
            <h2 className="text-3xl font-extralight md:text-4xl lg:text-5xl mb-3 text-mainheading">
              {downloadAppSectionData?.descriptionCard?.heading}
            </h2>
            <ul className="space-y-3 md:space-y-1 lg:space-y-3 md:py-2 lg:py-4  mb-4 md:mb-2">
              {downloadAppSectionData?.descriptionCard?.keyHeading?.length >
                0 &&
                downloadAppSectionData?.descriptionCard?.keyHeading.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex font-normal items-start gap-2 text-base md:text-lg"
                    >
                      <img
                        src={checkIcon.src}
                        alt="check_icon"
                        className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
                      />
                      <span>{item.heading}</span>
                    </li>
                  ),
                )}
            </ul>
            <p className="text-md md:text-xl font-semibold mb-3">
              {downloadAppSectionData?.descriptionCard?.subHeading}
            </p>

            <div className="flex flex-row gap-3  justify-center lg:justify-start">
              {downloadAppSectionData?.descriptionCard?.cta.length > 0 &&
                downloadAppSectionData?.descriptionCard?.cta.map(
                  (item, index) => (
                    <Link
                      href={item?.url}
                      key={index}
                      className="flex text-[11px] font-semibold text-white px-6 py-3 bg-primary-100 gap-3
                        justify-center items-center rounded-full md:text-sm md:px-7 lg:py-3 md:gap-3"
                      aria-label="Download ABCD App on the Apple App Store"
                      target={item?.openInNewTab ? "_blank" : "_self"}
                    >
                      <img
                        src={item?.icon?.url}
                        alt={item?.icon?.alternativeText || "image"}
                        width={16}
                        height={16}
                      />
                      {item.title}
                    </Link>
                  ),
                )}
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default ProgramAdvantageSection;
