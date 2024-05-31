import ProjectCard from "../components/ProjectCard"
import SkillCard from "../components/SkillCard"

const SkillsAndProjects = () => {
  return (
    <div>

      <div className="mt-5">
        <SkillCard />
      </div>

      <div className="mt-10">
        <ProjectCard />
      </div>

    </div>
  )
}

export default SkillsAndProjects