import { ListItemsMenu } from "../fragments/ListItemsMenu";
import { user_request } from "../../data/user_request"
import styles from "./footerStyle.module.css";
import git from "../../assets/github-icon.png";
import lkdn from "../../assets/linkedin-icon.png";
import whats from "../../assets/whatsapp-icon.png";

export const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerDiv}>
                <h2 className="font-title-2" id="contact">Contato</h2>
                <ul>
                    <ListItemsMenu link="https://github.com/KRPLAB">
                        <img src={git} alt="github ícone"></img>
                    </ListItemsMenu>

                    <ListItemsMenu link="https://www.linkedin.com/in/kauan-r-paulino/">
                        <img src={lkdn} alt="linkedin ícone"></img>
                    </ListItemsMenu>

                    <ListItemsMenu link="https://wa.me/5541995474968">
                        <img src={whats} alt="whatsapp ícone"></img>
                    </ListItemsMenu>
                </ul>
            </div>

            <div className={styles.footerAuthor}>
                <span className="font-paragraph-1">
                    Todos os direitos reservados -&nbsp;
                </span>
                <span className="font-paragraph-1">
                    {user_request}
                </span>
            </div>
        </footer>
    )
}