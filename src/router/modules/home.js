const homeRouter = [
    {
        path: '/',
        component: () => import('@/pages/home')
    },
    {
        path: '/second',
        component: () => import('@/pages/second')
    }
]

export default homeRouter;