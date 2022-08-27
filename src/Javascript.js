import React from 'react'

// Functional Components
function Javascript() {

    //--------------------- Spread Operator ----------------------//

    //------------ For Arrays ------------
    //For merging arrays
    const first = [1, 2, 3];
    const second = [4, 5, 6];

    const concepts = () => {
        //For merging arrays
        const first = [1, 2, 3];
        const second = [4, 5, 6];

        //default way
        const combined = first.concat(second);
        console.log(combined); // [1,2,3,4,5,6]

        // Spread Operator -> copy 
        const combine = [...first, 10, ...second, 50];
        console.log(combine);

        //------------------- Object Destructuring -------------------//
        const address = {
            country: "Pakistan",
            city: "Rawalpindi",
            street: "17",
        };
        //Default call
        // const country1 = address.country
        // const city1 = address.city
        // const street1 = address.city

        //Object Destructuring
        const { country, city: city1, street: street1 } = country;


        var numbers = [4, 5, 6]

        const person = [{
            "name": "Shoaib Ali",
            "Age": 24,
            "city": "RWP"
        },
        {
            "name": "Ali Ayub",
            "Age": 20,
            "city": "Isl"
        }]


    }

    return (
        <div>
            <button onClick={() => concepts()}>Call Function</button>
        </div>
    )
}
export default Javascript