import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Security from "../assets/security.jpeg";
import Service from "../assets/service.jpg";
import Social from "../assets/social.jpg";
import Ambient from "../assets/raccolta-differenziata.jpg";
import Risparmio from "../assets/risparmio.jpg";
import Easy from "../assets/easyroad.jpg";
import Card from "react-bootstrap/Card";
import "../css/HomepageCarousel.css";

function HomepageCarousel() {
  return (
    <>
      <Container>
        <Row>
          <div className="d-flex justify-content-center my-4">
            <h2 className="text-white">Perchè scegliere un campeggio </h2>
          </div>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Security} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Sicurezza e sorveglianza:</p> I campeggi spesso dispongono di personale che
                  monitora l&#96;area, riducendo il rischio di incontri indesiderati con animali selvatici o individui
                  malintenzionati.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Service} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Comodità e infrastrutture:</p>I campeggi offrono comfort e infrastrutture non
                  facilmente trovabili in natura, come servizi igienici, elettricità, acqua corrente, aree picnic,
                  cucine condivise e zone barbecue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Social} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Socializzazione:</p>Nei campeggi è possibile socializzare con persone con
                  interessi simili e partecipare a varie attività ricreative organizzate, come escursioni, giochi per
                  bambini e serate a tema.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Ambient} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Rispetto per l&#96;ambiente</p>
                  Nei campeggi, la gestione dei rifiuti e il rispetto di normative ambientali contribuiscono a mantenere
                  pulito l&#96;ambiente e a proteggere la fauna e la flora locali.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Risparmio} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Costi e convenienza</p>I campeggi generalmente hanno tariffe di pernottamento
                  significativamente più basse rispetto ad hotel o villaggi offrendo servizi molto simili.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mx-2 my-3">
              <Card.Img className="card-img" variant="top" src={Easy} />
              <Card.Body>
                <Card.Text>
                  <p className="fw-bold">Accessibilità</p>I campeggi sono facilmente raggiungibili, con parcheggi e
                  sentieri ben segnalati, e offrono mappe, informazioni turistiche e suggerimenti su escursioni e
                  attrazioni locali.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomepageCarousel;

// 7. Costi e convenienza
// Tariffe accessibili: Sebbene possa sembrare che dormire in mezzo alla natura sia gratuito, i campeggi offrono un ottimo rapporto qualità-prezzo considerando i servizi inclusi.
// Risparmio di tempo: La presenza di servizi come negozi di generi alimentari e noleggio di attrezzature all'interno del campeggio può ridurre il tempo e lo sforzo necessario per organizzare l'esperienza di campeggio.
// In sintesi, dormire in un campeggio offre una combinazione di sicurezza, comfort e convenienza che può migliorare significativamente l'esperienza di campeggio rispetto al dormire in mezzo alla natura selvaggia.

// <Carousel className="mb-5 w-100 h-5 carosello">
//   <Carousel.Item className="img-carousel" interval={3000}>
//     <img className="d-block w-100 " src={FirstCarouselImage} alt="First slide" />
//     <Carousel.Caption>
//       <p className="shadow-text">
//         Vivi l&#96;esperienza di dormire in mezzo alla natura ma in totale sicurezza e comodità.
//       </p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className="img-carousel" interval={3000}>
//     <img className="d-block w-100 " src={SecondCarouselImage} alt="Second slide" />
//     <Carousel.Caption>
//       <p className="shadow-text">Porta in campeggio con te anche i tuoi amici a 4 zampe</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className="img-carousel" interval={3000}>
//     <img className="d-block w-100 " src={ThirdCarouselImage} alt="Third slide" />
//     <Carousel.Caption>
//       <p className="shadow-text ">Adatto anche ai più piccoli</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
