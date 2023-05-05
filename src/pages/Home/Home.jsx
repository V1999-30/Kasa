import React from "react";
import "./Home.css"
import Menu from "../../components/Menu/Menu";
import menuLogo from "../../assets/img/logo.jpg";
import Banner from "../../components/Banner/Banner";
import bannerLogo from "../../assets/img/Banner.png";
import Rent from "../../components/Rent/Rent";
import Footer from "../../components/Footer/Footer";
import FooterLogo from "../../assets/img/logo_footer.png";
import HousingListing from "../../assets/api/houses.json";
import { NavLink } from "react-router-dom";

function Home () {
    return (
        <div>
            <Menu image={menuLogo}/>
            <main>
            <Banner image={bannerLogo} texte="Chez vous, partout et ailleurs"/>
            <div id="housing">
                {HousingListing.map((house) => 
                <NavLink key={house.id} to={"./Logement/"+house.id+"/#"}>
                    <Rent id={house.id} image={house.cover} titre={house.title} />
                </NavLink>)}
            </div>
            </main>
            <Footer image={FooterLogo}/>
        </div>
    )
}

export default Home;