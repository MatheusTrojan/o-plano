import Plans from "../Plans"
import "./Cards.css"

const Cards = () => {


    const benefitsSilver = ["benefit5", "benefit6", "benefit7", "benefit8"]
    const benefitsGolden = ["benefit9", "benefi10", "benefit11", "benefit12"]
    const benefitsPlatinum = ["benefit1", "benefit2", "benefit3", "benefit4"]

    return (
        <div className="cards__wrapper">
            <Plans title="Silver Plan" price="5.00" benefits={benefitsSilver} primaryColor="#82CFFA"/>
            <Plans title="Golden Plan" price="15.00" benefits={benefitsGolden} primaryColor="#FFBA05"/>
            <Plans title="Platinum Plan" price="25.00" benefits={benefitsPlatinum} primaryColor="#E06B69"/>
        </div>
    )
}

export default Cards