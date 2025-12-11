import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200">대한민국 1% 역술가</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-white">
            대한민국 1% 역술가의<br />
            신기하고 정확한 사주풀이를 경험하세요
          </h1>
          
          {/* Subtitle */}
          <p className="text-amber-300 mb-8">
            내 인생을 미리 보는 시간, THE MYUNG 明
          </p>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8 text-slate-200 space-y-4">
            <p>
              사주는 동양철학, 사주명리학, 풍수지리, 주역, 음양오행 등<br />
              여러 학문을 깊이 연구해야 알 수 있는 복잡한 체계입니다.
            </p>
            <p>
              더 명(THE MYUNG)은 이 전통 지식을<br />
              지금 여기서 살아가는 당신의 현실적인 선택 기준으로 번역합니다.
            </p>
            <p>
              운세를 한 번 듣고 끝나는 것이 아니라,<br />
              인생의 흐름과 패턴을 이해해 전략적으로 움직일 수 있도록 돕는<br />
              프리미엄 사주 리포트 서비스를 제공합니다.
            </p>
          </div>
          
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-400">📊</span>
              </div>
              <p className="text-slate-200">
                나의 기질·패턴·타이밍을<br />한 번에 정리한 리포트
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-400">🔮</span>
              </div>
              <p className="text-slate-200">
                명리학·풍수·주역·음양오행을<br />함께 보는 입체 해석
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-400">💼</span>
              </div>
              <p className="text-slate-200">
                단순 점술이 아닌<br />동양철학 기반 인생 컨설팅
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              사주 리포트 신청하기
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all flex items-center gap-2">
              <FileText className="w-5 h-5" />
              리포트 샘플 먼저 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
