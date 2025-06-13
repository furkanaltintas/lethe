import Link from "next/link"

const Journal = ({ journals, journalContent }) => {
  if (!journals || !journalContent) return null;

  return (
    <section id="journal" className="s-journal">
      <div className="row s-journal__content width-sixteen-col">
        <div className="column xl-12 grid-block">
          <div className="grid-full section-header text-center">
            <div className="text-pretitle">{journalContent.title}</div>
            <h2 className="text-display-title">
              {journalContent.displayTitle}
            </h2>
          </div>
          <div className="grid-full s-journal__content-main grid-list-items">
            {
              journals.length > 0 && (
                journals.map((journal) => (
                  <div className="grid-list-items__item blog-card" key={journal.id}>
                    <div className="blog-card__header">
                      <div className="blog-card__cat-links">
                        <Link href={`/blog/${journal.slug}`} prefetch={true}>{journal.categoryName}</Link>
                      </div>
                      <h3 className="blog-card__title">
                        <Link href={`/blog/${journal.slug}`} prefetch={true}>
                          {journal.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="blog-card__text">
                      <p>
                        {journal.description}
                      </p>
                    </div>
                  </div>
                ))
              )
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Journal