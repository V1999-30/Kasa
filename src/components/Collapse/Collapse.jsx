import React, { useState } from "react";
import "./Collapse.css";
import fleche from "../../assets/img/collapse.png";

function Collapse({titre, description}) {
    const [open, setOpen] = useState(false);

    return(
        <div className="collapse" id={`collapse-${titre}`}>
            <div className="header-collapse">
                <div className="titre-collapse">{titre}</div>
                <span className={`fleche-collapse ${open}`} onClick={() => setOpen(!open)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le Collapse est à TRUE alors il affichera la description */
                open && <div className="description-collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;