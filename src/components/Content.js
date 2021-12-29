import contentCSS from "./../styles/contentCSS.module.css";

/* <Content qute="" fullText="" /> */
function Content(props) {
  return (
    <div className={contentCSS.content}>
      <h2>{props.qute}</h2>
      <p>{props.fullText}</p>
    </div>
  );
}

export default Content;
