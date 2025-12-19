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
  Facebook,
  ShieldCheck,
  Brain,
  Globe
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-md">M</div>
            <div>
              <span className="text-xl font-black tracking-tighter uppercase block leading-none">Münzwurf</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Volleyball Club</span>
            </div>
          </div>
          <div className="hidden lg:flex space-x-8 text-[11px] font-bold tracking-widest text-slate-500">
            <a href="#concept" className="hover:text-blue-600 transition-colors uppercase">Concept / コンセプト</a>
            <a href="#operation" className="hover:text-blue-600 transition-colors uppercase">Operation / 運営</a>
            <a href="#menu" className="hover:text-blue-600 transition-colors uppercase">Routine / メニュー</a>
            <a href="#requirements" className="hover:text-blue-600 transition-colors uppercase">Join / 加入</a>
          </div>
          <button 
            onClick={handleJoinClick}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
          >
            JOIN NOW / 参加申込
          </button>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 text-center md:text-left flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Globe size={12} />
              <span>International Volleyball Community in Dresden</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 text-slate-900 tracking-tighter">
              THINKING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">VOLLEYBALL</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              基礎技術の習得と戦術理解を深化させ、質の高い「考えるバレーボール」を実践する大人のためのクラブ。
              <span className="block text-sm text-slate-400 mt-2 font-normal">A club for adults to deepen basic techniques and tactical understanding through "Thinking Volleyball".</span>
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[32px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative glass-tile-light p-6 rounded-[28px] border border-white">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="member" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-black text-slate-800 uppercase tracking-tighter">14 Players Capacity</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">定員 1回の練習につき 14名</p>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-5 h-auto md:h-[1300px]">
          
          {/* Concept Tile */}
          <div id="concept" className="md:col-span-2 md:row-span-3 glass-tile-light p-10 group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-8 text-blue-100 opacity-20 group-hover:scale-110 transition-transform duration-700">
               <Brain size={160} />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-baseline space-x-3 mb-2">
                <h2 className="text-3xl font-black text-slate-900 uppercase italic">Concept</h2>
                <span className="text-lg font-bold text-slate-400">/ コンセプト</span>
              </div>
              <div className="w-12 h-1 bg-blue-600 mb-8"></div>
              
              <h3 className="text-xl font-bold mb-4 text-slate-800">質の高い「考えるバレー」の実践<br/><span className="text-sm text-slate-500 font-medium">Practicing High-Quality "Thinking Volleyball"</span></h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                単に試合を楽しむだけでなく、なぜそのプレーが有効なのか、どのようにチームとして機能するのかを理解し、全員で成長していくための活動方針を明確にします。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-blue-600 font-black block text-xs mb-1 italic">01. SKILLS</span>
                  <span className="text-sm font-bold text-slate-800">基礎練習の徹底</span>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase">Basics & Stability</p>
                </div>
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-blue-600 font-black block text-xs mb-1 italic">02. TACTICS</span>
                  <span className="text-sm font-bold text-slate-800">戦術理解の深化</span>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase">Tactical Awareness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operation Info */}
          <div id="operation" className="md:col-span-1 md:row-span-3 glass-tile-light p-8 flex flex-col border-t-4 border-t-blue-500">
            <div className="mb-10">
              <h3 className="text-lg font-black uppercase italic leading-none">Operation</h3>
              <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">運営枠組み</p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                参加者が活動に見通しを持ち、計画的に参加できる体制を整えます。
              </p>
            </div>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Practice / 練習</p>
                  <p className="text-base font-black text-slate-800 italic">3 Hours / 1回3時間</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Frequency / 頻度</p>
                  <p className="text-base font-black text-slate-800 italic">Weekly / 週1〜隔週</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Matches / 大会</p>
                  <p className="text-base font-black text-slate-800 italic">Monthly / 月1回程度</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Visual Tile */}
          <div className="md:col-span-1 md:row-span-2 glass-tile-light p-8 flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none shadow-xl shadow-blue-200">
            <h3 className="text-xl font-black italic mb-2 leading-none uppercase">Core Logic</h3>
            <div className="w-8 h-1 bg-white/40 mb-4"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-100 opacity-80 mb-6">個から組織へ、確実な進化</p>
            <p className="text-sm leading-relaxed font-medium">
              Individual skills to team coordination. Progressive training design.
            </p>
            <div className="mt-8 self-end">
              <Target size={48} className="text-white/20" />
            </div>
          </div>

          {/* Capacity Brief */}
          <div className="md:col-span-1 md:row-span-1 glass-tile-light p-6 flex items-center space-x-4 bg-white">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
              <Users size={22} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Max Capacity</p>
              <p className="text-xl font-black italic text-slate-800">14 Members</p>
            </div>
          </div>

          {/* Schedule Table */}
          <div id="menu" className="md:col-span-3 md:row-span-3 glass-tile-light p-10 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-8 gap-2">
              <div className="flex items-baseline space-x-3">
                <h3 className="text-2xl font-black uppercase italic">Routine</h3>
                <span className="text-sm font-bold text-slate-400">/ 180分の練習メニュー</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">Official Training Program</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                    <th className="pb-4">Time</th>
                    <th className="pb-4 px-4">Menu / メニュー</th>
                    <th className="pb-4">Purpose / 目的</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { t: '15m', m: 'Warming Up / ウォーミングアップ', p: '動的ストレッチ、怪我予防' },
                    { t: '40m', m: 'Fundamentals / 基礎・カット練習', p: 'ボールコントロール精度の向上' },
                    { t: '30m', m: 'Spike & Rally / スパイク・ラリー', p: '判断力とフォーメーションの強化' },
                    { t: '85m', m: 'Game Practice / ゲーム形式練習', p: '5-1システム等の実戦形式応用' },
                    { t: '10m', m: 'Cool Down / クールダウン', p: 'ケア・フィードバック共有' },
                  ].map((item, idx) => (
                    <tr key={idx} className="group hover:bg-blue-50/50 transition-all">
                      <td className="py-5 font-black text-blue-600 italic text-sm">{item.t}</td>
                      <td className="py-5 px-4 font-bold text-slate-800 text-sm">{item.m}</td>
                      <td className="py-5 text-slate-500 text-xs font-medium">{item.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Requirements */}
          <div id="requirements" className="md:col-span-1 md:row-span-3 glass-tile-light p-8 flex flex-col bg-white border border-slate-200">
            <div className="mb-8">
              <h3 className="text-lg font-black uppercase italic leading-none">Join Us</h3>
              <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">募集要項</p>
            </div>
            <ul className="space-y-5 mb-8 flex-grow">
              {[
                { jp: '20代〜40代の社会人', en: 'Ages 20-40 Professionals' },
                { jp: '経験者優先', en: 'Experienced Players Preferred' },
                { jp: '成長意欲と貢献姿勢', en: 'Growth Mindset & Contribution' },
                { jp: '戦術理解への真摯な姿勢', en: 'Strategic Thinking' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 group">
                  <div className="mt-1 w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-none">{item.jp}</p>
                    <p className="text-[9px] text-slate-400 uppercase mt-1 tracking-wider">{item.en}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl mb-6">
              <div className="flex items-center space-x-2 text-slate-800 mb-2">
                <ShieldCheck size={16} className="text-blue-600" />
                <span className="text-xs font-black uppercase italic">Fee / 費用</span>
              </div>
              <p className="text-sm font-bold text-slate-700">その日の参加人数で割り勘</p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">Equal Split Fee / Transparent Operation</p>
            </div>
            <button 
              onClick={handleJoinClick}
              className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center group shadow-lg shadow-slate-200"
            >
              <span className="uppercase text-xs tracking-widest">Apply Now / 加入申込</span>
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Location / Venue Tile */}
          <div className="md:col-span-1 md:row-span-1 glass-tile-light p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
              <MapPin size={22} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Main Venue</p>
              <p className="text-sm font-black text-slate-800 truncate">Cotta / Berger Schule</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Dresden, Germany</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0 text-slate-400 px-4">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center font-bold text-slate-500 text-xs">M</div>
              <span className="text-base font-black tracking-tighter uppercase text-slate-800">Münzwurf Volleyball</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 MÜNZWURF CLUB. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex space-x-6">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all transform hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass-tile-light {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 32px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.03);
        }
        .glass-tile-light:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: translateY(-6px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.08);
          border-color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 768px) {
          .glass-tile-light {
            margin-bottom: 1.25rem;
            min-height: auto;
            border-radius: 24px;
          }
        }
      `}} />
    </div>
  );
};

export default App;
