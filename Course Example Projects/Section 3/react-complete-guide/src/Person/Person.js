import React from 'react';

const person = (props) => {

    return (

        <div>
            <p> I'm {props.name} and I am {props.age} years old!</p>
            {/* Example of Dynamic Content in our JSX */}
        </div>
    )

}

export default person;