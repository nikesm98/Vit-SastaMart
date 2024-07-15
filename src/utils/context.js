<<<<<<< HEAD
import { createContext, useState } from "react";


export const Context = createContext();

const  AppContext = ({ children }) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
        
}

=======
import { createContext, useState } from "react";


export const Context = createContext();

const  AppContext = ({ children }) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
        
}

>>>>>>> 5fe516d1144138d1313991e1ee26b06cd463b45f
export default AppContext;