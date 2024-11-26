import { RouteObject } from "react-router-dom";
import { SignupTeacher } from "@/app/auth/register-teacher";

export const AuthRoutes: RouteObject[] = [
    {
        path: "/auth/signup",
        element: <SignupTeacher/>
    }
]