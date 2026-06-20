export default function About() {
  return (
    <section id="about" className="py-20 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="card-border rounded-2xl p-8 md:p-12 relative overflow-hidden bg-black-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/5 rounded-full blur-[80px]" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
          About Me
        </h2>
        
        <div className="max-w-3xl text-blue-50 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            I am a Software Engineer and current B.Tech student with a strong focus on backend systems, cloud engineering, and AI application development. My interest lies in architecting robust, scalable backends and optimizing distributed systems to deliver seamless user experiences.
          </p>
          <p>
            With hands-on industry experience building full-stack platforms during my senior developer internship, I strive for a continuous learning mindset. I'm actively exploring advanced backend engineering, system design principles, and AWS cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
