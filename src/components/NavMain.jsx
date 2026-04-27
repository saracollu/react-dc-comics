import DcDigitalC from "../assets/img/buy-comics-digital-comics.png";
import Merch from "../assets/img/buy-comics-merchandise.png";
import Sub from "../assets/img/buy-comics-subscriptions.png";
import Shop from "../assets/img/buy-comics-shop-locator.png";
import Visa from "../assets/img/buy-dc-power-visa.svg";

export default function Nav() {

    return (
        <nav>
            <a href=""><img src={DcDigitalC} alt="dc" />DIGITAL COMICS</a>
            <a href=""><img src={Merch} alt="" />DC MERCHANDISE</a>
            <a href=""><img src={Sub} alt="" />SUBSCRIPTION</a>
            <a href=""><img src={Shop} alt="" />COMIC SHOP LOCATOR</a>
            <a href=""><img src={Visa} alt="" />DC POWER VISA</a>
        </nav>
    )
}
