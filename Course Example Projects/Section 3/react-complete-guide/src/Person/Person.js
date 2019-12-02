import React from 'react';

const person = () => {

    return (

        <div>
            <p> I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
            {/* Example of Dynamic Content in our JSX */}
        </div>
    )

}

export default person;