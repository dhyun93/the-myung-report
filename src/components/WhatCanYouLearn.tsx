import React from 'react';
import { Heart, Brain, DollarSign, Briefcase, Users, TrendingUp, Calendar } from 'lucide-react';

export default function WhatCanYouLearn() {
  const areas = [
    {
      icon: Brain,
      title: '성격·기질',
      points: [
        '주도형인지, 조율형인지',
        '사람을 통해 에너지를 얻는지, 혼자 있을 때 회복되는지'
      ],
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Heart,
      title: '건강운·체력 패턴',
      points: [
        '약해지기 쉬운 시기, 주의해야 할 라이프스타일'
      ],
      color: 'bg-rose-100 text-rose-600',
      borderColor: 'border-rose-200'
    },
    {
      icon: DollarSign,
      title: '재물운·돈 흐름',
      points: [
        '돈이 들어오는 방식(월급, 사업, 투자 등)',
        '지출 패턴, 금전 관련 리스크'
      ],
      color: 'bg-emerald-100 text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Briefcase,
      title: '직업운·커리어 방향',
      points: [
        '조직 vs 자영업, 안정 vs 변동 중 무엇에 강한지',
        '직무 성향(기획, 영업, 연구, 관리 등)'
      ],
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Users,
      title: '연애·관계 패턴',
      points: [
        '끌리는 사람 유형, 반복되는 갈등 양상',
        '결혼·동거 등 장기 관계의 흐름'
      ],
      color: 'bg-pink-100 text-pink-600',
      borderColor: 'border-pink-200'
    },
    {
      icon: TrendingUp,
      title: '대운(大運)',
      points: [
        '약 10년 단위로 변하는 큰 운세 흐름',
        '"이 10년은 무엇에 집중해야 하는가"에 대한 힌트'
      ],
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Calendar,
      title: '세운(歲運)',
      points: [
        '1년 단위의 운세 흐름',
        '올해는 기회가 많은 해인지, 정비와 준비에 집중해야 하는 해인지'
      ],
      color: 'bg-amber-100 text-amber-600',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-slate-900">사주풀이로 알 수 있는 것들</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              사주풀이는 네 기둥의 정보를 토대로 당신의 성향, 운의 흐름, 
              기회와 리스크를 입체적으로 보여줍니다.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 border-2 ${area.borderColor} hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-slate-900 mb-3">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
            <p className="text-slate-700 text-center">
              동양에서는 사주를 단순한 운세가 아니라 
              <strong className="text-indigo-700"> 자연의 흐름과 개인의 기운이 맞물린 지도</strong>라고 표현합니다.
              <br />
              이 지도를 잘 읽으면 언제 움직이고, 언제 멈춰야 하는지에 대한 참고 기준을 얻을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
