import "./TechStackIcon.css"

interface TechStackIconProps {
    imgUrl: string;
    name: string;
}


const TechStackIcon = ({imgUrl, name} : TechStackIconProps) => {
    return (
        <div className="tech-stack-icon-container">
            <div className="tech-stack-icon-image">
                <img src={imgUrl} width="64px" height="64px" alt="/" />
            </div>
            <div className="tech-stack-icon-text">
                <h3>{name}</h3>
            </div>
        </div>
        
    );
}

export default TechStackIcon;