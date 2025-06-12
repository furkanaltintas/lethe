import Link from "next/link"

const Journal = () => {
  return (
    <section id="journal" className="s-journal">

      <div className="row s-journal__content width-sixteen-col">
        <div className="column xl-12 grid-block">

          <div className="grid-full section-header text-center">
            <div className="text-pretitle">Recent Articles</div>
            <h2 className="text-display-title">
              Latest articles from my blog.
            </h2>
          </div>

          <div className="grid-full s-journal__content-main grid-list-items">

            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <Link href="https://www.dreamhost.com/r.cgi?287326">Sponsored</Link>
                </div>
                <h3 className="blog-card__title"><Link href="https://www.dreamhost.com/r.cgi?287326">Need Web Hosting for Your Websites?</Link></h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Need hosting for your website? We would highly recommend <Link href="https://www.dreamhost.com/r.cgi?287326">DreamHost</Link>.
                  Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control
                  panel to make managing your websites and projects easy. <Link href="https://www.dreamhost.com/r.cgi?287326">Sign up</Link> now to get started.
                </p>
              </div>
            </div>
            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <Link href="blog.html">Productivity</Link>
                </div>
                <h3 className="blog-card__title"><Link href="single.html">5 Marketing Productivity Apps for Your Team</Link></h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores
                  sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut
                  magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.
                </p>
              </div>
            </div>
            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <Link href="blog.html">SEO</Link>
                </div>
                <h3 className="blog-card__title"><Link href="single.html">7 SEO Factors to Consider for Better Website Ranking</Link></h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores
                  sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut
                  magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.
                </p>
              </div>
            </div>
            <div className="grid-list-items__item blog-card">
              <div className="blog-card__header">
                <div className="blog-card__cat-links">
                  <Link href="blog.html">Productivity</Link>
                </div>
                <h3 className="blog-card__title"><Link href="single.html">5 Effective Web Design Principles</Link></h3>
              </div>
              <div className="blog-card__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam.
                  Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati
                  dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Journal