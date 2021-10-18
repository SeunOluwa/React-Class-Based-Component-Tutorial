import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Laudantium voluptatum, iste illo omnis perferendis obcaecati 
            suscipit dolore. Reiciendis, totam tenetur similique sapiente 
            ex repellat, magni autem deserunt fuga consequatur natus!</p>
        </div>
    );
}

export default Rainbow(About);
