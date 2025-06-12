import About from "@/components/About/About"
import Clients from "@/components/Clients/Clients"
import Cta from "@/components/Cta/Cta"
import Expertise from "@/components/Expertise/Expertise"
import Intro from "@/components/Intro/Intro"
import Journal from "@/components/Journal/Journal"

const Index = () => {
    return (
        <>
            <section id="content" className="s-content">
                <Intro />
                <About />
                <Expertise />
                <Clients />
            </section>
            <Cta />
            <Journal />
        </>
    )
}

export default Index