import FaceView from "./pages/FaceView";

function App() {
  return (
    <>
      <div className="bg-slate-900 flex my-[10vh] relative">
        <div className="h-[80vh] w-[3px] bg-slate-700 ml-[10vw] mr-3"></div>

        <div className="z-10 flex-grow bg-slate-700">
          {/* All Prime Contents here... */}
          <FaceView />
        </div>

        <div className="h-[80vh] w-[3px] bg-slate-700 mr-[10vw] ml-3"></div>
      </div>
    </>
  );
}

export default App;