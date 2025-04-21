import Link from "next/link";
import StyledHeading from "../StyledHeading/StyledHeading";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
 
const FinancialLiteracyMattersSection = ({
  financialLiteracyMattersSectionData,
}) => {
  const teaserCards = financialLiteracyMattersSectionData?.teaser?.slice(1, 3);
  const bgColors = ["#E9FFD8", "#FEF2F3"];
 
  return (
    <div className=" w-full">
      <MaxWidthContainer>
        {/* Main Section */}
        <section className="md:px-10">
          <div aria-labelledby="financial-literacy-title">
            <StyledHeading
              styledHeadingData={
                financialLiteracyMattersSectionData.mainHeading
              }
            />
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[40px] bg-[#FBF7D3] px-2 md:px-1 rounded-[20px] md:rounded-4xl md:py-1">
              {/* Image Section */}
              <div className="w-full h-full md:max-w-[616px] md:h-[518px] hidden md:flex justify-center rounded-3xl">
                <img
                  src={
                    financialLiteracyMattersSectionData?.teaser[0].desktopMedia
                      ?.url
                  }
                  alt={
                    financialLiteracyMattersSectionData?.teaser[0].desktopMedia
                      ?.alternativeText || "gif"
                  }
                  className="w-full h-full rounded-4xl"
                />
              </div>
 
              {financialLiteracyMattersSectionData?.teaser[0].mobileMedia && (
                <div className="w-full h-full flex md:hidden justify-center mt-2">
                  <img
                    src={
                      financialLiteracyMattersSectionData?.teaser[0].mobileMedia
                        ?.url
                    }
                    alt={
                      financialLiteracyMattersSectionData?.teaser[0].mobile
                        ?.alternativeText || "gif"
                    }
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              )}
              {/* Text Section */}
              <div className="w-full text-left md:max-w-[472px] md:py-7 p-3">
                <h3 className="lg:text-[40px] md:text-3xl text-2xl font-light text-[#1C1C1C] mb-4 tracking-[-0.02em] leading-7 md:leading-10">
                  {financialLiteracyMattersSectionData?.teaser[0]?.heading}
                </h3>
                <div className="text-[#1C1C1CB2] text-sm md:text-xl md:leading-[26px] font-normal mb-5 md:mb-10">
                  <BlocksRenderer
                    content={
                      financialLiteracyMattersSectionData?.teaser[0]
                        ?.description
                    }
                  />
                </div>
                <Link
                  href={
                    financialLiteracyMattersSectionData?.teaser[0]?.cta?.url
                  }
                  className="inline-block bg-primary-100 text-xs md:text-sm font-bold text-white px-8 py-3 md:py-4 rounded-full transition duration-300 hover:bg-primary-100"
                >
                  {financialLiteracyMattersSectionData?.teaser[0]?.cta?.title}
                </Link>
              </div>
            </div>
          </div>
          {/* Teaser Cards Section */}
          <div className="py-8">
            <div className="teaser-cards-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
              {teaserCards?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] md:rounded-4xl border-3"
                  style={{
                    backgroundColor: bgColors[index],
                    borderColor: bgColors[index],
                  }}
                >
                  <div className="rounded-3xl p-0.2 w-full md:h-[497px] hidden md:flex justify-center">
                    <img
                      src={item?.desktopMedia?.url}
                      alt={item?.desktopMedia?.alternativeText || "gif"}
                      className="w-full h-full rounded-4xl object-none"
                    />
                  </div>
                  {item?.mobileMedia && (
                    <div className="rounded-2xl md:rounded-3xl w-full md:hidden flex justify-center">
                      <img
                        src={item?.mobileMedia?.url}
                        alt={item?.mobileMedia?.alternativeText || "gif"}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="px-4 md:px-6 py-8 pt-6 md:pt-12 lg:pt-16">
                    <h2 className="text-2xl md:text-[32px] lg:text-[40px] font-light text-[#1C1C1C] leading-7 md:leading-10 max-w-[480px] mb-4">
                      {item?.heading}
                    </h2>
                    <div className="text-sm md:text-xl lg:text-2xl font-normal text-[#1C1C1CB2] max-w-[438px]">
                      <BlocksRenderer content={item?.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
};
 
export default FinancialLiteracyMattersSection;
 
 