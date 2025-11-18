import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[480px] sm:h-[560px] md:h-[640px]">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex items-end justify-center p-6 md:p-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">Premium E‑commerce</h1>
          <p className="mt-3 md:mt-4 text-white/80 md:text-lg">Modern, fast and mobile‑first shopping experience with secure checkout.</p>
        </div>
      </div>
    </section>
  );
}
