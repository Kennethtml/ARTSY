import { configureStore } from "@reduxjs/toolkit";
import { navToggle } from "./features/navtoggler/navtoggler";
import { market } from "./features/Market/market";
export  const store=configureStore({
    reducer:{
        navtoggle:navToggle,
        market:market

    }

})