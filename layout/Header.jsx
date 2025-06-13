import useFetch from "@/hooks/useFetch"
import services from "@/services"
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router"

const { siteLinkService, ctaService } = services;

const Header = () => {
  const {
    data: siteLinks,
    loading: siteLinksLoading,
    error: siteLinksError,
    refetch: siteLinksRefetch
  } = useFetch(() => siteLinkService.getAll());

  const {
    data: cta,
    loading: ctaLoading,
    error: ctaError,
    refetch: ctaRefetch
  } = useFetch(() => ctaService.get());

  const router = useRouter();
  const handleActive = (path) => {
    return router.pathname === path ? "current" : "";
  }

  if (siteLinksLoading || ctaLoading) return null;
  if (siteLinksError || ctaError) return null;

  return (
    <header className="s-header">
      <div className="row s-header__inner width-sixteen-col">
        <div className="s-header__block">
          <div className="s-header__logo">
            <Link className="logo" href={"/"}>
              <img src="images/logo.svg" alt="Homepage" />
            </Link>
          </div>
          <Link className="s-header__menu-toggle" href="#0"><span>Menu</span></Link>
        </div>
        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            {
              siteLinks.length > 0 && (
                siteLinks.map((siteLink) => (
                  <li className={handleActive(siteLink.url)} key={siteLink.id}>
                    <Link href={siteLink.url}>{siteLink.title}</Link>
                  </li>
                ))
              )
            }
          </ul>
          <div className="s-header__contact">
            <Link href={cta.buttonUrl} className="btn btn--primary s-header__contact-btn">{cta.buttonText}</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header