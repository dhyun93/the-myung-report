import React from 'react';
import { Layers, FileText, MessageSquare, UserCheck } from 'lucide-react';

export default function WhyThemyung() {
  const features = [
    {
      number: '01',
      icon: Layers,
      title: '동양철학 풀스택 분석',
      description: '사주명리학, 풍수지리, 주역, 음양오행 등 서로 다른 전통 학문을 한 흐름에서 바라봅니다.',
      detail: '단일 관점이 아니라, 여러 축을 교차 검증해 과장된 해석을 줄이고 균형 잡힌 결론을 제시합니다.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      number: '02',
      icon: FileText,
      title: '리포트 형식 결과물',
      description: '상담으로 듣고 잊어버리는 것이 아니라, PDF 형식의 리포트로 정리해 드립니다.',
      detail: '핵심 키워드, 강·약 분석, 시기별 요약 등을 나중에 다시 꺼내 보며 인생 계획에 활용할 수 있습니다.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      number: '03',
      icon: MessageSquare,
      title: '현실 언어로 번역된 해석',
      description: '난해한 한자 용어 대신 "어떻게 행동하면 좋은지 / 무엇을 조심해야 하는지"를 구체적인 문장으로 제시합니다.',
      detail: '추상적인 운세가 아니라 직업, 돈, 관계, 건강, 타이밍과 연결된 설명을 지향합니다.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      number: '04',
      icon: UserCheck,
      title: '프리미엄 1:1 분석 프로세스',
      description: '자동 프로그램이 아닌, 실제 역술가가 전체 사주와 질문 목록을 보고 직접 분석합니다.',
      detail: '질문에 따라 해석의 비중을 조정해 \'지금 필요한 정보\'에 초점을 맞춥니다.',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">더 명은 무엇이 다른가</h2>
            <p className="text-amber-300 mb-4">
              정확한 나의 가치를 탐구하고,<br />
              성공의 지름길로 가기 위한 프리미엄 사주 리포트입니다.
            </p>
            <p className="text-slate-300 max-w-2xl mx-auto">
              더 명은 &apos;재미로 보는 운세&apos;가 아니라, 동양철학의 구조를 기반으로 
              현실적인 의사결정을 돕는 서비스입니다.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-slate-900">{feature.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <p className="text-slate-400">{feature.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}