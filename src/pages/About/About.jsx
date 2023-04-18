import React from "react";
import "./About.css";
import Menu from "../../components/Menu/Menu";
import menuLogo from "../../assets/img/logo.jpg";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/img/Banner_About.jpg";
import Collapse from "../../components/Collapse/Collapse"; 
import Footer from "../../components/Footer/Footer";
import FooterLogo from "../../assets/img/logo_footer.png";

function About () {
    return(
        <div>
            <div className="menu">
                <Menu image={menuLogo}/>
            </div>
            <div className="About">
                <Banner image={bannerAbout} texte="" hauteur="223px"/>
                <Collapse titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <Collapse titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Collapse titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
            <div className="footer">
                <Footer image={FooterLogo}/>
            </div>
        </div>
    );
}

export default About;