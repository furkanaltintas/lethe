import useFetch from "@/hooks/useFetch"
import socialMediaService from "@/services/socialMediaService"
import Link from "next/link";

const FooterSocialList = () => {
    const {
        data: socialMedias,
        loading: socialMediasLoading,
        error: socialMediasError,
        refetch: socialMediasRefetch
    } = useFetch(() => socialMediaService.getAll());

    if (socialMediasLoading) return null;
    if (socialMediasError) return null;

    return (
        <div className="column xl-6 lg-12">
            <ul className="s-footer__social social-list">
                {
                    socialMedias.length > 0 && (
                        socialMedias.map((socialMedia) => (
                            <li key={socialMedia.id}>
                                <Link href={socialMedia.pathUrl} prefetch={true} title={socialMedia.pathName}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="social-icon"><path d={socialMedia.path}></path></svg>
                                    <span className="u-screen-reader-text">{socialMedia.pathName}</span>
                                </Link>
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default FooterSocialList