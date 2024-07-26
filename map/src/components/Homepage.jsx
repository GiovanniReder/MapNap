import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
function Homepage() {
  return (
    <>
      <div className=" d-flex  justify-content-center ">
        <h2 className="text-white mb-5">Cerca i migliori campeggi </h2>
      </div>
      <div className=" d-flex  justify-content-center ">
        <Form.Control className="w-75" type="email" placeholder="Città" />
      </div>
      <div className="d-none d-md-flex g-3">
        <Card className="bg-transparent border border-0 my-4 mx-2" style={{ width: "32%", height: "30%" }}>
          <Card.Img
            variant="top"
            src="https://www.allperfectstories.com/wp-content/uploads/2021/08/camping-in-Switzerland-scaled.jpg"
          />
          <Card.Body>
            <Card.Text className="text-white">
              Vivi l'esperienza di dormire in mezzo alla natura ma in totale sicurezza e comodità.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-transparent border border-0 my-4 mx-2" style={{ width: "32%", height: "30%" }}>
          <Card.Img
            variant="top"
            src="https://campspot.blog/wp-content/uploads/2022/07/Pet-friendly-campgrounds-header-1-1200x800.jpg"
          />
          <Card.Body>
            <Card.Text className="text-white">Porta in campeggio con te anche i tuoi amici a 4 zampe</Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-transparent border border-0 my-4 mx-2" style={{ width: "32%", height: "30%" }}>
          <Card.Img variant="top" src="https://campingkidz.nl/images/camping-met-kind.jpg" />
          <Card.Body>
            <Card.Text className="text-white">Adatto anche ai più piccoli</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Homepage;

// Dormire in un campeggio offre una serie di vantaggi rispetto al dormire in mezzo alla natura selvaggia. Ecco alcuni dei principali benefici:

// 1. Sicurezza
// Controllo e sorveglianza: I campeggi spesso dispongono di personale che monitora l'area, riducendo il rischio di incontri indesiderati con animali selvatici o individui malintenzionati.
// Pronto soccorso: Molti campeggi hanno kit di primo soccorso o accesso rapido a servizi di emergenza, il che è particolarmente utile in caso di infortuni.
// 2. Comodità
// Servizi igienici: I campeggi sono generalmente dotati di bagni, docce e lavandini, offrendo un comfort che non si trova facilmente in natura.
// Elettricità e acqua corrente: La disponibilità di elettricità permette di ricaricare dispositivi elettronici e usare luci artificiali, mentre l'acqua corrente è essenziale per l'igiene personale e la cucina.
// 3. Infrastrutture
// Aree comuni: Molti campeggi offrono spazi comuni come aree picnic, cucine condivise e zone barbecue, facilitando la preparazione dei pasti e la socializzazione.
// Piazzole attrezzate: Le piazzole spesso includono tavoli, panche, punti per il fuoco e terreni livellati per le tende, rendendo l'esperienza di campeggio più confortevole.
// 4. Socializzazione
// Comunità: Nei campeggi è possibile incontrare altre persone con interessi simili, scambiarsi esperienze e consigli, e fare nuove amicizie.
// Attività organizzate: Alcuni campeggi offrono attività ricreative organizzate, come escursioni guidate, giochi per bambini e serate a tema.
// 5. Accessibilità
// Facilità d'accesso: I campeggi sono spesso situati in aree facilmente raggiungibili, con parcheggi vicini e sentieri ben segnalati.
// Supporto logistico: Molti campeggi offrono mappe, informazioni turistiche e suggerimenti su percorsi escursionistici e attrazioni locali.
// 6. Rispetto dell'ambiente
// Gestione dei rifiuti: Nei campeggi ci sono aree designate per la raccolta dei rifiuti, contribuendo a mantenere l'ambiente pulito e riducendo l'impatto ecologico.
// Regole e linee guida: I campeggi seguono normative che aiutano a proteggere la fauna e la flora locali, riducendo il rischio di danni ambientali.
// 7. Costi e convenienza
// Tariffe accessibili: Sebbene possa sembrare che dormire in mezzo alla natura sia gratuito, i campeggi offrono un ottimo rapporto qualità-prezzo considerando i servizi inclusi.
// Risparmio di tempo: La presenza di servizi come negozi di generi alimentari e noleggio di attrezzature all'interno del campeggio può ridurre il tempo e lo sforzo necessario per organizzare l'esperienza di campeggio.
// In sintesi, dormire in un campeggio offre una combinazione di sicurezza, comfort e convenienza che può migliorare significativamente l'esperienza di campeggio rispetto al dormire in mezzo alla natura selvaggia.
