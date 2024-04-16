import "./index.css";

function App() {
  return (
    <>
      <div
        className="bg-black min-h-lvh w-full flex justify-center items-center"
        style={{ backgroundColor: "#00000", margin: "auto" }}
      >
        <div
          className="bg-custom-card-gray min-h-36"
          style={{
            height: "611px",
            width: "304px",
            backgroundColor: "#1F1F1F",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <img
              src="/assets/images/avatar-jessica.jpeg"
              alt="description of the image"
              style={{
                borderRadius: "50%",
                width: "88px",
                height: "88px",
                margin: "40px auto",
              }}
            />
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Jessica Randall
          </div>
          <div
            style={{
              color: "#C4F82A",
              textAlign: "center",
            }}
          >
            London, United Kingdom
          </div>
          <div
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            "Front-end developer and avid reader."
          </div>
          <div
            style={{
              backgroundColor: "#333333",

              flexDirection: "column",
              gap: "10px",
              display: "flex",
              height: "45px",
              width: "304px",
            }}
          >
            <div style={{}}>dasdas</div>
            <div style={{}}>fsfs</div>
            <div style={{}}>fsfs</div>
            <div style={{}}>fsfs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
