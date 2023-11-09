import React, { createContext } from "react";
import {all_product_data} from "../Components/Assets/all_product_data.js";
import {all_product_banner} from "../Components/Assets/all_product_data.js";
import {all_product_cart} from "../Components/Assets/all_product_data.js";

export const RefreshContext =createContext(null);

const RefreshContextProvider =(props)=>{

    return(
        <RefreshContext.Provider value={{all_product_data,all_product_banner,all_product_cart}}>
            {props.children}
        </RefreshContext.Provider>
    )
}

export default RefreshContextProvider;