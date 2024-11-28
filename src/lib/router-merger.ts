import React from "react"
import { RouteObject } from "react-router-dom";

/* Función para recibir declaraciones de rutas de la aplicación  */
export function routerMerger(...routes: Array<RouteObject | RouteObject[]>): RouteObject[] {
    const mergedRoutes: RouteObject[] = [];

    routes.forEach(route => {
        if (Array.isArray(route)) {
            mergedRoutes.push(...route);
        } else {
            mergedRoutes.push(route);
        }
    });

    return mergedRoutes;
}
