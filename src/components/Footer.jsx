import React from "react";

let curentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {curentYear}</p>
    </footer>
  );
}
export default Footer;