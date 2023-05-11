import ufrgsMunLogo from "../assets/ufrgs-mun-footer.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <div className="bg-white flex justify-center items-center py-8">
      <div className="flex flex-col w-1/3">
        <img src={ufrgsMunLogo} alt="logo UFRGS Mun 2023" />
        <div className="flex justify-between py-2">
          <a href="" target="_blank">
            <img src={instagram} alt="logo instagram" className="w-5" />
          </a>
          <a href="" target="_blank">
            <img src={youtube} alt="logo youtube" className="w-5" />
          </a>
          <a href="" target="_blank">
            <img src={facebook} alt="logo facebook" className="w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
