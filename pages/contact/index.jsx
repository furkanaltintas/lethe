import PageHeader from "@/components/General/PageHeader/PageHeader"
import PageIntro from "@/components/General/PageIntro/PageIntro"
import Testimonials from "@/components/Testimonials/Testimonials"
import contactContentService from "@/services/contactContentService"
import socialMediaService from "@/services/socialMediaService"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Index = ({ contactContent, socialMedias }) => {
    return (
        <>
            <Head>
                <title>Contact - Lethe</title>
            </Head>
            <section id="content" className="s-content">
                <PageHeader title="Contact" preTitle="Get In Touch" />
                <section className="s-pagecontent pagecontent">
                    <PageIntro />
                    <div className="row pagemedia">
                        <d className="column xl-12">
                            <figure className="page-media">
                                <img src={contactContent.imagePath}
                                    srcset="images/thumbs/contact/contact-2400.jpg 2400w, 
                                             images/thumbs/contact/contact-1200.jpg 1200w, 
                                             images/thumbs/contact/contact-600.jpg 600w" sizes="(max-width: 2400px) 100vw, 2400px" alt="" />
                            </figure>
                        </d>
                    </div>

                    <div className="row width-narrower pagemain">
                        <div className="column xl-12">
                            <h2>{contactContent.title}</h2>

                            <div className="row">
                                <div className="column xl-6 md-12 contact-cta">
                                    <p>
                                        {contactContent.description}
                                    </p>

                                    <Link href="mailto:#0" className="btn btn--primary u-fullwidth contact-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="social-icon"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                                        {contactContent.buttonText}
                                    </Link>
                                </div>
                                <div className="column xl-5 md-12 u-flexitem-x-right">
                                    <div className="contact-block">
                                        <h6>Follow On Social</h6>
                                        <ul className="contact-social social-list">
                                            {
                                                socialMedias.length > 0 && (
                                                    socialMedias.map((socialMedia) => (
                                                        <li>
                                                            <Link href={socialMedia.pathUrl} target="_blank" rel="noopener noreferrer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="social-icon">
                                                                    <path d={socialMedia.path}></path>
                                                                </svg>
                                                                <span className="u-screen-reader-text">{socialMedia.pathName}</span>
                                                            </Link>
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </ul>
                                    </div>

                                    <div className="contact-block">
                                        <h6>{contactContent.emailText}</h6>
                                        <Link href={`mailto:${contactContent.emailAddress}`}>{contactContent.emailAddress}</Link>
                                    </div>

                                    <div className="contact-block">
                                        <h6>{contactContent.phoneText}</h6>
                                        <ul className="contact-list">
                                            <li><Link href={`tel:${contactContent.phoneNumber}`}>{contactContent.phoneNumber}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
            </section>
        </>
    )
}

export async function getStaticProps() {
    const contactContent = await contactContentService.get();
    const socialMedias = await socialMediaService.getAll();

    return {
        props: {
            contactContent,
            socialMedias
        },
        revalidate: 60
    }
}

export default Index