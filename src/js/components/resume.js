import { useState, forwardRef, useImperativeHandle  } from 'react'
import PropTypes from "prop-types";

const Resume = forwardRef((props, ref) => {
	Resume.propTypes = {
        unlock: PropTypes.func
    };

    const [unlocked, setUnlocked] = useState(0)

    useImperativeHandle(ref, () => ({

        unlock(suit) {
            console.log("Unlock " + suit);
            setUnlocked(1);
        }
    
      }));


    return ( 
        <div className="resume">
            <div className="personal-details">personal-details</div>
            <div className="profile" unlocked={unlocked}>profile</div>
            <div className="experience">experience</div>
            <div className="education">education</div>
            <div className="skills">skills</div>
            <div className="languajes">languajes</div>
            <div className="soft-skills">soft-skills</div>
        </div>
     );
});
 
export default Resume;