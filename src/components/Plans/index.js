import "./Plans.css"

const Plans = (props) => {
    return (
        <div className="plans__wrapper" style={{ backgroundColor: props.primaryColor }}>
            <h2 className="plans__title" >{props.title}</h2>
            <div className="plans__price">
                <h3>${props.price}</h3>
                <p>per month</p>
            </div>
            <ul className="plans__benefits">
                <li>{props.benefits[0]}</li>
                <li>{props.benefits[1]}</li>
                <li>{props.benefits[2]}</li>
                <li>{props.benefits[3]}</li>

            </ul>
            <button className="plans__btn">Choose Plan</button>
        </div>
    )
}

export default Plans