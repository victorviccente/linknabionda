import carreira from "../assets/carreira.png";
import ia from "../assets/ia.png";
import nda from "../assets/nda.png";
import comunidade from "../assets/comunidade.png";
import logo from "../assets/logo.png";
import materiais from "../assets/materiais.png";
import trabalheconosco from "../assets/trabalheconosco.png";

// icons
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Main() {
  return (
    <div className="min-h-screen bg-[#000524]">
      <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md flex justify-center items-center w-full border-b py-4 px-4 border-gray-800">
        <img src={logo} alt="Logo" height={40} width={80} />
      </header>
      <div className="max-w-6xl mx-auto py-6">
        

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.nextdevsacademy.com.br/"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={nda}
              alt="Pessoa trabalhando com dados"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a
            href="https://chat.whatsapp.com/Et1v8rhOw7hH85OXlwkAwg"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={comunidade}
              alt="Marketing e análise de dados"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a
            href="https://www.nextdevsacademy.com.br/cursos/python"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={carreira}
              alt="Especialista em projetos"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a
            href="https://www.nextdevsacademy.com.br/cursos/ia"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={ia}
              alt="Engenheira de software"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a
            href="https://www.nextdevsacademy.com.br/ebook"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={materiais}
              alt="Engenheira de software"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/nextdevsacademy"
            target="_blank"
            className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={trabalheconosco}
              alt="Engenheira de software"
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
        </div>
      </div>
      <footer className="w-full relative mt-6 border-t border-gray-800 flex px-8 items-center justify-between py-6 lg:space-y-0 space-y-8 flex-col lg:flex-row overflow-hidden">
        {/* Content */}
        <div className="flex flex-col items-center lg:items-start space-y-2 relative z-10">
          <img src={logo} alt="Logo" height={50} width={50} />
          <p className="text-gray-400 text-center">
            &copy; Todos os direitos reservados - NEXT DEVS ACADEMY 2025
          </p>
        </div>
        <div className="flex items-center space-x-2 relative z-10">
          <a
            href="https://chat.whatsapp.com/Et1v8rhOw7hH85OXlwkAwg"
            target="_blank"
          >
            <FaWhatsappSquare className="size-8 text-[#00afef]/80 hover:text-[#00afef] transition-colors duration-300 hover:drop-shadow-lg" />
          </a>
          <a href="https://www.instagram.com/nextdevsacademy/" target="_blank">
            <FaInstagramSquare className="size-8 text-[#00afef]/80 hover:text-[#00afef] transition-colors duration-300 hover:drop-shadow-lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/nextdevsacademy/"
            target="_blank"
          >
            <FaLinkedin className="size-8 text-[#00afef]/80 hover:text-[#00afef] transition-colors duration-300 hover:drop-shadow-lg" />
          </a>
        </div>
      </footer>
    </div>
  );
}
