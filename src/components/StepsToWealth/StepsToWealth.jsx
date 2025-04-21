import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import OverlappingCards from "../OverlappingCards/OverlappingCards";
import StyledHeading from "../StyledHeading/StyledHeading";

const StepsToWealth = ({ stepsToWealthData }) => {
  return (
    <section className="w-full bg-[#F5F5F5]">
      <MaxWidthContainer>
        <div className="w-full flex flex-col lg:justify-center lg:flex-row items-center md:items-start gap-5 md:gap-3 px-3 lg:px-6">
          {/* LEFT SECTION - Heading & Image */}
          <div className="w-full lg:w-[492px] flex flex-col md:gap-15 items-center justify-center">
            {stepsToWealthData?.mainHeading && (
              <StyledHeading
                styledHeadingData={stepsToWealthData?.mainHeading}
              />
            )}

            <div className="hidden w-full md:flex justify-center">
              <img
                src={stepsToWealthData?.media?.image?.url}
                alt={
                  stepsToWealthData?.media?.image?.alternativeText || "image"
                }
                className="mix-blend-darken object-contain w-full max-w-[440px] xl:max-w-[498px] h-[250px] "
              />
            </div>
          </div>

          {/* RIGHT SECTION - Cards */}
          <div className="w-full lg:w-[771px] flex lg:justify-end justify-center mt-0">
            {stepsToWealthData?.roadmapCards && (
              <OverlappingCards
                overlappingCardsData={stepsToWealthData?.roadmapCards}
              />
            )}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default StepsToWealth;
