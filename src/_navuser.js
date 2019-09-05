export default {
    items: [{
        name: 'Home',
        url: '/buttons',
        icon: 'icon-cursor',
    },
    {
        name: 'Users',
        url: '#',
        icon: 'icon-puzzle',
        children: [{
            name: 'List',
            url: '/users/list',
            icon: 'icon-puzzle',
        },
        {
            name: 'Add',
            url: '/users/add',
            icon: 'icon-puzzle',
        }
        ],
    },
    {
        name: 'Statistics',
        url: '/buttons',
        icon: 'icon-cursor',
    },
    {
        name: 'Logs',
        url: '/charts',
        icon: 'icon-pie-chart',
    }
    ],
};