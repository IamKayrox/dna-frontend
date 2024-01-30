import { TabIndex } from "../models/routes.models";

export const TAB_INDEX = new TabIndex([
  {
    i18n: 'Novedades',
    path: 'news',
    index: 3,
    loadComponent: () => import('../pages/news/news.component').then(mod => mod.NewsComponent),
  },
  {
    i18n: 'Eventos',
    path: 'events',
    index: 2,
    loadComponent: () => import('../pages/events/events.component').then(mod => mod.EventsComponent)
  },
  {
    i18n: 'Nuestro museo',
    path: 'sections',
    index: 1,
    loadComponent: () => import('../pages/sections/sections.component').then(mod => mod.SectionsComponent)
  },
  {
    i18n: 'Bienvenida',
    path: 'welcome',
    index: 0,
    loadComponent: () => import('../pages/welcome/welcome.component').then(mod => mod.WelcomeComponent)
  }
])