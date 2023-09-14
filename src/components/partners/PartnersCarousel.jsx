import partnerImg from '../../assets/roche-color.png';

const partners = [
    {
        name: "Instituto Roche",
        img: partnerImg,
        description: "The Roche Institute was founded in the year of 1973 and its main objective relies on the spreading of the French language and culture in Porto Alegre. Founded by Monsieur and Madame Roche, the Institute has its own teaching method, which was envisioned and developed especially for Brazilians and its culture and language.Throughout its 45 years, Roche consolidated itself as a reference in quality and success, providing knowledge and proficiency to all those who wish to learn French."
    },
    {
        name: "Instituto Roche",
        img: partnerImg,
        description: "The Roche Institute was founded in the year of 1973 and its main objective relies on the spreading of the French language and culture in Porto Alegre. Founded by Monsieur and Madame Roche, the Institute has its own teaching method, which was envisioned and developed especially for Brazilians and its culture and language.Throughout its 45 years, Roche consolidated itself as a reference in quality and success, providing knowledge and proficiency to all those who wish to learn French."
    },
    {
        name: "Instituto Roche",
        img: partnerImg,
        description: "The Roche Institute was founded in the year of 1973 and its main objective relies on the spreading of the French language and culture in Porto Alegre. Founded by Monsieur and Madame Roche, the Institute has its own teaching method, which was envisioned and developed especially for Brazilians and its culture and language.Throughout its 45 years, Roche consolidated itself as a reference in quality and success, providing knowledge and proficiency to all those who wish to learn French."
    },
    {
        name: "Instituto Roche",
        img: partnerImg,
        description: "The Roche Institute was founded in the year of 1973 and its main objective relies on the spreading of the French language and culture in Porto Alegre. Founded by Monsieur and Madame Roche, the Institute has its own teaching method, which was envisioned and developed especially for Brazilians and its culture and language.Throughout its 45 years, Roche consolidated itself as a reference in quality and success, providing knowledge and proficiency to all those who wish to learn French."
    },
    {
        name: "Instituto Roche",
        img: partnerImg,
        description: "The Roche Institute was founded in the year of 1973 and its main objective relies on the spreading of the French language and culture in Porto Alegre. Founded by Monsieur and Madame Roche, the Institute has its own teaching method, which was envisioned and developed especially for Brazilians and its culture and language.Throughout its 45 years, Roche consolidated itself as a reference in quality and success, providing knowledge and proficiency to all those who wish to learn French."
    },
];

function PartnersCarousel() {
  return (
<div className="scroll-smooth pb-5 px-10 mt-4 flex w-full gap-10 snap-x overflow-x-auto ">
    {partners.map(({ name, img, description }) => (
    <div className="min-w-[200px]">
      <img
        src={img}
        className="h-48 w-full snap-center rounded-xl shadow-md shadow-black/20"
      />
      <h5 className="mt-4 text-lg">{name}</h5>
      <h6 className="font-light text-sm">{description}</h6>
    </div>
    ))}
</div>

  )
}

export default PartnersCarousel