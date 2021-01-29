import {NextRouter} from "next/router";

export const RouteMapper = (isAuthenticated: boolean, router: NextRouter) => {
    if(isAuthenticated && router.route === "/"){
        router.push("/dashboard");
    }
    else if(!isAuthenticated && router.route === "/dashboard"){
        router.push("/");
    }
}