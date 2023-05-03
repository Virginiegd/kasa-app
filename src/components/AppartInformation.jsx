import Rate from "../components/Rate"
import Accordion from "../components/Accordion"

function AppartInformation(props) {

    return (
        <section>
            <div className="container">
                <div className="appart__container">
                    <div className="info__container">
                        <div className="appart__info">
                            <h1>{props.appartId.title}</h1>
                            <p>{props.appartId.location}</p>
                            <ul className="appart__tag">
                                {props.appartId.tags.map((word) => (
                                    <li key={word}>
                                        {word}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='appart__owner'>
                            <div className="appart__plus">
                                <p>{props.appartId.host.name}</p>
                                <div><img src={props.appartId.host.picture} alt="" /> </div>
                            </div>
                            <Rate rating={props.appartId.rating} />

                        </div>
                    </div>

                    <div className="appart__description">
                        <ul>
                            <Accordion heading="Description" content={props.appartId.description} />
                            <Accordion heading="Equipements" content={props.appartId.equipments.map((description) => (
                                <p key={description}>
                                    {description}
                                </p>
                            ))} />
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AppartInformation