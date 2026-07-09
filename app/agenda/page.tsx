import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '议程 | OpenMind AI Workforce Transformation Forum 2026',
  description:
    'AI驱动的劳动力转型与变革会议议程。',
};

const days = [
  {
    label: '议程',
    theme: 'AI驱动的劳动力转型与变革 · 13:30–17:30',
    sessions: [
      { time: '13:30', type: '开幕', title: '开幕致辞与背景引入', speaker: '主题：站在劳动力变革的十字路口 · 13:30 - 13:40（10 分钟）' },
      { time: '13:40', type: '主旨演讲', title: '主旨演讲一：技术前沿与岗位重塑', speaker: '题材结合：结合时下爆火的 AI Agent（智能体）在企业级工作流中的普及，以及白领工作（如法律、金融、文案、基础编程）被深度自动化的现状。方向：剖析从“AI 辅助人类”到“AI 独立完成端到端任务”的临界点。· 13:40 - 14:10（30 分钟）' },
      { time: '14:10', type: '主旨演讲', title: '主旨演讲二：具身智能与蓝领劳动力', speaker: '题材结合：结合人形机器人在制造、物流、零售行业的最新商业化落地进展。方向：讨论 AI 如何走出虚拟世界，开始实质性替代高重复性、高风险的体力劳动。· 14:10 - 14:40（30 分钟）' },
      { time: '14:40', type: '产业圆桌', title: '产业圆桌论坛：企业转型的“降本增效”与“人才阵痛”', speaker: '议题方向：企业引入AI后，如何平衡短期内的裁员成本与长期的生产力提升？留存的员工需要具备哪些新技能（如Prompt工程、AI合规审查）？拟邀嘉宾类型：头部科技企业HRVP、传统制造或金融业CIO、AI初创企业CEO、管理咨询专家。· 14:40 - 15:30（50 分钟）' },
      { time: '15:30', type: '茶歇', title: '茶歇与自由交流（Networking Break）', speaker: '亮点设置：现场设立“AI应用体验区”，让嘉宾茶歇时亲身体验最新的AI工作流工具。· 15:30 - 15:55（25 分钟）' },
      { time: '15:55', type: '跨界思辨', title: '跨界思辨圆桌：替代还是共生？重新定义人类劳动力价值', speaker: '议题方向：当硬技能（写代码、做报表）被AI打包，人类的核心竞争力是否全面转向“软实力”（情绪价值、创造力、道德决策）？如何预防技术失业带来的社会问题？拟邀嘉宾类型：社会学家/经济学家、AI伦理学者、科幻作家或前沿科技媒体人。· 15:55 - 16:45（50 分钟）' },
      { time: '16:45', type: '互动工坊', title: '互动环节：全场思辨——“2030劳动力预测”', speaker: '形式：现场观众通过大屏幕实时投票和匿名留言，探讨“哪个岗位最不可能被替代”，并由台下专家进行随机点评。· 16:45 - 17:15（30 分钟）' },
      { time: '17:15', type: '闭幕', title: '闭幕演讲与总结', speaker: '主题：拥抱变革，重塑技能——给未来劳动者的破局指南。· 17:15 - 17:30（15 分钟）' },
    ],
  },
];

const typeColors: Record<string, string> = {
  '主旨演讲': 'bg-blue-50 text-blue-700 border-blue-200',
  '产业圆桌': 'bg-purple-50 text-purple-700 border-purple-200',
  '跨界思辨': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  '互动工坊': 'bg-green-50 text-green-700 border-green-200',
  '开幕': 'bg-gray-50 text-gray-700 border-gray-200',
  '茶歇': 'bg-gray-50 text-gray-600 border-gray-200',
  '闭幕': 'bg-gray-50 text-gray-600 border-gray-200',
  Keynote: 'bg-blue-50 text-blue-700 border-blue-200',
  Panel: 'bg-purple-50 text-purple-700 border-purple-200',
  Workshop: 'bg-green-50 text-green-700 border-green-200',
  Session: 'bg-gray-100 text-gray-700 border-gray-200',
  'Case Study': 'bg-amber-50 text-amber-700 border-amber-200',
  Roundtable: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Registration: 'bg-gray-50 text-gray-600 border-gray-200',
  Break: 'bg-gray-50 text-gray-600 border-gray-200',
  Opening: 'bg-gray-50 text-gray-700 border-gray-200',
  Close: 'bg-gray-50 text-gray-600 border-gray-200',
};

export default function AgendaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">
            Programme
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI驱动的劳动力转型与变革
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg font-light">
            13:30–17:30 · 主旨演讲 + 产业圆桌 + 跨界思辨 + 互动工坊
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-10 text-sm text-yellow-800">
            <strong>议程说明：</strong> 本场议程围绕趋势与破局、痛点与实践、未来与共生三个板块展开。
          </div>

          {days.map((day) => (
            <div key={day.label} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{day.label}</h2>
                  <p className="text-[#2563eb] text-sm font-medium">{day.theme}</p>
                </div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="space-y-2">
                {day.sessions.map((session, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-lg border bg-white ${
                      ['茶歇', '开幕', '闭幕'].includes(session.type)
                        ? 'opacity-60'
                        : 'hover:shadow-sm transition-shadow'
                    }`}
                  >
                    <div className="w-14 flex-shrink-0">
                      <span className="text-[#2563eb] font-mono text-sm font-bold">
                        {session.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded border ${
                            typeColors[session.type] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                      <p className="font-medium text-gray-900 text-sm leading-snug">
                        {session.title}
                      </p>
                      {session.speaker && (
                        <p className="text-gray-600 text-xs mt-1">
                          {session.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
