import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, FileText } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '종교가 있어도 사주를 봐도 될까요?',
      answer: '더 명의 사주 리포트는 미래를 단정하거나 강요하지 않습니다. 인생의 패턴과 시기를 참고용으로 정리해 드리는 것이 목적이며, 어떤 신앙을 가지셨든 선택은 본인 자유 의지에 기반한다고 봅니다.'
    },
    {
      question: '얼마나 정확한가요? 틀리면 어떻게 되나요?',
      answer: '사주는 통계와 상징, 해석이 결합된 동양철학 체계입니다. 개별 사건을 맞히기보다, 기질·패턴·타이밍의 경향성을 설명하는 데 초점을 둡니다. 리포트에서도 "가능성이 높은 방향"과 "조심할 부분"을 분리해서 안내합니다.'
    },
    {
      question: '개인정보는 어떻게 관리되나요?',
      answer: '입력하신 생년월일·연락처 등 개인정보는 리포트 작성과 발송을 위한 용도로만 사용되며, 관련 법령에 따라 일정 기간 후 안전하게 파기됩니다. 제3자에게 판매하거나 제공하지 않습니다.'
    },
    {
      question: '온라인 자동풀이와 무엇이 다른가요?',
      answer: '자동풀이 서비스는 일부 공식만 적용해 결과를 출력합니다. 더 명은 전체 사주 구조와 질문 내용을 함께 보고 실제 사람이 문장으로 작성하는 리포트입니다. 그래서 같은 사주라도, 어떤 고민으로 의뢰했는지에 따라 강조점과 해석이 달라질 수 있습니다.'
    },
    {
      question: '한 번 리포트를 받으면, 나중에도 다시 볼 수 있나요?',
      answer: '네. PDF 파일 형태로 제공되므로 휴대폰·PC·태블릿 어디에서나 다시 열어볼 수 있습니다. 중요한 의사결정 시마다 다시 읽어보셔도 좋습니다.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300">자주 묻는 질문</span>
              </div>
              <h2 className="mb-4 text-white">FAQ</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-white mb-6">
                지금의 고민을,<br />
                운 탓이 아닌 패턴의 이해로 바꿔보세요
              </h2>
              
              <div className="max-w-2xl mx-auto mb-8 space-y-4 text-slate-300">
                <p>
                  우연히 흘러가는 운명을 믿기보다, 나의 기질과 인생의 흐름을 이해하고 
                  더 나은 선택을 하는 것이 중요합니다.
                </p>
                <p>
                  더 명의 사주 리포트는 당신의 사주를 '좋다/나쁘다'로 단순 평가하지 않습니다. 
                  어떤 가능성이 열려 있고, 무엇을 조심해야 하는지, 
                  어디에 에너지를 써야 하는지를 차분하게 정리해 드립니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  지금, 나만의 사주 리포트 신청하기
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  사주 리포트 샘플 먼저 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
