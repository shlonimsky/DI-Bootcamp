import data from './data.json'
import React from 'react'

class Skills extends React.Component{
    render(){
        return(
            <div> Exercise 3 part 4
                {data.Skills.map((skill,i) => (
                    <ul key={i}>{skill.Area}
                        {skill.SkillSet.map((lang,i) => (
                            <li key={i}>{lang.Name}</li>
                        ) )}
                    </ul>
                ))}
            </div>
        )
    }
}

export default Skills