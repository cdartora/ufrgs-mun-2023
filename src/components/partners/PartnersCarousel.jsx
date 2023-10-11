import chouette from "../../assets/partners/chouette.jpg";
import fraport from "../../assets/partners/fraport.png";
import cervantes from "../../assets/partners/cervantes.png";
import novasVeredas from "../../assets/partners/novas-veredas.png";

const partners = [
  {
    name: "Chouette",
    img: chouette,
    url: "https://www.chouette.net.br/",
  },
  {
    name: "Fraport",
    img: fraport,
    url: "https://portoalegre-airport.com.br/pt/institucional/a-fraport",
  },
  {
    name: "Instituto Cervantes",
    img: cervantes,
    url: "https://portoalegre-airport.com.br/pt/institucional/a-fraport",
  },
  {
    name: "Novas Veredas",
    img: novasVeredas,
    url: "https://www.novasveredas.com.br/",
  },
];

function PartnersCarousel() {
  return (
    <div className="scroll-smooth pb-5 px-10 mt-4 flex w-full gap-10 snap-x overflow-x-auto ">
      {partners.map(({ name, img, url }) => (
        <a
          href={url}
          target="_blank"
          className="min-w-[200px] mt-4 text-lg font-bold hover:underline underline-offset-2"
        >
          <img
            src={img}
            className="h-48 w-48 snap-center rounded-xl shadow-lg shadow-black/10"
          />

          {name}
        </a>
      ))}
    </div>
  );
}

export default PartnersCarousel;
