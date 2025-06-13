import About from "@/components/About/About"
import Clients from "@/components/Clients/Clients"
import Cta from "@/components/Cta/Cta"
import Expertise from "@/components/Expertise/Expertise"
import Intro from "@/components/Intro/Intro"
import Journal from "@/components/Journal/Journal"

const Home = ({ intro, about, expertises, expertiseContent, clients, clientContent, cta, journals, journalContent, socialMedias, testimonials }) => {
    return (
        <>
            <section id="content" className="s-content">
                <Intro intro={intro} />
                <About about={about} socialMedias={socialMedias} />
                <Expertise expertises={expertises} expertiseContent={expertiseContent} />
                <Clients clients={clients} clientContent={clientContent} testimonials={testimonials} />
            </section>
            <Cta cta={cta} />
            <Journal journals={journals} journalContent={journalContent} />
        </>
    )
}

export default Home;