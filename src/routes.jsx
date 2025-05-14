import { CoursePage } from "./pages/dashboard"


const routes = [
    {path: '/coursePage', element: <PrivateRoute><CoursePage /></PrivateRoute>}
]

export default routes