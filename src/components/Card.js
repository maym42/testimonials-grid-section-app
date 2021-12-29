/*import "./../App.css";*/
import cardCSS from "./../styles/cardCSS.module.css";
/*components */
import Person from "./Person";
import Content from "./Content";
/*  <Card  index="" picPath="" fullName="" certification="" qute="" fullText="" /> */

function Card(props) {
  let cardId = "card" + (props.index + 1);
  return (
    <article id={cardCSS[cardId]} className={cardCSS.card}>
      <figure></figure>
      <Person
        index={props.index}
        picPath={props.picPath}
        fullName={props.fullName}
        certification={props.certification}
      />
      <Content qute={props.qute} fullText={props.fullText} />
    </article>
  );
}

export default Card;
