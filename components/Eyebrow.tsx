export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-7 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-brass">
      <span className="w-[22px] h-px bg-brass" />
      {children}
    </div>
  );
}
