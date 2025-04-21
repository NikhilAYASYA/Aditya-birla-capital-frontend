import ProgramAdvantageSection from "@/components/ProgramAdvantageSection/AdvantageSection";
import DownloadAppSection from "@/components/DownloadAppSection/DownloadAppSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import FinancialLiteracyMattersSection from "@/components/FinancialLiteracyMattersSection/FinancialLiteracyMattersSection";
import FinancialLiteracyProgramSection from "@/components/FinancialLiteracyProgramSection/FinancialLiteracyProgramSection";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import StepsToWealth from "@/components/StepsToWealth/StepsToWealth";
import { fetchHomePageData } from "@/services/homepage.service";
import _get from "lodash/get";

export default async function Home() {
  const homepageData = await fetchHomePageData();
  const financialLiteracySectionData = _get(
    homepageData,
    "home.aboutFinancialLiteracySection",
    {},
  );
  const financialLiteracyMattersSectionData = _get(
    homepageData,
    "home.financialLiteracyMattersSection",
    {},
  );
  const advantageSectionData = _get(
    homepageData,
    "home.advantagesProgramSection",
    {},
  );
  const stepsToWealthData = _get(homepageData, "home.roadMapWealthSection", {});
  const platformSectionData = _get(
    homepageData,
    "home.platformResourcesSection",
    {},
  );
  const downloadAppSectionData = _get(
    homepageData,
    "home.downloadAppSection",
    {},
  );
  const faqSectionData = _get(homepageData, "home.faqSection", {});

  return (
    <>
      <FinancialLiteracyProgramSection
        financialLiteracySectionData={financialLiteracySectionData}
      />
      <FinancialLiteracyMattersSection
        financialLiteracyMattersSectionData={
          financialLiteracyMattersSectionData
        }
      />
      <ProgramAdvantageSection advantageSectionData={advantageSectionData} />
      <StepsToWealth stepsToWealthData={stepsToWealthData} />
      <ParallaxSection platformSectionData={platformSectionData} />
      <DownloadAppSection downloadAppSectionData={downloadAppSectionData} />
      <FAQSection faqSectionData={faqSectionData} />
    </>
  );
}
