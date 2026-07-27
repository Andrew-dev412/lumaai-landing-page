// @ts-nocheck
import React, { useEffect, useState } from 'react';

// Static KOL data
const ALL_KOLS = [
  '@chad_crypto', '@rj_insights', '@pabloxgems', '@ryoshiriskydegen', '@dylansdirtydiary',
  '@thebasementcalls', '@dylansdegens', '@daddys_drift', '@thetribunalcourt', '@darkycalls',
  '@cryptocowboyx', '@overdose_gems_calls', '@riseofdegenoz', '@exyslab', '@abusinsights',
  '@mansorahmoney', '@mansorycryptocalls', '@uneventesting', '@trade_with_unique_alpha',
  '@cryptotalkwithfrog', '@curlycurrycalls', '@gemsofgoblin', '@noachark', '@shyroshigambles',
  '@gemsofra', '@beachcalls', '@united_traders_calls', '@animegems', '@degemscalls',
  '@bob_alpha', '@gemsofsensei', '@ramcalls', '@cmnt_lair', '@theapedgemscalls',
  '@finaltesting01', '@moneylord_calls', '@detecter_calls', '@dr_crypto_channel',
  '@coinespercalls', '@whales100xsignals', '@x666calls', '@venomcalls', '@andrewalphacalls',
  '@reapergamble', '@archerrgambles', '@cryptoalche', '@elitecryptocalls', '@swipzzgems',
  '@smithgems', '@furygems'
];

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kolSearch, setKolSearch] = useState('');
  const [copiedKol, setCopiedKol] = useState<string | null>(null);

  // Filter KOLs based on search
  const filteredKols = kolSearch.trim()
    ? ALL_KOLS.filter(kol => kol.toLowerCase().includes(kolSearch.toLowerCase()))
    : ALL_KOLS;

  const handleCopyKol = (username: string) => {
    navigator.clipboard.writeText(username);
    setCopiedKol(username);
    setTimeout(() => setCopiedKol(null), 2000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Initialize scripts after component mounts

    // Script 1
    (function() {
!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    })();

    // Script 2
    (function() {
(function() {
            const container = document.getElementById('hero-scroll-wrapper');
            const card = document.getElementById('hero-scroll-card');
            const shadow = document.getElementById('hero-scroll-shadow');
            
            if (!container || !card) return;

            function onScroll() {
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate position relative to viewport
                // We want the effect to start when element enters viewport bottom
                // And finish (become flat) when element is near center/top
                
                const elementTop = rect.top;
                const elementHeight = rect.height;
                const triggerPoint = windowHeight * 0.85; // Start animating when top is at 85% of viewport
                
                // Distance from trigger point
                let dist = triggerPoint - elementTop;
                
                // Map distance to progress (0 to 1)
                // We want it to be fully flat (1) when elementTop is around 10% of viewport
                const finishPoint = windowHeight * 0.1;
                const totalDistance = triggerPoint - finishPoint;
                
                let progress = dist / totalDistance;
                progress = Math.max(0, Math.min(1, progress));
                
                // Inverse logic: 
                // Progress 0 = Tilted (Start)
                // Progress 1 = Flat (End)
                
                // Start at 45deg tilt, end at 0deg
                const rotateX = 45 - (progress * 45);
                
                // Start at 0.8 scale, end at 1.0
                const scale = 0.8 + (progress * 0.2);
                
                // Opacity fade in
                const opacity = 0.5 + (progress * 0.5);
                
                card.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
                card.style.opacity = `${opacity}`;

                if(shadow) {
                    shadow.style.opacity = `${progress * 0.6}`;
                    shadow.style.transform = `translateX(-50%) scale(${scale})`;
                }
            }
            
            window.addEventListener('scroll', () => window.requestAnimationFrame(onScroll));
            window.addEventListener('resize', () => window.requestAnimationFrame(onScroll));
            onScroll(); // Initial calculation
        })();
    })();

    // Script 3 - FAQ Toggle (now handled via React state)

    // Script 4
    (function() {
// Lucide Icons
      lucide.createIcons();

      // Counter Animation
      const counters = document.querySelectorAll('.counter');

      const animateCounters = () => {
          counters.forEach(counter => {
              const target = parseFloat(counter.getAttribute('data-target') || '0');
              const duration = 2000;
              const start = 0;
              const startTime = performance.now();

              function updateCount(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = (progress === 1) ? 1 : 1 - Math.pow(2, -10 * progress);
                  const current = start + (target - start) * ease;

                  if (target % 1 !== 0) {
                      (counter as HTMLElement).innerText = current.toFixed(1);
                  } else {
                      (counter as HTMLElement).innerText = Math.floor(current).toString();
                  }

                  if (progress < 1) {
                      requestAnimationFrame(updateCount);
                  } else {
                      (counter as HTMLElement).innerText = target.toString();
                  }
              }
              requestAnimationFrame(updateCount);
          });
      };
      setTimeout(animateCounters, 800);

      // Spotlight Effect Logic
      function handleMouseMove(e) {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
      }
    })();

  }, []);

  return (
    <>





{/* Background (component) added by Aura */}
<div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden animation-clip-container"><div className="aura-background-component w-full h-full brightness-75 opacity-100 hue-rotate-15 saturate-50 animation-scale" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full absolute h-full">
  <div data-us-project="4gq2Yrv2p0bIa0hdLPQx" className="absolute w-full h-full left-0 top-0"></div>

</div></div></div>
    
    




    {/* Navbar */}
    <nav className="fixed -translate-x-1/2 z-50 flex gap-3 shadow-black/40 transition-all duration-300 md:gap-6 bg-black/60 w-[92%] max-w-fit border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-4 top-6 left-1/2 shadow-2xl backdrop-blur-xl gap-x-3 gap-y-3 items-center justify-between" style={{position: 'fixed'}}>
      <div className="flex shrink-0 items-center gap-2">
        <img src="/luma-logo.png" alt="Luma AI" className="w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full object-cover" />
        <span className="hidden font-medium tracking-tight text-white font-poppins md:block">
          Luma AI
        </span>
      </div>

      <div className="hidden items-center gap-0.5 rounded-full border border-white/5 bg-white/5 px-2 py-1 md:flex">
        <a href="#home" className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white font-poppins">
          Home
        </a>
        <a href="#features" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Agent
        </a>
        <a href="#setup" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Setup
        </a>
        <a href="#kol-finder-section" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Find
        </a>
        <a href="#dapp" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Dapp
        </a>
        <a href="#why" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Why?
        </a>
        <a href="#luma" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          $LUMA
        </a>
        <a href="#roadmap" className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white font-poppins">
          Roadmap
        </a>
        <a href="#faqs" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full px-3 py-1.5">
          FAQs
        </a>
        <a href="#links" className="transition-colors hover:bg-white/10 hover:text-white text-xs font-medium text-zinc-400 font-poppins rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
          Links
        </a>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <a href="https://t.me/cortexasol_bot" target="_blank" rel="noopener noreferrer" className="shiny-cta-bw inline-flex whitespace-nowrap transition-all hover:scale-105 focus:outline-none text-xs font-semibold text-white font-poppins rounded-full pt-2 pr-5 pb-2 pl-5 relative items-center justify-center" style={{'--gradient-shine': '#ffffff'} as React.CSSProperties}>
          <style dangerouslySetInnerHTML={{__html: `
            @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
            @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
            @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
            @property --gradient-shine { syntax: "<color>"; initial-value: #ffffff; inherits: false; }

            .shiny-cta-bw {
                --gradient-angle: 0deg;
                --gradient-angle-offset: 0deg;
                --gradient-percent: 20%;
                --gradient-shine: #ffffff;
                background: linear-gradient(#000000, #000000) padding-box,
                            conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                            transparent 0%, #333333 5%, var(--gradient-shine) 15%, #333333 30%, transparent 40%, transparent 100%) border-box;
                border: 1px solid transparent;
                box-shadow: inset 0 0 0 1px #1a1818;
                animation: border-spin 2.5s linear infinite;
            }

            @keyframes border-spin { to { --gradient-angle: 360deg; } }

            .shiny-cta-bw::before {
                content: '';
                pointer-events: none;
                position: absolute;
                inset: 0;
                border-radius: 9999px;
                padding: 1px;
                background: radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%);
                opacity: 0.5;
                z-index: -1;
            }

            .shiny-cta-bw span::before {
                content: '';
                pointer-events: none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                width: 140%;
                height: 140%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
                opacity: 0;
                transition: opacity 0.3s;
            }

            .shiny-cta-bw:hover span::before {
                opacity: 1;
            }
          `}} />
          <span className="z-10 relative">Launch Agent</span>
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-4 w-4">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-4 px-6 flex flex-col gap-2">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Home
          </a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Agent
          </a>
          <a href="#kol-finder-section" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Find
          </a>
          <a href="#dapp" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Dapp
          </a>
          <a href="#why" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Why?
          </a>
          <a href="#luma" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            $LUMA
          </a>
          <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Roadmap
          </a>
          <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            FAQs
          </a>
          <a href="#links" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:bg-white/10 hover:text-white text-sm font-medium text-zinc-400 font-poppins rounded-lg py-3 px-4">
            Links
          </a>
        </div>
      )}
    </nav>

    {/* Main Hero */}
    <main id="home" className="flex flex-col min-h-screen md:px-6 md:pb-1 rounded-none pt-32 pr-4 pb-12 pl-4 relative items-center justify-center z-10">
      {/* Shooting Star Effect (Background Decoration) */}
      <div className="absolute top-20 left-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[-45deg] opacity-30"></div>
      <div className="absolute top-40 right-[30%] w-[1px] h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-[-30deg] opacity-20" style={{}}></div>

      {/* Pill Badge */}
      <div className="animate-fade-in flex hover:bg-white/10 transition-colors cursor-default bg-white/5 opacity-0 w-fit border-white/10 border rounded-full mb-8 pt-1 pr-1 pb-1 pl-1 gap-y-2 items-center gap-x-2" style={{animationDelay: '0.2s'}}>
        <span className="text-xs font-medium text-zinc-400 font-poppins pr-3 pl-3">Optimal Entries, Every Time</span>
      </div>

      {/* Hero Title */}
      <h1 className="animate-fade-in leading-[1.1] gradient-text md:text-7xl text-5xl font-semibold tracking-tighter font-montserrat text-center opacity-0 max-w-4xl mb-6 pt-3 pb-3" style={{animationDelay: '0.3s'}}>
  Never Miss Another KOL Call Again
</h1>

      {/* Subtitle */}
      <p className="animate-fade-in md:text-lg leading-relaxed text-base text-zinc-400 font-poppins text-center opacity-0 max-w-2xl mb-10" style={{animationDelay: '0.4s'}}>AI-powered automation that monitors your favorite KOL calls across Telegram and Twitter 24/7 and executes automatically, capturing optimal entries before manual traders arrive.</p>

      {/* CTA Buttons */}
      <div className="opacity-0 animate-fade-in flex flex-col sm:flex-row items-center gap-4 mb-20" style={{animationDelay: '0.5s'}}>
        {/* Main Button (White) */}
        <a href="https://cortexa.gitbook.io/docs" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-200 transition-all hover:scale-[1.02] flex text-sm font-semibold text-black font-poppins bg-white h-12 rounded-full pr-8 pl-8 items-center justify-center">
          Documentation
        </a>

        {/* Secondary Button (Animated Beam Component) */}
        <a href="#features" className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] focus:outline-none text-sm font-medium text-white tracking-wider rounded-full h-12 px-8 relative items-center justify-center">
          {/* Full Border Beam */}
          <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_360deg)] animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-[1px] rounded-full bg-black"></div>
          </div>

          {/* Inner Background & Effects */}
          <div className="-z-10 overflow-hidden bg-black rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent" style={{}}></div>
            <div className="animate-dots-move opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
          </div>

          {/* Content */}
          <span className="transition-colors group-hover:text-white capitalize text-zinc-300 font-poppins z-10 relative">
            Get Started
          </span>
        </a>
      </div>

      {/* CA Section */}
      <div className="opacity-0 animate-fade-in flex items-center justify-center gap-3" style={{animationDelay: '0.6s'}}>
        <span className="text-sm font-medium text-zinc-500 font-poppins tracking-wide">CA -</span>
        <span className="text-sm font-medium text-zinc-400 font-mono tracking-wide" id="ca-address">7Li45Pb97GLL8NLD8kVCabrWHE8RDuZpDdYRn38Lpump</span>
        <button
          className="group/copy flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-white/10 hover:text-white transition-colors focus:outline-none relative"
          aria-label="Copy CA"
          onClick={() => {
            const ca = document.getElementById('ca-address')?.textContent;
            if (ca && ca !== 'TBA') {
              navigator.clipboard.writeText(ca);
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-active/copy:scale-90">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
        </button>
      </div>

      {/* Trusted Projects Marquee (POPULATED) */}
      <div className="grid grid-cols-1 animate-fade-in md:grid-cols-3 font-geist-mono opacity-0 w-full max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-20 pl-4 gap-x-8 gap-y-8" style={{animationDelay: '0.8s'}}>
        {/* Stat 1 */}
        <div className="group flex items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2 cursor-default">
          <span className="md:text-6xl tabular-nums text-5xl font-semibold tracking-tighter font-montserrat gradient-text-numbers">
            <span className="counter font-montserrat" data-target="2361">2361</span>
          </span>
          <span className="leading-tight text-sm font-medium text-zinc-400 font-poppins max-w-[80px]">
            Calls Detected
          </span>
        </div>

        {/* Stat 2 */}
        <div className="group flex items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2 cursor-default">
          <span className="md:text-6xl tabular-nums text-5xl font-semibold tracking-tighter font-montserrat gradient-text-numbers">
            <span className="counter font-montserrat" data-target="470">470</span>
            +
          </span>
          <span className="leading-tight text-sm font-medium text-zinc-400 font-poppins max-w-[80px]">
            Trades Executed
          </span>
        </div>

        {/* Stat 3 */}
        <div className="group flex items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2 cursor-default">
          <span className="md:text-6xl tabular-nums text-5xl font-semibold tracking-tighter font-montserrat gradient-text-numbers">
            $<span className="counter font-montserrat" data-target="3170">3170</span>
          </span>
          <span className="leading-tight text-sm font-medium text-zinc-400 font-poppins max-w-[80px]">
            Total Volume
          </span>
        </div>
      </div>

      <div className="opacity-0 animate-fade-in w-full max-w-5xl mx-auto relative overflow-hidden mb-8 mt-16 bg-transparent" style={{animationDelay: '1.0s'}}>
        {/* Scrolling Content */}
        <div className="flex animate-marquee hover:opacity-80 transition-opacity duration-500 hover:grayscale-0 opacity-40 w-max h-12 grayscale items-center">
          {/* Logos Set 1 */}
          <div className="flex pr-8 pl-8 gap-x-20 gap-y-20 items-center">

  {/* Heading/Label */}
  <div className="flex items-center gap-4 opacity-60">
    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] font-poppins whitespace-nowrap">Supported Chains</span>
    <div className="h-8 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
  </div>

  {/* RobinHood (Active) */}
  <div className="flex items-center gap-3 group cursor-pointer transition-all hover:scale-105 hover:opacity-100">
    <iconify-icon icon="simple-icons:robinhood" width="28" class="text-white"></iconify-icon>
    <span className="text-lg font-medium font-montserrat tracking-tight text-white">RobinHood</span>
  </div>

  {/* Ethereum (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:ethereum" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" className=""></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Ethereum</span>
  </div>

  {/* BSC (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:binance" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">BSC</span>
  </div>

  {/* Matic (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:polygon" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" className=""></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Polygon</span>
  </div>

  {/* Base (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 111 111" fill="none" className="text-white">
        <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor"/>
      </svg>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Base</span>
  </div>

</div>

          {/* Logos Set 2 (Duplicate for seamless loop) */}
          <div className="flex pl-20 gap-x-20 gap-y-20 items-center">

  {/* Heading/Label */}
  <div className="flex items-center gap-4 opacity-60">
    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] font-poppins whitespace-nowrap">Supported Chains</span>
    <div className="h-8 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
  </div>

  {/* RobinHood (Active) */}
  <div className="flex items-center gap-3 group cursor-pointer transition-all hover:scale-105 hover:opacity-100">
    <iconify-icon icon="simple-icons:robinhood" width="28" class="text-white"></iconify-icon>
    <span className="text-lg font-medium font-montserrat tracking-tight text-white">RobinHood</span>
  </div>

  {/* Ethereum (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:ethereum" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" className=""></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Ethereum</span>
  </div>

  {/* BSC (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:binance" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">BSC</span>
  </div>

  {/* Matic (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <iconify-icon icon="simple-icons:polygon" width="28" class="text-white"></iconify-icon>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" className=""></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Polygon</span>
  </div>

  {/* Base (Locked) */}
  <div className="flex items-center gap-3 group cursor-not-allowed opacity-70 hover:opacity-100 transition-all grayscale">
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 111 111" fill="none" className="text-white">
        <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor"/>
      </svg>
      <div className="absolute -top-2 -right-2 bg-black/90 rounded-full p-[2px] border border-zinc-800 shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
    </div>
    <span className="text-lg font-normal font-montserrat tracking-tight text-zinc-400">Base</span>
  </div>

</div>
        </div>
      </div>

      {/* STATISTICS SECTION */}
    </main>

    {/* FEATURES SECTION: GATEWAY TO AUTOMATION (Monochrome, with Spotlight) */}
    <section className="w-full max-w-7xl z-10 border-white/5 border-t mr-auto ml-auto pt-32 pr-6 pb-4 pl-6 relative">
      <div className="flex flex-col" id="features">
        {/* Top Part */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-16 items-center">
          <div className="flex flex-col mx-5">
            <span className="uppercase text-xs text-zinc-500 tracking-[0.2em] font-poppins mb-6">
              AUTONOMOUS TRADING SYSTEM
            </span>

            <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white tracking-tighter font-montserrat mb-6">
              Track Every <span className="text-zinc-400">KOL</span> Call
              <br />
              <span className="text-zinc-400">Trade</span> Every Opportunity.
            </h2>

            <p className="md:text-base leading-relaxed text-sm text-zinc-400 font-poppins max-w-lg mb-10">
              The agent monitors your favorite KOLs 24/7 across Telegram and
              Twitter, capturing every call while you sleep, work, or stay
              offline. Manual traders miss opportunities because they can't
              watch around clock. You don't. The bot detects signals instantly,
              executes within few seconds, and secures optimal entries. No
              manual copying. No missed calls. Just automated execution running
              continuously.
            </p>

            <a href="https://t.me/cortexasol_bot" target="_blank" rel="noopener noreferrer" className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-[1px] relative items-center justify-center w-fit mb-3">
  {/* Spinning Border Beam (Visible on Hover) */}
  <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

  {/* Default Static Border */}
  <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>

  {/* 3D Button Surface & Content */}
  <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2.5 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
    <span className="font-poppins z-10 relative">LAUNCH AGENT</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </span>
</a>
          </div>

          {/* Abstract Visual (Right) */}
          <div className="flex w-full h-[400px] pl-1 relative perspective-[1000px] items-center justify-center">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes flowBeam {
                  0% { stroke-dashoffset: 300; opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 0; }
              }
              @keyframes pulse-ring {
                  0% { transform: scale(0.8); opacity: 0.5; }
                  100% { transform: scale(1.3); opacity: 0; }
              }
              .noodle-beam {
                  stroke-dasharray: 60 300;
                  animation: flowBeam 3s linear infinite;
              }
            `}} />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>

            {/* Data Noodles (SVG Layer) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="noodle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.1}}></stop>
                  <stop offset="100%" style={{stopColor: '#a1a1aa', stopOpacity: 0.1}}></stop>
                </linearGradient>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
              </defs>

              {/* Connection 1: Telegram (Top Left) to Bot */}
              <path d="M 150 120 C 200 120 220 200 300 200" stroke="url(#noodle-gradient)" strokeWidth="2" fill="none"></path>
              <path d="M 150 120 C 200 120 220 200 300 200" stroke="#a1a1aa" strokeWidth="3" fill="none" className="noodle-beam" strokeLinecap="round" filter="url(#glow-filter)"></path>

              {/* Connection 2: Twitter (Top Right) to Bot */}
              <path d="M 450 120 C 400 120 380 200 300 200" stroke="url(#noodle-gradient)" strokeWidth="2" fill="none"></path>
              <path d="M 450 120 C 400 120 380 200 300 200" stroke="#71717a" strokeWidth="3" fill="none" className="noodle-beam" strokeLinecap="round" style={{animationDelay: '1s'}} filter="url(#glow-filter)"></path>

              {/* Connection 3: Bot to Execution Left (Bottom Left) */}
              <path d="M 300 200 C 280 260 200 280 150 320" stroke="url(#noodle-gradient)" strokeWidth="2" fill="none"></path>
              <path d="M 300 200 C 280 260 200 280 150 320" stroke="#52525b" strokeWidth="3" fill="none" className="noodle-beam" strokeLinecap="round" style={{animationDelay: '0.5s'}} filter="url(#glow-filter)"></path>

              {/* Connection 4: Bot to Execution Right (Bottom Right) */}
              <path d="M 300 200 C 320 260 400 280 450 320" stroke="url(#noodle-gradient)" strokeWidth="2" fill="none"></path>
              <path d="M 300 200 C 320 260 400 280 450 320" stroke="#52525b" strokeWidth="3" fill="none" className="noodle-beam" strokeLinecap="round" style={{animationDelay: '1.5s'}} filter="url(#glow-filter)"></path>
            </svg>

            {/* Source Node: Telegram (Top Left) */}
            <div className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex bg-zinc-900/90 w-12 h-12 border-zinc-700 border rounded-2xl relative shadow-lg shadow-white/5 backdrop-blur-sm items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send text-zinc-400">
                  <line x1="22" x2="11" y1="2" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2" className=""></polygon>
                </svg>
                {/* Label */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 rounded text-[10px] font-medium text-white whitespace-nowrap border border-zinc-700">
                  Telegram
                </div>
              </div>
            </div>

            {/* Source Node: Twitter (Top Right) */}
            <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-12 h-12 bg-zinc-900/90 rounded-2xl border border-zinc-700 flex items-center justify-center shadow-lg shadow-white/5 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-[20px] h-[20px]" data-icon-replaced="true" style={{width: '20px', height: '20px', color: 'rgb(161, 161, 170)'}}>
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" className=""></path>
                </svg>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 rounded text-[10px] font-medium text-white whitespace-nowrap border border-zinc-700">
                  Twitter
                </div>
              </div>
            </div>

            {/* Central Intelligence Node */}
            <div className="relative w-24 h-24 z-30 flex items-center justify-center">
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full bg-white/5 animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border border-white/10 scale-110 opacity-50"></div>

              {/* Core */}
              <div className="relative w-20 h-20 bg-black rounded-full border border-zinc-700 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black opacity-50"></div>
                {/* Animated Scan Line inside Bot */}
                <div className="absolute w-full h-[2px] bg-white/20 top-0 animate-[scan_2s_linear_infinite]" style={{boxShadow: '0 0 10px rgba(255,255,255,0.5)'}}></div>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot text-white relative z-10">
                  <path d="M12 8V4H8" className=""></path>
                  <rect width="16" height="12" x="4" y="8" rx="2" className=""></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-10 flex flex-col items-center gap-1">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                  Monitoring
                </span>
                <div className="flex gap-1 gap-x-1 gap-y-1">
                  <div className="animate-bounce bg-green-700 w-1 h-1 rounded-full"></div>
                  <div className="animate-bounce bg-green-700 w-1 h-1 rounded-full" style={{animationDelay: '0.2s'}}></div>
                  <div className="animate-bounce bg-green-700 w-1 h-1 rounded-full" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            {/* Execution Node: Left (Bottom Left) */}
            <div className="absolute left-[25%] top-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex shadow-white/5 bg-zinc-900/90 w-12 h-12 border-zinc-700 border rounded-2xl relative shadow-lg backdrop-blur-sm items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-[20px] h-[20px]" data-icon-replaced="true" style={{width: '20px', height: '20px', color: 'rgb(161, 161, 170)'}}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" className=""></polygon>
                </svg>
                <div className="-bottom-8 -translate-x-1/2 text-[10px] whitespace-nowrap font-medium text-white bg-zinc-800 border-zinc-700 border rounded pt-1 pr-2 pb-1 pl-2 absolute left-1/2">
                  Buy
                </div>
              </div>
            </div>

            {/* Execution Node: Right (Bottom Right) */}
            <div className="absolute left-[75%] top-[80%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex shadow-white/5 bg-zinc-900/90 w-12 h-12 border-zinc-700 border rounded-2xl relative shadow-lg backdrop-blur-sm items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone-call" className="lucide lucide-phone-call" data-icon-set="lucide" data-icon-replaced="true" style={{color: 'rgb(161, 161, 170)'}}><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                <div className="-bottom-8 -translate-x-1/2 text-[10px] whitespace-nowrap font-medium text-white bg-zinc-800 border-zinc-700 border rounded pt-1 pr-2 pb-1 pl-2 absolute left-1/2">
                  Call
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Heading */}
        <div className="flex flex-col items-start mb-6 mt-16 mx-5">
          <h3 className="text-4xl font-medium tracking-tight font-montserrat md:text-5xl" style={{background: 'linear-gradient(to right, #ffffff, #71717a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Core Capabilities
          </h3>
        </div>

        {/* Bottom Grid (Spotlight Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden bg-zinc-900 border-zinc-900 border rounded-2xl mb-24 relative" id="spotlight-grid">
  {/* Beam Animation Element (Behind Cards) */}
  <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_320deg,rgba(255,255,255,0.2)_360deg)] opacity-50 pointer-events-none">
  </div>

  {/* Feature 1 */}
  <div className="group flex flex-col bg-black h-full z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-4 gap-y-4" style={{'--mouse-x': '157.9734878540039px', '--mouse-y': '12.54736328125px'} as React.CSSProperties}>
    {/* Flashlight Border */}
    <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', WebkitMaskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', WebkitMaskClip: 'content-box, border-box', WebkitMaskComposite: 'xor', maskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}>
    </div>
    {/* Flashlight Background */}
    <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)'}}>
    </div>

    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white mb-2 w-fit relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="cpu" className="lucide lucide-cpu stroke-[1.5] w-[24px] h-[24px]"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
    </div>
    <h3 className="text-lg font-normal text-white font-montserrat relative z-10">
      AI Intelligence
    </h3>
    <p className="leading-relaxed text-xs text-zinc-500 font-poppins relative z-10">
      Advanced AI analyzes context and sentiment to separate genuine buy
      calls from casual mentions and noise. Only high-confidence signals
      trigger execution.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="group relative z-10 flex flex-col gap-4 bg-black p-8 h-full" style={{'--mouse-x': '210.48297119140625px', '--mouse-y': '4.1837158203125px'} as React.CSSProperties}>
    {/* Flashlight Border */}
    <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', WebkitMaskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', WebkitMaskClip: 'content-box, border-box', WebkitMaskComposite: 'xor', maskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}>
    </div>
    {/* Flashlight Background */}
    <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)'}}>
    </div>

    <div className="z-10 text-white bg-zinc-900/50 w-fit border-zinc-800 border rounded-lg mb-2 pt-3 pr-3 pb-3 pl-3 relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-[20px] h-[20px]" data-icon-replaced="true" style={{color: 'rgb(161, 161, 170)'}}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" className=""></polygon>
      </svg>
    </div>
    <h3 className="z-10 text-lg font-normal text-white font-montserrat relative">
      Lightning-Fast
    </h3>
    <p className="leading-relaxed text-xs text-zinc-500 font-poppins z-10 relative">
      Executes within seconds while others are still offline. When
      they finally see the call and start trading manually, you're
      already in at optimal entry. Speed wins.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="group relative z-10 flex flex-col gap-4 bg-black p-8 h-full" style={{'--mouse-x': '17.53790283203125px', '--mouse-y': '268.6382598876953px'} as React.CSSProperties}>
    {/* Flashlight Border */}
    <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', WebkitMaskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', WebkitMaskClip: 'content-box, border-box', WebkitMaskComposite: 'xor', maskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}>
    </div>
    {/* Flashlight Background */}
    <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)'}}>
    </div>

    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white mb-2 w-fit relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone-call" className="lucide lucide-phone-call stroke-[1.5]" data-icon-set="lucide" data-icon-replaced="true" style={{color: 'rgb(255, 255, 255)'}}><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
    </div>
    <h3 className="text-lg font-normal text-white font-montserrat z-10 relative">
      Stay Informed Anywhere
    </h3>
    <p className="leading-relaxed text-xs text-zinc-500 font-poppins z-10 relative">
      AI-powered automation that monitors your favorite KOL calls across
      Telegram and Twitter 24/7 and executes before manual traders
      finish copying contracts
    </p>
  </div>

  {/* Feature 4 */}
  <div className="group relative z-10 flex flex-col gap-4 bg-black p-8 h-full" style={{'--mouse-x': '177.1383056640625px', '--mouse-y': '42.1534423828125px'} as React.CSSProperties}>
    {/* Flashlight Border */}
    <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', WebkitMaskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', WebkitMaskClip: 'content-box, border-box', WebkitMaskComposite: 'xor', maskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)', maskClip: 'content-box, border-box', maskComposite: 'exclude', padding: '1px'}}>
    </div>
    {/* Flashlight Background */}
    <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)'}}>
    </div>

    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white mb-2 w-fit relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="airplay" className="lucide lucide-airplay stroke-[1.5]" data-icon-set="lucide" data-icon-replaced="true" style={{color: 'rgb(255, 255, 255)'}}><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><path d="m12 15 5 6H7Z"></path></svg>
    </div>
    <h3 className="z-10 text-lg font-normal text-white font-montserrat relative">
      Multi-Platform
    </h3>
    <p className="leading-relaxed text-xs text-zinc-500 font-poppins z-10 relative">
      Tracks both Telegram channels and Twitter profiles from the same
      KOL. Some post best calls on Twitter, others in Telegram. The
      Agent captures signals from both platforms
    </p>
  </div>
</div>
        
        {/* NEW HOW IT WORKS SECTION */}
        <div id="setup" className="flex flex-col text-center mb-16 pt-32 relative items-center">
          <div className="-z-10 overflow-hidden w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <div className="-translate-x-1/2 blur-[100px] bg-white/5 opacity-100 w-[600px] h-[300px] rounded-full absolute top-0 left-1/2">
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none">
            </div>
          </div>
          <span className="uppercase text-xs font-medium text-zinc-500 tracking-[0.2em] font-poppins mb-4">
                  How it works
                </span>
          <h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight font-montserrat mb-6">
  Three Steps to <span className="text-zinc-400">Automation</span>
</h2>
          <p className="leading-relaxed md:text-base text-sm text-zinc-400 font-poppins max-w-xl mb-20">
            Complexity abstracted into three simple steps. Configure your agent
            once, and let it hunt for alpha opportunities continuously.
          </p>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes beam-flow-horizontal {
              0% { transform: translateX(-100%); opacity: 0; }
              15% { opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              85% { opacity: 0; }
              100% { transform: translateX(100%); opacity: 0; }
            }
            @keyframes beam-flow-vertical {
              0% { transform: translateY(-100%); opacity: 0; }
              15% { opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              85% { opacity: 0; }
              100% { transform: translateY(100%); opacity: 0; }
            }
          `}} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 w-full max-w-6xl pr-4 pb-8 pl-4 relative gap-x-12 gap-y-16">
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes step-pulse-1 {
        0%, 100% { border-color: rgb(39 39 42); background-color: rgb(9 9 11); box-shadow: none; transform: scale(1); }
        15% { border-color: rgba(255, 255, 255, 1); background-color: rgb(24 24 27); box-shadow: 0 0 25px rgba(255, 255, 255, 0.5); transform: scale(1.05); }
        30% { border-color: rgb(39 39 42); background-color: rgb(9 9 11); box-shadow: none; transform: scale(1); }
      }
      @keyframes step-pulse-2 {
        0%, 35%, 100% { border-color: rgb(39 39 42); background-color: rgb(9 9 11); box-shadow: none; transform: scale(1); }
        50% { border-color: rgba(255, 255, 255, 1); background-color: rgb(24 24 27); box-shadow: 0 0 25px rgba(255, 255, 255, 0.5); transform: scale(1.05); }
        65% { border-color: rgb(39 39 42); background-color: rgb(9 9 11); box-shadow: none; transform: scale(1); }
      }
      @keyframes step-pulse-3 {
        0%, 70%, 100% { border-color: rgb(39 39 42); background-color: rgb(9 9 11); box-shadow: none; transform: scale(1); }
        85% { border-color: rgba(255, 255, 255, 1); background-color: rgb(24 24 27); box-shadow: 0 0 25px rgba(255, 255, 255, 0.5); transform: scale(1.05); }
      }
    `}} />
    
    {/* Connection Lines */}
    {/* Desktop Horizontal Line */}
    <div className="hidden md:block absolute top-[32px] left-[16.5%] right-[16.5%] h-px bg-zinc-800/60 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_1px_rgba(255,255,255,0.8)]" style={{animation: 'beam-flow-horizontal 3s linear infinite'}}></div>
    </div>
    {/* Mobile Vertical Line */}
    <div className="md:hidden absolute left-1/2 top-[32px] bottom-[32px] w-px bg-zinc-800/60 -translate-x-1/2 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_1px_rgba(255,255,255,0.8)]" style={{animation: 'beam-flow-vertical 3s linear infinite'}}></div>
    </div>

    {/* Step 1 */}
    <div className="flex flex-col items-center relative group">
        <div className="relative w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 z-10 transition-colors duration-300" style={{animation: 'step-pulse-1 3s linear infinite'}}>
            <span className="text-white font-mono text-xl font-semibold">01</span>
        </div>
        <h3 className="text-2xl font-medium text-white tracking-tight font-montserrat text-center mb-4">Setup Wallet</h3>
        <p className="leading-relaxed text-base text-zinc-500 font-poppins text-center max-w-[320px]">Generate or import a secure wallet through the agent</p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center relative group">
        <div className="relative w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 z-10 transition-colors duration-300" style={{animation: 'step-pulse-2 3s linear infinite'}}>
            <span className="text-white font-mono text-xl font-semibold">02</span>
        </div>
        <h3 className="text-2xl font-medium text-white tracking-tight font-montserrat text-center mb-4">Select KOLs</h3>
        <p className="leading-relaxed text-base text-zinc-500 font-poppins text-center max-w-[320px]">Ask Agent which Telegram channels and Twitter profiles you want the to monitor for calls.</p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center relative group">
        <div className="relative w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 z-10 transition-colors duration-300" style={{animation: 'step-pulse-3 3s linear infinite'}}>
            <span className="text-white font-mono text-xl font-semibold">03</span>
        </div>
        <h3 className="text-2xl font-medium text-white tracking-tight font-montserrat text-center mb-4"> Auto Execute</h3>
        <p className="leading-relaxed text-base text-zinc-500 font-poppins text-center max-w-[320px]">Activate the agent. It runs 24/7, detecting calls and executing trades automatically while you're offline.</p>
    </div>
</div>
        </div>

        {/* KOL FINDER SECTION */}
        <div className="flex flex-col z-10 w-full max-w-6xl mt-16 mb-16 mr-auto ml-auto relative items-center scroll-mt-48" id="kol-finder-section">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="uppercase text-xs font-medium text-zinc-500 tracking-[0.2em] font-poppins mb-4 block">Discovery Engine</span>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-montserrat">
              Find Your <span className="text-zinc-400">KOL</span> Here
            </h2>
          </div>

          {/* Search Bar Container */}
          <div className="w-full max-w-2xl relative z-20">
            <form
              className="flex gap-2 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/70 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] bg-zinc-900/50 w-full border-white/10 border rounded-2xl pt-2 pr-2 pb-2 pl-5 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] backdrop-blur-sm gap-x-2 gap-y-2 items-center"
              onSubmit={(e) => e.preventDefault()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                placeholder="Search by name..."
                className="flex-1 placeholder-zinc-500 focus:outline-none text-sm text-white font-poppins bg-transparent h-10"
                id="kol-search-input"
                value={kolSearch}
                onChange={(e) => setKolSearch(e.target.value)}
              />
              <button type="submit" className="group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="absolute inset-0 rounded-xl bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300 group-hover:text-white">
                  <span className="font-poppins">Search</span>
                </span>
              </button>
            </form>
          </div>

          {/* Results Dropdown */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out flex flex-col bg-zinc-900/80 w-full max-w-2xl border-white/5 border rounded-2xl mt-6 shadow-2xl backdrop-blur-md group/list max-h-[400px] overflow-y-auto"
            id="kol-results">
            {/* Header Row */}
            <div className="grid grid-cols-12 text-[10px] uppercase select-none font-semibold text-zinc-500 tracking-widest font-poppins border-white/5 border-b pt-3 pr-4 pb-3 pl-4 sticky top-0 bg-zinc-900/95 backdrop-blur-md z-10">
              <div className="col-span-10 pl-2">KOL Name</div>
              <div className="col-span-2"></div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col">
              {filteredKols.length === 0 ? (
                <div className="flex items-center justify-center py-8">
                  <span className="text-sm text-zinc-500 font-poppins">No KOLs found</span>
                </div>
              ) : (
                filteredKols.map((kol, index) => {
                  const isLast = index === filteredKols.length - 1;

                  return (
                    <div
                      key={kol}
                      className={`group relative grid grid-cols-12 items-center gap-2 ${isLast ? '' : 'border-b border-white/5'} px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer`}
                      onClick={() => handleCopyKol(kol)}
                    >
                      <div className="col-span-10 flex items-center gap-3 pl-2">
                        <span className="truncate text-sm font-medium text-zinc-200 group-hover:text-white transition-colors font-mono">{kol}</span>
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          className="copy-btn group/btn flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-white/10 hover:text-white transition-colors focus:outline-none relative"
                          aria-label="Copy Username"
                          onClick={(e) => { e.stopPropagation(); handleCopyKol(kol); }}
                        >
                          {copiedKol === kol ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy transition-transform group-active/btn:scale-90"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* NEW DAPP SECTION */}
        <div id="dapp" className="flex flex-col pt-16">
            {/* Header */}
            

            {/* Dapp Image with Lift Animation */}
            <div className="relative z-10 w-full perspective-[1200px] mb-8 group" id="hero-scroll-wrapper">
    {/* Title Component (Part of ContainerScroll pattern) */}
    <div className="flex flex-col items-center text-center mb-16 transform transition-all duration-700 delay-100 ease-out">
        <h2 className="text-4xl text-white tracking-tight font-montserrat mb-2 font-medium md:text-5xl">
    Luma AI <span className="text-zinc-500">Dapp</span>
</h2>
        <p className="text-sm font-medium text-zinc-400 font-poppins max-w-lg md:text-sm">Intelligence platform for KOL trading. Research KOLs, track performance, optimize results.</p>
    </div>

    {/* 3D Rotating Container */}
    <div className="border-[6px] border-[#222] overflow-hidden transition-all duration-100 ease-out will-change-transform origin-center transform-style-3d w-full max-w-5xl rounded-[30px] mr-auto ml-auto relative shadow-2xl" style={{transform: 'rotateX(0deg) scale(1)', opacity: 1}} id="hero-scroll-card">
        
        {/* Screen Bezel/Header */}
        <div className="flex w-full h-6 border-zinc-800/50 border-b relative items-center justify-center">
             <div className="w-16 h-1 bg-zinc-700/50 rounded-full"></div>
             {/* Camera Dot */}
             <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        </div>

        {/* Screen Content Container */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-zinc-950">
            {/* Preserved Background Image */}
            <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9412770-1225-48e2-bcd5-e25cbd11d659_3840w.png)] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" style={{}}></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <div className="flex items-end justify-between">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                             
                             
                        </div>
                        <h3 className="md:text-4xl text-shadow-lg text-3xl font-semibold text-white tracking-tight font-montserrat mb-3">Dapp V1</h3>
                        
                    </div>
                    
                    {/* Original Fancy Button */}
                    <button className="hidden md:inline-flex group overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-[1px] relative items-center justify-center">
                      <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                      <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2.5 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" style={{}}>
                        <span className="relative z-10">Open Dapp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                          <path d="M5 12h14" className=""></path>
                          <path d="m12 5 7 7-7 7" className=""></path>
                        </svg>
                      </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    {/* Reflection/Shadow */}
    <div className="-bottom-12 -translate-x-1/2 transition-all duration-300 bg-black opacity-0 w-3/4 h-12 rounded-[100%] absolute left-1/2 blur-2xl" style={{opacity: 0.6, transform: 'translateX(-50%) scale(1)'}} id="hero-scroll-shadow"></div>

    
</div>

            {/* What's Inside Heading */}
            <div className="flex flex-col items-start mb-6 mt-16 mx-5">
              <h3 className="text-4xl font-medium tracking-tight font-montserrat md:text-5xl" style={{background: 'linear-gradient(to right, #ffffff, #71717a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                What's Inside
              </h3>
            </div>

            {/* Features Grid 3x3 (6 items, 3 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden bg-zinc-900 border-zinc-900 border rounded-2xl relative select-none">
    <style dangerouslySetInnerHTML={{__html: `
        @keyframes draw-line {
            0% { stroke-dashoffset: 100; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
        }
        @keyframes radar-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes toggle-switch {
            0%, 20% { transform: translateX(0); }
            50%, 70% { transform: translateX(100%); }
            100% { transform: translateX(0); }
        }
        @keyframes typing-dot {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes node-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2); }
            50% { transform: scale(1.1); box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1); }
        }
        @keyframes bar-fluctuate {
            0%, 100% { width: 40%; }
            50% { width: 70%; }
        }
        @keyframes bar-fluctuate-2 {
            0%, 100% { width: 60%; }
            50% { width: 30%; }
        }
    `}} />

    {/* Feature 1: Dashboard */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative h-24 mb-6 w-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
            <svg width="100%" height="100%" viewBox="0 0 200 80" preserveAspectRatio="none" className="overflow-visible">
                <path d="M0 60 Q 30 55, 50 30 T 100 4(#gradient-dash)" strokeWidth="2" strokeLinecap="round" className=""></path>
                <path d="M0 60 Q 30 55, 50 30 T 100 40 T 150 20 T 200 50" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="10 10" className="opacity-50" style={{animation: 'draw-line 3s linear infinite'}}></path>
                <defs>
                    <linearGradient id="gradient-dash" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.2"></stop>
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                        <stop offset="100%" stopColor="#3f3f46" stopOpacity="0.2"></stop>
                    </linearGradient>
                </defs>
            </svg>
            {/* Data Points */}
            <div className="absolute top-[30px] left-[25%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            <div className="absolute top-[20px] left-[75%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="z-10 relative">
            
            <h3 className="text-lg font-medium text-white font-montserrat tracking-tight mb-2">Dashboard</h3>
            <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Platform performance dashboard. Network-wide metrics showing call detection, execution volume, active users, and KOL activity.</p>
        </div>
    </div>

    {/* Feature 2: KOL Discovery */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative h-24 mb-6 w-full flex items-center justify-center">
            {/* Radar Container */}
            <div className="w-20 h-20 rounded-full border border-zinc-800 relative flex items-center justify-center bg-zinc-900/20">
                {/* Radar Sweep */}
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(255,255,255,0.1)_360deg)] w-full h-full" style={{animation: 'radar-spin 3s linear infinite'}}></div>
                {/* Center Dot */}
                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-lg z-10"></div>
                {/* Blips */}
                <div className="absolute top-4 left-6 w-1 h-1 bg-zinc-400 rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-6 right-5 w-1 h-1 bg-zinc-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1.2s'}}></div>
            </div>
        </div>

        <div className="z-10 relative">
            
            <h3 className="text-lg font-medium text-white font-montserrat tracking-tight mb-2">KOL Discovery</h3>
            <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Research KOLs before you follow. See their win rates and profitability. Stop losing on bad calls, follow proven performers instead.</p>
        </div>
    </div>

    {/* Feature 3: Ape Station */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
        <div className="relative h-24 mb-6 w-full flex flex-col gap-3 items-center justify-center opacity-80">
            {/* Toggle 1 */}
            <div className="flex items-center gap-3 w-32 justify-end">
                <div className="h-1 w-8 bg-zinc-800 rounded-full"></div>
                <div className="w-10 h-5 rounded-full bg-zinc-800 border border-zinc-700 p-0.5 relative">
                    <div className="w-3.5 h-3.5 bg-zinc-400 rounded-full absolute left-0.5 shadow-sm" style={{animation: 'toggle-switch 4s infinite ease-in-out'}}></div>
                </div>
            </div>
            {/* Toggle 2 */}
            <div className="flex items-center gap-3 w-32 justify-end">
                <div className="h-1 w-12 bg-zinc-800 rounded-full"></div>
                <div className="w-10 h-5 rounded-full bg-zinc-800 border border-zinc-700 p-0.5 relative">
                    <div className="w-3.5 h-3.5 bg-white rounded-full absolute left-0.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{animation: 'toggle-switch 4s infinite ease-in-out reverse'}}></div>
                </div>
            </div>
        </div>

        <div className="z-10 relative">
            
            <h3 className="text-lg font-medium text-white font-montserrat tracking-tight mb-2">Ape Station</h3>
            <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Control everything from one place. Manage your monitored sources, adjust risk settings, and configure automation. One dashboard, complete control.</p>
        </div>
    </div>

    {/* Feature 4: KOLTexa */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
        <div className="relative h-24 mb-6 w-full flex items-center justify-center">
            {/* Chat Bubble */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-bl-sm px-5 py-3 flex gap-1.5 shadow-lg relative">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-[typing-dot_1.4s_infinite_ease-in-out_both] delay-0"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-[typing-dot_1.4s_infinite_ease-in-out_both] delay-200" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-[typing-dot_1.4s_infinite_ease-in-out_both] delay-400" style={{animationDelay: '0.4s'}}></div>
                
                {/* Floating Elements */}
                <div className="absolute -right-6 -top-4 w-4 h-4 border border-zinc-700 rounded-full opacity-40"></div>
                <div className="absolute -left-4 top-8 w-2 h-2 bg-zinc-800 rounded-full opacity-40"></div>
            </div>
        </div>

        <div className="z-10 relative">
            
            <h3 className="text-lg font-medium text-white font-montserrat tracking-tight mb-2">KOLTexa</h3>
            <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Ask questions about KOLs and their calls through conversation. Who called this token first? Are multiple KOLs converging on something?</p>
        </div>
    </div>

    {/* Feature 5: Performance Tree */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
    <div className="relative h-24 mb-6 w-full flex items-center justify-center">
        <div className="relative w-full h-full">
            {/* SVG Layer */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                {/* Central Symmetry Axis */}
                <path d="M100 20 L100 80" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 4" className="opacity-20"></path>
                
                {/* Connection Lines */}
                <path d="M100 20 L50 80" stroke="#27272a" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                <path d="M100 20 L150 80" stroke="#27272a" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>

                {/* Animated Data Flow Particles */}
                <circle r="1.5" fill="white" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 20 L50 80" keyPoints="0;1" keyTimes="0;1" calcMode="linear"></animateMotion>
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite"></animate>
                </circle>
                <circle r="1.5" fill="white" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 20 L150 80" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin="1.25s"></animateMotion>
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1.25s"></animate>
                </circle>
            </svg>

            {/* HTML Nodes for Structure */}
            {/* Root Node */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-900 border border-zinc-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.15)] z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            
            {/* Child Nodes (Destinations) */}
            <div className="absolute top-[80%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full z-10 group-hover:border-zinc-500 transition-colors duration-500"></div>
            <div className="absolute top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full z-10 group-hover:border-zinc-500 transition-colors duration-500"></div>
        </div>
    </div>

    <div className="z-10 relative">
        <h3 className="text-lg font-medium text-white tracking-tight font-montserrat mb-2">Performance Tree</h3>
        <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Hierarchical tree breaking down portfolio by attribution. KOLs → Calls → Trades → Results. Complete visual path showing which sources drive your profits.</p>
    </div>
</div>

    {/* Feature 6: Revenue Leaders */}
    <div className="group relative flex flex-col justify-between h-full bg-black p-8 overflow-hidden hover:bg-zinc-950/50 transition-colors duration-500">
        <div className="relative h-24 mb-6 w-full flex flex-col justify-center gap-3">
            {/* Animated Bars */}
            <div className="flex items-center gap-3 w-full opacity-80">
                <div className="text-[10px] text-zinc-600 font-mono w-4">01</div>
                <div className="h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{width: '80%', animation: 'bar-fluctuate 4s infinite ease-in-out'}}></div>
            </div>
            <div className="flex items-center gap-3 w-full opacity-60">
                <div className="text-[10px] text-zinc-600 font-mono w-4">02</div>
                <div className="h-2 bg-zinc-700 rounded-full" style={{width: '60%', animation: 'bar-fluctuate-2 5s infinite ease-in-out'}}></div>
            </div>
            <div className="flex items-center gap-3 w-full opacity-40">
                <div className="text-[10px] text-zinc-600 font-mono w-4">03</div>
                <div className="h-2 bg-zinc-800 rounded-full w-[40%]"></div>
            </div>
        </div>

        <div className="z-10 relative">
            
            <h3 className="text-lg font-medium text-white font-montserrat tracking-tight mb-2">Revenue Leaders</h3>
            <p className="leading-relaxed text-xs text-zinc-500 font-poppins">Leaderboard ranking KOLs by trading volume their calls generate. Find sources that move real capital, not just engagement. Performance backed by on-chain data.</p>
        </div>
    </div>
</div>
        </div>
      </div>
    </section>

    {/* NEW SECTION: HOW IT WORKS */}
    <section className="w-full max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

      {/* NEW COMPARISON SECTION */}
      <div id="why" className="z-10 w-full max-w-5xl mt-0 mr-auto mb-0 ml-auto relative">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes scan-vertical {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    .animate-scan {
      animation: scan-vertical 4s linear infinite;
    }
  `}} />

  <div className="text-center mb-16 opacity-0 animate-fade-in" style={{animationDelay: '0ms'}}>
    <h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight font-montserrat mb-4">Why <span className="text-zinc-500">Luma AI?</span></h2>
  </div>

  {/* Table Container */}
  <div className="overflow-x-auto pb-4 no-scrollbar">
    <div className="min-w-[900px] grid grid-cols-12 relative text-sm font-sans gap-y-1">

      {/* Backdrop Card Container (Spans Columns 4-12) */}
      {/* Enhanced with subtle pulsing border and internal scan effect */}
      <div className="absolute inset-y-0 right-0 left-[25%] rounded-[2.5rem] border border-white/10 bg-zinc-950 overflow-hidden z-0 shadow-2xl opacity-0 animate-fade-in group/card" style={{animationDelay: '100ms'}}>
        {/* Highlight Column (Luma AI) */}
        <div className="absolute inset-y-0 left-0 w-[55.55%] bg-gradient-to-t from-white/[0.08] via-white/[0.02] to-transparent border-r border-white/10 overflow-hidden">
          {/* Animated Scanning Beam */}
          <div className="absolute inset-x-0 h-full w-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent animate-scan"></div>
          
          {/* Bottom Glow */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/[0.05] to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Header Row */}
      <div className="col-span-12 grid grid-cols-12 relative z-10 mb-2 opacity-0 animate-fade-in" style={{animationDelay: '200ms'}}>
        <div className="col-span-3 p-4"></div>
        <div className="col-span-5 p-6 px-8 flex items-center gap-3">
          <div className="flex items-center gap-2">
             
             <span className="text-xl font-semibold text-white tracking-tight">Luma AI</span>
          </div>
        </div>
        <div className="col-span-4 p-6 px-8 flex items-center">
          <span className="text-zinc-400 font-semibold text-xl tracking-tight">Manual Trading</span>
        </div>
        {/* Header Separator Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Row 1: Automated Trading */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '300ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Automated Trading</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Complete hands-free automated trading system
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Constant manual monitoring and execution
        </div>
      </div>

      {/* Row 2: Availability */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '400ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Availability</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          24/7, never offline
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Only when you're awake and watching
        </div>
      </div>

      {/* Row 2: Missing Calls */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '400ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Missing Calls</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Zero missed opportunities
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Miss 60-70% (sleep, work, life)
        </div>
      </div>

      {/* Row 3: Multi-Platform Coverage */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '500ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Multi-Platform Coverage</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Telegram + Twitter simultaneously
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Choose one, miss the other
        </div>
      </div>

      {/* Row 4: Optimal Entries */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '600ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Optimal Entries</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Execute before price moves
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Always late, pay premium prices
        </div>
      </div>

      {/* Row 5: Lifestyle Impact */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '700ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Lifestyle Impact</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Zero screen time required
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Sacrifice life to watch channels 24/7
        </div>
      </div>

      {/* Row 6: Signal Detection */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '800ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Signal Detection</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          AI filters noise instantly
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Read hundreds of messages manually
        </div>
      </div>

      {/* Row 7: Convergence Detection */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '900ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Convergence Detection</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Spots when multiple KOLs align
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Miss coordinated signals
        </div>
      </div>

      {/* Row 8: Phone Alerts */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '1000ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Phone Alerts</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Voice calls when trades execute
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Check Telegram constantly or miss updates
        </div>
      </div>

      {/* Row 9: KOL Research */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '1200ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">KOL Research</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Dedicated Dapp with win rates + performance data
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Guess based on hype and followers
        </div>
      </div>

      {/* Row 11: Performance Attribution */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 border-b border-white/5 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '1300ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Performance Attribution</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Know exactly which calls made money
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Forget who called what, no tracking
        </div>
      </div>

      {/* Row 12: Scalability */}
      <div className="col-span-12 grid grid-cols-12 group hover:bg-white/[0.03] transition-all duration-300 rounded-xl relative z-10 opacity-0 animate-fade-in hover:scale-[1.005] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]" style={{animationDelay: '1400ms'}}>
        <div className="col-span-3 flex font-medium text-zinc-400 p-4 pl-6 items-center group-hover:text-white transition-colors">Scalability</div>
        <div className="col-span-5 py-4 px-8 flex items-center gap-3 text-zinc-200 font-medium group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white"><path d="M20 6 9 17 4 12"></path></svg>
          Track unlimited sources effortlessly
        </div>
        <div className="col-span-4 py-4 px-8 flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-zinc-600"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          Limited by human attention span
        </div>
      </div>

    </div>
  </div>
</div>
      

      

      {/* NEW PRICING SECTION */}
      <div className="w-full max-w-5xl pt-32 mr-auto ml-auto relative">
        <div id="luma" className="flex flex-col text-center mb-16 items-center">
          <span className="uppercase text-xs font-medium text-zinc-500 tracking-[0.2em] font-poppins mb-4">$LUMA</span>
          <h2 className="text-5xl font-medium text-white tracking-tight font-montserrat">Token <span className="text-zinc-500">Utility</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mr-auto ml-auto gap-x-8 gap-y-8 items-stretch">
  {/* Free Tier Card (Basic) */}
  <div className="relative bg-zinc-900/20 border border-white/5 rounded-3xl p-8 overflow-hidden flex flex-col hover:bg-zinc-900/30 transition-all duration-300 min-h-[580px]">
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-medium text-zinc-400 font-montserrat">Free Tier</h3>
        <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wide bg-zinc-800 border-zinc-700 border rounded-full pt-1 pr-3 pb-1 pl-3">Basic</span>
      </div>

      <div className="flex items-baseline mb-4">
        <span className="text-5xl font-semibold text-white tracking-tight font-montserrat">Free</span>
      </div>

      <button className="hover:bg-white/10 transition-all duration-200 text-sm font-medium text-white font-poppins bg-white/5 w-full border-white/10 border rounded-xl mb-8 pt-3.5 pb-3.5">
        Basic plan available for all users
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-white/5 flex-1"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-medium">Features</span>
        <div className="h-px bg-white/5 flex-1"></div>
      </div>

      <ul className="space-y-3 flex-1">
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-400 font-poppins">Up to 5 channels (Telegram + Twitter combined)</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-400 font-poppins">Last 30 days trading history</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-400 font-poppins">Limited Dapp access</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-400 font-poppins">Community support</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-400 font-poppins">Core bot features</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Elite Tier Card */}
  <div className="overflow-hidden flex flex-col group rounded-3xl pt-8 pr-8 pb-8 pl-8 relative min-h-[580px]">
    {/* Animated Border Beam (White/Grey) */}
    <div className="absolute inset-0 -z-10 rounded-3xl p-[1px] overflow-hidden">
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ffffff_100%)] opacity-100"></div>
      <div className="absolute inset-[1px] bg-zinc-900/90 rounded-[23px] backdrop-blur-xl"></div>
    </div>

    {/* Dust/Texture effect overlay */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

    {/* Glow Effect behind card (White) */}
    <div className="absolute inset-0 bg-white blur-[100px] opacity-10 pointer-events-none"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-medium text-white font-montserrat">Elite Tier</h3>
        <span className="text-[10px] uppercase font-semibold text-white tracking-wide bg-white/10 border-white/20 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-[0_0_10px_rgba(255,255,255,0.2)]">Recommended</span>
      </div>

      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-semibold text-white tracking-tight font-montserrat">≥ 0.5% Supply</span>
      </div>

      <button className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm font-semibold text-black font-poppins bg-white w-full rounded-xl mb-8 pt-3.5 pb-3.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
        For user holding ≥ 0.5% supply
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Features</span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <ul className="space-y-3 flex-1">
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Unlimited Telegram + Twitter monitoring</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Complete lifetime trading history</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Full Dapp access</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">API access (300 requests/hour)</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">40% revenue share through staking</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">0.5% commission (vs 1% free tier)</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Priority dedicated support</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Early access to all new features</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-sm text-zinc-300 font-poppins">Governance voting rights</span>
        </li>
      </ul>
    </div>
  </div>
</div>
      </div>
      {/* END PRICING SECTION */}

      <div className="w-full max-w-5xl mr-auto mb-10 ml-auto pt-32 relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes beam-drop {
              0% { top: -20%; opacity: 0; }
              50% { opacity: 1; }
              100% { top: 120%; opacity: 0; }
          }
        `}} />

        <div id="roadmap" className="flex flex-col text-center mb-20 pt-32 relative items-center">
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes aura-particle-fall {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      100% { transform: translateY(350px) translateX(10px); opacity: 0; }
    }
  `}} />
  {/* White Tube Light Effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] pointer-events-none select-none z-0">
    <div className="flex flex-col items-center">
      {/* Tube Light Source */}
      <div className="w-[60%] md:w-[80%] h-[2px] shadow-[0_0_20px_2px_rgba(255,255,255,0.5)] rounded-full bg-gradient-to-br from-transparent via-white to-transparent" style={{}}></div>

      {/* Volumetric Downward Glow */}
      <div className="w-full h-[350px] bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-[50px] -mt-px relative" style={{maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)'}}>
        {/* Falling Particles */}
        <div className="absolute top-0 left-[20%] w-[1px] h-[1px] bg-white rounded-full" style={{animation: 'aura-particle-fall 3s linear infinite', animationDelay: '0s'}}></div>
        <div className="absolute top-0 left-[35%] w-[1.5px] h-[1.5px] bg-white/80 rounded-full" style={{animation: 'aura-particle-fall 4.2s linear infinite', animationDelay: '1.5s'}}></div>
        <div className="absolute top-0 left-[50%] w-[2px] h-[2px] bg-white/60 rounded-full" style={{animation: 'aura-particle-fall 2.8s linear infinite', animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 left-[65%] w-[1px] h-[1px] bg-white/90 rounded-full" style={{animation: 'aura-particle-fall 3.5s linear infinite', animationDelay: '2.2s'}}></div>
        <div className="absolute top-0 left-[80%] w-[1.5px] h-[1.5px] bg-white/70 rounded-full" style={{animation: 'aura-particle-fall 5s linear infinite', animationDelay: '1.0s'}}></div>
        <div className="absolute top-0 left-[42%] w-[1px] h-[1px] bg-white rounded-full" style={{animation: 'aura-particle-fall 3.2s linear infinite', animationDelay: '2.8s'}}></div>
        <div className="absolute top-0 left-[58%] w-[1.5px] h-[1.5px] bg-white/50 rounded-full" style={{animation: 'aura-particle-fall 4.8s linear infinite', animationDelay: '0.2s'}}></div>
      </div>
    </div>
  </div>

  <span className="relative z-10 uppercase text-xs font-medium text-zinc-500 tracking-[0.2em] font-poppins mb-4">
    Future Plan
  </span>
  <h2 className="relative z-10 text-5xl font-medium text-white tracking-tight font-montserrat">
    Roadmap
  </h2>
</div>

        <div className="relative">
          {/* Vertical Spine */}
          <div className="absolute left-[15px] md:left-1/2 top-0 h-full w-px bg-zinc-800 md:-translate-x-1/2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent w-px" style={{animation: 'beam-drop 3s infinite linear'}}></div>
          </div>

          {/* Phase 1 */}
          <div className="group relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Content (Left) */}
            <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="flex flex-col md:items-end">
                <span className="text-zinc-500 text-xs tracking-[0.2em] font-mono mb-2 group-hover:text-white transition-colors duration-300">
                  PHASE 01
                </span>
                <h3 className="group-hover:text-white/80 transition-colors text-2xl font-normal text-white tracking-tight font-montserrat mb-4">Luma AI Agent Launch</h3>
                <ul className="space-y-3 text-zinc-400 font-poppins text-sm">
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                    <span className="">Telegram Agent</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                    <span className="">KOL Channel Monitoring</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                    <span className="">Automated Trade Execution</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                    <span className="">Trade Tracking</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></span>
                    <span className="">Risk Management</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Token Utility</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Affiliate Program</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-black border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            </div>
            {/* Spacer (Right) */}
            <div className="hidden md:block"></div>
          </div>

          {/* Phase 2 */}
          <div className="group relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Spacer (Left) */}
            <div className="hidden md:block"></div>
            {/* Node */}
            <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-black border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
              <div className="w-2 h-2 bg-zinc-600 rounded-full group-hover:bg-white transition-colors"></div>
            </div>
            {/* Content (Right) */}
            <div className="pl-12">
              <div className="flex flex-col items-start">
                <span className="text-zinc-500 text-xs tracking-[0.2em] font-mono mb-2 group-hover:text-white transition-colors duration-300">
                  PHASE 02
                </span>
                <h3 className="group-hover:text-white/80 transition-colors text-2xl font-normal text-white tracking-tight font-montserrat mb-4">
                  Intelligence &amp; Analytics Dapp
                </h3>
                <ul className="space-y-3 text-zinc-400 font-poppins text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Ape Station</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">KOL Discovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">KOLTexa</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Performance Tree</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Revenue Leaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="group relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content (Left) */}
            <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="flex flex-col md:items-end">
                <span className="text-zinc-500 text-xs tracking-[0.2em] font-mono mb-2 group-hover:text-white transition-colors duration-300">
                  PHASE 03
                </span>
                <h3 className="group-hover:text-white/80 transition-colors text-2xl font-medium text-white tracking-tight font-montserrat mb-4">
                  Multi-Platform Expansion
                </h3>
                <ul className="space-y-3 text-zinc-400 font-poppins text-sm">
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Twitter Integration</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Unified Platform Management</span>
                  </li>
                  <li className="flex items-center gap-3 md:flex-row-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white/50 transition-colors"></span>
                    <span className="">Public API</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-black border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
              <div className="w-2 h-2 bg-zinc-600 rounded-full group-hover:bg-white transition-colors"></div>
            </div>
            {/* Spacer (Right) */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      {/* New FAQs Section */}
      <div className="w-full pt-32 relative z-10">
        {/* Background Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-white/[0.02] blur-[60px] rounded-full pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Header */}
        <div id="faqs" className="flex flex-col items-center text-center mb-8 relative">
          <h2 className="text-5xl font-medium tracking-tight font-montserrat gradient-text">
            FAQ's
          </h2>
        </div>

        <div className="flex flex-col w-full max-w-6xl border-white/5 border-t mx-auto pt-8 gap-x-12 gap-y-8 items-center relative">
          {/* Content */}
          <div className="flex flex-col gap-8 text-left w-full max-w-3xl gap-x-8 gap-y-8">

            {/* Questions List */}
            <div className="flex flex-col gap-4" id="faq-container">
              {/* Q1 */}
              <div
                className={`faq-item relative group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeFaq === 1 ? 'bg-zinc-900/30' : ''}`}
                onClick={() => toggleFaq(1)}
              >
                {/* Beam Border */}
                <div className={`beam-border absolute inset-0 p-[1px] transition-opacity duration-300 pointer-events-none ${activeFaq === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ffffff_100%)]"></div>
                  <div className="absolute inset-[1px] bg-black rounded-2xl"></div>
                </div>
                {/* Inner Border for visual consistency when beam inactive */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>

                <div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
                  <div className="flex justify-between items-center select-none">
                    <h3 className="text-lg font-medium text-white font-montserrat">
                      Do I need to hold tokens to use Luma AI?
                    </h3>
                    <div className="text-zinc-500">
                      {activeFaq === 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      )}
                    </div>
                  </div>
                  <div className={`mt-4 text-base text-zinc-400 font-poppins leading-relaxed ${activeFaq === 1 ? '' : 'hidden'}`}>
                    No. Anyone can use Luma AI for free with basic features, monitor up to 5 KOL sources, view last 30 days of trades, and access core bot functions.
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div
                className={`faq-item relative group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeFaq === 2 ? 'bg-zinc-900/30' : ''}`}
                onClick={() => toggleFaq(2)}
              >
                {/* Beam Border */}
                <div className={`beam-border absolute inset-0 p-[1px] transition-opacity duration-300 pointer-events-none ${activeFaq === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ffffff_100%)]"></div>
                  <div className="absolute inset-[1px] bg-black rounded-2xl"></div>
                </div>
                {/* Inner Border */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>

                <div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
                  <div className="flex select-none items-center justify-between">
                    <h3 className="text-lg font-medium text-white font-montserrat">
                      Which chains does Luma AI support?
                    </h3>
                    <div className="text-zinc-500">
                      {activeFaq === 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      )}
                    </div>
                  </div>
                  <div className={`mt-4 text-base text-zinc-400 font-poppins leading-relaxed ${activeFaq === 2 ? '' : 'hidden'}`}>
                    Currently RobinHood only. EVM chains (Ethereum, Base, Arbitrum, etc.) are planned for future releases.
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div
                className={`faq-item relative group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeFaq === 3 ? 'bg-zinc-900/30' : ''}`}
                onClick={() => toggleFaq(3)}
              >
                {/* Beam Border */}
                <div className={`beam-border absolute inset-0 p-[1px] transition-opacity duration-300 pointer-events-none ${activeFaq === 3 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ffffff_100%)]"></div>
                  <div className="absolute inset-[1px] bg-black rounded-2xl"></div>
                </div>
                {/* Inner Border */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>

                <div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
                  <div className="flex justify-between items-center select-none">
                    <h3 className="text-lg font-medium text-white font-montserrat">
                      Can I customize settings for different KOLs?
                    </h3>
                    <div className="text-zinc-500">
                      {activeFaq === 3 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      )}
                    </div>
                  </div>
                  <div className={`mt-4 text-base text-zinc-400 font-poppins leading-relaxed ${activeFaq === 3 ? '' : 'hidden'}`}>
                    Yes, completely. Each Telegram channel and Twitter profile you monitor has independent settings. You can set different auto-buy amounts, take-profit levels, and stop-loss percentages per source
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div
                className={`faq-item relative group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeFaq === 4 ? 'bg-zinc-900/30' : ''}`}
                onClick={() => toggleFaq(4)}
              >
                {/* Beam Border */}
                <div className={`beam-border absolute inset-0 p-[1px] transition-opacity duration-300 pointer-events-none ${activeFaq === 4 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ffffff_100%)]"></div>
                  <div className="absolute inset-[1px] bg-black rounded-2xl"></div>
                </div>
                {/* Inner Border */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>

                <div className="z-10 pt-6 pr-6 pb-6 pl-6 relative">
                  <div className="flex justify-between items-center select-none">
                    <h3 className="text-lg font-medium text-white font-montserrat">
                      What happens if I'm offline or my phone is off?
                    </h3>
                    <div className="text-zinc-500">
                      {activeFaq === 4 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      )}
                    </div>
                  </div>
                  <div className={`mt-4 text-base text-zinc-400 font-poppins leading-relaxed ${activeFaq === 4 ? '' : 'hidden'}`}>
                    The agent keeps working. It runs 24/7 on our servers, not your phone. Close Telegram, turn off your device, go to sleep—monitoring and execution continue automatically. You'll receive notifications when trades happen, but you don't need to be online for the agent to work. That's the whole point.
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>

    {/* FOOTER SECTION */}
    <section className="overflow-hidden w-full border-white/5 border-t pt-32 pb-0 relative">
      {/* Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>

      {/* Content Container */}
      <div id="links" className="relative z-10 flex flex-col items-center justify-center text-center px-6 mb-24">
        {/* Icons Arc */}
        <div className="relative flex items-center justify-center gap-6 mb-12 h-20">
          {/* Simple manual offsets for arc effect */}
          <div className="transform translate-y-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <iconify-icon icon="simple-icons:polygon" width="40" class="text-white"></iconify-icon>
          </div>
          <div className="transform translate-y-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <iconify-icon icon="simple-icons:ethereum" width="40" class="text-white"></iconify-icon>
          </div>
          <div className="transform -translate-y-2 bg-black z-10 border-white/20 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <iconify-icon icon="simple-icons:robinhood" width="32" class="text-white"></iconify-icon>
          </div>
          <div className="transform translate-y-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <iconify-icon icon="simple-icons:binance" width="40" class="text-white"></iconify-icon>
          </div>
          <div className="transform translate-y-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 111 111" fill="none" className="text-white">
              <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor"/>
            </svg>
          </div>

          {/* The Horizon Line behind icons (Arc) */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border-t border-white/10 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none -z-10 blur-sm"></div>
        </div>

        <h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold tracking-tighter font-montserrat mb-6 gradient-text">The Future of <span className="text-zinc-500">KOL</span> Trading</h2>
        <p className="md:text-base text-sm text-zinc-400 font-poppins max-w-lg mb-10">Never miss another call while you sleep, work, or live your life. Automated KOL trading that actually works. Configure once, trade forever.</p>

        <form className="flex w-full max-w-[420px] items-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 p-1.5 pl-5 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/70 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]" action="https://formsubmit.co/teamcortexa@gmail.com" method="POST">
  <input type="text" name="feedback" placeholder="Enter your feedback" className="flex-1 placeholder-zinc-500 focus:outline-none text-sm text-white font-poppins bg-transparent" required />
  <input type="hidden" name="_subject" value="New Feedback from Luma AI Website" />
  <input type="hidden" name="_captcha" value="false" />
  <button type="submit" className="group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
    <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
    <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300 group-hover:text-white">
      <span className="font-poppins">send</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
        <path d="M5 12h14" className=""></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </span>
  </button>
</form>
      </div>

      {/* Footer Links & Bottom */}
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-7xl mr-auto mb-20 ml-auto pr-6 pl-6 gap-x-12 gap-y-12 text-center">

        <div className="">
          <h4 className="font-medium text-white font-poppins mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm text-zinc-500 font-poppins">
            <li className="">
              <a href="#dapp" className="hover:text-white transition-colors">Dapp</a>
            </li>
            <li className="">
              <a href="#setup" className="hover:text-white transition-colors">Setup Guide</a>
            </li>
            <li className="">
              <a href="#luma" className="hover:text-white transition-colors">Token Utility</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-white font-medium mb-4 font-poppins">Resources</h4>
          <ul className="space-y-3 text-sm text-zinc-500 font-poppins">
            <li className="">
              <a href="https://cortexa.gitbook.io/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a>
            </li>
            <li className="">
              <a href="https://cortexa.gitbook.io/docs/cortexa-agent/setup-guide/wallet-setup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tutorial</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-medium text-white font-poppins mb-4">Socials</h4>
          <ul className="space-y-3 text-sm text-zinc-500 font-poppins">
            <li className="">
              <a href="https://t.me/Cortexatrade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
            </li>
            <li className="">
              <a href="https://x.com/uselumaai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>
            </li>
            <li className="">
              <a href="https://uselumaai.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Website</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials Row */}
      <div className="flex md:mb-20 max-w-7xl border-white/5 border-t mr-auto mb-40 ml-auto pt-8 pr-6 pl-6 items-center justify-between">
        <span className="text-xs text-slate-50 z-[9999] absolute">
          © 2026 Luma AI Inc.
        </span>
      </div>

      {/* Big Text */}
      <div className="flex overflow-hidden select-none w-full z-[100] pointer-events-none absolute bottom-0 justify-center">
        <h1 className="text-[18vw] leading-[0.75] font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-black font-montserrat tracking-tighter opacity-50 translate-y-[20%] whitespace-nowrap">
          LUMA AI
        </h1>
      </div>
    </section>

    {/* Planetary Horizon Effect (Original) */}
    <div className="fixed bottom-[-25%] left-1/2 -translate-x-1/2 w-[120%] h-[40vh] bg-white rounded-[100%] blur-[60px] opacity-5 pointer-events-none z-0 mix-blend-soft-light"></div>

    
  

    </>
  );
};

export default App;
