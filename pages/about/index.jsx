import Cta from "@/components/Cta/Cta"
import PageHeader from "@/components/General/PageHeader/PageHeader"
import PageIntro from "@/components/General/PageIntro/PageIntro"
import Testimonials from "@/components/Testimonials/Testimonials"
import aboutService from "@/services/aboutService"
import Head from "next/head"
import Image from "next/image"

const About = ({ about }) => {
    return (
        <>
            <Head>
                <title>About - Lethe</title>
            </Head>
            <section id="content" className="s-content">
                <PageHeader title="About" preTitle="Hi, I'm Monica" />
                <section className="s-pagecontent pagecontent">
                    <PageIntro />
                    <div className="row pagemedia">
                        <div className="column xl-12">
                            <figure className="page-media" style={{ position: "relative" }}>
                                <img src={about?.imageUrl} className="xl-12" alt={about?.mainTitle} fill />
                            </figure>
                        </div>
                    </div>
                    <div className="row width-narrower pagemain">
                        <div className="column xl-12">
                            <h2>{about?.mainTitle}</h2>
                            <p>{about?.mainDescription}</p>
                        </div>
                    </div>
                </section>
                <Testimonials />
            </section>
            <Cta />
        </>
    )
}

export async function getStaticProps() {
    const about = await aboutService.get();
    return {
        props: {
            about
        },
        revalidate: 60, // her 60 saniyede güncellenir
    }
}

export default About