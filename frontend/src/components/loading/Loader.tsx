import loader from "../../assets/cart.gif"

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white/70 flex items-center justify-center'>
      <img src={loader} alt="" className="w-[100px] h-[100px]"/>    
    </div>
  );
}

export default Loader;
