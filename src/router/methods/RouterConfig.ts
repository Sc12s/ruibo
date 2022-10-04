interface RouterConfig {
    path: string;
    name: string,
    component: any;
    meta?: any;
    props?: any;
    children?: RouterConfig[]
}

export default RouterConfig