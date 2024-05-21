import FaceView from "./pages/FaceView";

function App() {
  return (
    <>
      <div className="bg-slate-900 flex relative">
        <div className="h-[90vh] w-[3px] bg-slate-700 sm:ml-[10vw] mr-3 my-[5vh]"></div>

        <div className="z-10 flex-grow bg-slate-700 my-[7.5vh]">
          {/* All Prime Contents here... */}
          <FaceView />
        </div>

        <div className="h-[90vh] w-[3px] bg-slate-700 sm:mr-[10vw] ml-3 my-[5vh]"></div>
      </div>
    </>
  );
}

export default App;