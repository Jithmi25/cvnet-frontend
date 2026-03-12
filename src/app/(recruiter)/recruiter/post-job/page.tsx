'use client';

import { useState } from 'react';
import { X, Plus, MapPin, DollarSign, Eye } from 'lucide-react';

const requiredSkillOptions = ['Figma', 'UI Design', 'Design Systems', 'Prototyping', 'React', 'Python', 'SQL', 'AWS', 'Product Management', 'Agile'];

export default function PostJobPage() {
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState(['Figma', 'UI Design', 'Design Systems']);
  const [newSkill, setNewSkill] = useState('');
  const [jobTitle, setJobTitle] = useState('Senior Product Designer');
  const [dept, setDept] = useState('Design');
  const [description, setDescription] = useState('We are looking for a Senior Product Designer to join our fast-growing team. You will be responsible for leading the design of our core platform features...');
  const [expLevel, setExpLevel] = useState('Mid-Senior Level (5+ years)');
  const [education, setEducation] = useState("Bachelor's Degree");
  const [location, setLocation] = useState('San Francisco, CA (Remote Friendly)');
  const [salaryMin, setSalaryMin] = useState('120,000');
  const [salaryMax, setSalaryMax] = useState('160,000');

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill('');
    }
  };
  const removeSkill = (skill: string) => setSkills(skills.filter(s => s !== skill));

  const steps = ['Basic Info', 'Requirements', 'Review & Post'];

  return (
    <div className="p-6 sm:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Job Management</p>
          <h1 className="text-2xl font-extrabold text-slate-900">Post a New Job</h1>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-3 mb-8">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors ${i + 1 === step ? 'bg-blue-600 text-white' : i + 1 < step ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {i + 1 < step ? '✓' : i + 1}
            </div>
            <span className={`text-sm font-semibold hidden sm:block ${i + 1 === step ? 'text-blue-600' : 'text-slate-400'}`}>{label}</span>
            {i < steps.length - 1 && <div className="h-px w-6 bg-slate-200 mx-1 hidden sm:block" />}
          </div>
        ))}
        <span className="ml-auto text-xs text-slate-400 font-medium">Step {step} of {steps.length}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Step 1: Basic Info */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-5">Basic Job Information</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Job Title</label>
                  <input value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department</label>
                  <select value={dept} onChange={e => setDept(e.target.value)} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    {['Design', 'Engineering', 'Marketing', 'Data', 'Human Resources', 'Product'].map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Job Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Required Skills</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {skills.map(skill => (
                    <span key={skill} className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="hover:text-red-600 transition-colors"><X size={11} /></button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      value={newSkill}
                      onChange={e => setNewSkill(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && addSkill(newSkill)}
                      placeholder="Add skills..."
                      className="w-full px-4 py-2 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button onClick={() => addSkill(newSkill)} className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors">
                    <Plus size={14} /> Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {requiredSkillOptions.filter(s => !skills.includes(s)).slice(0, 5).map(s => (
                    <button key={s} onClick={() => addSkill(s)} className="text-xs text-slate-500 border border-dashed border-slate-200 px-2 py-0.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors">+ {s}</button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Experience Level</label>
                  <select value={expLevel} onChange={e => setExpLevel(e.target.value)} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {['Entry Level (0-2 years)', 'Mid Level (2-5 years)', 'Mid-Senior Level (5+ years)', 'Senior (8+ years)', 'Director/Executive'].map(e => <option key={e}>{e}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Education Requirement</label>
                  <select value={education} onChange={e => setEducation(e.target.value)} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {["High School", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD", "Any"].map(e => <option key={e}>{e}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    <MapPin size={13} className="inline mr-1 text-slate-400" />Location
                  </label>
                  <input value={location} onChange={e => setLocation(e.target.value)} className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    <DollarSign size={13} className="inline mr-1 text-slate-400" />Salary Range (Annual)
                  </label>
                  <div className="flex items-center gap-2">
                    <input value={`$${salaryMin}`} onChange={e => setSalaryMin(e.target.value.replace('$', ''))} className="flex-1 px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <span className="text-slate-400 text-sm">–</span>
                    <input value={`$${salaryMax}`} onChange={e => setSalaryMax(e.target.value.replace('$', ''))} className="flex-1 px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="px-5 py-2.5 text-sm font-semibold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              ← Back
            </button>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 text-sm font-semibold border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">Save Draft</button>
              <button
                onClick={() => setStep(Math.min(steps.length, step + 1))}
                className="px-5 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-sm"
              >
                {step === steps.length ? 'Publish Job' : 'Continue to Requirements →'}
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Live Preview</h3>
              <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{jobTitle || 'Job Title'}</h4>
                  <p className="text-xs text-blue-600 font-medium mt-0.5">{dept} · CVNet Corp</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Active</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><MapPin size={11} />{location || 'Location'}</span>
                <span className="flex items-center gap-1"><DollarSign size={11} />${salaryMin}k – ${salaryMax}k</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">{description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {skills.map(s => (
                  <span key={s} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{s}</span>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white text-xs font-semibold py-2 rounded-lg">Apply for this position</button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Eye size={12} /> Preview visible to candidates after publishing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
