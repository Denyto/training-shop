import FooterTop from "./footertop";
import FooterNav from "./footernav";
import FooterBottom from "./bottom";


function Footer() {

  return (
    <footer className="footer" data-test-id="footer">
      <FooterTop></FooterTop>
      <FooterNav></FooterNav>
      <FooterBottom></FooterBottom>
    </footer>
  );
}

export default Footer;