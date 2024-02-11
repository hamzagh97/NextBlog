import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center p-20">
        <h1 className="font-poppins text-8xl font-black uppercase">blog</h1>
        <div className="mt-3 flex cursor-pointer space-x-8">
          <BsTwitter className="hover:text-blue-400" size={20} />
          <BsLinkedin className="hover:text-blue-800" size={20} />
          <BsYoutube className="hover:text-red-600" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
