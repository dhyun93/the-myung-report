import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function WhatIsSaju() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-900">사주란 무엇인가</h2>
            <p className="text-slate-600">
              동양에서 사주는, 한 사람의 인생을 읽는 시간의 지도입니다.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 mb-4">
                  사주는 간단히 말해, 사람이 태어난 <strong>연·월·일·시(年·月·日·時)</strong> 네 가지 요소를 바탕으로 
                  성격과 기질, 인생의 흐름, 올해의 운세를 풀이하는 동양의 명리학(命理學) 체계입니다.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-slate-700">
              <p>
                사주는 네 개의 기둥, <strong>년주(年柱)·월주(月柱)·일주(日柱)·시주(時柱)</strong>로 구성되며 
                각 기둥에는 <strong>천간(天干)</strong>과 <strong>지지(地支)</strong>라는 음양오행의 기호가 배치되어 있습니다.
              </p>
              
              <p>
                이 네 기둥의 배치와 균형을 통해 타고난 기질, 반복되는 관계 패턴, 
                강해지는 시기와 조심해야 할 시기를 읽어낼 수 있습니다.
              </p>
            </div>
            
            {/* Visual representation */}
            <div className="mt-8 grid grid-cols-4 gap-3">
              {[
                { label: '년주', sub: '年柱', icon: '🌸' },
                { label: '월주', sub: '月柱', icon: '🌿' },
                { label: '일주', sub: '日柱', icon: '☀️' },
                { label: '시주', sub: '時柱', icon: '🌙' }
              ].map((pillar, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center border border-indigo-200">
                  <div className="text-2xl mb-2">{pillar.icon}</div>
                  <div className="text-slate-900">{pillar.label}</div>
                  <div className="text-slate-500">{pillar.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
