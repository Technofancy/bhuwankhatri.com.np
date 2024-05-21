import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-slate-900 flex relative">
        <div className="h-[90vh] w-[3px] bg-slate-700 sm:ml-[10vw] mr-3 my-[5vh]"></div>

        <div className="w-full bg-slate-700 my-[7.5vh]">
          <Home />
        </div>

        <div className="h-[90vh] w-[3px] bg-slate-700 sm:mr-[10vw] ml-3 my-[5vh]"></div>
      </div>
    </>
  );
}

export default App;