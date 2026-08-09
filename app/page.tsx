import DantaHero from '@/components/DantaHero';
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
      {/* El nuevo DantaHero incluye su propia navegación y estructura de Hero */}
      <DantaHero />
      
      <div className="max-w-[1200px] mx-auto px-8">
        <Story />
        <Founder />
        <Principles />
        <Process />
        <Rsvp />
        <Timeline />
        <DigitalReel />
      </div>
    </main>
  );
}
