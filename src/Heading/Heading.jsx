import { IoPlayOutline } from "react-icons/io5";

const Heading = () => {
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/cK5pTRGj/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
       <div className="flex ">
         <button className="flex justify-center items-center btn rounded-full text-[#4F39F6] bg-[#4f39f62e]">  <span class="relative flex size-3">

  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75">

  </span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>
            
            New: AI-Powered Tools Available</button>
       </div>


      <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products.
      </p>
     <div className="flex gap-4">
         <button className="btn btn-primary rounded-full">Explore Products</button>
         <button className="btn btn-primary bg-transparent text-[#6E38F5] rounded-full flex items-center gap-2">
            <IoPlayOutline></IoPlayOutline> <span>Watch Demo</span>
         </button>
     </div>
    </div>
  </div>
</div>
    );
};

export default Heading;