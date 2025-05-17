import { CoursePage } from "./pages/dashboard"
import { PublicationsPage } from "./pages/publications"
import  { AllPublicationPage } from "./pages/publications"
import { CommentPage } from "./pages/comments"


const routes = [
    {path: '/*', element: <CoursePage />},
    { path: "/publications/:courseId", element: <PublicationsPage /> },
    { path: "/allPublications", element: <AllPublicationPage /> },
    { path: "/comment/:publicationId", element: <CommentPage /> }
]

export default routes