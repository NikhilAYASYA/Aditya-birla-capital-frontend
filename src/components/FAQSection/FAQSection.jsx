"use client";
import React, { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";
import StyledHeading from "../StyledHeading/StyledHeading";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const FAQSection = ({ faqSectionData }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="faqsection relative">
      <div className="relative z-10">
        <MaxWidthContainer>
          {/* Title */}
          {faqSectionData.mainHeading && (
            <StyledHeading styledHeadingData={faqSectionData.mainHeading} />
          )}

          {/* FAQ Items */}
          <div className="space-y-4 md:px-45">
            {faqSectionData?.faqAccordion
              ?.slice(0, visibleCount)
              ?.map((faq, index) => (
                <FAQAccordionItem key={index} accordionItem={faq} />
              ))}
          </div>

          {/* Load More Button */}
          {faqSectionData?.faqAccordion?.length > 0 &&
            visibleCount < faqSectionData?.faqAccordion?.length && (
              <div className="flex justify-center mt-8 sm:mt-10">
                <button
                  className="px-6 md:px-8 py-3 bg-primary-100 cursor-pointer text-white font-semibold rounded-full hover:bg-[#ca1f36f8] transition-all"
                  onClick={loadMore}
                >
                  LOAD MORE
                </button>
              </div>
            )}
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default FAQSection;
