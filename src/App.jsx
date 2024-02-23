
import './App.css'
import img1 from './assets/nails1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'

function App() {

  return (
    <>
    <div className='flex flex-col justify-between font-extralight'>
    <section className="flex text-center justify-center">
	<div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row md:space-x-12 text-center">
		<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg md:ml-5 mt-20">
			<h1 className="md:text-7xl leadi text-7xl font-Ahganirya text-center">NUDE</h1>
			<p className="mt-5 mb-8 md:text-md sm:mb-12 text-center font-Ahganirya">BEAUTY BAR</p>
			<div className="flex flex-col  sm:items-center sm:justify-center text-center md:mt-20 mt-12">
				<a rel="noopener noreferrer" href="https://outlook.office365.com/owa/calendar/NudeBeautyBar@bauzantech.com/bookings/" className=" ">
        <button type="button" className=" bg-stone-200  rounded-lg text-xl px-7 py-5 me-2 mb-2 font-Vanilla shadow-lg ">Agendar Cita</button>
        </a>
			</div>
		</div>
    <div className="flex justify-center mt-20">
          <div className="grid gap-4 md:ml-28">
              <div>
                  <img className="h-96 w-96 rounded-full shadow-lg hover:shadow-2xl duration-500" src={img1} alt=""/>
              </div>
      </div>
          </div>
	</div>
</section>

<section className='my-20 flex flex-col justify-center text-center Sm:my-20 md:mt-32'>
  <h2 className='font-Vanilla  text-6xl h-auto mb-12'>
  Welcome to your Happy Place
  </h2>
  <div className='mt-15'>
    <a href="https://instagram.com/nudebeauty.bar?igshid=OGQ5ZDc2ODk2ZA==">
    <button className='px-36 py-5 rounded-2xl shadow-lg bg-stone-200 text-xl font-Vanilla '>
      Instagram
    </button>
    </a>
  </div>
  <div className='my-10'>
    <a href="https://maps.app.goo.gl/8ZpiX9BTwxrvPjf29?g_st=ic">
    <button className='px-10 py-5 rounded-2xl shadow-lg bg-stone-200 text-xl font-Vanilla '>
      ¿Cómo llegar a Nude Beauty Bar?
    </button>
    </a>
  </div>
  <div className=''>
    <a href="https://wa.me/message/JLZRSG6OKNAAD1">
    <button className='px-36 py-5 rounded-2xl shadow-lg bg-stone-200 text-xl font-Vanilla ' >
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
                 <div className=" bg-cover bg-center" >
                 <img
                  alt=""
                  src={img3}
                  class="h-72 w-96 rounded-full bg-cover sm:h-80 lg:h-96 shadow-lg"
                />
                </div>
              
            </div>
            <div className="flex-shrink-0 m-6 relative  max-w-xs ">
                 <div className=" bg-cover bg-center img" >
                 <img
                  alt=""
                  src={img4}
                  class="h-72 w-96 rounded-full bg-cover sm:h-80 lg:h-96 shadow-lg"
                />
                </div>
              
            </div>
          
           
            
          </div>
    </section>
</div>
      
    </>
  )
}

export default App