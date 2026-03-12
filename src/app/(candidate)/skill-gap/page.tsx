import Link from 'next/link';
import { Search, Download, ExternalLink, BookOpen } from 'lucide-react';

const matchedSkills = ['React', 'TypeScript', 'Tailwind', 'Git', 'Responsive Design', 'JavaScript', 'Redux', 'REST API'];
const missingSkills = ['Docker', 'GraphQL', 'AWS', 'Jest'];

const gapBreakdown = [
  { skill: 'Docker', category: 'Containerization', demand: 'High', yourLevel: 'None Detected', required: 'Intermediate', status: 'Critical', action: 'Find Course' },
  { skill: 'GraphQL', category: 'API Query Language', demand: 'Medium', yourLevel: 'Beginner', required: 'Advanced', status: 'Critical', action: 'Find Course' },
  { skill: 'AWS', category: 'Cloud Infrastructure', demand: 'High', yourLevel: 'None Detected', required: 'Intermediate', status: 'Critical', action: 'Find Course' },
  { skill: 'Jest', category: 'Testing Framework', demand: 'Medium', yourLevel: 'Beginner', required: 'Intermediate', status: 'Moderate', action: 'Find Course' },
  { skill: 'TypeScript', category: 'Programming Language', demand: 'High', yourLevel: 'Expert', required: 'Expert', status: 'Matched', action: 'Review' },
  { skill: 'React.js', category: 'Frontend Framework', demand: 'High', yourLevel: 'Beginner', required: 'Intermediate', status: 'Minor', action: 'Practice' },
];

const statusConfig: Record<string, { bg: string; text: string }> = {
  Critical: { bg: 'bg-red-100', text: 'text-red-700' },
  Moderate: { bg: 'bg-amber-100', text: 'text-amber-700' },
  Minor: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  Matched: { bg: 'bg-green-100', text: 'text-green-700' },
};

const demandConfig: Record<string, string> = {
  High: 'text-red-600 font-semibold',
  Medium: 'text-amber-600 font-semibold',
  Low: 'text-slate-500',
};

export default function SkillGapPage() {
  const matchScore = 68;

  return (
    <div className="p-6 sm:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Skill Gap Analysis</h1>
          <p className="text-slate-500 text-sm mt-0.5">Deep dive into your market readiness</p>
        </div>
        <div className="flex gap-3">
          <div className="relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Search jobs, skills..." className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-48" />
          </div>
          <button className="flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors">
            <Download size={15} /> Export Report
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Target Role */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Target Job Role</span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-2">Senior Frontend Engineer</h2>
              <p className="text-xs text-slate-400 mt-1">Based on 1,420 active job listings in your region.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mx-auto">
                <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="7" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#2563eb" strokeWidth="7"
                    strokeDasharray={`${2 * Math.PI * 34 * matchScore / 100} ${2 * Math.PI * 34 * (1 - matchScore / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-extrabold text-slate-900">{matchScore}%</span>
                  <span className="text-xs text-slate-400">Match</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-blue-600 mt-1">You are a strong candidate.</p>
              <p className="text-xs text-slate-400">Top 20%</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-extrabold text-green-600">{matchedSkills.length}</p>
              <p className="text-xs text-green-700 font-medium mt-0.5">Matched Skills Verified</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-extrabold text-red-600">{missingSkills.length}</p>
              <p className="text-xs text-red-700 font-medium mt-0.5">Missing Critical Skills</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-extrabold text-blue-600">+12%</p>
              <p className="text-xs text-blue-700 font-medium mt-0.5">Impact of Adding Docker</p>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="space-y-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Improve Your Match</h3>
            <p className="text-xs text-slate-400 mb-4">Bridge the gap by mastering AWS and System Design. We&apos;ve curated a personalized learning path for you.</p>
            <Link href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors mb-3">
              Start Learning Path
            </Link>
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-100 rounded-xl">
              <span className="text-amber-600 mt-0.5 flex-shrink-0">⚡</span>
              <div>
                <p className="text-xs font-semibold text-amber-800">AWS Certified Solutions Architect</p>
                <p className="text-xs text-amber-600 mt-0.5">Suggested Course</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Matched Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {matchedSkills.map(skill => (
                <span key={skill} className="text-xs bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full font-medium">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Missing Critical Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {missingSkills.map(skill => (
                <span key={skill} className="text-xs bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 rounded-full font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Gap Analysis */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="font-bold text-slate-900">Skill Gap Breakdown</h2>
          <button className="flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:text-blue-700">
            <Download size={14} /> Export Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Skill / Tool</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Market Demand</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Level</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Required Level</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {gapBreakdown.map(({ skill, category, demand, yourLevel, required, status, action }) => (
                <tr key={skill} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900">{skill}</p>
                    <p className="text-xs text-slate-400">{category}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs ${demandConfig[demand]}`}>{demand}</span>
                  </td>
                  <td className="px-4 py-4 text-xs text-slate-600">{yourLevel}</td>
                  <td className="px-4 py-4 text-xs text-slate-600">{required}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusConfig[status]?.bg} ${statusConfig[status]?.text}`}>
                      {status === 'Matched' ? '✓ Matched' : `${status} Gap`}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                      <BookOpen size={12} /> {action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Showing {gapBreakdown.length} of 19 skills</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
