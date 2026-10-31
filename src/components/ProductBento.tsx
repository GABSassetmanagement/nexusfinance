import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  CreditCard,
  Bank,
  AirplaneTilt,
  Users,
  Storefront,
  FileText,
  Vault,
  Coins,
  ArrowUpRight,
  ArrowRight,
} from '@phosphor-icons/react';

interface ProductBentoProps {
  onSelectProduct: (productName: string) => void;
}

type TabType = 'featured' | 'personal' | 'business' | 'investments' | 'all';

interface ProductCardData {
  id: string;
  numberTag: string;
  title: string;
  description: string;
  loanAmount: string;
  tenure: string;
  icon: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imageOverlayTag?: string;
  topRightTag: string;
}

export const ProductBento: React.FC<ProductBentoProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<TabType>('featured');

  // Featured Layout Data matching exact structure
  const featuredHeroCard: ProductCardData = {
    id: 'car-for-cash',
    numberTag: '01 / Put your assets to work',
    title: 'Car-for-Cash (CFC)',
    description:
      'Access short-term funding using your vehicle as security. Your car is held until the loan is repaid.',
    loanAmount: 'Up to ₦25,000,000',
    tenure: '1 – 12 months',
    icon: <Car className="w-6 h-6 text-[#00e575]" weight="bold" />,
    image: './assets/nexus/hero_car.jpg',
    imageAlt: 'Sleek luxury car representing Car-for-Cash asset security',
    imageOverlayTag: '01 / Put your assets to work',
    topRightTag: 'Featured solution',
  };

  const featuredRightCards: ProductCardData[] = [
    {
      id: 'suremoney-loan',
      numberTag: '02 / For everyday possibilities',
      title: 'Suremoney Loan',
      description:
        'Flexible funding for unexpected expenses and opportunities, with no collateral required.',
      loanAmount: 'Up to ₦10,000,000',
      tenure: '1 – 24 months',
      icon: <CreditCard className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '02 / For everyday possibilities',
    },
    {
      id: 'nexus-credit',
      numberTag: '03 / Make your salary go further',
      title: 'Nexus Credit',
      description:
        'Salary-based financing with repayments collected through your payroll.',
      loanAmount: 'Up to ₦5,000,000',
      tenure: '3 – 12 months',
      icon: <Bank className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '03 / Make your salary go further',
    },
  ];

  // Personal Tab Data
  const personalHeroCard: ProductCardData = {
    id: 'car-for-cash',
    numberTag: '01 / Put your assets to work',
    title: 'Car-for-Cash (CFC)',
    description:
      'Access short-term funding using your vehicle as security. Your car is safely preserved in our secured depot until repayment.',
    loanAmount: 'Up to ₦25,000,000',
    tenure: '1 – 12 months',
    icon: <Car className="w-6 h-6 text-[#00e575]" weight="bold" />,
    image: './assets/nexus/hero_car.jpg',
    imageAlt: 'Sleek sports car in climate controlled depot',
    imageOverlayTag: '01 / Put your assets to work',
    topRightTag: 'Asset-backed facility',
  };

  const personalRightCards: ProductCardData[] = [
    {
      id: 'suremoney-loan',
      numberTag: '02 / For everyday possibilities',
      title: 'Suremoney Loan',
      description:
        'Flexible personal financing for emergencies, medical fees, and immediate household goals with zero collateral.',
      loanAmount: 'Up to ₦10,000,000',
      tenure: '1 – 24 months',
      icon: <CreditCard className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '02 / For everyday possibilities',
    },
    {
      id: 'travel-financing',
      numberTag: '03 / Travel, study & relocation',
      title: 'Travel Financing',
      description:
        'Certified proof of financial capability and official statements for study abroad, visas, and relocation.',
      loanAmount: 'Up to ₦100,000,000+',
      tenure: '30 – 90 days',
      icon: <AirplaneTilt className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '03 / Travel & Study abroad',
    },
  ];

  // Business Tab Data
  const businessHeroCard: ProductCardData = {
    id: 'women-empowerment',
    numberTag: '01 / Closing the female credit gap',
    title: 'Nexus Women Empowerment (NWEL)',
    description:
      'Dedicated growth capital, flexible tenures, and advisory coaching structured to help female entrepreneurs scale.',
    loanAmount: 'Up to ₦5,000,000',
    tenure: '3 – 12 months',
    icon: <Users className="w-6 h-6 text-[#00e575]" weight="bold" />,
    image: './assets/nexus/entrepreneur.webp',
    imageAlt: 'Female business owner and entrepreneur in commercial studio',
    imageOverlayTag: '01 / Women in enterprise',
    topRightTag: 'Concessionary facility',
  };

  const businessRightCards: ProductCardData[] = [
    {
      id: 'shop-owned-sme',
      numberTag: '02 / Retail and merchant inventory',
      title: 'Shop-Owned Loan (SOBL)',
      description:
        'Working capital support for registered retail shopkeepers and market stall owners with tailored cash-flow deductions.',
      loanAmount: 'Up to ₦3,000,000',
      tenure: '1 – 6 months',
      icon: <Storefront className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '02 / Trade & retail capital',
    },
    {
      id: 'invoice-discounting',
      numberTag: '03 / Corporate receivables',
      title: 'Invoice Discounting',
      description:
        'Convert verified purchase orders and corporate invoices into immediate liquidity without waiting 60–90 days.',
      loanAmount: 'Up to ₦50,000,000',
      tenure: '30 – 90 days',
      icon: <FileText className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '03 / Invoice liquidity',
    },
  ];

  // Investments Tab Data
  const investmentsHeroCard: ProductCardData = {
    id: 'high-yield-investments',
    numberTag: '01 / Capital preservation & yield',
    title: 'Fixed Deposit Vaults',
    description:
      'Inflation-hedged yields and capital preservation designed for high-net-worth members, cooperative societies, and reserves.',
    loanAmount: '15.5% Annual APY',
    tenure: '30 – 365 days',
    icon: <Vault className="w-6 h-6 text-[#00e575]" weight="bold" />,
    image: './assets/nexus/gold_vault.jpg',
    imageAlt: 'Fine gold bullion bars stored in secure depository vault',
    imageOverlayTag: '01 / Guaranteed high yield',
    topRightTag: 'Wealth vaults',
  };

  const investmentsRightCards: ProductCardData[] = [
    {
      id: 'gold-for-cash',
      numberTag: '02 / Precious asset liquidity',
      title: 'Gold-for-Cash (GFC)',
      description:
        'Instant credit backed by physical bullion and certified gold bars, safeguarded in insured vaults until repayment.',
      loanAmount: 'Up to ₦50,000,000',
      tenure: '1 – 12 months',
      icon: <Coins className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '02 / Secured bullion credit',
    },
    {
      id: 'nexus-credit',
      numberTag: '03 / Institutional liquidity',
      title: 'Nexus Credit',
      description:
        'Salary-based financing and institutional employee liquidity facilities backed by verified payrolls.',
      loanAmount: 'Up to ₦5,000,000',
      tenure: '3 – 12 months',
      icon: <Bank className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '03 / Remita integration',
    },
  ];

  // All Products List
  const allProductsList: ProductCardData[] = [
    featuredHeroCard,
    ...featuredRightCards,
    {
      id: 'travel-financing',
      numberTag: '04 / Travel, study & relocation',
      title: 'Travel Financing',
      description:
        'Certified proof of financial capability and official statements for study abroad, visas, and relocation.',
      loanAmount: 'Up to ₦100,000,000+',
      tenure: '30 – 90 days',
      icon: <AirplaneTilt className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '04 / Visa & Study',
    },
    {
      id: 'women-empowerment',
      numberTag: '05 / Women in enterprise',
      title: 'Nexus Women Empowerment (NWEL)',
      description:
        'Dedicated growth capital, flexible tenures, and advisory coaching structured to help female entrepreneurs scale.',
      loanAmount: 'Up to ₦5,000,000',
      tenure: '3 – 12 months',
      icon: <Users className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '05 / Concessionary terms',
    },
    {
      id: 'high-yield-investments',
      numberTag: '06 / Capital preservation',
      title: 'Fixed Deposit Vaults',
      description:
        'Inflation-hedged yields and capital preservation designed for high-net-worth members, cooperative societies, and reserves.',
      loanAmount: '15.5% Annual APY',
      tenure: '30 – 365 days',
      icon: <Vault className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '06 / High-Yield APY',
    },
    {
      id: 'shop-owned-sme',
      numberTag: '07 / Retail & merchant capital',
      title: 'Shop-Owned Loan (SOBL)',
      description:
        'Working capital support for registered retail shopkeepers and market stall owners with tailored cash-flow deductions.',
      loanAmount: 'Up to ₦3,000,000',
      tenure: '1 – 6 months',
      icon: <Storefront className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '07 / Retail merchants',
    },
    {
      id: 'invoice-discounting',
      numberTag: '08 / Corporate receivables',
      title: 'Invoice Discounting',
      description:
        'Convert verified purchase orders and corporate invoices into immediate liquidity without waiting 60–90 days.',
      loanAmount: 'Up to ₦50,000,000',
      tenure: '30 – 90 days',
      icon: <FileText className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '08 / Receivables finance',
    },
    {
      id: 'gold-for-cash',
      numberTag: '09 / Precious asset credit',
      title: 'Gold-for-Cash (GFC)',
      description:
        'Instant credit backed by physical bullion and certified gold bars, safeguarded in insured vaults until repayment.',
      loanAmount: 'Up to ₦50,000,000',
      tenure: '1 – 12 months',
      icon: <Coins className="w-6 h-6 text-[#00e575]" weight="bold" />,
      topRightTag: '09 / Bullion security',
    },
  ];

  let heroCard = featuredHeroCard;
  let rightCards = featuredRightCards;

  if (activeTab === 'personal') {
    heroCard = personalHeroCard;
    rightCards = personalRightCards;
  } else if (activeTab === 'business') {
    heroCard = businessHeroCard;
    rightCards = businessRightCards;
  } else if (activeTab === 'investments') {
    heroCard = investmentsHeroCard;
    rightCards = investmentsRightCards;
  }

  const handleTalkToTeam = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 relative bg-black text-white selection:bg-[#00e575] selection:text-black">
      {/* Subtle brand ambient glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0,229,117,0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header in Nexus Typography & Style */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.06]">
              A little support.
              <br />
              <span className="text-white">A bigger </span>
              <span className="text-[#00e575]">possibility.</span>
            </h2>
          </div>
          <div className="md:pt-3">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed md:text-right max-w-xs font-sans">
              For the things you need today,
              <br className="hidden sm:inline" />
              and the plans you have for tomorrow.
            </p>
          </div>
        </div>

        {/* Category Tabs & "All products ↗" Link aligned in a single straight horizontal line with distinct separation */}
        <div className="border-b border-white/10 mb-8 sm:mb-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-8 sm:gap-12 font-sans pb-3">
            <div className="flex items-center gap-6 sm:gap-8 pr-4">
              {[
                { id: 'featured', label: 'Featured' },
                { id: 'personal', label: 'Personal' },
                { id: 'business', label: 'Business' },
                { id: 'investments', label: 'Investments' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`relative text-sm sm:text-base transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-neutral-400 hover:text-white font-medium'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="productTabIndicatorNexus"
                        className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#00e575] shadow-[0_0_8px_rgba(0,229,117,0.8)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pl-6 sm:pl-8 border-l border-white/15 shrink-0 ml-auto">
              <button
                onClick={() => setActiveTab(activeTab === 'all' ? 'featured' : 'all')}
                className="flex items-center gap-1.5 text-sm sm:text-base font-semibold text-neutral-300 hover:text-[#00e575] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{activeTab === 'all' ? 'Featured view' : 'All products'}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Content View: Exact 2-Column Structure styled in pure Nexus theme */}
        {activeTab !== 'all' ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
            >
              {/* Left Column: Hero Featured Card with Photo and Spec Grid */}
              <div className="m3-card-hover bg-neutral-900/50 border border-white/10 hover:border-[#00e575]/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl shadow-black/80 group">
                <div>
                  {/* Photo Banner with Overlay Tag */}
                  {heroCard.image && (
                    <div className="relative aspect-[16/9] sm:aspect-[16/9.5] w-full bg-black overflow-hidden border-b border-white/10">
                      <img
                        src={heroCard.image}
                        alt={heroCard.imageAlt || heroCard.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient for tag readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                      {heroCard.imageOverlayTag && (
                        <div className="absolute bottom-4 left-6 sm:bottom-5 sm:left-8 text-xs sm:text-sm font-mono text-neutral-200 font-semibold tracking-wide drop-shadow-md">
                          {heroCard.imageOverlayTag}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    {/* Header Row: Icon & Top Right Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div>{heroCard.icon}</div>
                      <span className="text-xs font-semibold text-[#00e575] font-sans tracking-wide uppercase">
                        {heroCard.topRightTag}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3 group-hover:text-[#00e575] transition-colors">
                      {heroCard.title}
                    </h3>

                    {/* Product Description */}
                    <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-8">
                      {heroCard.description}
                    </p>

                    {/* Spec Block: 2 Columns (Loan amount & Tenure) */}
                    <div className="grid grid-cols-2 gap-6 pt-2 font-sans border-t border-white/5 pt-5">
                      <div>
                        <div className="text-xs text-neutral-400 mb-1.5 font-medium">
                          {heroCard.id === 'high-yield-investments' ? 'Yield rate' : 'Loan amount'}
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-white font-display tracking-tight">
                          {heroCard.loanAmount}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-neutral-400 mb-1.5 font-medium">Tenure</div>
                        <div className="text-lg sm:text-xl font-extrabold text-white font-display tracking-tight">
                          {heroCard.tenure}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line & Bottom Explore Link */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="border-t border-white/10 mb-6" />
                  <button
                    onClick={() => onSelectProduct(heroCard.id)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00e575] hover:text-[#15f38a] transition-colors cursor-pointer group/link font-sans"
                  >
                    <span>Explore {heroCard.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Stacked Product Cards */}
              <div className="flex flex-col gap-6 sm:gap-8 justify-between">
                {rightCards.map((card) => (
                  <div
                    key={card.id}
                    className="m3-card-hover bg-neutral-900/50 border border-white/10 hover:border-[#00e575]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/80 group flex-1"
                  >
                    <div>
                      {/* Header Row: Icon & Top Right Label */}
                      <div className="flex items-center justify-between mb-4">
                        <div>{card.icon}</div>
                        <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#00e575] font-sans tracking-wide transition-colors">
                          {card.topRightTag}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3 group-hover:text-[#00e575] transition-colors">
                        {card.title}
                      </h3>

                      {/* Product Description */}
                      <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-6">
                        {card.description}
                      </p>

                      {/* Spec Block: 2 Columns (Loan amount & Tenure) */}
                      <div className="grid grid-cols-2 gap-6 pt-2 font-sans border-t border-white/5 pt-5">
                        <div>
                          <div className="text-xs text-neutral-400 mb-1.5 font-medium">
                            {card.id === 'high-yield-investments' ? 'Yield rate' : 'Loan amount'}
                          </div>
                          <div className="text-lg sm:text-xl font-extrabold text-white font-display tracking-tight">
                            {card.loanAmount}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-neutral-400 mb-1.5 font-medium">Tenure</div>
                          <div className="text-lg sm:text-xl font-extrabold text-white font-display tracking-tight">
                            {card.tenure}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider Line & Bottom Explore Link */}
                    <div className="pt-6">
                      <div className="border-t border-white/10 mb-6" />
                      <button
                        onClick={() => onSelectProduct(card.id)}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00e575] hover:text-[#15f38a] transition-colors cursor-pointer group/link font-sans"
                      >
                        <span>Explore {card.title}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* All Products View: Grid with the exact clean card aesthetic */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-sans">
            {allProductsList.map((card) => (
              <div
                key={card.id}
                className="m3-card-hover bg-neutral-900/50 border border-white/10 hover:border-[#00e575]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/80 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>{card.icon}</div>
                    <span className="text-xs font-semibold text-neutral-400 font-sans tracking-wide">
                      {card.topRightTag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-2.5 group-hover:text-[#00e575] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2 font-sans border-t border-white/5 pt-4">
                    <div>
                      <div className="text-xs text-neutral-400 mb-1">
                        {card.id === 'high-yield-investments' ? 'Yield rate' : 'Loan amount'}
                      </div>
                      <div className="text-base font-extrabold text-white font-display">
                        {card.loanAmount}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-neutral-400 mb-1">Tenure</div>
                      <div className="text-base font-extrabold text-white font-display">
                        {card.tenure}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="border-t border-white/10 mb-6" />
                  <button
                    onClick={() => onSelectProduct(card.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00e575] hover:text-[#15f38a] transition-colors cursor-pointer group/link font-sans"
                  >
                    <span>Explore {card.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation & Regulatory Bar in Nexus Theme */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <p className="text-sm sm:text-base text-neutral-200 font-medium font-sans">
              Not sure where to start? Let's find the right fit.
            </p>
            <button
              onClick={handleTalkToTeam}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00e575] hover:text-[#15f38a] transition-colors cursor-pointer group font-sans"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs text-neutral-500 leading-relaxed font-sans">
              Loan amounts and terms are subject to eligibility, assessment, and approval. Review the product details for requirements and applicable charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
