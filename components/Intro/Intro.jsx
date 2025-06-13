import Image from "next/image";

const Intro = ({ intro }) => {
    if (!intro) return null;

    return (
        <section id="intro" className="s-intro">
            <div className="row s-intro__content width-sixteen-col">
                <div className="column lg-12 s-intro__content-inner grid-block">
                    <div className="s-intro__content-text">
                        <div className="s-intro__content-pretitle text-pretitle">
                            {intro.title}
                        </div>
                        <h1 className="s-intro__content-title">
                            {intro.description}
                        </h1>
                    </div>

                    <div className="s-intro__content-media">
                        <div className="s-intro__content-media-inner">
                            <Image src={intro.imagePath} alt={intro.title} width={440} height={550} loading="lazy" />
                            <div className="lines">
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className="s-intro__scroll-down">
                        <a href="#about" className="smoothscroll">
                            <div className="scroll-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#97b34a" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="7 13 12 18 17 13"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                            </div>
                            <span>Scroll for more</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro