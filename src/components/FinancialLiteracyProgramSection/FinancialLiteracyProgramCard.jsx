const FinancialLiteracyProgramCard = ({ financialLiteracyCardData }) => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 w-full px-2 md:px-8 py-6 md:py-12">
      <div className="w-full h-full grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center auto-rows-fr max-w-[var(--breakpoint-large)] mx-auto md:px-10">
        {financialLiteracyCardData?.length > 0 &&
          financialLiteracyCardData.map((item, index) => (
            <div
              key={index}
              className=" bg-white rounded-lg text-center w-full min-h-[120px] md:min-h-[190px] flex flex-col items-center justify-center p-4 border-b-3"
              style={{
                borderColor: item?.color,
              }}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight break-all">
                {item?.heading}
              </span>
              <p className="text-sm md:text-xl text-gray-800 font-medium leading-tight break-words">
                {item?.subHeading}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FinancialLiteracyProgramCard;
