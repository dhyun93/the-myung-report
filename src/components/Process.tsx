import React from 'react';
import { Edit3, CreditCard, FileSearch, Send, MessageCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: 'STEP 1',
      icon: Edit3,
      title: '기본 정보 입력',
      description: '이름, 생년월일, 태어난 시간·장소, 현재 가장 궁금한 고민을 간단히 적어주세요.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 'STEP 2',
      icon: CreditCard,
      title: '결제 완료',
      description: '선택하신 리포트 유형에 따라 안전한 결제 페이지에서 결제를 진행합니다.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      step: 'STEP 3',
      icon: FileSearch,
      title: '더 명의 분석',
      description: '역술가가 사주 원국과 질문 내용을 함께 보고, 1:1 맞춤 리포트를 작성합니다.',
      subtext: '평균 소요 기간: 영업일 기준 3~5일 내외',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      step: 'STEP 4',
      icon: Send,
      title: '리포트 발송',
      description: '완성된 리포트는 PDF 파일로 이메일/카카오톡을 통해 전달됩니다. 언제든 다시 열어볼 수 있도록 저장해 두실 수 있습니다.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      step: 'STEP 5',
      icon: MessageCircle,
      title: '선택 – 추가 질의 응답',
      description: '리포트 수령 후, 추가로 궁금한 점이 있다면 정해진 범위 내에서 1회 질의 응답을 제공합니다.',
      color: 'from-rose-500 to-pink-500',
      optional: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-slate-900">
              신청부터 리포트 수령까지,<br />이렇게 진행됩니다
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              복잡한 절차 없이, 온라인으로 정보를 남기면 
              분석과 리포트까지 모두 비대면으로 진행됩니다.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-slate-300 to-slate-200 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-slate-500">{item.step}</span>
                        {item.optional && (
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">선택사항</span>
                        )}
                      </div>
                      <h3 className="text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 mb-2">{item.description}</p>
                      {item.subtext && (
                        <p className="text-slate-500 italic">{item.subtext}</p>
                      )}
                    </div>
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
