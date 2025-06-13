import useFetch from '@/hooks/useFetch'
import newsletterService from '@/services/newsletterService'

const FooterNewsletter = () => {
    const { data, loading, error } = useFetch(() => newsletterService.get());

    if (loading) return null;
    if (error) return null;

    return (
        <div className="column xl-3 lg-6 md-12 tab-12 s-footer__block s-footer__newsletter">
            <h3>{data.title}</h3>
            <p>{data.description}</p>

            <div className="subscribe-form">
                <form id="mc-form" className="mc-form">
                    <input type="email" name="EMAIL" id="mce-EMAIL" className="u-fullwidth text-center" placeholder={data.inputPlaceholder} required />
                    <input type="submit" name="subscribe" value={data.buttonText} className="btn btn--primary btn--small u-fullwidth" />
                    <div className="mc-status"></div>
                </form>
            </div>
        </div>
    )
}

export default FooterNewsletter