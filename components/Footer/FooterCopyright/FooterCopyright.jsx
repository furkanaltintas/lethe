import useFetch from '@/hooks/useFetch'
import copyrightService from '@/services/copyrightService'
import Link from 'next/link';

const FooterCopyright = () => {
    const {
        data: copyright,
        loading: isCopyrightLoading,
        error: isCopyrightError,
        refetch: refetchCopyright
    } = useFetch(() => copyrightService.get());

    if(isCopyrightLoading) return null;
    if(isCopyrightError) return null;

    return (
        <div className="column xl-6 lg-12">
            <p className="ss-copyright">
                <span>{copyright.title}</span>
                <span>{copyright.description}</span>
            </p>
        </div>
    )
}

export default FooterCopyright