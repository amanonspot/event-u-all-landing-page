import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Categories from "@/components/home/Categories";
import Destinations from "@/components/home/Destinations";
import Activities from "@/components/home/Activities";
import Artists from "@/components/home/Artists";
import GalleryPreview from "@/components/home/GalleryPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import CaseStudiesTeaser from "@/components/home/CaseStudiesTeaser";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import ProposalCTA from "@/components/home/ProposalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Categories />
      <Destinations />
      <Activities />
      <Artists />
      <GalleryPreview />
      <FeaturedWork />
      <CaseStudiesTeaser />
      <WhyUs />
      <Testimonials />
      <Industries />
      <Process />
      <FAQ />
      <ProposalCTA />
    </>
  );
}
