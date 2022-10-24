import { IMen, pointingMen } from "../models/data";

export function Gentleman() {
    return (
        <>
            {pointingMen.map((men: IMen) => (
                <li className="gentleman">
                    <div className="gentleman__avatar-container">
                        <img
                            className="gentleman__avatar"
                            src={"img/" + men.picture}
                            alt={men.alternativeText}
                        />
                        <span className="gentleman__initial">
                            {men.name.slice(0, 1)}
                        </span>
                    </div>
                    <div className="gentleman__data-container">
                        <h2 className="gentleman__name">{men.name}</h2>
                        <ul className="gentleman__data-list">
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Profession:
                                </span>
                                {men.profession}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Status:
                                </span>{" "}
                                {men.status}
                            </li>
                            <li className="gentleman__data">
                                <span className="gentleman__data-label">
                                    Twitter:
                                </span>{" "}
                                {men.twitter}
                            </li>
                        </ul>
                    </div>
                    <i className="icon gentleman__icon fas fa-check"></i>
                    <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
                </li>
            ))}
        </>
    );
}
