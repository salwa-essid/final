export default {
    items: [{
        name: 'Home',
        url: '/buttons',
        icon: 'icon-cursor',
    },
    {
        name: 'Plugs',
        url: '/base',
        icon: 'icon-puzzle',
        children: [{
            name: 'List',
            url: '/plug/list',
            icon: 'icon-puzzle',
        },
        {
            name: 'Add',
            url: '/plug/add',
            icon: 'icon-puzzle',
        }
        ],
    }
    ],
};