import pdfIcon from "../../assets/pdf-icon.svg"
import styles from "./paper.module.css";

export const PapersSection = () => {
    const papers = import.meta.env.VITE_USER_PAPER;

    return (
        <section className={styles.papersSection}>
            <h2 className="font-title-2">Publicações</h2>

            <ul className={styles.papers__ul}>
                {papers.map((paper, index) => (
                    <li key={index} className={styles.paperCard}>
                        <div className={styles.paperCardAuthors}>
                            <p className="font-text-1">{paper.authors}, {paper.supervisors}. {paper.year}</p>
                            <p>{paper.title}</p>
                        </div>
                        <div className={styles.paperCardMore}>
                            <img className={styles.paperPDF} src={pdfIcon} alt="icone pdf" />
                            <a className="font-link-1" href={paper.path} target="_blank" rel="noopener noreferrer">
                                Saiba mais
                            </a>
                        </div>

                    </li>
                )
                )}
            </ul>
        </section>
    )
}