function PartOne(){
    return (
        <>
        <div  class="h-screen w-full bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url('/occupation.jpeg')` }}  />
         <div class="absolute top-70 left-0 w-3/5 h-full opacity-100 bg-gray-200 filter blur-[80px]"></div>
        <div class="absolute top-110 left-50 text-[38px]">
        <p class=" w-150 h-25 text-[36px] ">We are here<span class="font-bold text-orange-400"> For you</span>.</p>
        <p class=" w-90  absolute top-15 text-blue-800 text-[15px] font-bold">OCCUPATIONAL HAZARDS.</p>
        <button class="w-70 h-20 absolute top-30 font-bold bg-blue-900 text-white rounded-[5px] text-[24px]">Learn More</button>
        </div>
       
        
       
        </>
    )
}

export default PartOne;