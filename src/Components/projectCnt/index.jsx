import { imageFile } from '../../utils';
import './index.scss';

const ProjectCnt = () => {

    return (
        <div className="Projects_container">
            <div className="Projects_wrapper">
                
                {/* Left Section (Sticky) */}
                <div className="Projects_left_container">
                    <div className="Projects_left_wrapper">
                        <div className="Projects_Heading">PROJECTS</div>
                        <div className="Projects_para">
                            <p>
                                Talk about your journey into full-stack development, what inspires you,
                                and what excites you about building things with code.
                            </p>
                        </div>
                        <div className="Projects_tittle_img_box">
                            <img className='Projects_tittle_img' src={imageFile.experience_img1}   alt='Image' />
                        </div>
                        <div className="Projects_tittle_para">
                            <p>
                                Talk about your journey into full-stack development, what inspires you,
                                and what excites you about building things with code.
                            </p>
                        </div>
                        <div className="Projects_skills">
                            <ul className='Projects_skill_ul'>
                                <li className='Projects_skill_li'>React</li>
                                <li className='Projects_skill_li'>Next.js</li>
                                <li className='Projects_skill_li'>Node.js</li>
                                <li className='Projects_skill_li'>Python</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section (Scrollable) */}
                <div className="Projects_right_container">
                    <div className="Projects_right_wrapper">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className='Projects_groups'>
                                <div className="Projects_image_group">
                                    <img className='project_img' src={imageFile.project_card} alt='Project' />
                                </div>
                                <div className="Projects_content_group">
                                    <h4 className='Projects_content_heading'>Project {item}</h4>
                                    <p className='Projects_content_para'>
                                        Talk about your journey into full-stack development, what inspires you,
                                        and what excites you about building things with code.
                                    </p>
                                    <button className='Projects_button'>View Live</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCnt