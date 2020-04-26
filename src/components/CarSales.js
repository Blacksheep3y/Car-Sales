//import dependencies
import React from 'react';
import { connect } from 'react-redux';

// STEP 2 - connect the component to the redux store

const CarSales = (props) => {
    // const [state, dispatch] = useReducer(carSalesReducer, initialState);

    return (
        <div>
            {props.additionalPrice}
            {/* {props.car.map((item, index) => ( 
                <div key={index}>
                    <li>{item.price}</li>
                    <li>{item.name}</li>
                    <li>{item.image}</li>
                    <li>{item.features}</li>  
                </div>
            ))}
            {props.additionalFeatures.map(x => x)} */}
        </div>
    )

};
// - wrap the component export in the connect function 
// - call connect twice!
// - Pass the component that we want to connect into the second call
// - The first call will take in a function and an object
// -- The function returns an object
// -- Any property on the returned object gets added to the component props!

export default connect( 
    state => {
        console.log('Car-Sales.js: STATE: ', state);
        return {
            additionalPrice: state.additionalPrice,
            // car: state.car.map((item, index) => ( 
            //     <div key={index}>
            //         <li>{item.price}</li>
            //         <li>{item.name}</li>
            //         <li>{item.image}</li>
            //         <li>{item.features}</li>  
            //     </div>
            // )),
            // additionalFeatures: state.additionalFeatures.map((item, index) => ( 
            //     <div key={index}>
            //         <li>{item.id}</li>
            //         <li>{item.name}</li>
            //         <li>{item.price}</li>
            //     </div>
            // ))
        };
    }, 
    {} )
    (CarSales); // function currying in JS
