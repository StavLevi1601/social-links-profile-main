import "./index.css";
import image from "/assets/images/avatar-jessica.jpeg";

const links = ["GitHub", "Frontend Mentor", "Linkedin", "Twitter", "Instagram"];

function App() {
  return (
    <>
      <div className="bg-black min-h-lvh w-full flex justify-center items-center">
        <div className="bg-[#1F1F1F] m-auto flex flex-col items-center rounded-[12px]">
          <div className="flex flex-col gap-[24px] rounded-[12px]">
            <div className="pt-[40px] pr-[148px] pb-[24px] pl-[148px] ">
              <img
                src={image}
                alt="description of the image"
                className="rounded-full w-[88px] h-[88px]"
              />
            </div>
            <div>
              <div className="text-white text-center">Jessica Randall</div>
              <div className="text-[#C4F82A] text-center">
                London, United Kingdom
              </div>
            </div>
            <div className="text-white text-center mb-[24px]">
              "Front-end developer and avid reader."
            </div>
          </div>
          <div className="flex flex-col gap-[16px] ">
            {links.map((link, index) => (
              <div
                key={link}
                className={`bg-[#333333] text-white h-[45px] w-[304px] rounded-[8px] text-center p-[12px] ${
                  index === links.length - 1 ? "mb-[24px]" : ""
                }`}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
