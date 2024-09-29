import { createContext } from 'react';
import { products } from "../assets/assets"



export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const value = {
        products , currency, delivery_fee

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;

// import { createContext } from 'react';
// import PropTypes from 'prop-types'; // Step 2: Import prop-types
// import { products } from "../assets/assets";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '$';
//     const delivery_fee = 10;
//     const value = {
//         products, currency, delivery_fee
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// // Step 3: Define prop types
// ShopContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

//export default ShopContextProvider;