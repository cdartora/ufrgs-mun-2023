import HeroImage from "../assets/20-anos.svg";

export default function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-center md:items-center max-w-6xl mx-auto py-8 px-4 md:px-8 content">
        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <img
            src={HeroImage}
            alt="Comemoração de 20 anos da conferência UFRGS Mun"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        {/* Text */}
        <div className="mt-10 md:w-1/2 flex items-center justify-center mb-10 md:mb-0 h-full">
          <div className="text-lightTone font-bold text-3xl md:text-4xl flex flex-col text-left md:text-left content raleway">
            <span>ATRAVESSE A</span>
            <span>SUPERFÍCIE.</span>
            <span>ENCONTRE</span>
            <span>RESPOSTAS</span>
            <span>DESCONHECIDAS</span>
            <div className="flex flex-col font-normal text-right text-2xl barlow">
              <span>break the surface.</span>
              <span>reach hidden answers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
