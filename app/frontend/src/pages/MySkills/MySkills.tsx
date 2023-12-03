import React from 'react';
import TechStackIcon from '../../components/TechStackIcon/TechStackIcon';
import './MySkills.css'; 
import { TechStackIcons } from '../../constants';


const MySkills: React.FC = () => {
  return (
      <div className="grid-container">
        {TechStackIcons.map((icon) => <TechStackIcon imgUrl={icon.imgUrl} name={icon.name} />)}
      </div>
  );
};

export default MySkills;
