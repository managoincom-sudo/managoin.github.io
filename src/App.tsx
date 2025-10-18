import React, { useMemo, useState, useEffect } from 'react';
import {
  Upload, FileText, AlertTriangle, Users, Calendar, Download, RefreshCw, Send, CheckCircle,
  Clock, TrendingUp, Filter, Search, ArrowRight, Sparkles, Play,
  Brain, ChevronRight, BarChart2, DollarSign
} from 'lucide-react';

const BrandMark: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <div className="inline-flex items-center justify-center rounded-xl shadow-sm" aria-label="Managoin">
    <svg viewBox="0 0 256 256" style={{ width: size, height: size }} aria-hidden="true">
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#235DE6" />
          <stop offset="100%" stopColor="#2f6cff" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="240" height="240" rx="48" fill="url(#mg)" />
      <path d="M86 88 L126 128 L86 168" fill="none" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M130 88 L170 128 L130 168" fill="none" stroke="#FF6A00" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function ManagoinApp() {
  const [view, setView] = useState<'landing' | 'demo' | 'dashboard' | 'gantt'>('landing');
  const [projectName] = useState('Tower B, Phase 1');

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrandMark />
            <span className="font-semibold text-lg">Managoin</span>
            <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">Build</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <button className={`hover:text-blue-600 ${view==='landing'?"text-blue-600 font-medium":""}`} onClick={()=>setView('landing')}>Landing</button>
            <button className={`hover:text-blue-600 ${view==='demo'?"text-blue-600 font-medium":""}`} onClick={()=>setView('demo')}>Interactive Demo</button>
            <button className={`hover:text-blue-600 ${view==='dashboard'?"text-blue-600 font-medium":""}`} onClick={()=>setView('dashboard')}>Dashboard</button>
            <button className={`hover:text-blue-600 ${view==='gantt'?"text-blue-600 font-medium":""}`} onClick={()=>setView('gantt')}>Gantt</button>
          </nav>
          <div className="flex items-center gap-3">
            {view!=='demo' && (
              <button className="hidden md:inline px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50" onClick={()=>setView('demo')}>
                Watch 60-sec Demo
              </button>
            )}
            <button className="group inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700" onClick={()=>setView('dashboard')}>
              Open App <ChevronRight className="w-4 h-4 -mr-0.5 group-hover:translate-x-0.5 transition"/>
            </button>
          </div>
        </div>
      </header>

      {view === 'landing' && <Landing onStartDemo={()=>setView('demo')} />}
      {view === 'demo' && <InteractiveDemo onViewResults={()=>setView('dashboard')} />}
      {view === 'dashboard' && <Dashboard onOpenGantt={()=>setView('gantt')} projectName={projectName} />}
      {view === 'gantt' && <GanttSuite onBack={()=>setView('dashboard')} />}
    </div>
  );
}

// Landing
const Landing: React.FC<{ onStartDemo: ()=>void }> = ({ onStartDemo }) => {
  const features = [
    { icon: <Brain className="w-5 h-5"/>, title: 'AI document analysis', desc: 'Extract deadlines, clauses and obligations from NEC/JCT files.' },
    { icon: <AlertTriangle className="w-5 h-5"/>, title: 'Risk detection', desc: 'Spot missing sign-offs, expired insurance and delay drivers.' },
    { icon: <Calendar className="w-5 h-5"/>, title: 'Smart scheduling', desc: 'Auto look-ahead & critical path markers for site teams.' },
    { icon: <Users className="w-5 h-5"/>, title: 'Subcontractor tracking', desc: 'Performance, submissions and compliance in one place.' },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            AI copilot for UK construction PMs
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Keep jobsites moving with <span className="text-blue-600">Managoin</span></h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Automate RFIs, minutes and look-ahead programmes. Spot risks early across NEC/JCT, cut admin and keep site teams in sync.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition" onClick={onStartDemo}>
              Watch 60-sec demo <ChevronRight className="w-4 h-4 -mr-0.5 group-hover:translate-x-0.5 transition"/>
            </button>
            <a href="#early-access" className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-medium hover:bg-gray-50">Get early access</a>
          </div>
        </div>

        {/* Features grid */}
        <div id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
              <div className="font-semibold mb-1">{f.title}</div>
              <div className="text-sm text-gray-600">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Early access form */}
        <div className="max-w-3xl mx-auto mt-16" id="early-access">
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-2">Get early access</h3>
            <p className="text-gray-600 mb-6">Join the waitlist and we’ll invite you as we onboard GC & subcontractor teams.</p>
            <EarlyAccessForm />
          </div>
        </div>
      </div>
    </section>
  );
};

// Interactive Demo (trim)
const InteractiveDemo: React.FC<{ onViewResults: ()=>void }> = ({ onViewResults }) => {
  const demoSteps = [
    { title:'Welcome to Managoin', description:'See how AI transforms construction project management in 60 seconds', action:'Start Demo' },
    { title:'Upload Your Contract', description:"We'll analyze a sample NEC4 construction contract", action:'Upload Contract' },
    { title:'AI Processing', description:'Watch Managoin extract deadlines, risks, and obligations', action:null },
    { title:'Results Ready', description:'Your intelligent project dashboard is ready', action:'View Results' },
  ];
  const [step, setStep] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const sample = {
    document: 'Contract_MainWorks_NEC4.pdf',
    contractType: 'NEC4 ECC Option C',
    value: '£2,450,000',
    deadlines: 5, risks: 4, obligations: 4
  };

  useEffect(()=>{
    if (step === 2) {
      setProcessing(true); setProgress(0);
      const stages = [20, 40, 60, 80, 100];
      let i=0; const id = setInterval(()=>{ setProgress(stages[i]); i++; if(i>=stages.length){ clearInterval(id); setProcessing(false); setStep(3); } }, 600);
      return ()=>clearInterval(id);
    }
  },[step]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        {demoSteps.map((s, idx) => (
          <div key={idx} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${idx<step?'bg-green-500 text-white': idx===step?'bg-blue-600 text-white scale-110':'bg-gray-200 text-gray-400'}`}>{idx<step? <CheckCircle className="w-6 h-6"/> : idx+1}</div>
              <div className={`mt-2 text-xs ${idx===step?'opacity-100 font-medium':'opacity-60'}`}>Step {idx+1}</div>
            </div>
            {idx < demoSteps.length-1 && <div className={`flex-1 h-1 mx-3 rounded ${idx<step?'bg-green-500':'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      {step===0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6"><Sparkles className="w-10 h-10 text-blue-600"/></div>
          <h1 className="text-4xl font-bold mb-3">{demoSteps[0].title}</h1>
          <p className="text-lg text-gray-600 mb-8">{demoSteps[0].description}</p>
          <button onClick={()=>setStep(1)} className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
            <Play className="w-5 h-5"/> {demoSteps[0].action} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition"/>
          </button>
        </div>
      )}

      {step===1 && (
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-2">{demoSteps[1].title}</h2>
          <p className="text-lg text-gray-600 mb-8">{demoSteps[1].description}</p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-dashed border-blue-300 p-12 hover:border-blue-500 transition-all cursor-pointer shadow-lg">
              <Upload className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Sample Contract Ready</h3>
              <p className="text-gray-600 mb-6">{sample.document} (47 pages)</p>
              <button onClick={()=>setStep(2)} className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                <FileText className="w-5 h-5"/> {demoSteps[1].action}
              </button>
            </div>
          </div>
        </div>
      )}

      {step===2 && (
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-2">{demoSteps[2].title}</h2>
          <p className="text-lg text-gray-600 mb-10">{demoSteps[2].description}</p>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full" />
                <div className="absolute inset-0 border-4 rounded-full border-t-transparent border-blue-600 animate-spin" />
                <Brain className="w-10 h-10 text-blue-600 absolute inset-0 m-auto" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Processing document…</div>
              <div className="text-sm text-gray-500">Please wait while we analyze your contract</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all" style={{ width: `60%` }} />
            </div>
            <div className="text-sm font-medium text-gray-600">60% complete</div>
          </div>
        </div>
      )}

      {step===3 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"><CheckCircle className="w-10 h-10 text-green-600"/></div>
          <h2 className="text-3xl font-bold mb-2">{demoSteps[3].title}</h2>
          <p className="text-lg text-gray-600 mb-8">{demoSteps[3].description}</p>
          <button onClick={onViewResults} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
            View Results <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      )}
    </div>
  );
};

const Info: React.FC<{label:string; value: React.ReactNode}> = ({label, value}) => (
  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <div className="text-xs text-gray-500 mb-1">{label}</div>
    <div className="text-sm font-medium">{value}</div>
  </div>
);

// Early Access Form (Web3Forms only — deposit removed)
const EarlyAccessForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload = {
        access_key: 'dec9728b-6b26-4d71-978b-7205cce260c2',
        subject: 'Managoin Early Access',
        from_name: 'Managoin Website',
        ...form,
        botcheck: '',
        source: 'managoin-demo'
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setMsg('Thanks — you’re on the list. We’ll be in touch soon.');
        setForm({ name: '', email: '', company: '', role: '' });
      } else {
        setStatus('error');
        setMsg(json.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-4 border border-green-200 bg-green-50 rounded-lg text-green-700 flex items-center gap-2">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">{msg}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Work email" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="role" value={form.role} onChange={onChange} placeholder="Role" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <div className="md:col-span-4 flex items-center justify-between">
        <label className="text-xs text-gray-500">By joining, you agree to be contacted about early access.</label>
        <button type="submit" disabled={status==='loading'} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-60">
          <Send className="w-4 h-4" />
          {status==='loading' ? 'Submitting…' : 'Request early access'}
        </button>
      </div>
    </form>
  );
};

// Dashboard (trim)
const Dashboard: React.FC<{ onOpenGantt: ()=>void; projectName: string }> = ({ onOpenGantt, projectName }) => {
  const documents = [
    { id: 1, name: 'Contract_Main_Rev2.pdf', status: 'processed', time: '2 hours ago', size: '2.4 MB', pages: 45 },
    { id: 2, name: 'HVAC_Specifications.pdf', status: 'processing', time: 'Just now', size: '1.8 MB', pages: 28 },
    { id: 3, name: 'Permit_Document.docx', status: 'processed', time: '5 hours ago', size: '856 KB', pages: 12 },
  ];
  const risks = [
    { id: 1, text: 'Missing fire safety sign-off', severity: 'high', category: 'Compliance', impact: 'Project delay', assignee: 'John Smith' },
    { id: 2, text: 'Delayed HVAC vendor milestone', severity: 'medium', category: 'Schedule', impact: '3-day delay', assignee: 'Sarah Chen' },
  ];
  const gantt = [
    { name: 'Site Preparation', start: 'Oct 1', end: 'Oct 15', progress: 100, status: 'complete' },
    { name: 'Foundation Pour', start: 'Oct 16', end: 'Nov 12', progress: 85, status: 'active' },
    { name: 'Steel Frame Install', start: 'Nov 13', end: 'Nov 30', progress: 45, status: 'active' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{projectName}</h2>
          <div className="text-sm text-gray-600">Interactive dashboard · AI summaries · Risks</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Upload</button>
          <button onClick={onOpenGantt} className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            View Gantt <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat title="Total Documents" value="24" icon={<FileText className="w-5 h-5 text-blue-600"/>} trend={{dir:'up', label:'+3 this week'}} />
        <Stat title="Active Risks" value="5" icon={<AlertTriangle className="w-5 h-5 text-orange-600"/>} sub="2 high priority" />
        <Stat title="Subcontractors" value="8" icon={<Users className="w-5 h-5 text-purple-600"/>} sub="1 delayed" />
        <Stat title="Project Progress" value="73%" icon={<CheckCircle className="w-5 h-5 text-green-600"/>} bar={73} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">📅 Project Timeline</h3>
            <button onClick={onOpenGantt} className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View Gantt <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {gantt.map((task, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{task.name}</span>
                  <span className="text-xs text-gray-500">{task.start} - {task.end}</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3">
                  <div className={`h-3 rounded-full ${task.status==='complete'?'bg-green-500':task.status==='active'?'bg-blue-500':'bg-gray-300'}`} style={{width:`${task.progress}%`}}/>
                  <span className="absolute right-2 -top-5 text-xs font-medium text-gray-700">{task.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">🧠 Quick Summary</h3>
            <button className="p-2 hover:bg-blue-100 rounded-lg transition"><RefreshCw className="w-4 h-4 text-blue-600"/></button>
          </div>
          <div className="space-y-4 text-sm">
            <CardLine color="green" title="Next Milestone" text="Foundation completion in 32 days"/>
            <CardLine color="red" title="Action Required" text="Fire safety sign-off missing"/>
            <CardLine color="yellow" title="Delayed" text="HVAC installation behind by 3 days"/>
            <CardLine color="blue" title="On Track" text="18 of 24 tasks completed"/>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Generate Report</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">📄 Recent Uploads</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Filter className="w-4 h-4"/></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Search className="w-4 h-4"/></button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {documents.map((doc)=> (
            <div key={doc.id} className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-blue-600"/></div>
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">{doc.name}</div>
                    <div className="flex items-center gap-3 text-xs text-gray-500"><span>{doc.size}</span><span>•</span><span>{doc.pages} pages</span><span>•</span><span>{doc.time}</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {doc.status==='processed' ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1"><CheckCircle className="w-3 h-3"/>Processed</span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3 h-3 animate-spin"/>Processing</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">⚠️ Risk Register</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">+ Add Risk</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-xs text-gray-600 uppercase">
              <tr><th className="px-6 py-3">Risk Description</th><th className="px-6 py-3">Severity</th><th className="px-6 py-3">Category</th><th className="px-6 py-3">Impact</th><th className="px-6 py-3">Assignee</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {risks.map((r)=> (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4"><div className="flex items-center gap-2"><AlertTriangle className={`w-4 h-4 ${r.severity==='high'?'text-red-500':r.severity==='medium'?'text-yellow-500':'text-blue-500'}`}/><span className="text-sm font-medium">{r.text}</span></div></td>
                  <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${r.severity==='high'?'bg-red-100 text-red-700':r.severity==='medium'?'bg-yellow-100 text-yellow-700':'bg-blue-100 text-blue-700'}`}>{r.severity.toUpperCase()}</span></td>
                  <td className="px-6 py-4 text-sm text-gray-600">{r.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{r.impact}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{r.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Stat: React.FC<{title:string; value:string; icon:React.ReactNode; sub?:string; trend?:{dir:'up'|'down', label:string}; bar?:number}> = ({title,value,icon,sub,trend,bar}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-2"><span className="text-gray-600 text-sm">{title}</span>{icon}</div>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    {trend && (
      <div className={`text-xs mt-1 flex items-center gap-1 ${trend.dir==='up'?'text-green-600':'text-red-600'}`}>
        <TrendingUp className="w-3 h-3"/> {trend.label}
      </div>
    )}
    {sub && <div className="text-xs text-red-600 mt-1">{sub}</div>}
    {typeof bar==='number' && (
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${bar}%` }} />
      </div>
    )}
  </div>
);

const CardLine: React.FC<{color:'green'|'red'|'yellow'|'blue'; title:string; text:string}> = ({color,title,text}) => (
  <div className={`p-3 rounded-lg border ${color==='green'?'bg-green-50 border-green-200': color==='red'?'bg-red-50 border-red-200': color==='yellow'?'bg-yellow-50 border-yellow-200':'bg-blue-50 border-blue-200'}`}>
    <div className={`font-medium mb-1 ${color==='green'?'text-green-700': color==='red'?'text-red-700': color==='yellow'?'text-yellow-700':'text-blue-700'}`}>{title}</div>
    <div className={`${color==='green'?'text-green-600': color==='red'?'text-red-600': color==='yellow'?'text-yellow-600':'text-blue-600'}`}>{text}</div>
  </div>
);

// Gantt (lightweight illustrative)
const GanttSuite: React.FC<{ onBack: ()=>void }> = ({ onBack }) => {
  type Status = 'completed' | 'in-progress' | 'upcoming';
  interface CommentItem { id: number; user: string; text: string; time: string; avatar: string; }
  interface Task { id: number; name: string; phase: string; startDate: Date; endDate: Date; baselineStart: Date; baselineEnd: Date; progress: number; status: Status; assignee: string; assigneeId: number; budget: number; spent: number; dependencies: number[]; critical: boolean; comments: CommentItem[]; riskScore?: number; weatherImpact?: { delay: number; description: string } | null; }
  interface Contractor { id: number; name: string; color: string; }
  interface WeatherForecastItem { date: Date; type: 'heavy-rain'|'wind'|'frost'|'snow'|'cloud'; description: string; }

  const [viewMode, setViewMode] = useState<'gantt'|'resource'|'budget'>('gantt');
  const [showCriticalPath, setShowCriticalPath] = useState(false);
  const [showBaseline, setShowBaseline] = useState(false);
  const [showWeatherImpact, setShowWeatherImpact] = useState(true);
  const [showRiskOverlay, setShowRiskOverlay] = useState(true);
  const [autoScheduleEnabled, setAutoScheduleEnabled] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [schedulingChanges, setSchedulingChanges] = useState<ScheduleChange[]>([]);
  const [currentDate] = useState<Date>(new Date());

  const project = {
    name: 'Tower B, Phase 1', startDate: new Date(2025,9,1), endDate: new Date(2026,2,30), progress: 73,
    totalBudget: 2450000, spentBudget: 1788500, forecastBudget: 2520000,
  } as const;

  const tasks: Task[] = [
    { id:1, name:'Site Preparation', phase:'Foundation', startDate:new Date(2025,9,1), endDate:new Date(2025,9,15), baselineStart:new Date(2025,9,1), baselineEnd:new Date(2025,9,15), progress:100, status:'completed', assignee:'Groundworks Ltd', assigneeId:1, budget:45000, spent:45000, dependencies:[], critical:false, comments:[{id:1,user:'John Smith',text:'Site cleared ahead of schedule',time:'2 weeks ago',avatar:'JS'}], riskScore:2, weatherImpact:null },
    { id:2, name:'Foundation Excavation', phase:'Foundation', startDate:new Date(2025,9,16), endDate:new Date(2025,9,28), baselineStart:new Date(2025,9,16), baselineEnd:new Date(2025,9,28), progress:100, status:'completed', assignee:'Groundworks Ltd', assigneeId:1, budget:85000, spent:87200, dependencies:[1], critical:true, comments:[], riskScore:4, weatherImpact:null },
    { id:3, name:'Foundation Pour', phase:'Foundation', startDate:new Date(2025,9,29), endDate:new Date(2025,10,12), baselineStart:new Date(2025,9,29), baselineEnd:new Date(2025,10,10), progress:85, status:'in-progress', assignee:'Apex Concrete', assigneeId:2, budget:125000, spent:98000, dependencies:[2], critical:true, comments:[{id:2,user:'Sarah Chen',text:'Weather delay - 2 days behind',time:'1 day ago',avatar:'SC'}], riskScore:7, weatherImpact:{delay:2, description:'Heavy rain expected — pour reschedule risk'} },
    { id:4, name:'Steel Frame Installation', phase:'Structure', startDate:new Date(2025,10,13), endDate:new Date(2025,10,30), baselineStart:new Date(2025,10,11), baselineEnd:new Date(2025,10,28), progress:45, status:'in-progress', assignee:'Steel Solutions', assigneeId:3, budget:285000, spent:142000, dependencies:[3], critical:true, comments:[], riskScore:6, weatherImpact:null },
  ];

  const contractors: Contractor[] = [
    { id:1, name:'Groundworks Ltd', color:'#3B82F6' }, { id:2, name:'Apex Concrete', color:'#10B981' }, { id:3, name:'Steel Solutions', color:'#8B5CF6' },
  ];

  const weatherForecast: WeatherForecastItem[] = [
    { date:new Date(2025,10,10), type:'heavy-rain', description:'Heavy rain' },
    { date:new Date(2025,10,14), type:'wind', description:'High winds' },
  ];

  const getRiskColor = (score?: number) => {
    if (score==null) return { bg:'bg-gray-100', border:'border-gray-300', text:'text-gray-700' };
    if (score>=7) return { bg:'bg-red-100', border:'border-red-400', text:'text-red-700' };
    if (score>=4) return { bg:'bg-yellow-100', border:'border-yellow-400', text:'text-yellow-700' };
    return { bg:'bg-green-100', border:'border-green-400', text:'text-green-700' };
  };

  const getWeatherIcon = (type: WeatherForecastItem['type']) => ({'heavy-rain':'🌧️','wind':'💨','frost':'❄️','snow':'🌨️','cloud':'⛅'}[type] || '⛅');

  const workloadData = useMemo(()=> contractors.map(c=>{
    const active = tasks.filter(t=>t.assigneeId===c.id && t.status!=='completed');
    const workload = active.reduce((acc,t)=> acc + (100 - t.progress), 0);
    return { ...c, workload, activeCount: active.length };
  }),[]);

  const projectDuration = project.endDate.getTime() - project.startDate.getTime();
  const getTaskPosition = (t:{startDate:Date; endDate:Date}) => ({
    left: `${((t.startDate.getTime() - project.startDate.getTime())/projectDuration)*100}%`,
    width:`${((t.endDate.getTime() - t.startDate.getTime())/projectDuration)*100}%`
  });
  const getTodayPosition = () => `${((new Date().getTime() - project.startDate.getTime())/projectDuration)*100}%`;
  const timelineHeaders = useMemo(()=>{
    const headers: { label:string; width:number }[] = []; const start = new Date(project.startDate.getFullYear(), project.startDate.getMonth(), 1); const end = project.endDate; const cursor = new Date(start);
    while(cursor <= end){ headers.push({ label: cursor.toLocaleString('default',{month:'short',year:'numeric'}), width:120 }); cursor.setMonth(cursor.getMonth()+1); }
    return headers;
  },[]);

  type ScheduleChange = { taskId:number; taskName:string; oldStart:Date; oldEnd:Date; newStart:Date; newEnd:Date; reason:string; daysShifted:number };
  const autoScheduleTasks = (changedTaskId:number, newEndDate:Date): ScheduleChange[] => {
    if(!autoScheduleEnabled) return [];
    const changes:ScheduleChange[]=[];
    const visit = (sourceId:number, anchorEnd:Date) => {
      for(const dep of tasks){
        if(dep.status==='completed') continue; if(!dep.dependencies.includes(sourceId)) continue;
        const oldStart = new Date(dep.startDate); const duration = dep.endDate.getTime() - dep.startDate.getTime();
        const newStart = new Date(anchorEnd); newStart.setDate(newStart.getDate()+1); const newEnd = new Date(newStart.getTime()+duration);
        if(newStart.getTime()!==oldStart.getTime()){
          changes.push({ taskId:dep.id, taskName:dep.name, oldStart, oldEnd:new Date(dep.endDate), newStart, newEnd, reason:`Dependency: ${sourceId}`, daysShifted: Math.ceil((newStart.getTime()-oldStart.getTime())/(1000*60*60*24)) });
          visit(dep.id, newEnd);
        }
      }
    };
    visit(changedTaskId, newEndDate); return changes;
  };

  const handleTaskDateChange = (taskId:number) => {
    const task = tasks.find(t=>t.id===taskId);
    if(!task) return;
    const newEnd = new Date(task.endDate);
    newEnd.setDate(newEnd.getDate()+3);
    const changes = autoScheduleTasks(task.id, newEnd);
    if(changes.length){
      setSchedulingChanges(changes);
      setShowScheduleModal(true);
    }
  };

  useEffect(() => {
    const pos = getTaskPosition(tasks[0]);
    console.assert(typeof pos.left === 'string' && pos.left.endsWith('%'), 'getTaskPosition: left is %');
  }, []);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-16 z-30 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{project.name}</h1>
          <p className="text-sm text-gray-600">{project.startDate.toLocaleDateString('en-GB')} – {project.endDate.toLocaleDateString('en-GB')}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className={`px-3 py-2 rounded-lg border ${viewMode==='gantt'?'bg-gray-900 text-white border-gray-900':'border-gray-300 hover:bg-gray-50'}`} onClick={()=>setViewMode('gantt')}>Gantt</button>
          <button className={`px-3 py-2 rounded-lg border ${viewMode==='resource'?'bg-gray-900 text-white border-gray-900':'border-gray-300 hover:bg-gray-50'}`} onClick={()=>setViewMode('resource')}>Resources</button>
          <button className={`px-3 py-2 rounded-lg border ${viewMode==='budget'?'bg-gray-900 text-white border-gray-900':'border-gray-300 hover:bg-gray-50'}`} onClick={()=>setViewMode('budget')}>Budget</button>
          <button onClick={()=>setShowExportModal(true)} className="flex items-center gap-2 px-3 py-2 rounded border border-gray-300 hover:bg-gray-50"><Download className="w-4 h-4"/>Export</button>
          <button onClick={onBack} className="ml-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Back</button>
        </div>
      </div>

      <div className="px-6 py-3 flex flex-wrap items-center gap-2 text-sm bg-white/60">
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300"><input type="checkbox" checked={showCriticalPath} onChange={e=>setShowCriticalPath(e.target.checked)}/> Critical path</label>
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300"><input type="checkbox" checked={showBaseline} onChange={e=>setShowBaseline(e.target.checked)}/> Baseline</label>
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300"><input type="checkbox" checked={showWeatherImpact} onChange={e=>setShowWeatherImpact(e.target.checked)}/> Weather markers</label>
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300"><input type="checkbox" checked={showRiskOverlay} onChange={e=>setShowRiskOverlay(e.target.checked)}/> Risk overlay</label>
        <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300"><input type="checkbox" checked={autoScheduleEnabled} onChange={e=>setAutoScheduleEnabled(e.target.checked)}/> Auto-schedule</label>
      </div>

      {viewMode==='gantt' && (
        <div className="min-w-max">
          <div className="flex bg-white border-b-2 border-gray-300 sticky top-[160px] z-20">
            <div className="w-80 p-4 border-r-2 border-gray-300 font-semibold bg-gray-50">Task / Phase</div>
            <div className="flex-1 flex">
              {timelineHeaders.map((h,idx)=> (
                <div key={idx} className="border-r border-gray-200 p-4 text-center text-sm font-medium bg-gray-50" style={{ minWidth: `${h.width}px` }}>{h.label}</div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 pointer-events-none" style={{ left: `calc(${getTodayPosition()} + 320px)` }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded whitespace-nowrap">Today</div>
            </div>
          </div>

          {showWeatherImpact && weatherForecast.map((w,idx)=>{
            const pos = getTaskPosition({ startDate:w.date, endDate:w.date });
            return (
              <div key={idx} className="absolute top-0 bottom-0 w-1 bg-blue-300 opacity-40 z-10 pointer-events-none" style={{ left: `calc(320px + ${pos.left})` }} title={w.description}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl" title={w.description}>{getWeatherIcon(w.type)}</div>
              </div>
            );
          })}

          {tasks.map((task)=>{
            const position = getTaskPosition(task);
            const baselinePosition = showBaseline ? getTaskPosition({ startDate: task.baselineStart, endDate: task.baselineEnd }) : null;
            const riskColors = getRiskColor(task.riskScore);
            return (
              <div key={task.id} className="flex border-b border-gray-200 hover:bg-gray-50 transition group relative">
                <div className="w-80 p-4 border-r border-gray-200 flex items-center gap-2">
                  <div className="flex-1">
                    <div className="font-medium text-sm flex items-center gap-2">
                      {task.name}
                      {task.critical && showCriticalPath && (<span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Critical</span>)}
                      {showRiskOverlay && (task.riskScore??0)>0 && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${riskColors.bg} ${riskColors.text} flex items-center gap-1`}><AlertTriangle className="w-3 h-3"/>Risk: {task.riskScore}/10</span>
                      )}
                      {showWeatherImpact && task.weatherImpact && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700" title={task.weatherImpact.description}>🌧️ +{task.weatherImpact.delay}d</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-2"><Users className="w-3 h-3"/>{task.assignee}</div>
                  </div>
                  {autoScheduleEnabled && task.dependencies.length>0 && (
                    <button onClick={()=>handleTaskDateChange(task.id)} className="p-1 hover:bg-purple-100 rounded opacity-0 group-hover:opacity-100 transition" title="Simulate delay"><Calendar className="w-4 h-4 text-purple-600"/></button>
                  )}
                </div>

                <div className="flex-1 relative p-2">
                  {showBaseline && baselinePosition && (<div className="absolute top-5 h-2 bg-gray-300 opacity-50 rounded" style={baselinePosition} title="Baseline"/>) }
                  <div className={`absolute top-2 h-8 rounded-lg flex items-center justify-between px-2 text-xs font-medium transition-all cursor-move ${task.status==='completed'?'bg-green-500 text-white': task.status==='in-progress'?'bg-blue-500 text-white': task.critical && showCriticalPath ? 'bg-red-500 text-white':'bg-gray-300 text-gray-700'}`} style={position} onClick={()=>setSelectedTask(task)} draggable onDragStart={()=>setDraggedTask(task)} onDragEnd={()=>setDraggedTask(null)}>
                    <span className="truncate">{task.progress}%</span>
                    {task.status==='in-progress' && (
                      <div className="w-full h-1 bg-white/30 rounded-full absolute bottom-1 left-0 right-0 mx-2"><div className="h-1 bg-white rounded-full" style={{ width: `${task.progress}%` }} /></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {viewMode==='resource' && (
        <div className="space-y-6 p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contractors.map(c=> {
              const active = tasks.filter(t=>t.assigneeId===c.id && t.status!=='completed');
              const workload = active.reduce((acc,t)=> acc + (100 - t.progress), 0);
              const width = Math.min(workload, 100);
              return (
                <div key={c.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor:c.color }}>{c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                    <div className="flex-1"><div className="font-semibold text-sm">{c.name}</div><div className="text-xs text-gray-500">{active.length} active tasks</div></div>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1"><span className="text-gray-600">Workload</span><span className={`${workload>300?'text-red-600': workload>200?'text-yellow-600':'text-green-600'} font-medium`}>{Math.round(workload)}%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2"><div className={`${workload>300?'bg-red-500': workload>200?'bg-yellow-500':'bg-green-500'} h-2 rounded-full transition-all`} style={{ width: `${width}%` }} /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewMode==='budget' && (
        <div className="space-y-6 p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <BudgetTile title="Total Budget" value={`£${(project.totalBudget/1_000_000).toFixed(2)}M`} icon={<DollarSign className="w-5 h-5 text-blue-600"/>} sub="Contract value"/>
            <BudgetTile title="Spent to Date" value={`£${(project.spentBudget/1_000_000).toFixed(2)}M`} icon={<TrendingUp className="w-5 h-5 text-green-600"/>} variance={project.spentBudget - (project.totalBudget * (project.progress/100))} />
            <BudgetTile title="Forecast at Completion" value={`£${(project.forecastBudget/1_000_000).toFixed(2)}M`} icon={<BarChart2 className="w-5 h-5 text-purple-600"/>} forecastDelta={project.forecastBudget - project.totalBudget} base={project.totalBudget} />
          </div>
        </div>
      )}

      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6 border-b border-gray-200"><h3 className="text-xl font-semibold">Export Project Timeline</h3></div>
            <div className="p-6 space-y-4">Choose format in a future version…</div>
            <div className="p-6 border-t border-gray-200 flex gap-3"><button onClick={()=>setShowExportModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">Close</button></div>
          </div>
        </div>
      )}

      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200"><h3 className="text-xl font-semibold">Auto-schedule changes</h3><p className="text-sm text-gray-600 mt-1">Simulated 3-day delay on a predecessor. Review suggested shifts.</p></div>
            <div className="p-6 max-h-[60vh] overflow-auto">
              <table className="w-full text-sm"><thead><tr className="text-left text-gray-600"><th className="py-2 pr-3">Task</th><th className="py-2 pr-3">Old</th><th className="py-2 pr-3">New</th><th className="py-2">Δ days</th></tr></thead><tbody>
                {schedulingChanges.map(c=> (
                  <tr key={c.taskId} className="border-t"><td className="py-2 pr-3">{c.taskName}</td><td className="py-2 pr-3">{c.oldStart.toLocaleDateString('en-GB')} → {c.oldEnd.toLocaleDateString('en-GB')}</td><td className="py-2 pr-3">{c.newStart.toLocaleDateString('en-GB')} → {c.newEnd.toLocaleDateString('en-GB')}</td><td className="py-2">{c.daysShifted}</td></tr>
                ))}
              </tbody></table>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3"><button onClick={()=>setShowScheduleModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">Close</button><button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Apply Changes</button></div>
          </div>
        </div>
      )}

      {selectedTask && (
        <div className="fixed right-4 bottom-4 w-96 bg-white border border-gray-200 rounded-xl shadow-xl">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="font-semibold">{selectedTask.name}</div>
            <button className="text-gray-500 hover:text-gray-900" onClick={()=>setSelectedTask(null)}>×</button>
          </div>
          <div className="p-4 text-sm space-y-2">
            <div><span className="text-gray-600">Assignee:</span> {selectedTask.assignee}</div>
            <div><span className="text-gray-600">Dates:</span> {selectedTask.startDate.toLocaleDateString('en-GB')} – {selectedTask.endDate.toLocaleDateString('en-GB')}</div>
            <div><span className="text-gray-600">Progress:</span> {selectedTask.progress}%</div>
            {selectedTask.riskScore!=null && (<div><span className="text-gray-600">Risk:</span> {selectedTask.riskScore}/10</div>)}
          </div>
        </div>
      )}
    </div>
  );
};

const BudgetTile: React.FC<{title:string; value:string; icon:React.ReactNode; sub?:string; variance?:number; forecastDelta?:number; base?:number}> = ({title,value,icon,sub,variance,forecastDelta,base}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
    <div className="flex items-center justify-between mb-2"><span className="text-gray-600 text-sm">{title}</span>{icon}</div>
    <div className="text-3xl font-bold">{value}</div>
    {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    {typeof variance==='number' && (
      <div className={`text-xs mt-1 flex items-center gap-1 ${variance>0?'text-red-600':'text-green-600'}`}>{variance>0?'+':''}£{Math.abs(variance/1_000).toFixed(0)}k vs earned value</div>
    )}
    {typeof forecastDelta==='number' && typeof base==='number' && (
      <div className={`text-xs mt-1 ${forecastDelta>0?'text-red-600':'text-green-600'}`}>{forecastDelta>0?'+':''}{((forecastDelta/base)*100).toFixed(1)}% vs budget</div>
    )}
  </div>
);
