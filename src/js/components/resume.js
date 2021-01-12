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
    const [unlockLanguages, setUnlockLanguages] = useState(0)
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
                case "languages":
                    setUnlockLanguages(1);
                    break;
                case "soft-skills":
                    setUnlockSoftSkills(1);
                    break;
                default:
                    break;
            }
        }
    }));

    /*const personalDetails = (
        <div>
            <h3>Contact</h3>
            linkedin: https://www.linkedin.com/in/diegoec/
            email: diego.ezquerro@gmail.com
            Phone: +34 625 848 735
            Skype: diego.ezquerro.calvo
            Lugar: Zaragoza, Spain
        </div>
    );*/

    const profile = (
        <div>
            <h3>Profile</h3>
            <p>After more than ten years working in software development I can contribute with my experience to any kind of proyect. I have also finished recently a Fullstack Developer course in a programming Bootcamp and I have obtained knowledge in HTML5, CSS, Javascript, React, Python, Flask, SQL, Git, Bootstrap. I am looking for an opportunity that allows me to continue my development and grow in the programming sector.</p>
        </div>
    );

    const experience = (
        <div>
            <h3>Experience</h3>
            <p>After more than ten years working in software development I can contribute with my experience to any kind of proyect. I have also finished recently a Fullstack Developer course in a programming Bootcamp and I have obtained knowledge in HTML5, CSS, Javascript, React, Python, Flask, SQL, Git, Bootstrap. I am looking for an opportunity that allows me to continue my development and grow in the programming sector.</p>
        </div>
    );

    const education = (
        <div>
            <h3>Education</h3>
            <p>4Geeks Academy</p>
            <p>IES Pablo Serrano</p>
        </div>
    );

    const skills = (
        <div>
            <h3>Skills</h3>
            <p>4Geeks Academy</p>
            <p>IES Pablo Serrano</p>
            <p>4Geeks Academy</p>
            <p>IES Pablo Serrano</p>
        </div>
    );

    const languages = (
        <div>
            <h3>Languages</h3>
            <p>4Geeks Academy</p>
            <p>IES Pablo Serrano</p>
        </div>
    );

    const softSkills = (
        <div>
            <h3>Soft Skills</h3>
            <p>4Geeks Academy</p>
            <p>IES Pablo Serrano</p>
        </div>
    );

    return ( 
        <div className="resume">
            {/*<div className="personal-details">{personalDetails}</div>*/}
            <div className="profile" unlocked={unlockProfile}>{profile}</div>
            <div className="experience" unlocked={unlockExperience}>{experience}</div>
            <div className="education" unlocked={unlockEducation}>{education}</div>
            <div className="skills" unlocked={unlockSkills}>{skills}</div>
            <div className="languages" unlocked={unlockLanguages}>{languages}</div>
            <div className="soft-skills" unlocked={unlockSoftSkills}>{softSkills}</div>
        </div>
     );
});
 
export default Resume;