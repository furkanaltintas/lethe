import Head from "next/head";
import Home from "./home";
import introService from "@/services/introService";
import aboutService from "@/services/aboutService";
import expertiseService from "@/services/expertiseService";
import expertiseContentService from "@/services/expertiseContentService";
import clientService from "@/services/clientService";
import clientContentService from "@/services/clientContentService";
import ctaService from "@/services/ctaService";
import journalService from "@/services/journalService";
import journalContentService from "@/services/journalContentService";
import socialMediaService from "@/services/socialMediaService";
import testimonialService from "@/services/testimonialService";

export default function Index(props) {
  return (
    <>
      <Head>
        {/* Temel Meta Bilgileri */}
        <title>Home - Lethe | Creative Digital Agency</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lethe is a creative digital agency offering expertise in web design, branding, and digital strategy. Discover our work and insights." />
        <meta name="keywords" content="Lethe, creative agency, digital agency, branding, web design, UX/UI, SEO" />
        <meta name="author" content="Lethe Agency" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn vs.) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Lethe | Creative Digital Agency" />
        <meta property="og:description" content="Explore Lethe's creative services in branding, UX/UI design, and digital innovation." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Lethe" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Lethe | Creative Digital Agency" />
        <meta name="twitter:description" content="Explore Lethe's creative services in branding, UX/UI design, and digital innovation." />
        <meta name="twitter:image" content="" />

        {/* Canonical */}
        <link rel="canonical" href="h" />
      </Head>

      <Home {...props} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const [intro, about, expertises, expertiseContent, clients, clientContent, cta, journals, journalContent, socialMedias, testimonials] = await Promise.all([
      introService.get(),
      aboutService.get(),
      expertiseService.getAll(),
      expertiseContentService.get(),
      clientService.getAll(),
      clientContentService.get(),
      ctaService.get(),
      journalService.getAll(),
      journalContentService.get(),
      socialMediaService.getAll(),
      testimonialService.getAll()
    ]);

    return {
      props: {
        intro,
        about,
        expertises,
        expertiseContent,
        clients,
        clientContent,
        cta,
        journals,
        journalContent,
        socialMedias,
        testimonials
      },
      revalidate: 60, // 60 saniyede bir güncellenebilir (ISR)
    };
  } catch (err) {
    console.error("Anasayfa verileri alınamadı:", err);

    return {
      props: {
        intro: null,
        about: null,
        expertises: [],
        expertiseContent: null,
        clients: [],
        clientContent: null,
        cta: null,
        journals: [],
        journalContent: null,
        socialMedias: [],
        testimonials: []
      },
      revalidate: 60,
    }
  }
}
