import colorGenerator from "@/utils/colorGenerator";
import StyledHeading from "../StyledHeading/StyledHeading";
import TextArea from "../TextArea/TextArea";
import {FINANCIAL_LITERACY_TAGS_POSITIONS} from '@/constants/constant.js'
import FinancialLiteracyProgramCard from "./FinancialLiteracyProgramCard";
import {
  ABOUT_FINANCIAL_LITERACY_COLOR_CODES,
  GLOBAL_COLOR_CODES,
} from "@/constants/constant";

const FinancialLiteracyProgramSection = ({ financialLiteracySectionData }) => {

  const updatedAboutFinancialLiteracy = colorGenerator(
    financialLiteracySectionData?.tag,
    ABOUT_FINANCIAL_LITERACY_COLOR_CODES,
  );
  const updatedFinancialCardsData = colorGenerator(
    financialLiteracySectionData?.financialCards,
    GLOBAL_COLOR_CODES,
  );

  return (
    <section className="flex flex-col items-center justify-start w-full bg-white">
      <div className="green-half relative overflow-hidden max-w-[1000px] lg:mb-34 px-[8%] pb-10 pt-14 sm:px-22 sm:py-20 md:px-40">
        <div className="flex flex-col items-center text-center fade-in-up">
          {financialLiteracySectionData?.mainHeading && (
            <StyledHeading
              styledHeadingData={financialLiteracySectionData?.mainHeading}
              extraClasses="tracking-[-1.2px]"
            />
          )}
          <TextArea
            textAreaData={
              financialLiteracySectionData?.descriptionText?.description
            }
            extraClasses="text-sm md:text-lg text-coregray-200 text-center font-normal leading-6 min-h-20 sm:min-h-40"
          />
        </div>
      </div>

      <div
        className="lg:relative lg:block grid max-md:grid-cols-2 md:grid-cols-3 max-md:6 gap-4 md:gap-10 lg:gap-0 py-8 lg:py-0 w-fit md:w-full px-4 max-w-[680px]
 "
      >
        {updatedAboutFinancialLiteracy?.length > 0 &&
          updatedAboutFinancialLiteracy?.map((item, index) => (
            <div
              key={index}
              className={`lg:absolute min-w-36 max-w-46 overflow-hidden flex items-center justify-start lg:justify-center fade-in-up
        rounded-full text-center ps-6 pe-6 md:ps-5 md:pe-4 py-3
          ${FINANCIAL_LITERACY_TAGS_POSITIONS[index]?.pos}
          `}
              style={{
                animationDelay: `${index > 0 ? (index + 1) * 200 : 0}ms`,
                opacity: 0,
                background: item?.color,
              }}
            >
              <div className={`flex items-center justify-center rounded-full `}>
                <div className="flex justify-center w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                  <img
                    src={item?.icon?.url}
                    className="object-contain w-full h-full"
                    alt={item?.icon?.alternativeText || "image"}
                  />
                </div>
                <h4 className="font-semibold text-sm md:text-base px-2 text-coregray-300 leading-snug break-words overflow-hidden">
                  {item?.title}
                </h4>
              </div>
            </div>
          ))}
      </div>
      <FinancialLiteracyProgramCard
        financialLiteracyCardData={updatedFinancialCardsData}
      />
    </section>
  );
};

export default FinancialLiteracyProgramSection;
