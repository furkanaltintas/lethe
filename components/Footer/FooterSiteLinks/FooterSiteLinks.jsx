import useFetch from "@/hooks/useFetch"
import siteLinkService from "@/services/siteLinkService"
import Link from "next/link";

const FooterSiteLinks = ({ title }) => {
    const { data, loading, error } = useFetch(() => siteLinkService.getAll());

    if (loading) return null;
    if (error) return null;

    return (
        <div className="column xl-3 lg-6 md-12 s-footer__block s-footer__site-links">
            <h3>{title}</h3>
            <ul className="link-list">
                {
                    data.length > 0 && (
                        data.map((siteLink) => (
                            <li key={siteLink.id}>
                                <Link href={siteLink.url} prefetch={true}>{siteLink.title}</Link>
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default FooterSiteLinks