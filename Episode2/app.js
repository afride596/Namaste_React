import React from "react";
import ReactDom from "react-dom/client";

// ReactElement
const heading2 = <h1 className="AFRIDE">Namaste maker</h1>;
const heading3 = <h1 className="AFRIDE">Namaste maker</h1>;
// ReactComponent
const heading1 = () => <h1 className="AFRIDE">Namaste AFRIDE🚀</h1>;
const Heading = () => <h1 className="AFRIDE">Namaste React🚀</h1>;

const FunctionalComponet = () => {
  return (
    <div id="conatiner">
      {/* {heading2} */}
      {/* {heading1()} */}
      {<heading1 />}
      
      <Heading></Heading>
      {/* <h1>AFRIDE is Live🚀</h1> */}
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<FunctionalComponet />);
