import "./index.css";
import image from "/assets/images/avatar-jessica.jpeg";
function App() {
  return (
    <>
      <div className="bg-black min-h-lvh w-full flex justify-center items-center">
        <div className="bg-[#1F1F1F] m-auto flex flex-col items-center rounded-[12px]">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              borderRadius: "12px",
            }}
          >
            <div style={{ padding: "40px 148px 24px 148px" }}>
              <img
                src={image}
                alt="description of the image"
                className="rounded-full w-[88px] h-[88px]"
              />
            </div>
            <div style={{}}>
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
            </div>
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              "Front-end developer and avid reader."
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              gap: "10px",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#333333",
                color: "white",
                height: "45px",
                width: "304px",
                borderRadius: "8px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Github
            </div>
            <div
              style={{
                backgroundColor: "#333333",
                color: "white",

                height: "45px",
                width: "304px",
                borderRadius: "8px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Frontend Mentor
            </div>
            <div
              style={{
                backgroundColor: "#333333",
                color: "white",

                height: "45px",
                width: "304px",
                borderRadius: "8px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Linkedin
            </div>
            <div
              style={{
                backgroundColor: "#333333",
                color: "white",

                height: "45px",
                width: "304px",
                borderRadius: "8px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Twitter
            </div>
            <div
              style={{
                backgroundColor: "#333333",
                color: "white",

                height: "45px",
                width: "304px",
                borderRadius: "8px",
                textAlign: "center",
                padding: "12px",
                marginBottom: "40px",
              }}
            >
              Instagram
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
