import data from './data.json';
import React from 'react';

class SocialMedias extends React.Component {
    render(){
        return (
            <ul>Exercise 3 part 3
                {data.SocialMedias.map((url,i) => (
                    <li key={i}>{url}</li>
                ))}
            </ul>
           
        )
    }
}

export default SocialMedias