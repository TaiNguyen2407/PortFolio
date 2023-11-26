import React from 'react';
import TechStackIcon from '../../components/TechStackIcon/TechStackIcon';
import './MySkills.css'; // Make sure to adjust the path



const MySkills: React.FC = () => {
  return (
    <div className="grid-container">
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
      <TechStackIcon imgUrl={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />

    </div>
  );
};

export default MySkills;
