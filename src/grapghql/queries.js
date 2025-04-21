import { gql } from "@apollo/client";

const GET_HEADER_DATA = gql`
  query Header {
    header {
      desktopLogo {
        url
        alternativeText
      }
      mobileLogo {
        url
        alternativeText
      }
      redirectionLogoUrl
      nav {
        title
        url
        openInNewTab
      }
      headerLinkableCta {
        title
        url
        openInNewTab
      }
      headerActionCta {
        title
      }
    }
  }
`;

const GET_FOOTER_DATA = gql`
  query Footer {
    footer {
      disclaimer {
        heading
        description
      }
    }
    footernote {
      copyRightText
      socialMedia {
        socialIcon {
          url
          alternativeText
        }
        socialMediaUrl
      }
    }
  }
`;

const GET_HOMEPAGE_DATA = gql`
query Home {
  home {
    aboutFinancialLiteracySection {
      mainHeading {
        heading
        color
        breakLine
      }
      descriptionText {
        description
      }
      tag {
        icon {
          url
          alternativeText
        }
        title
      }
      financialCards {
        heading
        subHeading
      }
    }
    financialLiteracyMattersSection {
      mainHeading {
        heading
        color
        breakLine
      }
      teaser {
        desktopMedia {
          url
          alternativeText
        }
        mobileMedia {
          url
          alternativeText
        }
        heading
        description
        cta {
          icon {
            url
            alternativeText
          }
          title
          url
          openInNewTab
        }
      }
    }
    advantagesProgramSection {
      mainHeading {
        heading
        color
        breakLine
      }
      description {
        description
      }
      advantageCard {
        icon {
          url
          alternativeText
        }
        heading
        tag
        description
      }
    }
    roadMapWealthSection {
      mainHeading {
        heading
        color
        breakLine
      }
 
      roadmapCards {
        heading
        description
      }
      media {
        image {
          url
          alternativeText
        }
      }
    }
    platformResourcesSection {
      mainHeading {
        heading
        color
        breakLine
      }
      resourceCard {
        media {
          image {
            url
            alternativeText
          }
        }
        heading
      }
    }
    downloadAppSection {
      media {
        image {
          url
          alternativeText
        }
      }
      descriptionCard {
        heading
        subHeading
        keyHeading {
          heading
        }
        cta {
          icon {
            url
            alternativeText
          }
          title
          url
          openInNewTab
        }
      }
    }
    faqSection {
      mainHeading {
        heading
        color
        breakLine
      }
      faqAccordion {
        heading
        description
      }
    }
  }
}
`;

export { GET_HEADER_DATA, GET_HOMEPAGE_DATA, GET_FOOTER_DATA };
