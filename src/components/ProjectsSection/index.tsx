import { ProjectCardRequest } from "./ProjectCardRequest/index.jsx"
import styles from "./projectsSection.module.css"

export const ProjectsSection = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <h2 className="font-title-2">Projetos</h2>
            <ProjectCardRequest />
        </section>
    )
}