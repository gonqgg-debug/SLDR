import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);

  // Hero load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      
      tl.fromTo('.hero-gradient', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo('.hero-headline span', 
        { y: 26, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power2.out' }, 
        0.15
      )
      .fromTo('.hero-body', 
        { y: 14, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, 
        0.35
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations (desktop only - mobile uses simple scroll)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
      // Section 1: Hero exit animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.5,
        onLeaveBack: () => {
          gsap.set('.hero-content', { x: 0, opacity: 1 });
          gsap.set('.hero-bg', { scale: 1, x: 0 });
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.5,
        }
      })
      .fromTo('.hero-content', 
        { x: 0, opacity: 1 }, 
        { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo('.hero-bg', 
        { scale: 1, x: 0 }, 
        { scale: 1.06, x: '-4vw', ease: 'none' }, 
        0
      );

      // Section 2: Platform & Approach
      ScrollTrigger.create({
        trigger: section2Ref.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.5,
        }
      })
      .fromTo('.s2-headline', 
        { y: '-10vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'power2.out' }, 
        0
      )
      .fromTo('.s2-card-left', 
        { x: '-55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.06
      )
      .fromTo('.s2-card-right', 
        { x: '55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.10
      )
      .fromTo('.s2-card-text', 
        { y: '6vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'power2.out' }, 
        0.18
      )
      .to('.s2-headline', 
        { y: '-6vh', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s2-card-left', 
        { x: '-28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s2-card-right', 
        { x: '28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      );

      // Section 3: Market Opportunity
      ScrollTrigger.create({
        trigger: section3Ref.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.5,
        }
      })
      .fromTo('.s3-card', 
        { y: '110vh', opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0
      )
      .fromTo('.s3-text', 
        { x: '-10vw', opacity: 0 }, 
        { x: 0, opacity: 1, ease: 'power2.out' }, 
        0.12
      )
      .to('.s3-card', 
        { y: '-40vh', opacity: 0, ease: 'power2.in' }, 
        0.70
      );

      // Section 4: Strategy & Operations
      ScrollTrigger.create({
        trigger: section4Ref.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.5,
        }
      })
      .fromTo('.s4-headline', 
        { y: '-10vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'power2.out' }, 
        0
      )
      .fromTo('.s4-card-left', 
        { x: '-55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.06
      )
      .fromTo('.s4-card-right', 
        { x: '55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.10
      )
      .fromTo('.s4-card-text', 
        { y: '5vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'power2.out' }, 
        0.18
      )
      .to('.s4-headline', 
        { opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s4-card-left', 
        { x: '-28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s4-card-right', 
        { x: '28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      );

      // Section 5: Team & Governance
      ScrollTrigger.create({
        trigger: section5Ref.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section5Ref.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.5,
        }
      })
      .fromTo('.s5-headline', 
        { y: '-10vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'power2.out' }, 
        0
      )
      .fromTo('.s5-card-left', 
        { x: '-55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.06
      )
      .fromTo('.s5-card-right', 
        { x: '55vw', opacity: 0, scale: 0.96 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 
        0.10
      )
      .to('.s5-headline', 
        { opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s5-card-left', 
        { x: '-28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .to('.s5-card-right', 
        { x: '28vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      );

      // Section 6: Differentiation (flowing)
      gsap.fromTo('.s6-headline', 
        { y: 24, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          scrollTrigger: {
            trigger: section6Ref.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.s6-card-a', 
        { y: '10vh', opacity: 0, scale: 0.98 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          scrollTrigger: {
            trigger: section6Ref.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.s6-card-b', 
        { y: '14vh', opacity: 0, scale: 0.98 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          scrollTrigger: {
            trigger: section6Ref.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.s6-card-c', 
        { y: '10vh', opacity: 0, scale: 0.98 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          scrollTrigger: {
            trigger: section6Ref.current,
            start: 'top 70%',
            end: 'top 35%',
            scrub: 0.5,
          }
        }
      );

      // Section 7: Contact (flowing)
      gsap.fromTo('.s7-content', 
        { x: '-6vw', opacity: 0 }, 
        { 
          x: 0, 
          opacity: 1,
          scrollTrigger: {
            trigger: section7Ref.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0);
              
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out',
          }
        });
      }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-black/5">
        <a href="#" className="flex items-center" aria-label="Senior Living DR">
          <img src="/SLDR_logo.png" alt="Senior Living DR" className="h-7 md:h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors link-underline">
            Platform
          </a>
          <a href="#strategy" className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors link-underline">
            Strategy
          </a>
          <a href="/blog/" className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors link-underline">
            Journal
          </a>
          <a href="/investors.html" className="font-mono text-xs uppercase tracking-[0.12em] px-4 py-2 bg-[#b8953e] text-white hover:bg-[#c9a54a] transition-colors rounded-sm">
            Investors
          </a>
          <a href="#contact" className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors link-underline">
            Contact
          </a>
        </div>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden p-2 -mr-2">
            <button aria-label="Open menu" className="text-foreground">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] p-0 gap-0 flex flex-col">
            <div className="flex items-center px-6 h-[57px] border-b border-black/5 shrink-0">
              <img src="/SLDR_logo.png" alt="Senior Living DR" className="h-7 w-auto" />
            </div>
            <nav className="flex flex-col px-6 py-8 gap-1">
              <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-black/5">
                Platform
              </a>
              <a href="#strategy" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-black/5">
                Strategy
              </a>
              <a href="/blog/" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-black/5">
                Journal
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-black/5">
                Contact
              </a>
              <a href="/investors.html" onClick={() => setMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-[0.14em] mt-6 px-5 py-3 bg-[#b8953e] text-white hover:bg-[#c9a54a] transition-colors text-center" style={{borderRadius:'2px'}}>
                Investors
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative w-screen h-screen overflow-hidden z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/hero_lifestyle.jpg" 
            alt="Senior living in the Caribbean" 
            className="w-full h-full object-cover object-[center_40%] md:object-center"
          />
        </div>
        <div className="hero-gradient absolute inset-y-0 left-0 w-full md:w-[62vw] gradient-overlay-left" />
        
        <div className="hero-content absolute inset-0 flex flex-col justify-center px-5 md:px-[8vw]">
          <div className="max-w-full md:max-w-[46vw]">
            <h1 className="hero-headline leading-[0.95] tracking-[-0.02em] mb-6 md:mb-8"
                style={{ fontSize: 'clamp(28px, 6vw, 60px)' }}>
              <span className="inline-block font-heading-serif text-foreground">Senior Living</span><br />
              <span className="inline-block font-heading-serif italic text-[#b8953e]">Dominican Republic</span>
            </h1>
            <div className="hero-body space-y-3 md:space-y-4 text-black text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-lg">
              <p>We're establishing the foundation for institutional-grade senior living communities in the Dominican Republic.</p>
              <p>Through our investment platform, we're creating opportunities for investors, residents, and operators to participate in the Caribbean's emerging active adult living sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform & Approach */}
      <section ref={section2Ref} id="platform" className="relative w-screen min-h-screen md:h-screen overflow-hidden z-20">
        <div className="absolute inset-0">
          <img 
            src="/garden_path.jpg" 
            alt="Tropical garden" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/40" />

        <div className="s2-headline absolute top-[5vh] md:top-[10vh] left-1/2 -translate-x-1/2 text-center w-[90vw] md:w-auto px-4">
          <p className="eyebrow mb-3">The Platform</p>
          <h2 className="font-heading-serif font-bold text-foreground leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(22px, 5vw, 48px)' }}>
            A comprehensive approach to senior living.
          </h2>
        </div>

        <div className="absolute top-[22vh] left-[6vw] w-[42vw] h-[56vh] hidden md:block">
          <div className="s2-card-left relative w-full h-full card-rounded overflow-hidden card-shadow">
            <img 
              src="/poolside_relaxation.jpg" 
              alt="Resort-style living" 
              className="w-full h-full object-cover"
            />
            <div className="s2-card-text absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-2">
                Resident-Centered Design
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Communities designed to support independence while providing access to care and services as needs evolve.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[26vh] right-[6vw] w-[42vw] h-[56vh] hidden md:block">
          <div className="s2-card-right relative w-full h-full card-rounded overflow-hidden card-shadow">
            <img 
              src="/modern_villa.jpg" 
              alt="Modern architecture" 
              className="w-full h-full object-cover"
            />
            <div className="s2-card-text absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-2">
                Purpose-Built Infrastructure
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Architecture and amenities engineered for operational efficiency and long-term asset value.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden absolute inset-0 flex flex-col pt-[18vh] pb-20 px-4 gap-4 overflow-y-auto">
          <div className="s2-card-left relative w-full aspect-[4/3] card-rounded overflow-hidden card-shadow flex-shrink-0">
            <img 
              src="/poolside_relaxation.jpg" 
              alt="Resort-style living" 
              className="w-full h-full object-cover"
            />
            <div className="s2-card-text absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Resident-Centered Design
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Communities designed to support independence while providing access to care and services as needs evolve.
              </p>
            </div>
          </div>
          <div className="s2-card-right relative w-full aspect-[4/3] card-rounded overflow-hidden card-shadow flex-shrink-0">
            <img 
              src="/modern_villa.jpg" 
              alt="Modern architecture" 
              className="w-full h-full object-cover"
            />
            <div className="s2-card-text absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Purpose-Built Infrastructure
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Architecture and amenities engineered for operational efficiency and long-term asset value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Market Opportunity */}
      <section ref={section3Ref} className="relative w-screen min-h-screen overflow-hidden z-30">
        <div className="absolute inset-0">
          <img 
            src="/61NLMTPoXPOF0NyNiqLdx.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/40" />

        <div className="s3-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] md:w-[86vw] h-[70vh] md:h-[62vh] card-rounded overflow-hidden card-shadow flex items-center">
          <img 
            src="/ScrZvNZq07uVOd6J_TgCG.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="s3-text relative z-10 px-5 md:px-[6%] py-6 md:py-[10%] max-w-full md:max-w-[50%]">
            <p className="font-heading-serif italic text-[#b8953e] text-xl md:text-2xl mb-4">Market Opportunity</p>
            <p className="text-white/80 text-base leading-relaxed">
              We focus on Dominicans, Americans, and Canadians living in the USA who already love the Dominican Republic—a proven country with more than 11 million tourists per year. Our communities appeal to retirees from these areas seeking quality senior living in a destination they know and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Strategy & Operations */}
      <section ref={section4Ref} id="strategy" className="relative w-screen min-h-screen md:h-screen overflow-hidden z-40">
        <div className="absolute inset-0">
          <img 
            src="/wellness_interior.jpg" 
            alt="Wellness interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/50" />

        <div className="s4-headline absolute top-[5vh] md:top-[10vh] left-1/2 -translate-x-1/2 text-center w-[90vw] md:w-auto px-4">
          <p className="eyebrow mb-3">Investment Strategy</p>
          <h2 className="font-heading-serif font-bold text-foreground leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(22px, 5vw, 48px)' }}>
            Disciplined execution. Long-term value.
          </h2>
        </div>

        <div className="absolute top-[26vh] left-[6vw] w-[42vw] h-[56vh] hidden md:block">
          <div className="s4-card-left relative w-full h-full card-rounded overflow-hidden card-shadow">
            <img 
              src="/resort_pool_dusk.jpg" 
              alt="Amenities" 
              className="w-full h-full object-cover"
            />
            <div className="s4-card-text absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-2">
                Integrated Service Model
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                On-site wellness, care coordination, and lifestyle services designed to optimize occupancy and resident retention.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[26vh] right-[6vw] w-[42vw] h-[56vh] hidden md:block">
          <div className="s4-card-right relative w-full h-full card-rounded overflow-hidden card-shadow bg-[#11130E] border border-white/10">
            <div className="s4-card-text absolute inset-0 flex flex-col justify-center p-8">
              <div className="w-12 h-1 bg-accent mb-6" />
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-3">
                Institutional Partnerships
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We work with established operators, healthcare providers, and local stakeholders to ensure 
                regulatory compliance, operational excellence, and sustainable returns.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden absolute inset-0 flex flex-col pt-[18vh] pb-20 px-4 gap-4 overflow-y-auto">
          <div className="s4-card-left relative w-full aspect-[4/3] card-rounded overflow-hidden card-shadow flex-shrink-0">
            <img 
              src="/resort_pool_dusk.jpg" 
              alt="Amenities" 
              className="w-full h-full object-cover"
            />
            <div className="s4-card-text absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Integrated Service Model
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                On-site wellness, care coordination, and lifestyle services designed to optimize occupancy and resident retention.
              </p>
            </div>
          </div>
          <div className="s4-card-right relative w-full min-h-[200px] card-rounded overflow-hidden card-shadow bg-[#11130E] border border-white/10 flex-shrink-0">
            <div className="s4-card-text absolute inset-0 flex flex-col justify-center p-6">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Institutional Partnerships
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We work with established operators, healthcare providers, and local stakeholders to ensure 
                regulatory compliance, operational excellence, and sustainable returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Team & Governance */}
      <section ref={section5Ref} className="relative w-screen min-h-screen md:h-screen overflow-hidden z-50">
        <div className="absolute inset-0">
          <img 
            src="/building_exterior.jpg" 
            alt="Building exterior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/40" />

        <div className="s5-headline absolute top-[5vh] md:top-[10vh] left-1/2 -translate-x-1/2 text-center w-[90vw] md:w-auto px-4">
          <p className="eyebrow mb-3">Leadership</p>
          <h2 className="font-heading-serif font-bold text-foreground leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(22px, 5vw, 48px)' }}>
            Experience across real estate, senior care, and operations.
          </h2>
        </div>

        <div className="absolute top-[24vh] left-[6vw] w-[42vw] h-[60vh] hidden md:block">
          <div className="s5-card-left relative w-full h-full card-rounded overflow-hidden card-shadow">
            <img 
              src="/residents_community.jpg" 
              alt="Community" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-2">
                Operator-Led Development
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our leadership team brings decades of combined experience in senior living operations, 
                real estate development, and healthcare management.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[24vh] right-[6vw] w-[42vw] h-[60vh] hidden md:block">
          <div className="s5-card-right relative w-full h-full card-rounded overflow-hidden card-shadow">
            <img 
              src="/wellness_scene.jpg" 
              alt="Wellness" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-xl mb-2">
                Governance & Transparency
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Institutional reporting standards, regular investor communications, and a commitment 
                to ethical business practices.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden absolute inset-0 flex flex-col pt-[18vh] pb-20 px-4 gap-4 overflow-y-auto">
          <div className="s5-card-left relative w-full aspect-[4/3] card-rounded overflow-hidden card-shadow flex-shrink-0">
            <img 
              src="/residents_community.jpg" 
              alt="Community" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Operator-Led Development
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our leadership team brings decades of combined experience in senior living operations, 
                real estate development, and healthcare management.
              </p>
            </div>
          </div>
          <div className="s5-card-right relative w-full aspect-[4/3] card-rounded overflow-hidden card-shadow flex-shrink-0">
            <img 
              src="/wellness_scene.jpg" 
              alt="Wellness" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-heading-serif font-semibold text-white text-lg mb-2">
                Governance & Transparency
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Institutional reporting standards, regular investor communications, and a commitment 
                to ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Differentiation (Flowing) */}
      <section ref={section6Ref} className="relative w-full min-h-screen bg-background py-12 md:py-[10vh] z-60">
        <div className="s6-headline text-center mb-10 md:mb-16 px-4">
          <p className="eyebrow mb-3">Competitive Positioning</p>
          <h2 className="font-heading-serif font-bold text-foreground leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(22px, 5vw, 48px)' }}>
            What sets us apart.
          </h2>
        </div>

        <div className="relative px-4 md:px-[6vw]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-[4vw]">
            {/* Card A - Location */}
            <div className="s6-card-a w-full md:w-[28vw] md:mt-[6vh]">
              <div className="relative h-[50vw] md:h-[54vh] min-h-[220px] card-rounded overflow-hidden card-shadow card-hover mb-4">
                <img 
                  src="/beach_access.jpg" 
                  alt="Strategic locations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="eyebrow mb-2">Site Selection</p>
              <h3 className="font-heading-serif font-semibold text-foreground text-lg mb-2">
                Prime locations with infrastructure.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proximity to medical facilities, transportation hubs, and essential services—without compromising on environment.
              </p>
            </div>

            {/* Card B - Design */}
            <div className="s6-card-b w-full md:w-[28vw]">
              <div className="relative h-[50vw] md:h-[54vh] min-h-[220px] card-rounded overflow-hidden card-shadow card-hover mb-4">
                <img 
                  src="/interior_design.jpg" 
                  alt="Design standards" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="eyebrow mb-2">Development Standards</p>
              <h3 className="font-heading-serif font-semibold text-foreground text-lg mb-2">
                Built for longevity and adaptability.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Construction quality and flexible floor plans that accommodate changing care needs over time.
              </p>
            </div>

            {/* Card C - Team */}
            <div className="s6-card-c w-full md:w-[28vw] md:mt-[6vh]">
              <div className="relative h-[50vw] md:h-[54vh] min-h-[220px] card-rounded overflow-hidden card-shadow card-hover mb-4">
                <img 
                  src="/team_hospitality.jpg" 
                  alt="Professional management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="eyebrow mb-2">Management</p>
              <h3 className="font-heading-serif font-semibold text-foreground text-lg mb-2">
                Professional operations from day one.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Partnerships with experienced operators ensure communities open with established protocols and trained staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="relative w-full bg-[#FAF7F2] border-t border-black/5 z-70">
        <div className="px-5 md:px-[8vw] py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow mb-2">From the Journal</p>
              <h2 className="font-heading-serif font-semibold text-foreground leading-tight tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(22px, 3.5vw, 36px)' }}>
                Caribbean Retirement, Clearly Explained
              </h2>
            </div>
            <a href="/blog/" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors link-underline whitespace-nowrap">
              All articles →
            </a>
          </div>

          <a href="/blog/retiring-in-dominican-republic" className="group flex flex-col md:flex-row gap-0 border border-black/8 hover:border-[#b8953e] transition-colors bg-white">
            <div className="md:w-[380px] shrink-0 overflow-hidden" style={{ minHeight: '220px' }}>
              <img
                src="/KfYAwUWciFne_5umHPq5H.png"
                alt="Retiring in the Dominican Republic"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ minHeight: '220px' }}
              />
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C4922A]">Caribbean Retirement</span>
                  <span className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground/60">March 2026 · 12 min read</span>
                </div>
                <h3 className="font-heading-serif font-semibold text-foreground leading-snug mb-3"
                    style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                  Retiring in the Dominican Republic: The Caribbean Dream That Finally Makes Sense
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For decades, retirees chose Costa Rica, Panama, or Mexico. A new wave is discovering what those in the know have kept quiet: the DR offers more warmth, more culture, and a stronger dollar.
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C4922A] mt-6 flex items-center gap-2">
                Read article <span>→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Section 7: Contact (Flowing) */}
      <section ref={section7Ref} id="contact" className="relative w-full min-h-screen bg-[#11130E] overflow-hidden z-70">
        <div className="absolute inset-0 contact-bg">
          <img 
            src="/contact_lifestyle.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover object-[center_35%] md:object-center opacity-50"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-full md:w-[70vw] gradient-overlay-dark-left" />

        <div className="s7-content relative z-10 flex flex-col justify-center min-h-screen px-5 md:px-[8vw] py-24 md:py-[18vh]">
          <div className="max-w-full md:max-w-[44vw]">
            <p className="eyebrow text-white/60 mb-4">Contact</p>
            <h2 className="font-heading-serif font-bold text-white leading-tight tracking-[-0.02em] mb-4"
                style={{ fontSize: 'clamp(22px, 5vw, 48px)' }}>
              For investor and partnership inquiries.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              We welcome conversations with institutional investors, family offices, and strategic partners 
              interested in the senior living sector in the Dominican Republic.
            </p>
            
            <a 
              href="mailto:info@seniorlivingdr.com" 
              className="inline-flex items-center gap-3 text-accent hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-medium link-underline">info@seniorlivingdr.com</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-[8vw] py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center md:items-start md:justify-between text-center md:text-left">
            <p className="text-white/50 text-xs md:text-sm">
              © 2026 Senior Living Dominican Republic
            </p>
            <span className="text-white/50 text-xs md:text-sm">Punta Cana • Santo Domingo</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
