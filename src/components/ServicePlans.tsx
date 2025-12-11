import React from 'react';
import { FileText, Briefcase, Heart, Calendar, Check } from 'lucide-react';

export default function ServicePlans() {
  const plans = [
    {
      icon: FileText,
      name: 'BASIC',
      subtitle: '나를 이해하는 기본 명리 리포트',
      features: [
        '전체 사주 구조(4기둥, 오행 분포, 신강/신약)',
        '핵심 성격·기질, 강점·약점 요약',
        '삶의 주요 키워드 3~5개'
      ],
      recommended: '처음 사주를 보는 사람, "나는 어떤 사람인가"를 객관적으로 정리하고 싶은 사람',
      color: 'from-slate-600 to-slate-700',
      borderColor: 'border-slate-300'
    },
    {
      icon: Briefcase,
      name: 'CAREER',
      subtitle: '진로·커리어 집중 리포트',
      features: [
        '직업적 성향, 조직 vs 자영업 적합도',
        '돈을 버는 방식과 재물운 흐름',
        '10년 대운·향후 3년 커리어 타이밍 요약'
      ],
      recommended: '이직·창업·직업 변경을 고민 중인 사람',
      color: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-300',
      popular: true
    },
    {
      icon: Heart,
      name: 'RELATION',
      subtitle: '관계·인연 리포트',
      features: [
        '연애 패턴, 끌리는 사람 유형',
        '반복되는 갈등 구조 분석',
        '결혼·동거·파트너십 관련 시기·주의점'
      ],
      recommended: '연애·결혼·이별·재회 등 관계 이슈가 중심인 사람',
      color: 'from-rose-600 to-pink-600',
      borderColor: 'border-rose-300'
    },
    {
      icon: Calendar,
      name: 'YEARLY',
      subtitle: '1년 운·특정 고민 집중 리포트',
      features: [
        '해당 연도의 세운 분석',
        '"이번 해에 집중하면 좋은 것 / 피해야 할 것"',
        '특정 고민(이직, 시험, 투자, 이사 등) 집중 해석'
      ],
      recommended: '"올해를 어떻게 써야 할지" 전략이 필요한 사람',
      color: 'from-amber-600 to-orange-600',
      borderColor: 'border-amber-300'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-slate-900">더 명의 사주 리포트 구성</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              지금의 상황과 고민에 맞게 선택할 수 있도록 
              몇 가지 유형으로 리포트를 나누어 제공합니다.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 border-2 ${plan.borderColor} hover:shadow-2xl transition-all`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full shadow-lg">
                      <span>인기</span>
                    </div>
                  )}

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">{plan.name}</h3>
                      <p className="text-slate-600">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="inline-block bg-slate-100 rounded-lg px-3 py-1 mb-4">
                      <span className="text-slate-700">구성</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended For */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="text-slate-600 mb-2">추천 대상</div>
                    <p className="text-slate-800">{plan.recommended}</p>
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
