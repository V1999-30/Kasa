import React from "react";
import "./Product.css";
import { useParams, Navigate } from 'react-router-dom';
import HousingListing from "../../assets/api/houses.json";
import Menu from "../../components/Menu/Menu";
import menuLogo from "../../assets/img/logo.jpg";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Rating from "../../assets/img/Etoile.png";
import NoStar from "../../assets/img/EtoileVide.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import FooterLogo from "../../assets/img/logo_footer.png";


function Product() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const pageProduct = HousingListing.find(house => house.id === id.id);

    /* Tags */
    const tagsProduct = pageProduct?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let houseRating = [];
    let fullStars = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(pageProduct?.rating)) {
            fullStars = false;
        }
        if(fullStars === true) {
            houseRating.push(<img key={index} className="rating" src={Rating} alt={`${pageProduct?.rating}/5`}/>)
        } else {
            houseRating.push(<img key={index} className="rating" src={NoStar} alt={`${pageProduct?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const housingStuff = pageProduct?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                pageProduct ? (
                <div>
                    <div className="menu">
                        <Menu image={menuLogo}/>
                    </div>
                    <div className="Fiche">
                        <Carrousel images={pageProduct?.pictures}/>
                        <div className="house-owner">
                            <div className="house-info">
                                <span className="house-title">{pageProduct?.title}</span>
                                <span className="house-location">{pageProduct?.location}</span>
                                <div className="tags">
                                    {tagsProduct}
                                </div>
                            </div>
                            <div className="owner-rating">
                                <div className="owner-info">
                                    <span className="owner-name">{pageProduct?.host.name}</span>
                                    <img className="owner-picture" src={pageProduct?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {houseRating}
                                </div>
                            </div>
                        </div>
                        <div className="stuff-description">
                            <Dropdown titre="Description" description={pageProduct?.description}/>
                            <Dropdown titre="Equipements" description={housingStuff}/>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer image={FooterLogo}/>
                    </div>
                </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Product;