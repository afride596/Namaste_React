// const heading = React.createElement("h3", {id:"headingg",abc:"style"},"Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am ur parent"),
    React.createElement("h3", {}, "I am ur parent")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am ur parent"),
    React.createElement("h3", {}, "I am ur parent")
  ),
  React.createElement(
    "div",
    { id: "child3" },
    React.createElement("h1", {}, "I am ur parent"),
    React.createElement("h3", {}, "I am ur parent")
  ),
]);
root.render(parent);
