import React, { useState } from 'react';
import { X, CheckCircle, Vault, ArrowRight, ShieldCheck, Copy, EnvelopeSimple, PhoneCall } from '@phosphor-icons/react';

interface InvestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount?: number;
  defaultTenureDays?: number;
  onShowSnackbar?: (text: string, type?: 'success' | 'info') => void;
}

export const InvestModal: React.FC<InvestModalProps> = ({
  isOpen,
  onClose,
  defaultAmount = 1000000,
  defaultTenureDays = 365,
  onShowSnackbar,
}) => {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [amountInput, setAmountInput] = useState<string>(defaultAmount.toLocaleString('en-NG'));
  const [tenureDays, setTenureDays] = useState<number>(defaultTenureDays);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [payoutOption, setPayoutOption] = useState<'monthly' | 'maturity'>('monthly');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const getApy = (days: number) => {
    if (days <= 90) return 0.125;
    if (days <= 180) return 0.14;
    return 0.155;
  };

  const apy = getApy(tenureDays);
  const estimatedProfit = amount * apy * (tenureDays / 365);
  const totalMaturity = amount + estimatedProfit;
  const monthlyPayout = (amount * apy) / 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const generatedId = `NX-INV-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedId);
      setSubmitting(false);
      setSubmitted(true);
      onShowSnackbar?.(`Investment inquiry ${generatedId} transmitted to support@nexusfinance.com!`, 'success');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const mailtoSubject = encodeURIComponent(`High-Yield Wealth Inquiry [${referenceId || 'New'}] - ₦${amount.toLocaleString('en-NG')}`);
  const mailtoBody = encodeURIComponent(
    `Nexus Finance LTD Wealth Management Desk,\n\n` +
    `I am submitting an inquiry for High-Yield Fixed Deposit investment:\n` +
    `• Reference ID: ${referenceId || 'Pending'}\n` +
    `• Investor Name: ${fullName}\n` +
    `• Phone: ${phone}\n` +
    `• Email: ${email}\n` +
    `• Deposit Principal: ₦${amount.toLocaleString('en-NG')}\n` +
    `• Tenure: ${tenureDays} Days (${(apy * 100).toFixed(1)}% APY)\n` +
    `• Estimated Yield Return: +₦${Math.round(estimatedProfit).toLocaleString('en-NG')}\n` +
    `• Total Payout at Maturity: ₦${Math.round(totalMaturity).toLocaleString('en-NG')}\n` +
    `• Payout Frequency: ${payoutOption === 'monthly' ? 'Monthly Interest Credited' : 'Compounded Upon Maturity'}\n` +
    `• Additional Notes: ${notes || 'None'}\n\n` +
    `Please advise on treasury settlement bank account and placement contract.\n`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto font-sans"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-2xl my-auto max-h-[92vh] overflow-y-auto bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#00e575] mb-1">
              <Vault className="w-4 h-4" weight="bold" />
              <span>Nexus High-Yield Wealth Vault · Up to 15.5% APY</span>
            </div>
            <h3 className="text-2xl font-black text-white font-display">
              {submitted ? 'Inquiry Dispatched' : 'High-Yield Investment Inquiry'}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {submitted
                ? 'Your investment proposal has been transmitted to support@nexusfinance.com'
                : 'Direct underwriting consultation with our Abuja Treasury & Wealth Advisory desk'}
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#00e575] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" weight="bold" />
            </div>

            <div>
              <div className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">
                Investment Reference Dossier
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-2xl font-display font-bold text-[#00e575]">{referenceId}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(referenceId);
                    }
                    onShowSnackbar?.(`Reference ${referenceId} copied to clipboard!`);
                  }}
                  title="Copy Reference"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-[#00e575]" />
                </button>
              </div>
            </div>

            {/* Breakdown summary card */}
            <div className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 max-w-lg mx-auto space-y-2.5 text-left font-sans">
              <div className="flex justify-between">
                <span className="text-neutral-400">Investor:</span>
                <span className="text-white font-medium">{fullName} ({phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Deposit Principal:</span>
                <span className="text-[#00e575] font-display font-bold text-sm">₦{amount.toLocaleString('en-NG')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Fixed Lock Tenure:</span>
                <span className="text-white font-medium">{tenureDays} Days ({(apy * 100).toFixed(1)}% APY)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Projected Interest Return:</span>
                <span className="text-[#00e575] font-semibold">+₦{Math.round(estimatedProfit).toLocaleString('en-NG')}</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2">
                <span className="text-white font-bold">Total Maturity Payout:</span>
                <span className="text-white font-display font-bold text-sm">₦{Math.round(totalMaturity).toLocaleString('en-NG')}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
              Our Treasury Desk at NICON Insurance Building, Central Business District, Abuja has received your inquiry. A senior wealth officer will contact you within operational hours to review placement documentation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:support@nexusfinance.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="px-6 py-3 rounded-xl bg-[#00e575] hover:bg-[#15f38a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <EnvelopeSimple className="w-4 h-4" weight="bold" />
                <span>Transmit Directly to support@nexusfinance.com</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 1. Deposit Principal Selector */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <label className="text-xs uppercase font-bold tracking-wider text-neutral-300">
                  Target Deposit Amount (₦) *
                </label>
                <span className="text-[11px] text-neutral-400">Minimum ₦250,000 · Tier-1 Custody</span>
              </div>

              {/* Amount input */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 border border-neutral-800 focus-within:border-[#00e575] focus-within:ring-2 focus-within:ring-[#00e575]/30 transition-all">
                <span className="text-2xl font-black text-[#00e575] font-display">₦</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={amountInput}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/[^0-9]/g, '');
                    if (!digits) {
                      setAmountInput('');
                      return;
                    }
                    const num = parseInt(digits, 10);
                    setAmountInput(num.toLocaleString('en-NG'));
                    setAmount(num);
                  }}
                  onBlur={() => {
                    const digits = amountInput.replace(/[^0-9]/g, '');
                    let num = parseInt(digits, 10) || 250000;
                    if (num < 250000) num = 250000;
                    setAmount(num);
                    setAmountInput(num.toLocaleString('en-NG'));
                  }}
                  className="bg-transparent text-2xl font-black font-display text-white outline-none w-full tabular-nums"
                  placeholder="1,000,000"
                />
              </div>

              {/* Quick preset chips */}
              <div className="flex flex-wrap gap-2 mt-2.5">
                {[500000, 1000000, 5000000, 10000000, 25000000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset);
                      setAmountInput(preset.toLocaleString('en-NG'));
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                      amount === preset
                        ? 'bg-[#00e575] text-black border-[#00e575] font-bold'
                        : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    ₦{(preset / 1000000).toFixed(preset % 1000000 === 0 ? 0 : 1)}M
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Tenure Selector */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-neutral-300 mb-2">
                Deposit Lock Tenure &amp; Yield Rate *
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { days: 90, rate: '12.5% APY', sub: 'Quarterly Vault' },
                  { days: 180, rate: '14.0% APY', sub: 'Bi-Annual Vault' },
                  { days: 365, rate: '15.5% APY', sub: 'Annual Maximum' },
                ].map((tier) => (
                  <button
                    key={tier.days}
                    type="button"
                    onClick={() => setTenureDays(tier.days)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      tenureDays === tier.days
                        ? 'bg-neutral-900 border-[#00e575] shadow-lg shadow-[#00e575]/20 text-white'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold text-white font-sans">{tier.days} Days</span>
                    <span className="text-sm font-extrabold text-[#00e575] font-display mt-0.5">{tier.rate}</span>
                    <span className="text-[10px] text-neutral-400">{tier.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Yield projection live summary */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
              <div>
                <div className="text-neutral-400">Projected Net Yield Return:</div>
                <div className="text-lg font-bold font-display text-[#00e575] tabular-nums">
                  +₦{Math.round(estimatedProfit).toLocaleString('en-NG')}
                </div>
              </div>
              <div className="text-right">
                <div className="text-neutral-400">Total Maturity Value:</div>
                <div className="text-lg font-bold font-display text-white tabular-nums">
                  ₦{Math.round(totalMaturity).toLocaleString('en-NG')}
                </div>
              </div>
            </div>

            {/* Payout frequency */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-neutral-300 mb-1.5">
                Preferred Interest Payout Cadence
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPayoutOption('monthly')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                    payoutOption === 'monthly'
                      ? 'bg-[#00e575] text-black border-[#00e575] font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Monthly Interest to Bank (~₦{Math.round(monthlyPayout).toLocaleString('en-NG')}/mo)
                </button>
                <button
                  type="button"
                  onClick={() => setPayoutOption('maturity')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                    payoutOption === 'maturity'
                      ? 'bg-[#00e575] text-black border-[#00e575] font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Compound at End of Term
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alh. Aminu Bello"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#00e575]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +234 803 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#00e575]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                Official Email *
              </label>
              <input
                type="email"
                required
                placeholder="investor@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#00e575]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-neutral-300 mb-1">
                Investment Notes or Special Requests (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Corporate treasury placement, roll-over preferences, currency considerations..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#00e575] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-[#00e575] hover:bg-[#15f38a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#00e575]/25 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{submitting ? 'Transmitting to support@nexusfinance.com...' : 'Transmit Investment Inquiry'}</span>
                <ArrowRight className="w-4 h-4" weight="bold" />
              </button>
              <p className="text-[11px] text-center text-neutral-400 mt-2.5">
                Inquiries are transmitted directly to <strong className="text-white">support@nexusfinance.com</strong>.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
