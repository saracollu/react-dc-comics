import DcDigitalC from "../assets/img/buy-comics-digital-comics.png";
import Merch from "../assets/img/buy-comics-merchandise.png";
import Sub from "../assets/img/buy-comics-subscriptions.png";
import Shop from "../assets/img/buy-comics-shop-locator.png";
import Visa from "../assets/img/buy-dc-power-visa.svg";

export default function Nav() {

    const menuMain = [
        {
            id: 1,
            text: "DIGITAL COMICS",
            path: "/characters"
        },
        {
            id: 2,
            text: "DC MERCHANDISE",
            path: "/comics"
        },
        {
            id: 3,
            text: "SUBSCRIPTION",
            path: "/movies"
        },
        {
            id: 4,
            text: "COMIC SHOP LOCATOR",
            path: "/tv"
        },
        {
            id: 5,
            text: "DC POWER VISA",
            path: "/games"
        },


    ]

    return (
        <nav>
            {menuMain.map((item) => (
                <a href={item.path} key={item.id}>{item.text}</a>
            ))}
        </nav>
    );
}

