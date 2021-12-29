import personCSS from "./../styles/personCSS.module.css";
/* <Person  index="" picPath="" fullName="" certification="" /> */

function Person(props) {
  let imgId = "img" + (props.index + 1);
  return (
    <div className={personCSS.person}>
      <img
        id={personCSS[imgId]}
        className={personCSS.personImg}
        src={props.picPath}
        alt={props.fullName + "-img"}
      />
      <div className={personCSS.personDetails}>
        <h1 className={personCSS.fullName}>{props.fullName}</h1>
        <p className={personCSS.certification}>{props.certification}</p>
      </div>
    </div>
  );
}

export default Person;

