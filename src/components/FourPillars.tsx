import React from 'react';
import { Sunrise, Sun, Sunset, Moon } from 'lucide-react';

export default function FourPillars() {
  const pillars = [
    {
      title: '년주(年柱)',
      subtitle: '태어난 해를 나타냅니다',
      icon: Sunrise,
      meaning: '초년운, 조상, 뿌리, 국가·사회적 환경',
      points: [
        '"어떤 가정·환경에서 자라나는가"',
        '"어릴 때부터 몸에 밴 기본적인 세계관"'
      ],
      color: 'from-rose-400 to-pink-500'
    },
    {
      title: '월주(月柱)',
      subtitle: '태어난 달을 나타냅니다',
      icon: Sun,
      meaning: '청년운, 부모·형제, 직업적 성향, 사회적 적응력',
      points: [
        '"일·공부·초기 커리어에서 어떤 패턴을 가지는가"',
        '"가족과의 관계, 초중기 인간관계 스타일"'
      ],
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: '일주(日柱)',
      subtitle: '태어난 날짜를 나타냅니다',
      icon: Sunset,
      meaning: '중년운, 나 자신(일간), 배우자·친밀한 관계',
      points: [
        '"핵심 성격, 에너지의 방향, 삶을 보는 관점"',
        '"결혼·동거·파트너십에서 어떤 모습을 보이는가"'
      ],
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: '시주(時柱)',
      subtitle: '태어난 시간을 나타냅니다',
      icon: Moon,
      meaning: '말년운, 자녀, 미래 지향성, 개인적인 공간',
      points: [
        '"나중에 무엇을 남기고 싶어 하는가"',
        '"자녀·후배·프로젝트에 어떻게 에너지를 쓰는가"'
      ],
      color: 'from-indigo-500 to-slate-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-slate-900">사주의 네 기둥, 나의 시간 구조</h2>
            <p className="text-slate-600 mb-6">
              한 사람의 인생은 네 개의 시간 기둥 위에 서 있습니다.
            </p>
            <p className="text-slate-600 max-w-3xl mx-auto">
              사주는 태어난 해·달·날·시간을 각각 하나의 기둥으로 보고 
              각 기둥이 상징하는 시기와 역할을 구분해 해석합니다.
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">{pillar.title}</h3>
                      <p className="text-slate-500">{pillar.subtitle}</p>
                    </div>
                  </div>

                  {/* Meaning */}
                  <div className="mb-6">
                    <div className="inline-block bg-slate-100 rounded-lg px-3 py-1 mb-3">
                      <span className="text-slate-600">의미</span>
                    </div>
                    <p className="text-slate-700">{pillar.meaning}</p>
                  </div>

                  {/* Interpretation Points */}
                  <div>
                    <div className="inline-block bg-amber-100 rounded-lg px-3 py-1 mb-3">
                      <span className="text-amber-700">해석 포인트</span>
                    </div>
                    <ul className="space-y-2">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span className="text-slate-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
