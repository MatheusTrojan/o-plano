import Plans from "../Plans"
import "./Cards.css"

const Cards = () => {


    const benefitsIron = ["benefit1", "benefit2", "benefit3", "benefit4"]
    const benefitsSilver = ["benefit5", "benefit6", "benefit7", "benefit8"]
    const benefitsGolden = ["benefit9", "benefi10", "benefit11", "benefit12"]

    return (
        <div className="cards__wrapper">
            <Plans title="Iron Plan" price="25.00" benefits={benefitsIron} primaryColor="#E06B69"/>
            <Plans title="Golden Plan" price="55.00" benefits={benefitsGolden} primaryColor="#FFBA05"/>
            <Plans title="Silver Plan" price="35.00" benefits={benefitsSilver} primaryColor="#82CFFA"/>
        </div>
    )
}

export default Cards