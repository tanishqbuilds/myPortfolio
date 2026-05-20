import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaMicrosoft, FaJava, FaLanguage } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiPhp, SiMysql, SiPython, SiTypescript, SiNextdotjs, SiFirebase, SiRedux, SiThreedotjs, SiCplusplus, SiC, SiFastapi, SiGooglecolab } from 'react-icons/si';
import LangflowLogo from '../assets/langflow.png';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeAITool, setActiveAITool] = useState('antigravity');

  const categories = [
    { id: 'All', name: 'All Stack' },
    { id: 'Frontend', name: 'Frontend' },
    { id: 'Backend', name: 'Backend' },
    { id: 'DevOps', name: 'Cloud & DevOps' },
    { id: 'AI_ML', name: 'AI Engineering' },
    { id: 'AI_Productivity', name: 'AI Co-Pilots' },
    { id: 'Programming', name: 'Languages' },
    { id: 'Languages', name: 'Spoken' }
  ];

  // Detailed AI Productivity tools data
  const aiTools = {
    antigravity: {
      name: 'Antigravity AI',
      subtitle: 'Coding & Architecture Co-pilot',
      creator: 'Google DeepMind Team',
      synergy: 98,
      boost: '3.5x Velocity Boost',
      color: 'from-cyan-400 to-blue-500',
      shadowColor: 'rgba(6, 182, 212, 0.4)',
      description: 'The ultimate coding and pair programming system. I leverage Antigravity for writing advanced codebase expansions, high-fidelity UI components, refactoring dense code blocks, and keeping my development architecture highly scalable and clean.',
      details: [
        'Automated multi-file edits & refactoring',
        'Deep semantic codebase integration',
        'Direct context-aware code synthesis'
      ],
      icon: (
        <svg className="w-12 h-12 text-cyan-400" viewBox="0 0 100 100" fill="currentColor">
          <motion.path 
            d="M50 15 L85 75 L15 75 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinejoin="round"
            animate={{ 
              y: [0, -6, 0],
              filter: ["drop-shadow(0px 0px 4px rgba(6,182,212,0.5))", "drop-shadow(0px 0px 12px rgba(6,182,212,0.9))", "drop-shadow(0px 0px 4px rgba(6,182,212,0.5))"]
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="50" cy="50" r="10" 
            fill="currentColor"
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <line x1="50" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="4" strokeDasharray="4 4" />
        </svg>
      )
    },
    stitch: {
      name: 'Stitch MCP',
      subtitle: 'UI/UX & Design Systems Engine',
      creator: 'Creative Suite Integrations',
      synergy: 94,
      boost: 'Premium UI Output',
      color: 'from-fuchsia-400 to-pink-500',
      shadowColor: 'rgba(217, 70, 239, 0.4)',
      description: 'Stitch is an invaluable asset in translating pure wireframes and visual design systems into modular, beautiful React components. It creates cohesive layouts, enforces strict design consistency, and delivers interactive micro-animations with minimal overhead.',
      details: [
        'Vibrant color palette generation & binding',
        'Dynamic layout transitions',
        'Component hierarchy generation'
      ],
      icon: (
        <svg className="w-12 h-12 text-fuchsia-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <motion.rect 
            x="20" y="20" width="25" height="25" rx="4"
            animate={{ rotate: [0, 90, 90, 0] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.25, 0.5, 1], ease: "easeInOut" }}
          />
          <motion.rect 
            x="55" y="20" width="25" height="25" rx="4"
            animate={{ rotate: [0, 0, 90, 90, 0] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" }}
          />
          <motion.rect 
            x="20" y="55" width="25" height="25" rx="4"
            animate={{ rotate: [0, -90, -90, 0] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.25, 0.5, 1], ease: "easeInOut" }}
          />
          <motion.rect 
            x="55" y="55" width="25" height="25" rx="4"
            animate={{ rotate: [0, 0, -90, -90, 0] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" }}
          />
          <path d="M45 32.5 H55 M32.5 45 V55 M55 67.5 H45 M67.5 55 V45" strokeWidth="4" strokeDasharray="2 2" />
        </svg>
      )
    },
    claude: {
      name: 'Claude 3.5 Sonnet',
      subtitle: 'Complex Algorithms & Logic',
      creator: 'Anthropic Research',
      synergy: 95,
      boost: 'Zero-Error Algorithms',
      color: 'from-amber-500 to-orange-600',
      shadowColor: 'rgba(245, 158, 11, 0.4)',
      description: 'My core logic co-pilot. When implementing highly complex mathematical computations, deeply nested data models, or strict TypeScript interfaces, Claude provides precise, logical structures that dramatically reduce development friction.',
      details: [
        'Advanced state management workflows',
        'Complex algorithmic optimization',
        'Exhaustive debugging of complex edge cases'
      ],
      icon: (
        <svg className="w-12 h-12 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <motion.path 
            d="M50 15 L20 40 L35 85 L65 85 L80 40 Z" 
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <path d="M50 15 V85 M20 40 H80 M35 85 L50 15 L65 85" strokeWidth="3" opacity="0.4" />
        </svg>
      )
    },
    gemini: {
      name: 'Google Gemini Pro',
      subtitle: 'Multimodal Architect & Automation',
      creator: 'Google Cloud Platform',
      synergy: 92,
      boost: 'Full Spectrum Integration',
      color: 'from-indigo-400 to-violet-600',
      shadowColor: 'rgba(124, 58, 237, 0.4)',
      description: 'The general-purpose automation powerhouse. I utilize Gemini for swift Python scripts, processing raw mock data pipelines, formatting bulky tables, orchestrating CLI scripts, and reasoning across massive contexts.',
      details: [
        'Rapid developer scripts & scraper automation',
        'Large context analysis & summaries',
        'Intelligent REST API integration blueprints'
      ],
      icon: (
        <svg className="w-12 h-12 text-indigo-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
          <motion.path 
            d="M50 10 C50 35 35 50 10 50 C35 50 50 65 50 90 C50 65 65 50 90 50 C65 50 50 35 50 10 Z" 
            fill="currentColor"
            fillOpacity="0.1"
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.path 
            d="M75 20 C75 27 70 30 65 30 C70 30 75 33 75 40 C75 33 80 30 85 30 C80 30 75 27 75 20 Z" 
            fill="currentColor" 
            opacity="0.8"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
        </svg>
      )
    },
    chatgpt: {
      name: 'ChatGPT & DALL-E',
      subtitle: 'Asset Generation & Copywriting',
      creator: 'OpenAI Research',
      synergy: 88,
      boost: 'Infinite Visual Assets',
      color: 'from-teal-400 to-emerald-600',
      shadowColor: 'rgba(20, 184, 166, 0.4)',
      description: 'A key helper in content generation. I use ChatGPT and DALL-E to brainstorm engaging copy, translate dry text into beautiful visual summaries, generate placeholder graphics, and layout narrative components.',
      details: [
        'High-fidelity custom visual image prompts',
        'SEO-optimized metadata copy drafting',
        'Comprehensive markdown structure formatting'
      ],
      icon: (
        <svg className="w-12 h-12 text-teal-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <motion.path 
            d="M50 50 A20 20 0 1 0 50 10 A20 20 0 1 0 50 50" 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
          <motion.path 
            d="M50 50 A20 20 0 1 0 85 50 A20 20 0 1 0 50 50" 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
      )
    },
    perplexity: {
      name: 'Perplexity AI',
      subtitle: 'Technical Research Engine',
      creator: 'Perplexity Labs',
      synergy: 90,
      boost: 'Zero Research Latency',
      color: 'from-emerald-400 to-teal-500',
      shadowColor: 'rgba(52, 211, 153, 0.4)',
      description: 'My primary search engine. Perplexity saves hours of scrolling by directly synthesizing exact code snippets, providing step-by-step installation guides for new dependencies, and highlighting community consensus on libraries.',
      details: [
        'Instant package API discovery & updates',
        'Comparative tooling stack evaluation',
        'Error resolution code summaries'
      ],
      icon: (
        <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <motion.circle 
            cx="50" cy="50" r="35" 
            animate={{ strokeWidth: [4, 7, 4] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="50" cy="50" r="20" 
            animate={{ strokeWidth: [6, 3, 6] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
      )
    }
  };

  const skillCategories = [
    {
      id: 'Frontend',
      name: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, level: 95, color: '#f97316' },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, level: 90, color: '#3b82f6' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 92, color: '#eab308' },
        { name: 'React.js', icon: <FaReact className="text-blue-400 animate-spin-slow" />, level: 88, color: '#60a5fa' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 75, color: '#2563eb' },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 70, color: '#ffffff' },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 80, color: '#a855f7' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 85, color: '#2dd4bf' },
        { name: 'Three.js', icon: <SiThreedotjs className="text-white" />, level: 30, color: '#aaaaaa' },
        { name: 'Figma', icon: <FaFigma className="text-purple-400" />, level: 45, color: '#c084fc' },
      ],
    },
    {
      id: 'Backend',
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85, color: '#22c55e' },
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 82, color: '#9ca3af' },
        { name: 'Python', icon: <SiPython className="text-blue-500" />, level: 80, color: '#3b82f6' },
        { name: 'FastAPI', icon: <SiFastapi className="text-green-400" />, level: 75, color: '#4ade80' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 80, color: '#16a34a' },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, level: 75, color: '#60a5fa' },
        { name: 'PHP', icon: <SiPhp className="text-purple-500" />, level: 70, color: '#a855f7' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 78, color: '#eab308' },
      ],
    },
    {
      id: 'DevOps',
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', icon: <FaMicrosoft className="text-blue-600" />, level: 80, color: '#2563eb' },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 40, color: '#3b82f6' },
        { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 90, color: '#ef4444' },
      ],
    },
    {
      id: 'AI_ML',
      name: 'AI Engineering',
      skills: [
        { name: 'Google Colab', icon: <SiGooglecolab className="text-orange-500" />, level: 80, color: '#f97316' },
        { name: 'Langflow', icon: <img src={LangflowLogo} alt="Langflow" className="w-6 h-6 object-contain" />, level: 90, color: '#f43f5e' },
        { name: 'TensorFlow', icon: <div className="w-6 h-6 bg-orange-600 rounded-sm flex items-center justify-center text-white text-[10px] font-bold">TF</div>, level: 40, color: '#ea580c' },
      ],
    },
    {
      id: 'Programming',
      name: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC className="text-blue-500" />, level: 100, color: '#3b82f6' },
        { name: 'C++', icon: <SiCplusplus className="text-red-500" />, level: 90, color: '#ef4444' },
        { name: 'Java', icon: <FaJava className="text-orange-500" />, level: 90, color: '#f97316' },
      ],
    },
    {
      id: 'Languages',
      name: 'Languages Spoken',
      skills: [
        { name: 'English', icon: <span className="text-2xl">🇺🇸</span>, level: 85, color: '#ffffff' },
        { name: 'Marathi', icon: <span className="text-2xl">🇮🇳</span>, level: 100, color: '#ff9933' },
        { name: 'Hindi', icon: <span className="text-2xl">🇮🇳</span>, level: 75, color: '#138808' },
        { name: 'French', icon: <span className="text-2xl">🇫🇷</span>, level: 30, color: '#002244' },
      ],
    },
  ];

  // Helper to compile filtered skills list
  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      // Flatten all skills but skip Languages category for visual density
      return skillCategories
        .filter(cat => cat.id !== 'Languages')
        .flatMap(cat => cat.skills);
    }
    const cat = skillCategories.find(c => c.id === activeCategory);
    return cat ? cat.skills : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <div className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#0c0c0d]">
      <Helmet>
        <title>Skills & AI Productivity Stack | Tanishq Kulkarni</title>
        <meta name="description" content="Explore Tanishq Kulkarni's modern frontend, backend, and cloud skills combined with an interactive visual breakdown of advanced AI productivity tools." />
        <meta name="keywords" content="Tanishq Kulkarni skills, AI productivity stack, Antigravity AI, Stitch MCP, MERN Developer, Web Developer Mumbai" />
      </Helmet>

      {/* Futuristic glowing backdrop */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00c2ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#00c2ff]/10 text-[#00c2ff] border border-[#00c2ff]/20 px-4 py-1.5 rounded-full text-xs font-mono mb-4 tracking-wider"
          >
            ⚡ SUPERCHARGED BY AI COPILOTS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Capabilities & <span className="bg-gradient-to-r from-[#00c2ff] via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent font-extrabold">Workflow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            A high-efficiency developmental workflow blending cutting-edge full-stack skills with advanced AI automation systems for 10x engineering performance.
          </motion.p>
        </div>

        {/* Dynamic Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                activeCategory === cat.id
                  ? 'text-white border-transparent'
                  : 'text-gray-400 border border-white/[0.05] bg-white/[0.01] hover:text-white hover:border-gray-700'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-[#00c2ff]/40 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.id === 'AI_Productivity' && '🔥'}
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Section Contents */}
        <AnimatePresence mode="wait">
          {activeCategory === 'AI_Productivity' ? (
            /* --- RENDER AI PRODUCTIVITY STACK (DASHBOARD LAYOUT) --- */
            <motion.div
              key="ai-productivity-stack"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Interactive Tools Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(aiTools).map(([key, tool]) => {
                  const isActive = activeAITool === key;
                  return (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => setActiveAITool(key)}
                      className={`relative rounded-2xl p-5 border cursor-pointer transition-all duration-300 flex items-start gap-4 overflow-hidden ${
                        isActive
                          ? `bg-gradient-to-b from-[#161618] to-[#121213] border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.15)]`
                          : 'bg-[#121213] border-white/[0.04] hover:border-white/[0.1] hover:bg-[#151517]'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeAIToolLine"
                          className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 to-fuchsia-400"
                        />
                      )}
                      
                      <div className={`p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] ${isActive ? 'text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'text-gray-400'}`}>
                        {tool.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white tracking-wide truncate">{tool.name}</h3>
                          <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20 shrink-0">
                            {tool.boost}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 font-mono mb-2">{tool.subtitle}</p>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{tool.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Central Synergy Dashboard Info Card */}
              <div className="lg:col-span-5 flex">
                <motion.div
                  key={activeAITool}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-[#121213] rounded-3xl p-8 border border-white/[0.05] flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative glowing gradient circle */}
                  <div className={`absolute -right-24 -top-24 w-64 h-64 bg-gradient-to-br ${aiTools[activeAITool].color} opacity-[0.06] rounded-full blur-[60px]`} />

                  {/* Terminal Grid Panel Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:15px_15px] opacity-30 pointer-events-none" />

                  <div>
                    {/* Panel Header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-b from-[#19191b] to-[#121213] border border-white/[0.08] shadow-lg text-white`}>
                          {aiTools[activeAITool].icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white tracking-wide">{aiTools[activeAITool].name}</h2>
                          <p className="text-xs text-gray-400 font-mono">{aiTools[activeAITool].creator}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-4">
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">CO-PILOT SYNERGY</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-white">{aiTools[activeAITool].synergy}%</span>
                          <span className="text-xs text-green-400 font-mono font-bold">▲ MAX</span>
                        </div>
                      </div>
                      <div className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-4">
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">STABLE IMPACT</p>
                        <span className={`text-sm font-bold bg-gradient-to-r ${aiTools[activeAITool].color} bg-clip-text text-transparent`}>
                          {aiTools[activeAITool].boost}
                        </span>
                      </div>
                    </div>

                    {/* Work description */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1.5">DEVELOPER COMMENTARY</h4>
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                          {aiTools[activeAITool].description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">PRIMARY USE CASES</h4>
                        <ul className="space-y-2">
                          {aiTools[activeAITool].details.map((detail, i) => (
                            <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                              <span className="text-cyan-400 mt-1 shrink-0">◇</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Animated productivity signal */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-green-400 font-mono tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      LIVE CONNECTION ESTABLISHED
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">1.0.8 // NODE_AI</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* --- RENDER STANDARD SKILLS GRID --- */
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {activeCategory === 'All' ? (
                /* Grid for ALL standard skills grouped tightly */
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -4,
                        boxShadow: `0 10px 30px rgba(0, 194, 255, 0.05)`
                      }}
                      className="group bg-[#121213] rounded-2xl p-5 border border-white/[0.04] hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background radial glow */}
                      <div 
                        className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full blur-[30px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
                        style={{ backgroundColor: skill.color }}
                      />

                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="text-3xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <h3 className="text-base font-bold text-white tracking-wide truncate group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Percentage Ring / Glowing Line */}
                      <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-1">
                        <span>PROFICIENCY</span>
                        <span className="text-gray-300 font-bold group-hover:text-cyan-400 transition-colors">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Grouped visual lists by specific category */
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="group bg-[#121213] rounded-3xl p-6 border border-white/[0.04] hover:border-cyan-400/20 transition-all duration-300 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-5">
                          <div className="text-4xl p-3 bg-white/[0.01] rounded-2xl border border-white/[0.03] group-hover:bg-white/[0.02] group-hover:border-cyan-400/20 transition-all">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white tracking-wide">{skill.name}</h3>
                            <p className="text-xs text-gray-500 mt-1 font-mono">STABLE CAPABILITY</p>
                          </div>
                        </div>

                        {/* Circular Progress Gauge */}
                        <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="rgba(255,255,255,0.03)"
                              strokeWidth="4"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke={skill.color || '#00c2ff'}
                              strokeWidth="4"
                              fill="transparent"
                              strokeDasharray={2 * Math.PI * 26}
                              initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                              animate={{ strokeDashoffset: 2 * Math.PI * 26 * (1 - skill.level / 100) }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                          </svg>
                          <span className="absolute text-xs font-bold text-white font-mono">{skill.level}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static Learning Context Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-[#121213] to-[#151517] rounded-3xl p-8 md:p-10 border border-white/[0.04] relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white mb-3">Continuous Architecture Learning</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                As the engineering landscape transitions to highly automated AI workflows, I focus heavily on integrating advanced autonomous agents, scalable Microservices architecture, resilient CI/CD pipelines, and deep system optimizations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0 max-w-sm">
              {['Microservices', 'CI/CD Pipelines', 'TDD & Testing', 'Advanced Prompting', 'Tailwind v4', 'Agentic Workflows'].map((item, index) => (
                <span key={index} className="bg-white/[0.02] border border-white/[0.06] text-gray-300 hover:text-cyan-400 hover:border-cyan-400/20 px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono transition-all">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;