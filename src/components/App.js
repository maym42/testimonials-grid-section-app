import appCSS from "./../styles/appCSS.module.css";
import data from "./../data";
/* import components */
import Card from "./Card";
import PageFooter from "./PageFooter";

function App() {
  function fetchDataCards() {
    return data.map((card, index) => (
      <Card
        key={index}
        index={index}
        picPath={card.picPath}
        fullName={card.fullName}
        certification={card.certification}
        qute={card.qute}
        fullText={card.fullText}
      />
    ));
  }
  return (
    <div>
      <main className={appCSS.allCardsContainer}>{fetchDataCards()}</main>
      <PageFooter />
    </div>
  );
}

export default App;
