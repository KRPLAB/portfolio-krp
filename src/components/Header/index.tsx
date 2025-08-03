import { ButtonDefault } from "../fragments/ButtonDefault";
import { ListItemsMenu } from "../fragments/ListItemsMenu";
import portfolio from "../../assets/portfolio.png";
import styles from "./headerStyle.module.css"

export const Header = () => {
    return (
        <header className={styles.headerSection}>
            <img src={portfolio} alt="logo portfolio"></img>
            <ul>
                <ListItemsMenu link="#about" text="Sobre" />
                <ListItemsMenu link="#tech" text="Stack" />
                <ListItemsMenu link="#projects" text="Projetos" />
            </ul>
            <ButtonDefault textButton={"Contato"} link="#contact" />
        </header>
    )
}