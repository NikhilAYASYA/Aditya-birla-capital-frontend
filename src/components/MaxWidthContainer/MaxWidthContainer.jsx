import React from "react";

function MaxWidthContainer(props) {
  const { children, id } = props;
  return (
    <>
      <div
        className="max-w-[var(--breakpoint-large)] mx-auto px-4 py-10 md:py-15"
        key={id}
      >
        {children}
      </div>
    </>
  );
}

export default MaxWidthContainer;
