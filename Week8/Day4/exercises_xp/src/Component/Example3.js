import data from './data.json'
import React from 'react'

class Experiences extends React.Component{
    render(){
        return(
            <div>Exercise 3 part 5
                {data.Experiences.map((exp,i) => (
                    <div key={i}> {exp.companyName}
                     <img src={exp.logo} alt='comp' />
                     <a href={exp.url}></a>
                    <ul>
                        {
                        exp.roles.map((role,i) => (
                            <li key={i}>                               
                                <p>{role.title}</p>
                                <p>{role.description}</p>
                                <p>{role.location}</p>
                            </li>
                        ))
                    } </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default Experiences