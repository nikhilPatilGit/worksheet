import {useAuth} from "./index";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const useRequireAuth = () => {
    const auth = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (auth.user === null) {
            router.push('/');
        }
    }, [auth, router]);

    return auth;
};