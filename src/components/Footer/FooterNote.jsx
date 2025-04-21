const FooterNote = ({ footerNoteData }) => {
  return (
    <section className="bg-primary-100">
      <div className="py-3 md:py-6 px-4 lg:px-20 md:px-10  max-w-[var(--breakpoint-large)] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-[#AEB0B3] font-semibold max-md:text-sm md:text-md text-center md:text-start tracking-tight">
            {footerNoteData?.copyRightText}
          </p>
          <div className="md:flex hidden gap-4 items-center">
            {footerNoteData?.socialMedia?.length > 0 &&
              footerNoteData.socialMedia.map((item, index) => (
                <span key={index}>
                  <img
                    src={item?.socialIcon?.url}
                    alt={item?.socialIcon?.alternativeText || "logo"}
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNote;
