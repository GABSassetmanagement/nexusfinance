import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  AppleLogo,
  GooglePlayLogo,
  Bank,
  CurrencyBtc,
  CaretLeft,
  CaretRight,
  Quotes,
  BellRinging,
  Lightning,
  ArrowDownLeft,
  ArrowsClockwise,
  CheckCircle,
} from '@phosphor-icons/react';
import { InvestModal } from './InvestModal';

export interface SectionProps {
  onOpenApply: (productName?: string) => void;
  onOpenInvest?: () => void;
}

interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  tag: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    author: 'Mama Rahma',
    role: 'Nexus Women Empowerment Loan (NWEL) Beneficiary',
    tag: 'NWEL Quick Loan',
    quote:
      'My friend referred me to Nexus Finance LTD. I applied for a loan and it came in minutes as they said. I was impressed by the speed.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    author: 'Hajia Sadiya',
    role: 'Retail Enterprise Owner & NWEL Beneficiary',
    tag: 'Business Expansion',
    quote:
      'I thank God for Nexus Finance LTD. They have made it easy for me to expand my business with zero collateral stress.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    author: 'Sgt. A. Mohammed',
    role: 'Federal Paramilitary Command Officer, Abuja',
    tag: 'Suremoney Loan',
    quote:
      'Traditional lenders made me wait 4 weeks with hidden administrative charges. With Nexus Finance LTD, my Suremoney loan arrived in under 15 minutes directly into my account.',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    author: 'Dr. Ngozi Adeleke',
    role: 'Medical Director, Garki Clinic, Abuja',
    tag: 'Car-for-Cash Facility',
    quote:
      'The Car-for-Cash facility allowed us to finance urgent surgical procurement within 3 hours. My car was securely held in their insured depot and returned in pristine condition.',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    author: 'Engr. Babatunde Lawal',
    role: 'Federal Infrastructure Contractor, FCT',
    tag: 'Invoice Discounting',
    quote:
      'Invoice Discounting with Nexus Finance LTD turned our 90-day government receivables into liquid operational capital. It kept our site engineers fully mobilized.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    author: 'Emeka Okonkwo',
    role: 'Chief Executive, Logistics & Freight Direct, Lagos',
    tag: 'Fixed Deposit Vault',
    quote:
      'Their investment vaults give my business reserves an annualized 15.5% net return with monthly payouts. That significantly beats any commercial savings account in Nigeria.',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&auto=format&fit=crop&q=80',
  },
];

/* =========================================================================
   1. Yield Section: "Cash that grows at 15.5% APY. Paid in realtime."
   ========================================================================= */
export const YieldSection: React.FC<SectionProps> = ({ onOpenApply }) => {
  const [lifetimeYield, setLifetimeYield] = useState<number>(38427.328);
  const [thirtyDayYield, setThirtyDayYield] = useState<number>(4486.387);

  useEffect(() => {
    const interval = setInterval(() => {
      setLifetimeYield((prev) => prev + 0.000412);
      setThirtyDayYield((prev) => prev + 0.000206);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="yield" className="py-24 bg-black border-t border-white/10 relative io-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Headline and Description */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display text-balance leading-[1.08]">
              Cash that grows at <br />
              <span className="text-[#00e575]">15.5% APY.</span> <br />
              Paid in realtime.
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-md font-body leading-relaxed">
              Choose your interest strategy and earn up to 15.5% APY on your Naira and USD institutional balance with daily interest settlements.
            </p>
            <button
              onClick={() => onOpenApply('Institutional Fixed Deposit Vaults')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00e575] hover:bg-[#15f38a] active:scale-95 text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-[#00e575]/20 cursor-pointer font-body"
            >
              Start now
            </button>
          </div>

          {/* Right: Phone displaying Real-time Earnings */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] rounded-[42px] p-3 bg-neutral-900 border-2 border-neutral-700 shadow-2xl">
              <div className="rounded-[32px] bg-white text-black p-5 text-left relative min-h-[460px] flex flex-col justify-between font-body">
                <div>
                  {/* Status notch */}
                  <div className="flex justify-between items-center text-xs font-semibold text-neutral-800 mb-5">
                    <span>9:41</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-sans font-bold">
                      15.5% APY
                    </span>
                  </div>

                  <div className="text-xs text-neutral-500">Cash balance</div>
                  <div className="text-3xl font-extrabold font-display text-neutral-950 mb-6 tabular-nums">
                    ₦1,240,550.00
                  </div>

                  {/* Interest Earned Card */}
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 mb-6">
                    <div className="text-xs font-bold text-neutral-600 mb-2 font-sans">Interest earned</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-[10px] text-neutral-400 font-sans">Lifetime</div>
                        <div className="text-sm font-sans font-bold text-emerald-600 tabular-nums">
                          +₦{lifetimeYield.toFixed(3)}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-400 font-sans">Last 30 days</div>
                        <div className="text-sm font-sans font-bold text-emerald-600 tabular-nums">
                          +₦{thirtyDayYield.toFixed(3)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interest Strategy selector */}
                  <div>
                    <div className="text-xs font-bold text-neutral-600 mb-2 font-sans">Your interest strategy</div>
                    <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-800 flex items-center justify-center font-bold text-xs">
                          🏛
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900 font-sans">Nexus Sovereign Prime</div>
                          <div className="text-[10px] text-neutral-500 font-sans">₦1,240,550.00 allocated</div>
                        </div>
                      </div>
                      <span className="text-xs font-sans font-bold text-emerald-600">15.5% APY</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-xs">
                  <span className="text-neutral-500 font-sans">Compounding daily</span>
                  <span className="font-semibold text-emerald-600 font-sans">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   2. Almighty Card Section: "The almighty card"
   ========================================================================= */
export const AlmightyCardSection: React.FC<SectionProps> = ({ onOpenApply }) => {
  return (
    <section id="card" className="py-24 bg-[#00e575] text-black text-center relative overflow-hidden io-reveal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black mb-10 font-display">
          The almighty card
        </h2>

        {/* 3D Black Visa Card */}
        <div className="relative mx-auto w-full max-w-[420px] aspect-[1.586/1] rounded-3xl p-7 bg-gradient-to-br from-[#121214] via-[#1a1a1e] to-black text-white shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-neutral-700 flex flex-col justify-between text-left mb-10 transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black font-display tracking-tighter text-[#00e575]">nexus</span>
            <span className="text-xl font-bold font-display italic tracking-wider text-white">VISA</span>
          </div>

          {/* Embossed Watermark */}
          <div className="my-auto opacity-10 font-black text-6xl tracking-widest text-center select-none font-display text-white">
            NEXUS
          </div>

          <div className="flex items-end justify-between font-sans text-sm text-neutral-300">
            <span className="tracking-widest">··· 2584</span>
            <span className="text-[11px] text-emerald-400 font-medium">Works with Apple Pay &amp; Google Pay</span>
          </div>
        </div>

        <p className="text-base sm:text-lg text-neutral-900 font-medium max-w-2xl mx-auto mb-8 font-body leading-relaxed">
          Pay at more than 175 million merchants worldwide with Nexus Card. Daily limits can grow to ₦50,000,000 as you spend. Works with Apple Pay and Google Pay.
        </p>

        <button
          onClick={() => onOpenApply('The Almighty Nexus Card')}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-black hover:bg-neutral-800 active:scale-95 text-white font-bold text-sm rounded-full transition-all shadow-xl cursor-pointer font-body"
        >
          Meet Nexus Card
        </button>
      </div>
    </section>
  );
};

/* =========================================================================
   3. 15-Minute Prompt Disbursement Section with Animated Phone Alert
   ========================================================================= */
export const MoveMoneySection: React.FC<SectionProps> = ({ onOpenApply }) => {
  const [alertReceived, setAlertReceived] = useState(false);
  const [balance, setBalance] = useState<number>(1240550);
  const [isVibrating, setIsVibrating] = useState(false);

  // Auto-play the incoming credit alert loop seamlessly
  useEffect(() => {
    let timer1: any;
    let timer2: any;
    let timer3: any;
    let timerReset: any;

    const runAlertCycle = () => {
      // Phase 1: Reset to baseline before incoming credit
      setAlertReceived(false);
      setIsVibrating(false);
      setBalance(1240550);

      // Phase 2: Alert arrives at 1.8s with haptic vibration & notification drop
      timer1 = setTimeout(() => {
        setIsVibrating(true);
        setAlertReceived(true);
      }, 1800);

      // Phase 3: Stop vibration shortly after
      timer2 = setTimeout(() => {
        setIsVibrating(false);
      }, 2300);

      // Phase 4: Balance counts up at 2.4s
      timer3 = setTimeout(() => {
        setBalance(2740550);
      }, 2400);

      // Phase 5: Loop cycle after 7.5s
      timerReset = setTimeout(runAlertCycle, 7500);
    };

    runAlertCycle();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerReset);
    };
  }, []);

  return (
    <section id="disbursal" className="py-10 sm:py-14 bg-black text-white relative io-reveal overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-[#00e575]/10 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 15-Minute Turnaround Copy */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display text-balance leading-[1.08]">
              Prompt liquidity. <br />
              Disbursed in <span className="text-[#00e575]">15 minutes flat.</span>
            </h2>

            <p className="text-lg text-neutral-300 mb-8 max-w-md font-sans leading-relaxed">
              No paperwork marathons. No days lost to commercial bank bureaucracy. From automated algorithmic credit underwriting to NIBSS instant settlement, approved funds land directly in your account in 15 minutes or less.
            </p>

            {/* SLA Proof Cards */}
            <div className="space-y-3.5 mb-8 font-sans">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00e575]/30 transition-colors">
                <span className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00e575] flex items-center justify-center shrink-0 mt-0.5">
                  <Lightning className="w-5 h-5" weight="fill" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Algorithmic Decisioning in &lt;3 Minutes</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Instant automated BVN, NIN, and Remita payroll validation without paper friction.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00e575]/30 transition-colors">
                <span className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00e575] flex items-center justify-center shrink-0 mt-0.5">
                  <Bank className="w-5 h-5" weight="bold" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Direct NIBSS Instant Interbank Rail</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Immediate, zero-delay settlement to all commercial banks across Nigeria.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00e575]/30 transition-colors">
                <span className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00e575] flex items-center justify-center shrink-0 mt-0.5">
                  <BellRinging className="w-5 h-5" weight="fill" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Live In-App &amp; SMS Credit Confirmation</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Simultaneous credit alert with transparent breakdown and official receipt docket.</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenApply('Suremoney Loan')}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00e575] hover:bg-[#15f38a] active:scale-95 text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-[#00e575]/25 cursor-pointer font-sans"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Right Column: Realistic iPhone receiving Nexus Credit Alert */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* Ambient radar pulse glow behind phone */}
            <motion.div
              animate={{
                scale: alertReceived ? [1, 1.2, 1.05] : 1,
                opacity: alertReceived ? [0.25, 0.45, 0.25] : 0.16,
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[320px] sm:w-[360px] h-[520px] rounded-[60px] bg-[#00e575]/20 blur-3xl pointer-events-none -z-0"
            />

            {/* Realistic iPhone Device Container with floating & haptic vibration animation */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                x: isVibrating ? [0, -4, 4, -4, 4, -2, 2, 0] : 0,
              }}
              transition={{
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 0.38, ease: 'linear' },
              }}
              className="relative w-full max-w-[310px] sm:max-w-[350px] select-none z-10 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] cursor-pointer group"
              onClick={() => {
                setIsVibrating(true);
                setAlertReceived(false);
                setTimeout(() => {
                  setAlertReceived(true);
                  setTimeout(() => setIsVibrating(false), 500);
                }, 200);
              }}
              title="Click phone to trigger notification animation"
            >
              {/* Realistic Phone Base Frame */}
              <div className="relative w-full rounded-[48px]">
                <img
                  src="./assets/aistudio/Restored_iPhone_Messages_inbox_f50c78da.png"
                  alt="Realistic iPhone displaying incoming Nexus Finance LTD Loan Alert in iOS Messages"
                  className="w-full h-auto block drop-shadow-2xl"
                  loading="eager"
                />

                {/* iPhone Inner Screen Glass Container: Perfectly matches the screen bezel & isolates animation inside phone screen */}
                <div className="absolute left-[15.2%] right-[15.2%] top-[5%] bottom-[4.6%] rounded-[40px] overflow-hidden pointer-events-none z-20">
                  {/* Animated iOS Push Notification Popup */}
                  {/* Drops down from top of the screen glass, perfectly overlaying Messages and search bar */}
                  <AnimatePresence>
                    {alertReceived && (
                      <motion.div
                        key="ios-popup"
                        initial={{ y: -160, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -160, opacity: 0 }}
                        transition={{
                          type: 'spring',
                          damping: 24,
                          stiffness: 240,
                          mass: 0.75,
                        }}
                        className="absolute top-[6.5%] left-[3%] right-[3%] z-30 drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                      >
                        <img
                          src="./assets/aistudio/Nexus_Finance_loan_notification_banner_3cc80e3a.png"
                          alt="Nexus Finance LTD: Your loan of NGN 1,500,000.00 has been credited to account 123***4821"
                          className="w-full h-auto block rounded-2xl"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   4. Funding Channels Section: "From zero to funded in under 2 minutes"
   ========================================================================= */
export const FundingChannelsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white text-center border-t border-white/10 relative io-reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-display">
          From zero to funded in <br className="hidden sm:inline" />
          under 2 minutes
        </h2>
        <p className="text-lg text-neutral-400 mb-14 max-w-xl mx-auto font-body">
          Your Nexus account handles any kind of money.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* 1. Paycheck */}
          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00e575] mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">Bring your paycheck</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Your dedicated account details for instant salary deposits and direct federal MDA payroll integration.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-sans font-semibold text-[#00e575]">
              Direct IPPIS / NIBSS
            </div>
          </div>

          {/* 2. Apple Pay */}
          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
                <AppleLogo className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">Using Apple Pay</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Top up in seconds from an existing debit or credit card with zero manual account entries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-sans font-semibold text-[#00e575]">
              Instant Card Gateway
            </div>
          </div>

          {/* 3. Bank Pull */}
          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00e575] mb-6">
                <Bank className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">Pull from the bank</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Link an existing bank account and pull money into your high-yield Nexus account in a few taps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-sans font-semibold text-[#00e575]">
              Zero-Fee Transfers
            </div>
          </div>

          {/* 4. Crypto & Stablecoins */}
          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00e575] mb-6">
                <CurrencyBtc className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">Crypto &amp; stablecoins</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Deposit USDC / USDT straight into your balance and earn yield instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-sans font-semibold text-[#00e575]">
              1:1 Settlement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   5. Testimonials & Join Section: "Join 100k+ people with Nexus & Testimonial"
   ========================================================================= */
export const TestimonialsSliderSection: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  // Scroll to specific card index smoothly
  const scrollToIndex = (index: number) => {
    if (!sliderTrackRef.current) return;
    const container = sliderTrackRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
      setSliderIndex(index);
    }
  };

  const handlePrevTestimonial = () => {
    const prevIdx = (sliderIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    scrollToIndex(prevIdx);
  };

  const handleNextTestimonial = () => {
    const nextIdx = (sliderIndex + 1) % TESTIMONIALS_DATA.length;
    scrollToIndex(nextIdx);
  };

  // Sync index on manual scroll / swipe
  const handleScroll = () => {
    if (!sliderTrackRef.current) return;
    const container = sliderTrackRef.current;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 380;
    const gap = 24; // gap-6 is 24px
    const newIdx = Math.round(scrollPos / (cardWidth + gap));
    if (newIdx >= 0 && newIdx < TESTIMONIALS_DATA.length && newIdx !== sliderIndex) {
      setSliderIndex(newIdx);
    }
  };

  // Auto advance horizontal slider
  useEffect(() => {
    if (isSliderPaused) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => {
        const next = (prev + 1) % TESTIMONIALS_DATA.length;
        if (sliderTrackRef.current) {
          const container = sliderTrackRef.current;
          const cards = container.children;
          if (cards[next]) {
            const card = cards[next] as HTMLElement;
            container.scrollTo({
              left: card.offsetLeft - container.offsetLeft,
              behavior: 'smooth',
            });
          }
        }
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isSliderPaused]);

  return (
    <section className="py-24 bg-[#0a0a0c] text-white text-center border-t border-white/10 relative io-reveal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 font-display">
          Join 100k+ people with Nexus
        </h2>

        {/* App store downloads: EXACT SAME LENGTH / WIDTH */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button className="w-48 sm:w-52 h-14 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3 text-xs font-semibold transition-all cursor-pointer">
            <AppleLogo className="w-6 h-6 text-white shrink-0" weight="fill" />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-neutral-400 uppercase font-sans">Download on the</div>
              <div className="text-sm font-semibold font-sans">App Store</div>
            </div>
          </button>

          <button className="w-48 sm:w-52 h-14 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3 text-xs font-semibold transition-all cursor-pointer">
            <GooglePlayLogo className="w-6 h-6 text-white shrink-0" weight="fill" />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-neutral-400 uppercase font-sans">Get it on</div>
              <div className="text-sm font-semibold font-sans">Google Play</div>
            </div>
          </button>
        </div>

        {/* Interactive Horizontal Testimonials Slider */}
        <div
          className="relative text-left"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
        >
          {/* Slider navigation header controls */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#00e575] font-sans font-semibold">
                Member Experiences
              </span>
              <p className="text-neutral-400 text-sm font-sans mt-0.5">
                Real feedback from civil servants, entrepreneurs, and contractors across Nigeria
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
                <span className="text-[#00e575] font-bold">{sliderIndex + 1}</span> / {TESTIMONIALS_DATA.length}
              </span>
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <CaretLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <CaretRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider Track */}
          <div
            ref={sliderTrackRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {TESTIMONIALS_DATA.map((item, idx) => {
              const isActive = sliderIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`w-[85vw] sm:w-[380px] lg:w-[420px] shrink-0 snap-start p-7 sm:p-8 rounded-3xl bg-neutral-900/90 border transition-all duration-300 flex flex-col justify-between shadow-2xl group ${
                    isActive
                      ? 'border-[#00e575]/40 bg-gradient-to-b from-neutral-900 via-neutral-900 to-[#00e575]/[0.03]'
                      : 'border-white/10 hover:border-emerald-500/30'
                  }`}
                >
                  <div>
                    {/* Top quote icon (badge removed) */}
                    <div className="flex items-center justify-between mb-5">
                      <Quotes className="w-7 h-7 text-neutral-500 group-hover:text-[#00e575] transition-colors" weight="fill" />
                    </div>

                    {/* Quote text (no stars) */}
                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-8 font-sans">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author with circular face photo */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00e575]/40 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-white text-sm font-sans">{item.author}</div>
                      <div className="text-neutral-400 text-xs font-sans mt-0.5">{item.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Horizontal Slider Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  sliderIndex === dotIdx ? 'w-8 bg-[#00e575]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   6. Live Ticking Yield Section: "Since your last visit..."
   ========================================================================= */
export const LiveTickingYieldSection: React.FC<SectionProps> = ({ onOpenApply, onOpenInvest }) => {
  const [visitText, setVisitText] = useState<string>('Since your first visit today');
  const [visitCounter, setVisitCounter] = useState<number>(10002.485120);
  const [internalInvestOpen, setInternalInvestOpen] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let initialAccumulated = 10000;
    let label = 'Since your first visit today';

    try {
      // Helper to read cookie
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };

      // Read from localStorage or cookie
      const storedLast = localStorage.getItem('nexus_last_visit_time') || getCookie('nexus_last_visit_time');

      if (storedLast) {
        const lastMs = parseInt(storedLast, 10);
        if (!isNaN(lastMs) && lastMs < now) {
          const diffMs = now - lastMs;
          const diffSec = Math.floor(diffMs / 1000);

          if (diffMs < 60 * 1000) {
            label = 'Since your first visit today';
            initialAccumulated = 10000 + 10000 * 0.155 * (Math.max(25, diffSec) / (365 * 24 * 3600));
          } else if (diffMs < 3600 * 1000) {
            const mins = Math.max(1, Math.floor(diffMs / 60000));
            label = `Since your last visit, ${mins} minute${mins > 1 ? 's' : ''} ago`;
            initialAccumulated = 10000 + 10000 * 0.155 * (diffSec / (365 * 24 * 3600));
          } else if (diffMs < 24 * 3600 * 1000) {
            const hours = Math.floor(diffMs / 3600000);
            label = `Since your last visit, ${hours} hour${hours > 1 ? 's' : ''} ago`;
            initialAccumulated = 10000 + 10000 * 0.155 * (diffSec / (365 * 24 * 3600));
          } else if (diffMs < 48 * 3600 * 1000) {
            label = 'Since your last visit, yesterday';
            initialAccumulated = 10000 + 10000 * 0.155 * (diffSec / (365 * 24 * 3600));
          } else {
            const days = Math.floor(diffMs / (24 * 3600 * 1000));
            label = `Since your last visit, ${days} days ago`;
            initialAccumulated = 10000 + 10000 * 0.155 * (diffSec / (365 * 24 * 3600));
          }
        }
      } else {
        // First visit: save initial timestamp
        localStorage.setItem('nexus_first_visit_time', String(now));
        document.cookie = `nexus_first_visit_time=${now}; path=/; max-age=31536000; SameSite=Lax`;
        label = 'Since your first visit today';
        initialAccumulated = 10001.240500;
      }

      // Record current visit timestamp for subsequent visits
      localStorage.setItem('nexus_last_visit_time', String(now));
      document.cookie = `nexus_last_visit_time=${now}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      label = 'Since your first visit today';
      initialAccumulated = 10002.485120;
    }

    setVisitText(label);
    setVisitCounter(initialAccumulated);

    // Live continuous micro-tick (compounding on 10,000 at 15.5% APY)
    const tickRate = (10000 * 0.155 * 0.05) / (365 * 24 * 3600);
    const interval = setInterval(() => {
      setVisitCounter((prev) => prev + tickRate);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleInvestClick = () => {
    if (onOpenInvest) {
      onOpenInvest();
    } else {
      setInternalInvestOpen(true);
    }
  };

  return (
    <>
      <section className="py-24 sm:py-28 bg-[#00e575] text-black text-center relative overflow-hidden select-none io-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-neutral-900 uppercase mb-4 font-sans">
            {visitText}
          </div>

          {/* Huge live incrementing number */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-neutral-950 mb-6 tabular-nums">
            ₦{visitCounter.toFixed(6)}
          </div>

          <p className="text-base sm:text-xl font-medium text-neutral-900 max-w-xl mx-auto mb-10 font-body">
            That's what ₦10,000 in Nexus would be worth by now, at 15.5% APY.
          </p>

          <button
            onClick={handleInvestClick}
            className="inline-flex items-center justify-center px-10 py-4 bg-black hover:bg-neutral-800 active:scale-95 text-white font-bold text-base rounded-full transition-all shadow-2xl cursor-pointer font-body group"
          >
            <span>Invest Now</span>
          </button>
        </div>
      </section>

      {/* Internal Invest Modal fallback */}
      <InvestModal
        isOpen={internalInvestOpen}
        onClose={() => setInternalInvestOpen(false)}
        defaultAmount={1000000}
        defaultTenureDays={365}
      />
    </>
  );
};

/* Wrapper if needed for backward compatibility */
export const TuyoShowcaseSections: React.FC<SectionProps> = ({ onOpenApply, onOpenInvest }) => {
  return (
    <>
      <YieldSection onOpenApply={onOpenApply} />
      <AlmightyCardSection onOpenApply={onOpenApply} />
      <MoveMoneySection onOpenApply={onOpenApply} />
      <FundingChannelsSection />
      <TestimonialsSliderSection />
      <LiveTickingYieldSection onOpenApply={onOpenApply} onOpenInvest={onOpenInvest} />
    </>
  );
};
