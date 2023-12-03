import { useEffect, useState } from "react";
import { getAllGithubRepos } from "../../api/api";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { Repo } from "../../components/ProjectItem/type";
import "./Projects.css"

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    const fetchAllGithubRepos = async () => {
        try {
          const githubRepos = await getAllGithubRepos(); 
          setRepos(githubRepos);
        } catch (error) {
          console.error('Error fetching GitHub repos:', error);
        }
    };

    useEffect(() => {
        fetchAllGithubRepos()
    },[]);


    return (
        <div className="project-page">
            <h2>My Projects</h2>
            <div className="project-list">
            {repos.map((repo) => (
                <ProjectItem key={repo.id} repo={repo} />
            ))}
            </div>
        </div>
    )
}

export default Projects;