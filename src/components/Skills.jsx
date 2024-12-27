import React, { useState } from 'react';

const SkillIcon = ({ src, className, onMouseOver, onMouseOut }) => (
  <div>
    <a href="">
      <img 
        className={`skils ${className}`}
        src={src}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    </a>
  </div>
);

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState('info');

  const skillsData = {
    info: { title: "More Information" },
    lang: {
      title: "Programming Languages",
      content: [" Java ", " C++ ", " HTML ", " CSS ", " Flutter "]
    },
    app: {
      title: "Application Development",
      content: "Experience with Android Studio in Java"
    },
  

  };

  return (
    <section className="section2" id="skills">
      <div></div>
      <SkillIcon 
        src="/images/icons8-programming-100.png"
        className="s1"
        onMouseOver={() => setActiveSkill('lang')}
        onMouseOut={() => setActiveSkill('info')}
      />
  
  
      
      <div style={{ gridArea: "2/ 2 / 3 / 5" }}>
        {Object.entries(skillsData).map(([key, data]) => (
          <table key={key} className={`${key} ${activeSkill === key ? '' : 'hidden'}`}>
            <tr>
              <td>
                <h1 className="bold">{data.title}</h1>
              </td>
            </tr>
            {data.content && (
              <tr>
                <td>
                  <h3 className="bold">{data.content}</h3>
                </td>
              </tr>
            )}
          </table>
        ))}
      </div>
    </section>
  );
};

export default Skills;