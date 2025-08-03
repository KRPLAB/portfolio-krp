import { ListItemsTech } from "../fragments/ListItemsTech/index";
import { technologies } from "../../data/technologies";
import styles from "./techSection.module.css";

export const TechSection = () => {
    return (
        <section className={styles.techSection} id="tech">
            <h2 className="font-title-2">Tecnologias</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <ListItemsTech key={index} addressImg={tech.img} labelImg={tech.name} classLi={styles.techCard} />
                ))}
            </ul>
        </section>
    )
}