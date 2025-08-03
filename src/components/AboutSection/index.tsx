import styles from "./aboutSection.module.css"
import profile from "../../assets/avatar.jpg";

export const AboutSection = () => {
    return (
        <section className={styles.aboutSection} id="about">

            <div className={styles.aboutTitle}>
                <h2 className="font-title-2">Sobre mim</h2>
                <div id={styles.profile}>
                    <img className={`${styles.avatar} ${styles.avatarCircle}`} src={profile} alt="Retrato de Kauan Paulino" />
                </div>
            </div>

            <div className={styles.aboutText}>
                <p className="font-paragraph-1">
                    Kauan Paulino is an associate student at DEPARTAMENTO DE FISICA-UFPR since 2018. His research in
                    computational physics seeks to demonstrate the accuracy of the <a className="font-link-1" href="https://en.wikipedia.org/wiki/Density_functional_theory" target="_blank" rel="noopener">DFT (Density functional theory)</a> method to calculate the properties of ferroelectric materials.
                </p>
                <p className="font-paragraph-1">
                    In addition to physics, he also has a deep love for programming and always seeks to study computational
                    problems and algorithm optimization.
                </p>
            </div>

        </section>
    );
};