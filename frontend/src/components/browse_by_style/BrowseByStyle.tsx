import casualImg from "../../assets/casual-img.png";
import formalImg from "../../assets/formal-img.png";
import partyImg from "../../assets/party-img.png";
import gymImg from "../../assets/gym-img.png";

const BrowseByStyle = () => {
  const data = [
    {
      image: casualImg,
      name: "Casual",
    },
    {
      image: formalImg,
      name: "Formal",
    },
    {
      image: partyImg,
      name: "Party",
    },
    {
      image: gymImg,
      name: "Gym",
    },
  ];

  return (
    <section className="w-full max-w-[1239px] mx-auto p-10 bg-[#f0f0f0] rounded-2xl my-10 lg:my-20">
      <h2 className="font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black uppercase text-center mb-10">
        BROWSE BY dress STYLE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid_child gap-5">
        {data &&
          data.map((item: any) => {
            return (
              <div className="w-full group relative" key={item.name}>
                <img
                  src={item.image}
                  alt=""
                  className="object-cover rounded-2xl group-hover:scale-105 transition-all ease-in-out duration-300 mb-1 w-full h-full"
                />
                <p className="text-2xl font-satoshi text-black font-bold absolute top-5 left-5">
                  {item.name}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default BrowseByStyle;
