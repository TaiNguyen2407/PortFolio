import { useEffect, useState } from "react"
import { getGithubApi } from "../../api/api"
import LanguageTag from "../LanguageTag/LanguageTag"
import "./ProjectItem.css"
import { Repo } from "./type"

interface ProjectItemProps {
    repo: Repo
}

const ProjectItem = ({repo}: ProjectItemProps) => {
    const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([]);

    const getProgrammingLanguagesFromRepo = async () => {
        try {
            const allProgrammingLanguagesFromRepo = await getGithubApi( `repos/TaiNguyen2407/${repo.name}/languages`);
            setProgrammingLanguages(Object.keys(allProgrammingLanguagesFromRepo));
        } catch (error) {
            console.error('Error fetching programming languges in repo:', error);
        }
        
    }

    useEffect(() => {
        getProgrammingLanguagesFromRepo();
    }, []);

    return (
        <div className="project-item">
            <h3 className="project-item-name">{repo.name}</h3>
            <div className="project-item-languages">
            {programmingLanguages.map((language) => (
                <LanguageTag language={language} key={language} />
            ))}
            </div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-item-link">
                View on GitHub
            </a>
        </div>
    )
}

export default ProjectItem;