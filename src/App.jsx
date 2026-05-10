import React, { useState } from 'react';
import { User, CheckCircle2, RotateCcw, Award, Briefcase } from 'lucide-react';

const questionsData = [
  {
    id: 1,
    question: "Sebagai putra putri kampus, bagaimana anda memaknai slogan ki hajar dewantara \"ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani\"?",
    isChosen: false
  },
  {
    id: 2,
    question: "Jika anda diberi kesempatan untuk mengubah salah satu fisik anda, apa yang ingin diubah dan mengapa?",
    isChosen: false
  },
  {
    id: 3,
    question: "Jika anda terpilih sebagai putra putri kampus, program pendidikan apa yang akan anda jalankan dan mengapa?",
    isChosen: false
  },
  {
    id: 4,
    question: "Jika anda diminta menjadi role model bagi mahasiswa lain, nilai apa yang akan anda tonjolkan?",
    isChosen: false
  },
  {
    id: 5,
    question: "In your opinion, how significant are the 3B values in becoming a putra putri kampus?",
    isChosen: false
  },
  {
    id: 6,
    question: "Jika Anda diberi kesempatan berbicara di forum nasional, isu apa yang akan Anda angkat?",
    isChosen: false
  }
];

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Ornamen Bunga Rafflesia (Motif khas Bumi Rafflesia Bengkulu / Batik Besurek)
const RafflesiaOrnament = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* 5 Kelopak Bunga Rafflesia */}
    {[0, 72, 144, 216, 288].map(angle => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <path d="M 50 45 C 5 25, 10 -5, 50 10 C 90 -5, 95 25, 50 45 Z" fill="currentColor" opacity="0.8" />
        {/* Motif Bintik Khas Rafflesia */}
        <circle cx="50" cy="18" r="3" fill="#080727" opacity="0.6" />
        <circle cx="42" cy="22" r="2" fill="#080727" opacity="0.6" />
        <circle cx="58" cy="22" r="2.5" fill="#080727" opacity="0.6" />
        <circle cx="36" cy="14" r="1.5" fill="#080727" opacity="0.6" />
        <circle cx="64" cy="14" r="2" fill="#080727" opacity="0.6" />
      </g>
    ))}
    {/* Cincin Tengah / Mulut Rafflesia */}
    <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.9" />
    <circle cx="50" cy="50" r="12" fill="#080727" />
    {/* Detail gerigi di dalam mulut bunga */}
    {[0, 60, 120, 180, 240, 300].map(angle => (
      <circle key={`spike-${angle}`} cx="50" cy="42" r="1.5" fill="#080727" opacity="0.5" transform={`rotate(${angle} 50 50)`} />
    ))}
  </svg>
);

// Komponen Gelombang Halus, Glitter & Ornamen Batik Bengkulu
const GlitterWaveBackground = () => {
  // Generate 50 glitter bercahaya
  const glitters = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 2 + 1.5}s`,
    delay: `-${Math.random() * 5}s`,
    size: Math.random() * 3 + 1
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080727]">
      {/* Gelombang Ambient di bagian bawah */}
      <div className="absolute top-[60%] left-[-50vw] w-[200vw] h-[200vw] rounded-[43%] bg-blue-800/10 animate-wave" style={{ '--duration': '22s' }} />
      <div className="absolute top-[65%] left-[-50vw] w-[200vw] h-[200vw] rounded-[40%] bg-indigo-900/20 animate-wave" style={{ '--duration': '28s' }} />
      <div className="absolute top-[75%] left-[-50vw] w-[200vw] h-[200vw] rounded-[38%] bg-amber-500/10 animate-wave" style={{ '--duration': '35s' }} />

      {/* Tumpukan Glitter Emas */}
      {glitters.map((g) => (
        <div
          key={g.id}
          className="absolute rounded-full bg-amber-100 blur-[1px] animate-glitter shadow-[0_0_8px_rgba(251,191,36,0.9)]"
          style={{
            top: g.top,
            left: g.left,
            width: `${g.size}px`,
            height: `${g.size}px`,
            '--duration': g.duration,
            animationDelay: g.delay,
          }}
        />
      ))}

      {/* Gradient untuk memperhalus warna langit / navy */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#080727]/40" />

      {/* --- WATERMARK ORNAMEN RAFFLESIA (Batik Besurek Bengkulu) --- */}
      {/* Kiri Atas */}
      <div className="absolute -top-16 -left-16 w-[25rem] h-[25rem] text-amber-400 opacity-[0.25] animate-slow-spin pointer-events-none">
        <RafflesiaOrnament className="w-full h-full drop-shadow-2xl" />
      </div>
      {/* Kanan Bawah */}
      <div className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] text-amber-300 opacity-[0.25] animate-slow-spin pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '90s' }}>
        <RafflesiaOrnament className="w-full h-full drop-shadow-2xl" />
      </div>
      {/* Tengah Kanan */}
      <div className="absolute top-[20%] -right-24 w-[20rem] h-[20rem] text-amber-200 opacity-[0.15] animate-slow-spin pointer-events-none" style={{ animationDuration: '50s' }}>
        <RafflesiaOrnament className="w-full h-full drop-shadow-2xl" />
      </div>

    </div>
  );
};

const playRevealSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  
  // Fungsi membunyikan satu dentingan kristal/lonceng yang sangat halus
  const playBell = (freq, delay, volume) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine'; // Gelombang sinus paling murni dan halus (glassy tone)
    osc.frequency.value = freq;
    
    // Attack sangat lembut, Decay sangat panjang dan mengalun
    gain.gain.setValueAtTime(0, ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 4.0);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + 4.0);
  };

  // Memainkan nada kord modern & mewah (Csus2 chord: C - D - G) dengan arpeggio lambat
  playBell(523.25, 0, 0.4);       // C5
  playBell(587.33, 0.08, 0.3);    // D5
  playBell(783.99, 0.16, 0.3);    // G5
  playBell(1046.50, 0.24, 0.2);   // C6 (Tinggi mencicit elegan)

  // Tambahan getaran bass (Sub/Pad) yang sangat hangat dan dalam di latar belakang (Suspense)
  const padOsc = ctx.createOscillator();
  const padGain = ctx.createGain();
  padOsc.type = 'triangle'; // Gelombang segi tiga yang hangat
  padOsc.frequency.value = 65.41; // C2 (Sangat rendah dan bulat)
  
  padGain.gain.setValueAtTime(0, ctx.currentTime);
  padGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 1.0); // Naik pelan-pelan (Swell)
  padGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 5.0); // Membisu perlahan
  
  padOsc.connect(padGain);
  padGain.connect(ctx.destination);
  
  padOsc.start(ctx.currentTime);
  padOsc.stop(ctx.currentTime + 5.0);
};

export default function App() {
  const [questions, setQuestions] = useState(() => 
    shuffleArray(questionsData).map((q, idx) => ({ ...q, boxNumber: idx + 1 }))
  );
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectBox = (q) => {
    if (q.isChosen) return;
    
    playRevealSound();
    setSelectedQuestion(q);
    setQuestions(prev => prev.map(item => 
      item.id === q.id ? { ...item, isChosen: true } : item
    ));
  };

  const resetAll = () => {
    setQuestions(shuffleArray(questionsData).map((q, idx) => ({ ...q, isChosen: false, boxNumber: idx + 1 })));
    setSelectedQuestion(null);
  };

  return (
    <div className="h-screen text-blue-50 p-2 px-4 md:p-6 font-sans overflow-hidden flex items-center justify-center relative">
      <GlitterWaveBackground />
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center max-h-screen relative z-10">
        
        {/* Header */}
        <header className="text-center mb-4 md:mb-6 flex flex-col items-center animate-fade-in-down">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo Pemprov Bengkulu dan Putra Putri Kampus" className="h-28 md:h-36 lg:h-[22vh] mb-2 md:mb-4 drop-shadow-2xl animate-float object-contain" />
          
          <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 md:py-2 rounded-full mb-3 shadow-lg">
            <span className="text-amber-500 text-xs md:text-sm font-semibold uppercase tracking-widest">
              Grand Final Putra Putri Kampus Provinsi Bengkulu 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[4vh] font-black tracking-tight bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent mb-2">
            PEMILIHAN PERTANYAAN TOP 3
          </h1>
          <p className="text-blue-200 text-xs md:text-sm whitespace-nowrap">
            Silakan pilih satu kotak untuk mendapatkan pertanyaan. Setiap pertanyaan hanya dapat dipilih satu kali.
          </p>
        </header>

        {/* Grid Selection */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 animate-fade-in-up w-full px-2 lg:px-8">
          {questions.map((q, idx) => (
            <button
              key={q.boxNumber}
              onClick={() => handleSelectBox(q)}
              disabled={q.isChosen}
              style={{ animationDelay: `${idx * 50}ms` }}
              className={`relative h-[12vh] md:h[14vh] lg:h-[18vh] min-h-[80px] rounded-2xl md:rounded-3xl border-2 transition-all duration-300 overflow-hidden group animate-scale-in flex items-center justify-center
                ${q.isChosen 
                  ? 'bg-[#121045] border-[#1a1859] opacity-0 cursor-default pointer-events-none' 
                  : 'bg-[#121045] border-amber-500/40 shadow-lg hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] active:scale-95 active:rotate-1'
                }`}
            >
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {q.isChosen ? null : (
                  <div className="flex flex-col items-center justify-center scale-90 md:scale-100">
                    <span className="text-3xl md:text-4xl lg:text-[5vh] leading-none font-black text-amber-500 group-hover:scale-125 transition-transform duration-300 drop-shadow-md pb-1">
                      {q.boxNumber}
                    </span>
                    <span className="text-[9px] md:text-[10px] text-blue-300 uppercase tracking-[0.2em] group-hover:text-amber-200 transition-colors">Pertanyaan</span>
                  </div>
                )}
              </div>
              
              {/* Decorative background light */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-3xl transition-all duration-500
                ${q.isChosen ? 'bg-[#1a1859]/20' : 'bg-amber-500/20 group-hover:bg-amber-400/40 group-hover:scale-150'}`} 
              />
            </button>
          ))}
        </div>

        {/* Footer controls */}
        <div className="mt-4 md:mt-8 flex justify-center pb-2">
          <button 
            onClick={resetAll}
            className="flex items-center gap-2 text-blue-300 hover:text-amber-500 transition-colors text-xs md:text-sm z-10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Pilihan
          </button>
        </div>

        {/* Reveal Overlay / Modal */}
        {selectedQuestion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080727]/95 backdrop-blur-xl animate-in fade-in duration-500">
            <div className="bg-[#121045] border-2 border-amber-500/50 rounded-[2rem] w-full max-w-4xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.15)] animate-scale-in">
              
              {/* Header Modal */}
              <div className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 px-6 py-4 flex justify-between items-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay pointer-events-none"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <Award className="text-[#080727] w-8 h-8 md:w-10 md:h-10" />
                  <h2 className="text-[#080727] font-black text-xl md:text-3xl tracking-tight flex items-baseline gap-2 md:gap-3">
                    PERTANYAAN <span className="text-3xl md:text-5xl tracking-normal">{selectedQuestion.boxNumber}</span>
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedQuestion(null)}
                  className="text-[#080727] hover:bg-black/20 p-2 md:p-3 rounded-xl transition-all hover:rotate-90 relative z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8 md:p-14 lg:p-20 relative">
                <div className="absolute top-10 left-10 text-amber-500/10 text-9xl font-serif pointer-events-none">"</div>
                <div className="absolute bottom-10 right-10 text-amber-500/10 text-9xl font-serif pointer-events-none rotate-180">"</div>
                <div className="flex flex-col items-center justify-center gap-6 md:gap-10 text-center min-h-[35vh] relative z-10">
                  <p className="text-amber-500/80 text-sm md:text-base uppercase tracking-[0.4em] font-bold">Pertanyaan Top 3</p>
                  <h3 className="text-2xl md:text-4xl lg:text-[2.5rem] leading-relaxed lg:leading-[1.6] font-bold text-amber-50 max-w-3xl mx-auto drop-shadow-md">
                    {selectedQuestion.question}
                  </h3>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-70 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-amber-600/10 rounded-full filter blur-[100px] animate-blob" />
        <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50rem] h-[50rem] bg-blue-600/10 rounded-full filter blur-[150px] animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}