import Cta from "@/components/Cta/Cta";
import PageHeader from "@/components/General/PageHeader/PageHeader";
import useFetch from "@/hooks/useFetch";
import journalService from "@/services/journalService";
import Head from "next/head";
import Link from "next/link";

const Index = ({ journals }) => {
  return (
    <>
      <Head>
        <title>Blog - Lethe</title>
      </Head>
      <section id="content" className="s-content">
        <PageHeader title="My Blog" preTitle="Recent Writings" />
        <section className="s-pagecontent pagecontent">
          <div className="row">
            <div className="column xl-12 grid-block">
              <div className="grid-full">
                <div className="grid-full grid-list-items">
                  {
                    journals.length > 0 && (
                      journals.map((journal) => (
                        <div className="grid-list-items__item blog-card" key={journal.id}>
                          <div className="blog-card__header">
                            <div className="blog-card__cat-links">
                              <Link href="#" prefetch={true}>{journal.categoryName}</Link>
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
          </div>
        </section>
      </section>
      <Cta />
    </>
  );
};

export async function getStaticProps(context) {
  const journals = await journalService.getAll();

  return {
    props: {
      journals
    },
    revalidate: 60, // her 60 saniyede güncellenir
  }
}

export default Index;