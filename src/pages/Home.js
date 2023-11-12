import image from "../images/agrochain.png";
function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex place-self-center text-xl font-extrabold mt-6">
        Welcome to AgroChain
      </div>
      <img src={image} className="h-[300px] w-60 shadow mt-5"></img>
      <div className="mt-5 px-2 text-center">
        Empowering Farmers and Buyers in a Trustworthy Multi-Supply Chain
        Ecosystem
      </div>
      <div className="px-2 text-justify font-thin mt-1">
        AgroChain is a decentralized application (dApp) designed to streamline
        and enhance the agricultural supply chain, ensuring a seamless and
        trustworthy experience for both farmers and buyers. Our platform not
        only facilitates efficient transactions but also addresses key
        challenges in the agricultural sector by integrating smart contracts and
        a reliable lending system{" "}
      </div>
    </div>
  );
}

export default Home;
