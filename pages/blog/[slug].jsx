import Cta from '@/components/Cta/Cta'
import useFetch from '@/hooks/useFetch'
import journalService from '@/services/journalService'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Detail = () => {
    const router = useRouter();
    const { slug } = router.query;

    const {
        data: journal,
        loading: loadingJournal,
        error: errorJournal
    } = useFetch(() => (slug ? journalService.getBySlug(slug) : null), [slug]);

    const {
        data: nav
    } = useFetch(() => journal?.id ? journalService.getNavigation(journal.id) : null, [journal?.id]);
    // [journal?.id] => ifadesi, React'te useEffect veya custom hook'ların bağımlılık listesinde kullanılır.
    // Burada asıl amaç şudur: journal?.id değeri değiştiğinde ilgili useEffect veya hook yeniden tetiklensin.

    const {
        data: journals,
        loading: loadingJournals,
        error: errorJournals
    } = useFetch(() => journal?.id ? journalService.getSimilar(journal?.id, 3) : null, [journal?.id]);

    if (loadingJournal || loadingJournals) return null;
    if (errorJournal || errorJournals) return null;


    return (
        <>
            <Head>
                <title>{journal?.title} - Lethe</title>
            </Head>
            <article id="content" className="s-content entry">
                <div className="s-pageheader entry__header">
                    <div className="row">
                        <div className="column xl-12">
                            <h1 className="entry__title">
                                {journal?.title}
                            </h1>
                            <div className="entry__meta">
                                <div className="entry__meta-date">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"></circle>
                                        <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"></path>
                                    </svg>
                                    December 15, 2022
                                </div>
                                <div className="entry__meta-cat">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"></path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"></path>
                                    </svg>
                                    <span className="cat-links">
                                        <Link href="#" prefetch={true}>Productivity</Link>
                                        <Link href="#" prefetch={true}>Marketing</Link>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="s-pagecontent entry__content">

                    <div className="row entry__media">
                        <div className="column xl-12">
                            <figure className="featured-image">
                                <img src="/images/thumbs/single/standard-1200.jpg"
                                    srcSet="/images/thumbs/single/standard-2400.jpg 2400w, 
                                         /images/thumbs/single/standard-1200.jpg 1200w, 
                                         /images/thumbs/single/standard-600.jpg 600w" sizes="(max-width: 2400px) 100vw, 2400px" alt="" />
                            </figure>
                        </div>
                    </div>

                    <div className="row entry__primary width-narrower">
                        <div className="column xl-12">
                            <p className="lead">
                                {journal?.description}
                            </p>
                            <div className="post-nav">
                                <div className="post-nav__prev">
                                    {
                                        nav?.previous ? (
                                            <Link href={`/blog/${nav.previous.slug}`} prefetch={true} rel="prev">
                                                <span>Prev</span>
                                                {nav.previous.title}
                                            </Link>
                                        ) : (
                                            <>
                                                <span>Prev</span>
                                                There is no previous post
                                            </>
                                        )
                                    }
                                </div>
                                <div className="post-nav__next">
                                    {
                                        nav?.next ? (
                                            <Link href={`/blog/${nav.next.slug}`} prefetch={true} rel="next">
                                                <span>Next</span>
                                                {nav.next.title}
                                            </Link>
                                        ) : (
                                            <>
                                                <span>Next</span>
                                                There is no next post
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row related-posts">
                        <div className="column xl-12">
                            <h4 className="text-center">Similar Posts</h4>
                            <div className="grid-list-items">
                                {
                                    journals?.map((journal) => (
                                        <div className="grid-list-items__item blog-card" key={journal.id}>
                                            <div className="blog-card__header">
                                                <h3 className="blog-card__title">
                                                    <Link href={`/blog/${journal.slug}`} prefetch={true}>{journal.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="blog-card__text">
                                                <p>
                                                    {journal.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Cta />
        </>
    )
}

export default Detail