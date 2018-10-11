import ReactDOM from "react-dom";

var i = 0;
function tick() {
  const date = (
    <div>
      <h1>It is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(date, document.getElementById("test" + i));
  i++;
  if (i === 5) i = 0;
  console.log("test" + i);
}
//setInterval(tick, 5000);
