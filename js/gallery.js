/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const tradingOutcomes = [
  { 
    memberName: 'Juan D.', 
    profitPercentage: '+150%', 
    startingCapital: '$50',
    screenshotUrl: 'https://picsum.photos/seed/trade1/600/400' 
  },
  { 
    memberName: 'Sarah L.', 
    profitPercentage: '+120%', 
    startingCapital: '$100',
    screenshotUrl: 'https://picsum.photos/seed/trade2/600/400' 
  },
  { 
    memberName: 'Maria S.', 
    profitPercentage: '+85%', 
    startingCapital: '$50',
    screenshotUrl: 'https://picsum.photos/seed/trade3/600/400' 
  }
];

export function initGallery() {
  const container = document.getElementById('outcomes-grid');
  if (!container) return;

  container.innerHTML = tradingOutcomes.map(outcome => `
    <div class="bg-white rounded-3xl card-shadow overflow-hidden group transition-all duration-500 hover:-translate-y-2 border border-slate-50">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img 
          src="${outcome.screenshotUrl}" 
          alt="Trade by ${outcome.memberName}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute top-5 left-5">
          <span class="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold text-[#1e3a8a] shadow-xl border border-blue-50 flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Verified Trade
          </span>
        </div>
      </div>

      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 class="font-bold text-xl text-[#1e3a8a] mb-1">${outcome.memberName}</h3>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Quantum Member</p>
          </div>
          <div class="text-right">
            <span class="block text-3xl font-extrabold text-[#00d2ff] leading-none mb-1">${outcome.profitPercentage}</span>
            <span class="text-[10px] font-bold text-[#fbbf24] uppercase tracking-widest">Growth</span>
          </div>
        </div>
        
        <div class="pt-6 border-t border-slate-50 flex justify-between items-center">
          <div class="flex flex-col">
            <span class="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Starting Capital</span>
            <span class="font-bold text-[#1e3a8a] text-lg">${outcome.startingCapital}</span>
          </div>
          <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <svg class="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
