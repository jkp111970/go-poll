import { MenuItem } from '../fw/services/menu.service'

export let initialMentuItems : Array<MenuItem> = [
    {
        text: 'Poll',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Dashboard',
                icon: 'glyphicon-cog',
                route: '/dashboard',
                submenu: null
            },
            {
                text: 'Create Poll',
                icon: 'glyphicon-cog',
                route: '/createpoll',
                submenu: null
            }
        ]
    }
];