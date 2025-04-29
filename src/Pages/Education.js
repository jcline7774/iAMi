import React from 'react'
import { useSelector } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Experience.css'


function Education() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    
    const getContentStyle = () => ({
        color: isDarkMode ? '#e2e8f0' : '#000000',
        background: isDarkMode ? '#374151' : '#f1f5f9',
        borderRadius: '1rem',
        padding: '1.1rem',
        boxShadow: isDarkMode
            ? '0.3rem 0.3rem 0.6rem #0f172a, -0.2rem -0.2rem 0.5rem #1e293b'
            : '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff',
    });

    const getArrowStyle = () => ({
        borderRight: `7px solid ${isDarkMode ? '#374151' : '#f1f5f9'}`
    });

    const getIconStyle = () => ({
        background: isDarkMode ? '#374151' : '#f1f5f9',
        color: '#5db2d4',
        boxShadow: isDarkMode
        ? '0.3rem 0.3rem 0.6rem #0f172a, -0.2rem -0.2rem 0.5rem #1e293b'
        : '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff',
    });

    return (
        <div className='dp education flex flex-col items-center px-4 md:px-16 py-12 min-h-screen bg-slate-400 dark:bg-gray-900 transition-colors duration-300'>
             <div className='f4 df text-shadow text-slate-700 dark:text-sea'>EDUCATION</div>
      <div className='e-details bg-slate-200 dark:bg-gray-800 rounded-2xl shadow-md transition-colors duration-300' style={{ marginTop: '5vh', width: '60%', }}>
        <div className='exp-top df '>
          <div className='left-exp ' ></div>
            <VerticalTimeline lineColor={isDarkMode ? '#334155' : '#aa2500'}>
            <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={getContentStyle()}
                    contentArrowStyle={getArrowStyle()}
                    date="2023 - 2026"
                    iconStyle={getIconStyle()}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">Post Graduate Courses</h3>
                    <h4 className="vertical-timeline-element-subtitle">The University of Texas At Austin</h4>
                    <p>
                       McCombs School of Business - Building Scalable Cloud Applications - Data Science<br/>
                       Enrolled 2023 CGPA: 4.27/4.00
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={getContentStyle()}
                    contentArrowStyle={getArrowStyle()}
                    date="1999 - 2000"
                    iconStyle={getIconStyle()}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">The Chubb Institute of New York</h3>
                    <h4 className="vertical-timeline-element-subtitle">Manhattan Campus</h4>
                    <p>
                       Accredited Certification - Network Engineering / Data Communications<br/>
                       Graduated 2000 CGPA 4.0/4.0
                       
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={getContentStyle()}
                    contentArrowStyle={getArrowStyle()}
                    date="1992 - 1996"
                    iconStyle={getIconStyle()}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">The State University of New York At Albany</h3>
                    <h4 className="vertical-timeline-element-subtitle">S.U.N.Y.</h4>
                    <p>
                    Bachelors Degree - Business Administration<br/>
                       Graduated 1996 - CGPA 3.2/4.0
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div> </div> </div>
    )
}

export default Education