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

    const profile = (
        <div className="resume-section">
            <h3 className="text-title">Profile</h3>
            <p className="text-detail">After more than ten years working in software development I can contribute with my experience to any kind of proyect. I have also finished recently a Fullstack Developer course in a programming Bootcamp and I have obtained knowledge in HTML5, CSS, Javascript, React, Python, Flask, SQL, Git, Bootstrap. I am looking for an opportunity that allows me to continue my development and grow in the programming sector.</p>
        </div>
    );

    const experience = (
        <div className="resume-section">
            <h3 className="text-title">Experience</h3>
            <table className="table table-borderless">
                <thead className="">
                    <tr>
                        <th className="td-left" scope="col"></th>
                        <th className="td-right" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-detail">07/2018 - 07/2019</td>
                        <td className="text-detail">UNITY DEVELOPER</td>
                    </tr>
                    <tr>
                        <td className="text-detail">Pamplona, Spain</td>
                        <td className="text-detail">iAR</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-detail">Development of Augmented Reality applications for mobile devices using the Unity engine, along with the Vuforia SDK and C#, consuming a REST API</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-left" scope="col"></th>
                        <th className="td-right" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-detail">09/2006 – 07/2018</td>
                        <td className="text-detail">MAINFRAME DEVELOPER</td>
                    </tr>
                    <tr>
                        <td className="text-detail">Madrid, Spain</td>
                        <td className="text-detail">ATOS / ISBAN / ViewNext / FDS</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-detail">More than ten years working for different clients (Santander Bank, Bank of Spain, Axa, Bankinter) using Mainframe technologies (COBOL, CICS, DBS, JCL) and in different types of projects (maintenance, new developments, mergins); assuming different responsibilities, from programmer to organic analyst.</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-left" scope="col"></th>
                        <th className="td-right" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-detail">03/2004 – 06/2005</td>
                        <td className="text-detail">PROGRAMMER</td>
                    </tr>
                    <tr>
                        <td className="text-detail">Zaragoza, Spain</td>
                        <td className="text-detail">Pariver</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-detail">Desktop application programming using Visual Basic 6.5 and SQL Server.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const education = (
        <div className="resume-section">
            <h3 className="text-title">Education</h3>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-left" scope="col"></th>
                        <th className="td-right" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-detail">08/2020 – 11/2020</td>
                        <td className="text-detail">FULLSTACK DEVELOPER</td>
                    </tr>
                    <tr>
                        <td className="text-detail">Remote</td>
                        <td className="text-detail">4Geeks Academy</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-detail">Web development bootcamp where I've learned among other technologies: React, Bootstrap, Python, Flask, SQLAlchemy, Git, HTML5, CSS, JaveScript</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-left" scope="col"></th>
                        <th className="td-right" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-detail">09/2002 – 06/2004</td>
                        <td className="text-detail">HIGHER NATIONAL DIPLOMA IN SOFTWARE DEVELOPMENT</td>
                    </tr>
                    <tr>
                        <td className="text-detail">Zaragoza, Spain</td>
                        <td className="text-detail">I.E.S. Pablo Serrano</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-detail">Development of computer applications, participating in designing, programming, testing and documentation. Manage databases, interpreting it's design and verifying it's integrity, consistency, security and accessibility of data</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const skills = (
        <div className="resume-section">
            <h3 className="text-title">Skills</h3>
            <p className="d-flex flex-wrap justify-content-center">
                <span className="skill text-detail">React</span>
                <span className="skill text-detail">Bootstrap</span>
                <span className="skill text-detail">Python</span>
                <span className="skill text-detail">HTML5</span>
                <span className="skill text-detail">CSS</span>
                <span className="skill text-detail">JavaScript</span>
                <span className="skill text-detail">Flask</span>
                <span className="skill text-detail">SQLAlchemy</span>
                <span className="skill text-detail">Git</span>
            </p>
        </div>
    );

    const languages = (
        <div className="resume-section">
            <h3 className="text-title">Languages</h3>
            <span className="text-detail">English (F.C.E.)</span> <span>|</span> <span className="text-detail">Spanish (Native)</span>
        </div>
    );

    const softSkills = (
        <div className="resume-section">
            <h3 className="text-title">Soft Skills</h3>
            <p className="d-flex flex-wrap justify-content-center">
                <span className="skill text-detail">Creative</span>
                <span className="skill text-detail">Insightful</span>
                <span className="skill text-detail">Passionate</span>
            </p>
        </div>
    );

    return ( 
        <div className="container resume overflow-auto">
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