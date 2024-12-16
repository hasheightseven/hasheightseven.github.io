import './App.css';

function App() {
  return (
    <div className="App">
      <canvas className="App-Canvas"></canvas>
      <script>
        let appcanvas = document.getElementByID("App-Canvas");
        var ctx = appcanvas.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,0);
        ctx.moveTo(0,1);
        ctx.lineTo(200,0);
        ctx.moveTo(0,2);
        ctx.lineTo(200,0);
        ctx.moveTo(0,3);
        ctx.lineTo(200,0);
        ctx.stroke();
      </script>
    </div>
  );
}
export default App;
