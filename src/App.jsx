import "./App.css";
import img1 from "./assets/nails1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between font-extralight bg-nude">
        <section className="flex text-center justify-center">
          <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row md:space-x-12 text-center">
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg md:ml-5 mt-20">
              <h1 className="md:text-9xl leadi text-9xl font-DMSerif text-center text-nude2">
                NUDE
              </h1>
              <p className="mt-0 mb-8 md:text-md text-3x1 sm:mb-12 text-center font-sans-serif text-nude2">
                B E A U T Y . B A R
              </p>
              <div className="flex flex-col  sm:items-center sm:justify-center text-center md:mt-20 mt-12">
                <a
                  rel="noopener noreferrer"
                  href="https://outlook.office365.com/owa/calendar/NudeBeautyBar@bauzantech.com/bookings/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className=" bg-nude2  rounded-lg text-xl px-7 py-5 me-2 mb-2 font-DMSerif shadow-lg text-nude"
                  >
                    Agendar Cita
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="grid gap-4 md:ml-28">
                <div>
                  <img
                    className="h-96 w-96 rounded-full shadow-lg hover:shadow-2xl duration-500"
                    src={img1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 flex flex-col justify-center text-center Sm:my-20 md:mt-32">
          <h2 className="font-DMSerif  text-6xl h-auto mb-12 text-gray-800">
            Welcome to your Happy Place
          </h2>
          <div className="mt-15">
            <a
              href="https://instagram.com/nudebeauty.bar?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <button className="px-36 py-5 rounded-2xl shadow-lg bg-nude2 text-xl font-DMSerif text-nude">
                Instagram
              </button>
            </a>
          </div>
          <div className="my-10">
            <a
              href="https://maps.app.goo.gl/8ZpiX9BTwxrvPjf29?g_st=ic"
              target="_blank"
              _
            >
              <button className="px-10 py-5 rounded-2xl shadow-lg bg-nude2 text-xl font-DMSerif text-nude">
                ¿Cómo llegar a Nude Beauty Bar?
              </button>
            </a>
          </div>
          <div className="">
            <a href="https://wa.me/message/JLZRSG6OKNAAD1" target="_blank">
              <button className="px-36 py-5 rounded-2xl shadow-lg bg-nude2 text-xl font-DMSerif text-nude">
                WhatsApp
              </button>
            </a>
          </div>
        </section>
        <section className="">
          <div className="md:mt-15 flex flex-wrap items-center justify-center">
            <div className="flex-shrink-0 m-6 relative  max-w-xs ">
              <div className=" bg-cover bg-center img">
                <img
                  alt=""
                  src={img2}
                  class="h-72 w-96 rounded-full bg-cover sm:h-80 lg:h-96 shadow-lg"
                />
              </div>
            </div>
            <div className="flex-shrink-0 m-6 relative  max-w-xs ">
              <div className=" bg-cover bg-center">
                <img
                  alt=""
                  src={img3}
                  class="h-72 w-96 rounded-full bg-cover sm:h-80 lg:h-96 shadow-lg"
                />
              </div>
            </div>
            <div className="flex-shrink-0 m-6 relative  max-w-xs ">
              <div className=" bg-cover bg-center img">
                <img
                  alt=""
                  src={img4}
                  class="h-72 w-96 rounded-full bg-cover sm:h-80 lg:h-96 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-10 rounded-lg max-h-full sm:flex sm:flex-col sm:text-center sm:justify-between ">
          <div className="w-full max-w-screen-xl mx-auto md:py-8 lg:px-8">
            <div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row sm:justify-between flex flex-col items-center space-y-7 mt-4 md:mt-0">
              <ul className="flex flex-wrap text-center items-center mb-6 text-xs font-semibold text-gray-500 sm:mb-0 ">
                <span className="block text-sm text-gray-500 sm:text-center ">
                  © 2024{" "}
                  <a
                    href="https://www.bauzantech.com/"
                    className="hover:underline"
                  >
                    Bauzan Tech Solutions
                  </a>
                  . All Rights Reserved.
                </span>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
