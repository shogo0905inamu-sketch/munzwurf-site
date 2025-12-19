import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Target, 
  Trophy, 
  Clock, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Instagram, 
  ShieldCheck,
  Brain,
  Globe,
  Volleyball,
  ArrowRight,
  Languages
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const instagramUrl = "https://www.instagram.com/shogo9195/";

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <Volleyball className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter uppercase block leading-none text-slate-900">Münzwurf</span>
              <span className="text-[10px] font-bold text-indigo-500 tracking-widest uppercase italic font-serif">Volleyball Club Dresden</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Languages size={14} />
              JP / EN Available
            </div>
            <button 
              onClick={handleJoinClick}
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-indigo-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-200"
            >
              <Instagram size={14} />
              JOIN / 参加
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className={`mb-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 animate-bounce-subtle">
              <Globe size={14} />
              <span>Thinking Volleyball Community in Dresden</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-8 text-slate-900 tracking-tighter uppercase">
              THINKING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 italic drop-shadow-sm">VOLLEYBALL</span>
            </h1>
            <div className="space-y-4 mb-10">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold max-w-2xl border-l-4 border-indigo-600 pl-6">
                「なんとなく」を卒業する。基礎の徹底と戦術理解が生む、大人のための知的バレーボール体験。
              </p>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium max-w-2xl pl-7 italic">
                Master the basics, deepen tactical understanding. A high-quality "Thinking Volleyball" experience for adults in Dresden.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleJoinClick}
                className="group bg-indigo-600 text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2"
              >
                Join the Club / 参加を申し込む
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Concept Panel */}
          <div className={`md:col-span-4 glass-card p-12 group transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <Brain size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 uppercase italic leading-none">Concept</h2>
                <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Our Philosophy / 活動理念</p>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-2 text-slate-800 italic">質の高い「考えるバレー」の実践</h3>
              <p className="text-lg text-slate-400 font-medium mb-6">Practicing High-Quality "Thinking Volleyball"</p>
              <p className="text-slate-500 leading-relaxed text-lg max-w-2xl">
                We focus not just on keeping the ball up, but understanding *why* we play each move. Each player acts with intent to evolve as a team.
                <span className="block mt-4 text-slate-600 font-medium italic">単にボールを繋ぐだけでなく、なぜそのポジションにいるのか、なぜそのトスを選択したのか。全員が意図を持ってプレーし、チームとして進化することを目指します。</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "基礎練習の徹底", 
                  en: "Basics & Stability", 
                  detail: "フォームの矯正とボールコントロール精度の追求",
                  detailEn: "Correcting form and pursuing precision in ball control."
                },
                { 
                  title: "戦術理解の深化", 
                  en: "Tactical Awareness", 
                  detail: "5-1システム等のフォーメーションと戦術共有",
                  detailEn: "Understanding formations like the 5-1 system and team tactics."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#fcfcfc] rounded-2xl border border-slate-100 group-hover:border-indigo-200 transition-colors shadow-sm">
                  <div className="text-indigo-600 font-black text-xs mb-2 italic">POINT 0{i+1}</div>
                  <div className="text-lg font-bold text-slate-800 mb-1">{item.title}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">{item.en}</div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.detail}<br/>{item.detailEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Info Panel */}
          <div className={`md:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="glass-card p-8 bg-indigo-600 text-white border-none shadow-2xl shadow-indigo-200 overflow-hidden relative group">
              <Users className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500" size={140} />
              <div className="relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-200 mb-2">Max Capacity / 定員</h3>
                <p className="text-4xl font-black italic mb-4 leading-none uppercase">14 PLAYERS</p>
                <p className="text-indigo-100/90 text-sm font-medium leading-relaxed">
                  We limit participants to ensure quality ball touches for everyone.
                  <span className="block mt-2 opacity-70 italic text-xs">一人ひとりのボールタッチ回数を確保するため、定員を絞った質の高い練習環境を提供します。</span>
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 bg-white border border-slate-200 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase italic text-slate-900 leading-none">Location</h3>
                  <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Dresden, Germany</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm font-bold text-slate-800 leading-none mb-1">Cotta / Berger Schule</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase italic">Main Practice Gym</p>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  ※ We use public gyms in Dresden. Detailed location will be shared via Instagram DM.
                  <span className="block mt-1 italic text-slate-400 uppercase tracking-tighter">ドドレスデン市内の体育館を使用します。詳細はInstagram DMにてお伝えします。</span>
                </p>
              </div>
            </div>
          </div>

          {/* Routine Panel */}
          <div className={`md:col-span-6 glass-card p-10 mt-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10 gap-4">
              <div className="flex items-baseline gap-4">
                <h3 className="text-3xl font-black uppercase italic leading-none text-slate-900">Routine</h3>
                <span className="text-sm font-bold text-slate-400">/ 180-min Intensive Program / 180分の濃密な練習メニュー</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black uppercase tracking-widest">
                <Clock size={14} />
                Total 3 Hours
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { time: "15m", title: "Warming Up", jp: "ウォーミングアップ", desc: "Dynamic stretching & Injury prevention" },
                { time: "40m", title: "Fundamentals", jp: "基礎・カット練習", desc: "Precision & Ball control drills" },
                { time: "30m", title: "Spike & Rally", jp: "スパイク・連携", desc: "Decision making & Coordination" },
                { time: "85m", title: "Game Practice", jp: "ゲーム形式・実戦", desc: "Applying tactics in matches" },
                { time: "10m", title: "Cool Down", jp: "クールダウン", desc: "Feedback & Sharing session" }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50/50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <div className="text-2xl font-black text-indigo-600 italic mb-2">{item.time}</div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5 leading-tight uppercase tracking-tight">{item.title}</div>
                  <div className="text-[10px] font-bold text-slate-400 mb-2">{item.jp}</div>
                  <div className="text-[9px] text-slate-500 font-medium leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Panel */}
          <div className="md:col-span-3 glass-card p-10 bg-white border border-slate-200">
            <h3 className="text-xl font-black uppercase italic leading-none text-slate-900 mb-8">Requirements / 募集要項</h3>
            <ul className="space-y-6 mb-10">
              {[
                { jp: '20代〜40代の社会人', en: 'Ages 20-40 Professionals' },
                { jp: 'バレーボール経験者優先', en: 'Experienced Players Preferred' },
                { jp: '成長意欲と貢献姿勢', en: 'Growth Mindset & Team Contribution' },
                { jp: '戦術理解への真摯な態度', en: 'Commitment to Strategic Play' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none mb-1">{item.en}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">{item.jp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparency Panel */}
          <div className="md:col-span-3 glass-card p-10 bg-slate-900 text-white flex flex-col justify-between border-none shadow-xl shadow-slate-200 relative overflow-hidden">
            <ShieldCheck className="absolute -top-10 -right-10 text-white/5" size={240} />
            <div className="relative z-10">
              <h3 className="text-xl font-black uppercase italic leading-none mb-8">Transparency / 透明性</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
                    <Clock size={12} />
                    Frequency / 頻度
                  </div>
                  <p className="text-lg font-bold">Weekly to Bi-weekly (Weekends)</p>
                  <p className="text-xs text-slate-400 uppercase italic">週1回 〜 隔週（土日中心）</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
                    <Trophy size={12} />
                    Fee / 費用
                  </div>
                  <p className="text-lg font-bold">Split Cost (Pay-as-you-go)</p>
                  <p className="text-xs text-slate-400 mb-2 uppercase italic">参加人数による割り勘システム</p>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                    Non-profit operation based on actual costs.
                    <span className="block opacity-60">営利を目的としない、透明性のある運営を行っています。</span>
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleJoinClick}
              className="relative z-10 w-full mt-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-black uppercase tracking-widest text-xs transition-colors shadow-lg shadow-indigo-900/50"
            >
              Apply via Instagram / インスタで問い合わせ
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-40 pt-20 border-t border-slate-200 text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-lg transform -rotate-6">M</div>
            <div className="text-left">
              <span className="text-lg font-black tracking-tighter uppercase block leading-none text-slate-800">Münzwurf</span>
              <span className="text-[8px] font-bold text-slate-400 tracking-[0.4em] uppercase font-serif">Volleyball Club Dresden</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-10">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Instagram size={28} />
            </a>
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] leading-relaxed">
            © 2024 MÜNZWURF VOLLEYBALL CLUB.<br />DRESDEN, GERMANY. INSPIRED BY PRECISION.
          </p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 40px;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.08);
        }
        @media (max-width: 768px) {
          .glass-card {
            border-radius: 24px;
            padding: 2rem;
          }
        }
      `}} />
    </div>
  );
};

export default App;
