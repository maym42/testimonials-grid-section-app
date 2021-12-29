import pageFooterCSS from "./../styles/pageFooterCSS.module.css";
function PageFooter(props) {
  return (
    <footer className={pageFooterCSS.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://github.com/maym42"
        target="_blank"
        rel="noopener noreferrer"
      >
        Maayan
      </a>
      .
    </footer>
  );
}

export default PageFooter;
