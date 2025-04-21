import Link from "next/link";

const Header = ({ headerData }) => {
  return (
    <header className="shadow-lg">
      <div className="header-container max-w-[var(--breakpoint-large)] mx-auto lg:px-4 flex items-center w-full">
        {/* Logo Section */}
        <div className="logo_container flex items-center justify-center bg-white w-30 md:w-[16%]">
          <Link
            href={
              headerData?.redirectionLogoUrl ?? headerData?.redirectionLogoUrl
            }
            className="max-md:hidden md:h-[50px] lg:h-[64px]"
            aria-label={headerData?.desktopLogo?.alternativeText}
          >
            {headerData?.desktopLogo && (
              <img
                src={headerData?.desktopLogo?.url}
                alt={headerData?.desktopLogo?.alternativeText || "image"}
                className="object-contain h-full w-full"
              />
            )}
          </Link>
          <Link
            href={
              headerData?.redirectionLogoUrl ?? headerData?.redirectionLogoUrl
            }
            className=" md:hidden w-[94px] h-[50px]"
            aria-label="Homepage"
          >
            {headerData?.mobileLogo && (
              <img
                src={headerData?.mobileLogo?.url}
                alt={headerData?.mobileLogo?.alternativeText || "image"}
                className="w-full h-full object-contain"
              />
            )}
          </Link>
        </div>

        {/* Desktop Navigation Links */}

        <nav
          className="links-container bg-primary-200 w-full rounded-bl-2xl px-1 md:px-6 py-3 md:py-4 md:min-h-16 flex flex-1 justify-center md:justify-between items-center "
          aria-label="Main Navigation"
        >
          <ul className="hidden md:flex md:space-x-5 lg:space-x-8 text-white">
            {headerData?.nav?.length > 0 &&
              headerData?.nav?.map((item, index) => (
                <li key={index} className="max-md:text-md">
                  <Link
                    href={item?.url}
                    target={item?.openInNewTab ? "_blank" : "_self"}
                    aria-label={item?.title}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-2">
            {headerData?.headerLinkableCta && (
              <Link
                href={
                  headerData?.headerLinkableCta?.url
                    ? headerData?.headerLinkableCta?.url
                    : "/"
                }
                className="flex items-center uppercase text-center text-[10px] md:text-xs font-bold text-white px-3 py-2 md:px-5 md:py-1.5 border-2 border-white rounded-full hover:bg-white hover:text-primary-200 transition-all"
                aria-label={headerData?.headerLinkableCta?.title}
                target={
                  headerData?.headerLinkableCta?.openInNewTab
                    ? "_blank"
                    : "_self"
                }
              >
                {headerData?.headerLinkableCta?.title}
              </Link>
            )}
            {headerData?.headerActionCta && (
              <button
                className="flex items-center uppercase text-center text-[11px] md:text-xs font-bold text-primary-200 px-3 py-2 md:px-4 md:py-1.5 border-2 border-white bg-white rounded-full hover:bg-primary-200 hover:text-white transition-all cursor-pointer"
                aria-label={headerData?.headerActionCta?.title}
              >
                {headerData?.headerActionCta?.title}
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden p-4 border-t border-b border-gray-300 bg-white"
        aria-label="Mobile Navigation"
      >
        <ul className="flex justify-center items-center space-x-5 text-[#000000B2]">
          {headerData?.nav?.length &&
            headerData?.nav?.map((item, index) => (
              <li key={index} className="text-center text-sm">
                <Link
                  href={item.url}
                  target={item.openInNewTab ? "_blank" : "_self"}
                  aria-label={item?.title}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
