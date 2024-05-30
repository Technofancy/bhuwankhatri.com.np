
const ProjectCard = () => {
    return (
        <div>
            <h2 className="flex justify-center text-white text-xl sm:text-2xl md:text-3xl">Projects</h2>

            <div className="grid items-center justify-center">

                <div className="flex flex-col w-[350px] h-fit bg-slate-700 mt-3 rounded-lg shadow-lg text-white">

                    <h3 className=" mx-1">This Website</h3>

                    <p className="text-slate-950 mx-2 text-xs">Date: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed impedit voluptates saepe. Voluptas quaerat quibusdam facilis, dolores vel nam fugiat! </p>

                    <button className="text-xs hover:px-2 hover:bg-slate-900 p-1 bg-slate-800 mt-1 mr-1 rounded-md self-end">GoTo Project</button>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard