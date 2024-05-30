
const SkillCard = () => {
  return (
    <div className="my-3">
      <h2 className="flex justify-center text-white text-xl sm:text-2xl md:text-3xl">Skills</h2>

      <div className="grid items-center justify-center">
        <div className="flex justify-between w-[350px] h-[50px] bg-slate-700 mt-3 rounded-lg shadow-lg text-white">

          <h3 className=" mx-1">MERN Stack</h3>

          <p className="text-slate-950 text-xs self-end hover:text-green-500">@ Mind Risers Consortium</p>

          <button className="text-xs hover:px-2 hover:bg-slate-900 p-1 bg-slate-800 mt-1 mr-1 rounded-md self-start">Related Project</button>

        </div>
      </div>

    </div>
  )
}

export default SkillCard;