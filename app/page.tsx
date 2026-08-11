import DantaHero from '@/components/DantaHero';
import FeatureGrid from '@/components/FeatureGrid';
import ExampleReal from '@/components/ExampleReal';
import Story from '@/components/Story';
import Founder from '@/components/Founder';
import Principles from '@/components/Principles';
import Process from '@/components/Process';
import Rsvp from '@/components/Rsvp';
import Timeline from '@/components/Timeline';
import DigitalReel from '@/components/DigitalReel';
import CtaBand from '@/components/CtaBand';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <main className="relative z-10">
      <DantaHero />
      <FeatureGrid />
      <ExampleReal />
      <Process />
      <Story />
      <Founder />
      <Principles />
      <Rsvp />
      <Timeline />
      <DigitalReel />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
