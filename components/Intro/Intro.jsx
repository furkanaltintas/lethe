import Link from "next/link"

const Intro = () => {
    return (
        <section id="intro" className="s-intro">
            <div className="row s-intro__content width-sixteen-col">
                <div className="column lg-12 s-intro__content-inner grid-block">
                    <div className="s-intro__content-text">
                        <div className="s-intro__content-pretitle text-pretitle">Hello, I'm Monica</div>
                        <h1 className="s-intro__content-title">
                            I create marketing <br />
                            strategies for your <br />
                            business that get <br />
                            results.
                        </h1>
                    </div>

                    <div className="s-intro__content-media">
                        <div className="s-intro__content-media-inner">
                            <img src="/images/intro-bg.jpg" srcSet="images/intro-bg.jpg 1x, images/intro-bg@2x.jpg 2x" alt="" />
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