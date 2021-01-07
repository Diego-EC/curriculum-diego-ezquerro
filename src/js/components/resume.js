import { useState, forwardRef, useImperativeHandle  } from 'react'
import PropTypes from "prop-types";

// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
const Resume = forwardRef((props, ref) => {
	Resume.propTypes = {
        unlock: PropTypes.func
    };

    const [unlockProfile, setUnlockProfile] = useState(0)
    const [unlockExperience, setUnlockExperience] = useState(0)
    const [unlockEducation, setUnlockEducation] = useState(0)
    const [unlockSkills, setUnlockSkills] = useState(0)
    const [unlockLanguajes, setUnlockLanguajes] = useState(0)
    const [unlockSoftSkills, setUnlockSoftSkills] = useState(0)

    useImperativeHandle(ref, () => ({

        unlock(suit) {
            switch (suit) {
                case "profile":
                    setUnlockProfile(1);
                    break;
                case "experience":
                    setUnlockExperience(1);
                    break;
                case "education":
                    setUnlockEducation(1);
                    break;
                case "skills":
                    setUnlockSkills(1);
                    break;
                case "languajes":
                    setUnlockLanguajes(1);
                    break;
                case "soft-skills":
                    setUnlockSoftSkills(1);
                    break;
                default:
                    break;
            }
        }
    
      }));


    return ( 
        <div className="resume">
            <div className="personal-details">personal-details</div>
            <div className="profile" unlocked={unlockProfile}>profile</div>
            <div className="experience" unlocked={unlockExperience}>experience</div>
            <div className="education" unlocked={unlockEducation}>education</div>
            <div className="skills" unlocked={unlockSkills}>skills</div>
            <div className="languajes" unlocked={unlockLanguajes}>languajes</div>
            <div className="soft-skills" unlocked={unlockSoftSkills}>soft-skills</div>
        </div>
     );
});
 
export default Resume;