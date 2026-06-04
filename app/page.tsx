import Hero from '@/components/home/hero';
import WhyThisSummitMatters from '@/components/home/why-this-summit-matters';
import SummitOverview from '@/components/home/summit-overview';
import WhyAttend from '@/components/home/why-attend';
import WhoShouldAttend from '@/components/home/who-should-attend';
import KeyTopics from '@/components/home/key-topics';
import SpeakersPreview from '@/components/home/speakers-preview';
import SponsorsPreview from '@/components/home/sponsors-preview';
import FoundingPartner from '@/components/home/founding-partner';
import ContactForm from '@/components/home/contact-form';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyThisSummitMatters />
      <SummitOverview />
      <WhyAttend />
      <WhoShouldAttend />
      <KeyTopics />
      <SpeakersPreview />
      <SponsorsPreview />
      <FoundingPartner />
      <ContactForm />
    </>
  );
}
