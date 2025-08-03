import { useEffect, useState } from "react";
import { projects } from "../../../data/projects";
import giticon from "../../../assets/git-icon.png";
import styles from "../projectsSection.module.css";

/* Neste código a função "ProjectCardRequest" vai exportar os repositórios do usuário com nome
*  contido na const "username_request" definida no arquivo user_request.js por meio de requisição da API do GitHub;
*  Para isso é verificado se o array "repos" possui algum item. Se ele não tiver itens (ou seja, 
*  a requisição à API falhar), então usamos o array "projects" importado para renderizar os projetos em seu lugar. */
export const ProjectCardRequest = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        try {
            /* construindo o url da API */
            const apiUrl = import.meta.env.VITE_API_BASE_URL;
            const username_request = import.meta.env.VITE_USERNAME_REQUEST;

            const url = `${apiUrl}/${username_request}/repos`;

            /* fazendo a requisicao da API */
            fetch(url)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        console.error('Erro ao obter os repositórios do usuário:', response.status);
                        return [];
                    }
                })
                .then((reposData) => {
                    setRepos(reposData);
                })
                .catch((error) => {
                    console.error('Erro ao buscar os repositórios do usuário:', error);
                });
        } catch (error) {
            console.error('Erro ao processar os dados do usuário:', error);
        }
    }, []);

    return (
        <div>
            <ul className={styles.projects__ul}>
                {repos.length > 0 ? (
                    repos.map((repo) => (
                        <li key={repo.id} className={styles.projectCard}>
                            <div className={styles.projectCardHeader}>
                                <h3 className="font-title-3">{repo.name}</h3>
                                <img src={giticon} alt="GitHub Icon"></img>
                            </div>
                            <p className="font-paragraph-1">{repo.description ? repo.description : 'Repositório sem descrição'}</p>
                            <a className="font-link-1" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                Saiba mais
                            </a>
                        </li>
                    ))
                ) : (
                    projects.map((project, index) => (
                        <li key={index} className={styles.projectCard}>
                            <div className={styles.projectCardHeader}>
                                <h3 className="font-title-3">{project.name}</h3>
                                <img src={giticon} alt="GitHub Icon"></img>
                            </div>
                            <p className="font-paragraph-1">{project.description}</p>
                            <a className="font-link-1" href="#" target="_blank" rel="noopener noreferrer">
                                Saiba mais
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};