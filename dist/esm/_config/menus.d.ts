declare const menus: {
    '/guide': {
        title: string;
        path: string;
    }[];
    '/design': {
        title: string;
        path: string;
    }[];
    '/components': {
        title: string;
        children: string[];
    }[];
};
export default menus;
