import React from 'react';
import { BookOpen, Wind } from 'lucide-react';

export default function SajuIsScience() {
  const elements = [
    { name: '목(木)', color: 'bg-emerald-500', label: '木' },
    { name: '화(火)', color: 'bg-red-500', label: '火' },
    { name: '토(土)', color: 'bg-amber-600', label: '土' },
    { name: '금(金)', color: 'bg-slate-400', label: '金' },
    { name: '수(水)', color: 'bg-blue-500', label: '水' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700">학문으로서의 사주</span>
            </div>
            <h2 className="mb-4 text-slate-900">사주는 점술이 아니라, 시간과 오행의 학문</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              운명을 맹신하기 위해서가 아니라,<br />
              패턴을 이해해 더 나은 선택을 하기 위해 사주를 봅니다.
            </p>
          </div>

          {/* Main Content Box */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-slate-200 shadow-xl mb-8">
            <div className="space-y-6 text-slate-700">
              <p>
                사주는 단순한 점술이 아닙니다.
                태어난 연·월·일·시를 시간 축으로 삼고,
                그 위에 <strong>목(木)·화(火)·토(土)·금(金)·수(水)</strong> 다섯 기운의 배치와 균형을 분석하는 
                동양의 전통 명리학 체계입니다.
              </p>

              {/* Five Elements Visual */}
              <div className="flex justify-center gap-3 my-8">
                {elements.map((element, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${element.color} rounded-full flex items-center justify-center text-white shadow-lg mb-2`}>
                      <span className="text-xl">{element.label}</span>
                    </div>
                    <span className="text-slate-600">{element.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <p className="text-slate-800 mb-4">더 명은 이 구조를 기반으로</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-700">1</span>
                    <span className="text-slate-700">나의 기질이 어디에 치우쳐 있는지(신강/신약)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-700">2</span>
                    <span className="text-slate-700">어떤 기운이 부족해 보완이 필요한지(용신)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-700">3</span>
                    <span className="text-slate-700">언제 흐름이 열리고, 언제 부담이 커지는지(대운/세운)</span>
                  </li>
                </ul>
                <p className="text-slate-700 mt-4">를 정리해 드립니다.</p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900">"운이 좋다/나쁘다"로 단순화하지 않고,</strong>
                    <br />
                    가능성과 리스크를 함께 보여주는 것이 더 명이 지향하는 해석 방식입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
