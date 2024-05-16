import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

function Slider({ children }) {
    return (
        <ReactOwlCarousel
            className="owl-theme"
            margin={20}
            nav
            responsive={responsive}
            dots={false}
            autoplay={true}
            autoplaySpeed={3000}

        >
            {children}
        </ReactOwlCarousel>

    )
}

export default Slider