import carreira from '../assets/carreira.png'
import ia from '../assets/ia.png'
import nda from '../assets/nda.png'
import comunidade from '../assets/comunidade.png'
import logo from '../assets/logo.png'

export default function Main() {
  return (
    <div className="min-h-screen bg-[#000524] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className='flex justify-center items-center'>
            <img src={logo} alt="Logo" height={40} width={150} />
            </div>
            
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
            Somos uma Edtech fundada em 2025, com um propósito claro: transformar carreiras e gerar resultados reais.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://www.nextdevsacademy.com.br/" target='_blank' className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <img 
              src={nda} 
              alt="Pessoa trabalhando com dados" 
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a href="/link2" className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <img 
              src={comunidade} 
              alt="Marketing e análise de dados" 
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a href="/link3" className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <img 
              src={carreira} 
              alt="Especialista em projetos" 
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
          <a href="/link4" className="block border-[5px] border-[#00AFEF] rounded-2xl h-90 max-md:h-48 bg-transparent overflow-hidden flex items-center justify-center max-md:bg-black hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <img 
              src={ia} 
              alt="Engenheira de software" 
              className="w-full h-full object-cover max-md:object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}