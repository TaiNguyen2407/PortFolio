import "./ProjectItem.css"
import { Repo } from "./type"

interface ProjectItemProps {
    repo: Repo
}

const ProjectItem = ({repo}: ProjectItemProps) => {
    console.log(repo.html_url);
    
    return (
        <div className="project-item">
            <h3 className="project-item-name">{repo.name}</h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-item-link">
                View on GitHub
            </a>
        </div>
    )
}

export default ProjectItem;