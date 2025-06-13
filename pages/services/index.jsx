import Cta from "@/components/Cta/Cta"
import PageHeader from "@/components/General/PageHeader/PageHeader"
import PageIntro from "@/components/General/PageIntro/PageIntro"
import Testimonials from "@/components/Testimonials/Testimonials"
import expertiseService from "@/services/expertiseService"
import Head from "next/head"

const Index = ({ expertises }) => {
    return (
        <>
            <Head>
                <title>Services - Lethe</title>
            </Head>
            <section id="content" className="s-content">
                <PageHeader title="Services" preTitle="High-Impact Services" />
                <section className="s-pagecontent pagecontent">
                    <PageIntro />
                    <div className="row">
                        <div className="column xl-12 grid-block">
                            <div className="grid-full grid-list-items list-items show-ctr">
                                {
                                    expertises.length > 0 && (
                                        expertises.map((expertise) => (
                                            <div className="grid-list-items__item list-items__item" key={expertise.id}>
                                                <div className="list-items__item-header">
                                                    <h3 className="list-items__item-title">{expertise.title}</h3>
                                                </div>
                                                <div className="list-items__item-text">
                                                    <p>
                                                        {expertise.description}
                                                    </p>

                                                    <ul className="list-services">
                                                        {
                                                            expertise.listService.map((service, index) => (
                                                                <li key={index}>{service}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
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
    const expertises = await expertiseService.getAll();
    return {
        props: {
            expertises
        },
        revalidate: 60, // her 60 saniyede güncellenir
    }
}

export default Index