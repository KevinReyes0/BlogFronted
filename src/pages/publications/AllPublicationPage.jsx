import { AllPublicationsPage } from "../../components/publications/AllPublicationsPage"; 
import Nav from "../../components/navbar/Navbar";
import './PublicationPage.css';

export const AllPublicationPage = () => {
    return (
        <>
            <Nav />
            <AllPublicationsPage />
        </>
    );
};