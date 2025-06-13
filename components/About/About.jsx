import Link from "next/link"

const About = ({ about, socialMedias }) => {
  if (!about || !socialMedias) return null;

  return (
    <section id="about" className="s-about target-section">
      <div className="row s-about__content width-sixteen-col">
        <div className="column grid-block grid-section-split">
          <img src="images/geometric_shape.svg" alt="" className="s-about__content-imgbg" />
          <div className="section-header grid-section-split__header">
            <div className="text-pretitle">{about.title}</div>
            <h2 className="text-display-title">
              {about.displayTitle}
            </h2>
          </div>
          <div className="s-about__content-main grid-section-split__primary">
            <p className="attention-getter">
              {about.description}
            </p>
          </div>
          <div className="s-about__content-btn grid-section-split__bottom">
            <Link href={about.buttonUrl} prefetch={true} className="btn btn--stroke u-fullwidth">{about.buttonText}</Link>
            <ul className="s-about__social social-list">
              {
                socialMedias.map((socialMedia) => (
                  <li key={socialMedia.id}>
                    <Link href={socialMedia.pathUrl} target="_blank" prefetch={true}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="social-icon">
                        <path d={socialMedia.path}>
                        </path>
                      </svg>
                      <span className="u-screen-reader-text">{socialMedia.pathName}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About