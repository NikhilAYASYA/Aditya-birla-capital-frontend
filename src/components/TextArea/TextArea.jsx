const TextArea = ({ textAreaData, extraClasses }) => {
  const textarea = textAreaData?.split("\n").filter(Boolean);

  return (
    <>
      {textarea?.length > 0 &&
        textarea?.map((item, index) => {
          const classProps = extraClasses ? { className: extraClasses } : {};

          return (
            <p key={index} {...classProps}>
              {item}
            </p>
          );
        })}
    </>
  );
};

export default TextArea;
