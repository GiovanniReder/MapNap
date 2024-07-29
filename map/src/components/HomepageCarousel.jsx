import Carousel from "react-bootstrap/Carousel";
import FirstCarouselImage from "../assets/CarouselCamping.jpg";
import SecondCarouselImage from "../assets/PetCarousel.jpg";
import ThirdCarouselImage from "../assets/KidCarousel.jpg";
import "../css/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <Carousel className="mb-5 w-50 carosello">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={FirstCarouselImage} alt="First slide" />
        <Carousel.Caption>
          <p className="shadow-text">
            Vivi l&#96;esperienza di dormire in mezzo alla natura ma in totale sicurezza e comodità.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={SecondCarouselImage} alt="Second slide" />
        <Carousel.Caption>
          <p className="shadow-text">Porta in campeggio con te anche i tuoi amici a 4 zampe</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={ThirdCarouselImage} alt="Third slide" />
        <Carousel.Caption>
          <p className="shadow-text">Adatto anche ai più piccoli</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
