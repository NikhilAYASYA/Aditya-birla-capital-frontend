const StyledHeading = ({ styledHeadingData, extraClasses }) => {
  return (
    <>
      <h2
        className={[
          "md:text-sectionheading md:leading-15",
          "max-md:text-heading max-md:leading-11",
          "text-mainheading",
          "font-extralight",
          "text-center",
          "mb-5",
          "md:mb-10",
          extraClasses,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {styledHeadingData?.length > 0 &&
          styledHeadingData.map((item, index) => {
            return (
              <span
                key={index}
                className={[
                  item?.color === "Red" && "text-primary-100",
                  item?.breakLine && "breakline",
                  "font-extralight",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.heading}{" "}
              </span>
            );
          })}
      </h2>
    </>
  );
};

export default StyledHeading;
