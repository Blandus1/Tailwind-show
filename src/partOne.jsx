import occupation from './assets/occupation.jpeg';
function PartOne(){
    return (
        <>
        <div  class="h-screen w-full bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${occupation})` }} />
         <div class="absolute top-130 left-0 w-3/5 h-full opacity-90 bg-gray-200 filter blur-[100px]"></div>
        <div class="absolute top-150 left-50 text-[38px]">
        <p class=" w-150 h-25 absolute top-35 text-[46px] ">We are here<span class="font-bold text-orange-400"> For you</span>.</p>
        <p class=" w-90  absolute top-55 text-blue-800 text-[25px] font-bold">OCCUPATIONAL HAZARDS.</p>
        <button class="w-80 h-25 absolute top-70  bg-blue-900 text-white rounded-[5px]">Learn More</button>
        </div>
       
        
       
        </>
    )
}

export default PartOne;