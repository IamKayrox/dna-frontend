import { Type } from "@angular/core";
import { DefaultExport, Route, Routes } from "@angular/router";
import { Observable } from "rxjs";

export interface Tab {
    i18n: string;
    path: string;
}

export class TabIndex {
    //Tabs get sorted by index
    private readonly routeTabs: TabRoute[];

    public constructor(tabs: TabRoute[]) {
        this.routeTabs = tabs.sort((a, b) => a.index - b.index)
    }

    public getRoutes(): Routes {
        const routes: Routes = [];
        routes.push({
            path: '',
            pathMatch: 'full',
            redirectTo: this.routeTabs[0].path,
        })
        for (const tab of this.routeTabs) {
            const route: Route = {
                path: tab.path,
                loadComponent: tab.loadComponent,
            }
            routes.push(route);
        }
        return routes;
    }

    public getTabs(): Tab[] {
        return this.routeTabs.map(tab => ({
            i18n: tab.i18n,
            path: tab.path,
        }))
    }

    public getIndexForPath(path: string) {
        return this.routeTabs.findIndex(tab => tab.path === path);
    }
}

export interface TabRoute {
    index: number;
    i18n: string;
    path: string;
    loadComponent: () => Type<unknown> | Observable<Type<unknown> | DefaultExport<Type<unknown>>> | Promise<Type<unknown> | DefaultExport<Type<unknown>>>;
}