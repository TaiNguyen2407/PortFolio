import { useEffect, useState } from "react";
import { getAllGithubRepos } from "../../api/api";

const Projects = () => {
    const [repos, setRepos] = useState([]);

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