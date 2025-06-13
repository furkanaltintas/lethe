import Image from "next/image";
import Testimonial from "../Testimonial/Testimonial"
import Link from "next/link";

const Clients = ({ clients, clientContent, testimonials }) => {
  if (!clients || !clientContent || !testimonials) return null;

  return (
    <section id="clients" className="s-clients">
      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12 grid-block grid-section-split">
          <div className="section-header grid-section-split__header">
            <div className="text-pretitle">{clientContent.title}</div>
            <h2 className="text-display-title">
              {clientContent.displayTitle}
            </h2>
          </div>

          <div className="grid-section-split__primary">
            <p className="lead">
              {clientContent.description}
            </p>
          </div>
        </div>
      </div>

      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12">

          <div className="clients-list">
            {
              clients.length > 0 && (
                clients.map((client) => (
                  <div className="clients-list__item" key={client.id}>
                    <Link href={client.pathUrl} prefetch={true}>
                      <img src={client.imagePath} alt={client.imagePathName} />
                    </Link>
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>

      <div className="row s-clients__content-block width-sixteen-col">
        <div className="column xl-12 testimonials">
          <Testimonial testimonials={testimonials} pageSlider="home-slider" />
        </div>
      </div>


    </section>
  )
}

export default Clients