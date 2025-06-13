import useFetch from '@/hooks/useFetch'
import footerAboutService from '@/services/footerAboutService'
import React from 'react'

const FooterAbout = () => {
    const { data, loading, error } = useFetch(() => footerAboutService.get());

    if (loading) return null;
    if (error) return null;

    return (
        <div className="column xl-6 lg-6 md-12 s-footer__block s-footer__about">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default FooterAbout