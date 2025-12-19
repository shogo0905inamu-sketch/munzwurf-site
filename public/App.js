import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MapPin, 
  Instagram, 
  Globe, 
  Volleyball,
  Brain,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const instagramUrl = "https://www.instagram.com/shogo9195/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-left">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Volleyball size={24} />
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter uppercase block leading-none">Münzwurf</span>
              <span className="text-[10px] font-bold text-indigo-500 tracking-widest uppercase italic leading-none mt-1">Volleyball Club Dresden</span>
            </div>
          </div>
          <button 
            onClick={handleJoinClick}
            className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-indigo-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-200 flex items-center gap-2"
          >
            <Instagram size={14} />
            JOIN / 参加
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-left">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6">
            <Globe size={12} />
            <span>Japanese & English Speaking Club in Dresden</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter uppercase">
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
          <button 
            onClick={handleJoinClick}
            className="group bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
          >
            Apply via Instagram / 参加希望はこちら
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Concept Tile */}
          <div className="md:col-span-4 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-indigo-200 transition-all duration-500">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                  <Brain size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase italic leading-none">Concept</h2>
                  <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Our Philosophy / コンセプト</p>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-slate-800 italic">質の高い「考えるバレー」の実践 / Thinking Volleyball</h3>
                <p className="text-slate-500 leading-relaxed text-lg max-w-2xl">
                  単にボールを繋ぐだけでなく、全員が意図を持ってプレーし、チームとして進化することを目指します。
                  <span className="block mt-4 italic text-slate-400">We focus on the "why" behind each play to evolve as a team. Practice includes tactical formations like the 5-1 system.</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-indigo-600 font-black text-xs mb-1 italic">POINT 01</div>
                <p className="font-bold text-slate-800">基礎の徹底 / Basics</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Form & Precision Control</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-indigo-600 font-black text-xs mb-1 italic">POINT 02</div>
                <p className="font-bold text-slate-800">戦術の共有 / Tactics</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Strategic Formation (5-1)</p>
              </div>
            </div>
          </div>

          {/* Capacity Tile */}
          <div className="md:col-span-2 bg-indigo-600 p-10 rounded-[40px] text-white flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-indigo-100 border-none min-h-[300px]">
            <Users size={120} className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-200 mb-2">Max Capacity / 定員</h3>
              <p className="text-4xl font-black italic mb-4 leading-none uppercase">14 Players</p>
              <p className="text-indigo-100 text-xs font-medium leading-relaxed italic">
                一人ひとりのボールタッチ回数を確保するため、少人数制を採用しています。
                <span className="block mt-1">We limit participants to ensure quality ball touches.</span>
              </p>
            </div>
          </div>

          {/* Operation Details */}
          <div className="md:col-span-2 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 group">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-slate-100 text-slate-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase italic leading-none">Operation</h3>
                <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Practice Info / 運営情報</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-600 border border-slate-100 font-black italic">180</div>
                <div className="text-sm font-bold text-slate-700 leading-tight">1回180分の充実した練習<br/><span className="text-[10px] text-slate-400 uppercase tracking-tighter">3 hours per session</span></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-600 border border-slate-100"><Calendar size={20} /></div>
                <div className="text-sm font-bold text-slate-700 leading-tight">週1〜隔週開催 (土日中心)<br/><span className="text-[10px] text-slate-400 uppercase tracking-tighter">Weekly / Bi-weekly</span></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-600 border border-slate-100"><ShieldCheck size={20} /></div>
                <div className="text-sm font-bold text-slate-700 leading-tight">実費のみの透明な割り勘<br/><span className="text-[10px] text-slate-400 uppercase tracking-tighter">Non-profit Split Cost</span></div>
              </div>
            </div>
          </div>

          {/* Venue/Location */}
          <div className="md:col-span-2 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group min-h-[250px]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 text-slate-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase italic leading-none">Venue</h3>
                <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Dresden, Germany</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-lg font-bold text-slate-800 leading-none mb-1">Cotta / Berger Schule</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic mb-4">ドレスデン市内の体育館</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
                  ※場所の詳細はInstagram DMにてお伝えします。
                </p>
                <p className="text-[10px] text-slate-400 uppercase">Details will be shared via Instagram DM.</p>
              </div>
            </div>
          </div>

          {/* Requirements Panel */}
          <div className="md:col-span-2 bg-slate-900 p-10 rounded-[40px] text-white shadow-xl shadow-slate-200 flex flex-col justify-between border-none">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 text-white rounded-2xl">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase italic leading-none text-white">Join Us</h3>
                  <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Requirements / 募集要項</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { jp: '20代〜40代の社会人', en: 'Working Professionals (20-40s)' },
                  { jp: 'バレーボール経験者優先', en: 'Experienced Players Preferred' },
                  { jp: '成長意欲と貢献姿勢', en: 'Growth Mindset & Contribution' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none mb-1">{item.jp}</p>
                      <p className="text-[9px] text-slate-400 uppercase tracking-tight">{item.en}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={handleJoinClick}
              className="mt-8 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2"
            >
              Contact via Instagram <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 gap-8">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center font-bold text-slate-500 text-xs transform -rotate-6">M</div>
            <div>
              <span className="text-base font-black tracking-tighter uppercase text-slate-800 leading-none block">Münzwurf Volleyball</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 italic font-serif">Dresden, Germany</span>
            </div>
          </div>
          <div className="text-center">
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-slate-300">© 2024 MÜNZWURF CLUB. ALL RIGHTS RESERVED.</p>
             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic">Thinking & Precision</p>
          </div>
          <div className="flex space-x-4">
             <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
               <Instagram size={24} />
             </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
