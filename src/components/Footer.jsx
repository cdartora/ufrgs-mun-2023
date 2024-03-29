import ufrgsMunLogo from "../assets/footer/ufrgs-mun.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import youtube from "../assets/footer/youtube.svg";

function Footer() {
  return (
    <div className="bg-white flex justify-center items-center py-8">
      <div className="flex flex-col max-w-screen-md">
        <img src={ufrgsMunLogo} alt="logo UFRGS Mun 2023" />
        <div className="flex justify-between py-2">
          <a href="https://www.instagram.com/ufrgsmun/" target="_blank">
            <img src={instagram} alt="logo instagram" className="w-5" />
          </a>
          <a href="https://www.youtube.com/@UFRGSMUN" target="_blank">
            <img src={youtube} alt="logo youtube" className="w-5" />
          </a>
          <a href="https://www.facebook.com/ufrgsmun" target="_blank">
            <img src={facebook} alt="logo facebook" className="w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
