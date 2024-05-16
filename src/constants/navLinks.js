import { faHand, faHome, faListDots, faNewspaper, faPencilAlt, faPhoneAlt, faShop } from "@fortawesome/free-solid-svg-icons";

const navlinks = [
    {
        pathname: 'home',
        icon: faHome
    },
    {
        pathname: 'menu',
        icon: faListDots
    },
    {
        pathname: 'blog',
        icon: faNewspaper,
    },
    {
        pathname: 'vendor',
        icon: faShop,
    },
    {
        pathname: 'about',
        icon: faPencilAlt,
    },
    {
        pathname: 'contact',
        icon: faPhoneAlt,
    },
    {
        pathname: 'help',
        icon: faHand,
    },
];

export default navlinks;