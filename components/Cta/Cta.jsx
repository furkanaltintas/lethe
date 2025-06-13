import Link from "next/link";

const Cta = ({ cta }) => {
    if (!cta) return null;

    return (
        <section id="cta" className="s-cta">
            <div className="row row-x-center text-center">
                <div className="column xl-8 lg-12">
                    <div className="s-cta__content">
                        <h2 className="text-display-title">
                            {cta.title}
                        </h2>
                        <p className="lead">
                            {cta.description}
                        </p>
                        <Link href={cta.buttonUrl} prefetch={true} className="btn btn--primary">{cta.buttonText}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta