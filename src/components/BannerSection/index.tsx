import { ButtonDefault } from "../fragments/ButtonDefault"
import banner from "../../assets/banner-img.png";
import styles from "./bannerSection.module.css"

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.heartyWelcome}>
                <span className="font-label-1">KRPLAB</span>
                <h1 className="font-title-1">Bem vindo ao meu portfólio</h1>
                <p className="font-paragraph-1">
                    "Apenas busquem conhecimento!" - ET BILÚ
                </p>
                <ButtonDefault textButton={"Saiba Mais"} />
            </div>
            <div className={styles.heartyImg}>
                <img src={banner}></img>
            </div>
        </section>
    )
}