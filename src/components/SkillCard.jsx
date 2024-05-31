const SkillCard = () => {
  const skills = [
    {
      title: 'MERN Stack',
      institute: 'Mind Risers Consortium',
    },
    {
      title: 'AWS CCP',
      institute: 'Unlimited Technology'
    }
  ]

  return (
    <div className="p-6">
      <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl mb-8">Skills</h2>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 place-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col w-full max-w-md bg-slate-700 rounded-lg shadow-lg p-6 text-white transform transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <p className="text-slate-300 mb-4">@ {skill.institute}</p>
            <button className="self-end px-4 py-2 bg-slate-800 hover:bg-slate-900 text-xs rounded-md transition-colors">
              Related Project
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard;
