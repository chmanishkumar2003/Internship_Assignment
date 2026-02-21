'use client';

import { useScrollAnimation, useParallax } from '@/hooks/use-scroll-animation';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const connectRef = useScrollAnimation();
  const appointmentRef = useScrollAnimation();
  const officeRef = useScrollAnimation();
  const socialRef = useScrollAnimation();

const socialImages = [
  '/images/yoga.jpg',
  '/images/2.webp',
  '/images/3.jpg',
  '/images/download.jpeg',
];


return (
  <div className="min-h-screen bg-[#FAFAF8]">
    {/* Navigation */}
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E6E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold text-[#6B705C]">
          Lilac Therapy
        </a>

        <div className="hidden md:flex gap-8">
          <a
            href="/about"
            className="text-[#3A3A3A] hover:text-[#6B705C] transition-colors text-sm uppercase tracking-wide"
          >
            About
          </a>
          <a
            href="/services"
            className="text-[#3A3A3A] hover:text-[#6B705C] transition-colors text-sm uppercase tracking-wide"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-[#3A3A3A] hover:text-[#6B705C] transition-colors text-sm uppercase tracking-wide"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    {/* Connect Section */}
    <section
      ref={connectRef.ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-[#F3F4EF] transition-all duration-1000 ease-out ${
        connectRef.isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <ParallaxImage
                src="images/brain.png"
                alt="Calming nature"
                className="rounded-xl w-full object-cover h-52 shadow-md"
              />
              <ParallaxImage
                src="images/image.png"
                alt="Peaceful therapy space"
                className="rounded-xl w-full object-cover h-52 shadow-md"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h1 className="text-5xl font-semibold text-[#3A3A3A] mb-6">
              Let’s Talk
            </h1>

            <p className="text-lg text-[#5A5A5A] mb-6">
              Reaching out for support is a meaningful first step.
            </p>

            <p className="text-lg text-[#5A5A5A] mb-10">
              If you have questions or would like to schedule a free 15-minute
              consultation, I’m here to help.
            </p>

            {/* Info Box */}
            <div className="bg-[#EAEADF] border border-[#D6D6C9] rounded-xl p-6">
              <p className="text-[#3A3A3A] text-sm leading-relaxed">
                <span className="font-semibold">Please note:</span> For privacy
                reasons, contact forms should be HIPAA-compliant. You may prefer
                reaching out via a secure client portal or email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Appointment Section */}
<section
  ref={appointmentRef.ref}
  className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
    appointmentRef.isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-12'
  }`}
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-semibold text-foreground mb-8">
      Book a Session
    </h2>

    <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
      You’re welcome to schedule a free 15-minute consultation or book a full
      session below. If you’d like to ask a question before scheduling, feel
      free to reach out by email.
    </p>

    {/* Scheduling Widget */}
    <div className="bg-white rounded-xl p-12 border border-border shadow-sm">
      <p className="text-foreground font-medium">
        Secure scheduling widget
      </p>
      <p className="text-foreground/60 text-sm mt-2">
        Embed your HIPAA-compliant scheduling tool or client portal here
      </p>
    </div>
  </div>
</section>

{/* Office Section */}
<section
  ref={officeRef.ref}
  className={`py-24 px-4 sm:px-6 lg:px-8 bg-secondary transition-all duration-1000 text-foreground ${
    officeRef.isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-12'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-5xl font-semibold mb-8">
          Office Location
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              Address
            </h3>
            <p className="text-lg opacity-90">
              123 Example Street
            </p>
            <p className="text-lg opacity-90">
              Minneapolis, MN
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              Office Hours
            </h3>
            <p className="text-lg opacity-90">
              Monday – Friday
            </p>
            <p className="text-lg opacity-90">
              10:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe
            title="office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.799029384625!2d-93.27479!3d44.972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d5e5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Social Section */}
<section
  ref={socialRef.ref}
  className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
    socialRef.isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-12'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-semibold text-foreground mb-12">
      Connect on Social
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {socialImages.map((image, idx) => (
        <SocialCard key={idx} image={image} delay={idx} />
      ))}
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-foreground text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-12 mb-16">
      {/* Contact */}
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h3 className="font-semibold text-xl mb-6">Contact</h3>
        <p className="mb-3 opacity-90">Lilac Therapy</p>
        <p className="mb-3 opacity-90">123 Example Road</p>
        <p className="mb-8 opacity-90">Minneapolis, MN</p>

        <a
          href="mailto:email@example.com"
          className="hover:text-primary transition-colors block mb-3"
        >
          email@example.com
        </a>
        <a
          href="tel:(555) 555-5555"
          className="hover:text-primary transition-colors"
        >
          (555) 555-5555
        </a>
      </div>

      {/* Hours */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h3 className="font-semibold text-xl mb-6">Office Hours</h3>
        <p className="mb-3 opacity-90">Monday – Friday</p>
        <p className="opacity-90">10:00 AM – 6:00 PM</p>
      </div>

      {/* Navigation */}
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h3 className="font-semibold text-xl mb-6">Explore</h3>
        <nav className="space-y-3">
          <a
            href="/"
            className="block hover:text-primary transition-colors opacity-90"
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:text-primary transition-colors opacity-90"
          >
            About
          </a>
          <a
            href="/services"
            className="block hover:text-primary transition-colors opacity-90"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block hover:text-primary transition-colors opacity-90"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-primary-foreground/20 pt-10 text-sm text-primary-foreground/70">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Good Faith Estimate
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Disclaimer
          </a>
        </div>
      </div>

      <p className="text-center md:text-left opacity-75">
        © 2026 Therapy Website. All rights reserved.
      </p>
    </div>
  </div>
</footer>
</div>
)
};

function SocialCard({ image, delay }: { image: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const imageRef = useParallax();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 120}ms` }}
    >
      <div className="relative h-44 md:h-60 overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500">
        
        {/* Image */}
        <img
          ref={imageRef.ref}
          src={image}
          alt="Social post"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out"
          style={{
            transform: `translateY(${imageRef.offset}px)`,
          }}
        />

        {/* Soft overlay (no harsh dark hover) */}
        <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-500" />
      </div>
    </div>
  );
}


function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const { ref, offset } = useParallax();

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} transition-transform duration-[900ms] ease-out`}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    />
  );
}


function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

