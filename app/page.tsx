import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Founder from '@/components/Founder';
import Principles from '@/components/Principles';
import Process from '@/components/Process';
import Rsvp from '@/components/Rsvp';
import Timeline from '@/components/Timeline';
import DigitalReel from '@/components/DigitalReel';

export default function Home() {
  return (
    <main className="relative z-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <Nav />
        <Hero />
      </div>
      <Story />
      <Founder />
      <Principles />
      <Process />
      <Rsvp />
      <Timeline />
      <DigitalReel />
    </main>
  );
}
