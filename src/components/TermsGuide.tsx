import React, { useState } from 'react';
import { ChevronDown, BookMarked } from 'lucide-react';

export default function TermsGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const terms = [
    {
      term: '천간(天干)',
      meaning: '갑(甲), 을(乙), 병(丙) 등 10개의 기호로, 하늘의 기운을 나타냅니다.',
      example: '"병화(丙火)는 따뜻하고 밝은 성질을 띠며, 리더십과 추진력이 강하다."'
    },
    {
      term: '지지(地支)',
      meaning: '자(子), 축(丑), 인(寅) 등 12개의 기호로, 땅의 기운과 띠를 나타냅니다.',
      example: '"인목(寅木)은 도전정신과 독립성이 강하다."'
    },
    {
      term: '오행(五行)',
      meaning: '목(木), 화(火), 토(土), 금(金), 수(水) 다섯 가지 기운.',
      example: '"금(金)이 많으면 결단력이 강하지만, 고집이 셀 수 있다."'
    },
    {
      term: '음양(陰陽)',
      meaning: '기운의 성질을 양(陽)·음(陰) 둘로 나누어 보는 개념.',
      example: '"양의 기운이 강하면 적극적·외향적, 음의 기운이 강하면 내성적·신중한 편이다."'
    },
    {
      term: '대운(大運)',
      meaning: '약 10년 주기로 변하는 큰 운세 흐름.',
      example: '"2025~2034년은 재물운이 강해지는 시기다."'
    },
    {
      term: '세운(歲運)',
      meaning: '1년 단위로 변하는 운세.',
      example: '"올해는 귀인의 도움을 받을 가능성이 높은 해다."'
    },
    {
      term: '합·충·형',
      meaning: '사주 기운들 사이의 관계.',
      example: '"인·오·술 삼합은 화(火)의 기운이 강해지고, 자·오 충은 갈등이 발생하기 쉽다."'
    },
    {
      term: '용신(用神)',
      meaning: '사주의 불균형을 맞춰주는 보완 기운.',
      example: '"수(水)가 부족하면 물과 관련된 색·방향이 길할 수 있다."'
    },
    {
      term: '십성(十星)',
      meaning: '재성·관성·인성 등, 인간관계·재물·직업 등을 상징하는 열 가지 별.',
      example: '"재성이 강하면 돈을 잘 벌지만, 지출도 많아질 수 있다."'
    },
    {
      term: '신강·신약(身强/身弱)',
      meaning: '일간(나)의 기운이 강한지 약한지 구분하는 기준.',
      example: '"신약이면 부족한 오행을 보충하는 생활 습관과 환경이 중요하다."'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <BookMarked className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700">용어 가이드</span>
            </div>
            <h2 className="mb-4 text-slate-900">
              사주풀이에 자주 등장하는 용어,<br />미리 알아두면 좋은 것들
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              온라인으로 리포트를 받을 때 자주 쓰이는 용어를 알고 보면 
              풀이 내용을 더 깊고 정확하게 이해할 수 있습니다.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {terms.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-slate-900">{item.term}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 space-y-4">
                    <div>
                      <div className="inline-block bg-indigo-100 rounded-lg px-3 py-1 mb-2">
                        <span className="text-indigo-700">의미</span>
                      </div>
                      <p className="text-slate-700">{item.meaning}</p>
                    </div>
                    <div>
                      <div className="inline-block bg-amber-100 rounded-lg px-3 py-1 mb-2">
                        <span className="text-amber-700">해석 예시</span>
                      </div>
                      <p className="text-slate-600 italic">{item.example}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
