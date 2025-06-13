import Link from "next/link"

const Expertise = ({ expertises, expertiseContent }) => {
  if (!expertises || !expertiseContent) return null;

  return (
    <section id="expertise" className="s-expertise">
      <div className="row s-expertise__content width-sixteen-col">
        <div className="column xl-12 grid-block grid-section-split">
          <div className="section-header grid-section-split__header">
            <div className="text-pretitle">{expertiseContent.title}</div>
            <h2 className="text-display-title">
              {expertiseContent.displayTitle}
            </h2>
            <p className="lead">
              {expertiseContent.description}
            </p>
          </div>

          <div className="s-expertise__content-main grid-section-split__primary">
            <div className="grid-list-items list-items show-ctr">
              {
                expertises.length > 0 && (
                  expertises.map((expertise) => (
                    <div className="grid-list-items__item list-items__item" key={expertise.id}>
                      <div className="grid-list-items__title list-items__item-header">
                        <h3 className="list-items__item-title">{expertise.title}</h3>
                      </div>
                      <div className="grid-list-items__text list-items__item-text">
                        <p>
                          {expertise.description}
                        </p>
                      </div>
                    </div>
                  ))
                )
              }
            </div>
          </div>
          <div className="s-expertise__content-btn grid-section-split__bottom">
            <Link href={expertiseContent.buttonUrl} prefetch={true} className="btn btn--stroke u-fullwidth">{expertiseContent.buttonText}</Link>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Expertise