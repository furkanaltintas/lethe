import FooterAbout from "@/components/Footer/FooterAbout/FooterAbout";
import FooterCopyright from "@/components/Footer/FooterCopyright/FooterCopyright";
import FooterNewsletter from "@/components/Footer/FooterNewsletter/FooterNewsletter";
import FooterSiteLinks from "@/components/Footer/FooterSiteLinks/FooterSiteLinks";
import FooterSocialList from "@/components/Footer/FooterSocialList/FooterSocialList";

const Footer = () => {
  return (
    <footer className="s-footer">
      <div className="row s-footer__content">
        <FooterAbout />
        <FooterSiteLinks title="Site Links" />
        <FooterNewsletter />
      </div>

      <div className="row s-footer__bottom">
        <FooterSocialList />

        <FooterCopyright />

        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="17 11 12 6 7 11"></polyline>
              <line x1="12" y1="18" x2="12" y2="6"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer