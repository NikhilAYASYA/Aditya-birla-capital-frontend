import FooterDisclaimer from "./FooterDisclaimer";
import FooterNote from "./FooterNote";

const Footer = ({ footerData, footerNote }) => {
  return (
    <footer>
      <FooterDisclaimer footerDisclaimerData={footerData} />
      <FooterNote footerNoteData={footerNote} />
    </footer>
  );
};

export default Footer;
