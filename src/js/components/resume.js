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
        <div>
            <h3>Profile</h3>
            <p>After more than ten years working in software development I can contribute with my experience to any kind of proyect. I have also finished recently a Fullstack Developer course in a programming Bootcamp and I have obtained knowledge in HTML5, CSS, Javascript, React, Python, Flask, SQL, Git, Bootstrap. I am looking for an opportunity that allows me to continue my development and grow in the programming sector.</p>
        </div>
    );

    const experience = (
        <div>
            <h3>Experience</h3>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-30" scope="col"></th>
                        <th className="td-70" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">07/2018 – 07/2019</td>
                        <td className="">UNITY DEVELOPER</td>
                    </tr>
                    <tr>
                        <td>Pamplona, Spain</td>
                        <td>iAR</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Development of Augmented Reality applications for mobile devices using the Unity engine, along with the Vuforia SDK and C#, consuming a REST API</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-30" scope="col"></th>
                        <th className="td-70" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">09/2006 – 07/2018</td>
                        <td className="">MAINFRAME DEVELOPER</td>
                    </tr>
                    <tr>
                        <td>Madrid, Spain</td>
                        <td>ATOS / ISBAN / ViewNext / FDS</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>More than ten years working for different clients (Santander Bank, Bank of Spain, Axa, Bankinter) using Mainframe technologies (COBOL, CICS, DBS, JCL) and in different types of projects (maintenance, new developments, mergins); assuming different responsibilities, from programmer to organic analyst.</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-30" scope="col"></th>
                        <th className="td-70" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">03/2004 – 06/2005</td>
                        <td className="">PROGRAMMER</td>
                    </tr>
                    <tr>
                        <td>Zaragoza, Spain</td>
                        <td>Pariver</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Desktop application programming using Visual Basic 6.5 and SQL Server.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const education = (
        <div>
            <h3>Education</h3>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-30" scope="col"></th>
                        <th className="td-70" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >08/2020 – 11/2020</td>
                        <td >FULLSTACK DEVELOPER</td>
                    </tr>
                    <tr>
                        <td>Remote</td>
                        <td>4Geeks Academy</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Web development bootcamp where I've learned among other technologies: React, Bootstrap, Python, Flask, SQLAlchemy, Git, HTML5, CSS, JaveScript</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="td-30" scope="col"></th>
                        <th className="td-70" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >09/2002 – 06/2004</td>
                        <td >HIGHER NATIONAL DIPLOMA IN SOFTWARE DEVELOPMENT</td>
                    </tr>
                    <tr>
                        <td>Zaragoza, Spain</td>
                        <td>I.E.S. Pablo Serrano</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Development of computer applications, participating in designing, programming, testing and documentation. Manage databases, interpreting it's design and verifying it's integrity, consistency, security and accessibility of data</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const skills = (
        <div>
            <h3>Skills</h3>
            <p>
                <span className="skill">React</span>
                <span className="skill">Bootstrap</span>
                <span className="skill">Python</span>
                <span className="skill">HTML5</span>
                <span className="skill">CSS</span>
                <span className="skill">JavaScript</span>
            </p>
            <p>
                <span className="skill">Flask</span>
                <span className="skill">SQLAlchemy</span>
                <span className="skill">Git</span>
            </p>
        </div>
    );

    const languages = (
        <div>
            <h3>Languages</h3>
            <span>English (F.C.E.)</span> <span>|</span> <span>Spanish (Native)</span>
        </div>
    );

    const softSkills = (
        <div>
            <h3>Soft Skills</h3>
            <span className="skill">Creative</span>
            <span className="skill">Insightful</span>
            <span className="skill">Passionate</span>
        </div>
    );

    return ( 
        <div className="resume">
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