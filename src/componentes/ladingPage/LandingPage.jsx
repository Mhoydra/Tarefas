import { useState } from 'react'
import { motion, spring } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import logo from '../../img/landingPage/logo.png'
import logoB from '../../img/landingPage/logoB.png'
import logoST from '../../img/landingPage/logoST.png'
import alter from '../../img/landingPage/alter.png'
import corrida from '../../img/landingPage/corrida.png'
import flexivel from '../../img/landingPage/flexivel.png'
import graciane from '../../img/landingPage/graciane.png'
import matheus from '../../img/landingPage/matheus.png'
import zilu from '../../img/landingPage/zilu.png'
import juliana from '../../img/landingPage/juliana.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

let G = "Os treinos para iniciantes ajudaram muito na minha rotina."
let M = "Gostei porque o app passa uma vibe motivadora sem ser complicado."
let Z = "Achei muito legal poder acompanhar minha evolução no aplicativo."
let J = "As metas diarias me motivam a continuiar treinando."

let g = "-Graciane"
let m = "-Matheus"
let z = "-Zilu"
let j = "-Juliana"

const objetos = [{
  imagem: graciane,
  frase: G,
  nome: g
},{
  imagem: matheus,
  frase: M,
  nome: m
},{
  imagem: zilu,
  frase: Z,
  nome: z
},{
  imagem: juliana,
  frase: J,
  nome: j
}
]



function LandingPage() {

  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? objetos.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === objetos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div> 
      <nav className='flex flex-row bg-black justify-between items-center'>
        <div className='flex flex-row justify-between gap-5 items-center'>

          <img src={logo} alt="logo" />
          <img src={logoB} alt="logoB" />

        </div>
        
        <div className='flex flex-row gap-5 items-center'>

          <p>Treinos</p>
          <p>Ajuda</p>
          <button onClick={() => navigate('/login')}
          className='text-[#FF0000] hover:border-y-4 px-4 py-1'>Logar</button> { /*linkar componente de login: LoginForms*/ }
          
        </div>
      </nav>
      <section className='flex flex-row justify-between gap-10'>
        <div className='flex flex-col justify-center gap-5 px-20'>

          <h2 className='w-80 align-text-bottom font-bold text-4xl'>Less planning more progress.</h2>
          <p className='align-text-bottom'>Treinos simples, resultados reais. Comece no seu ritmo, acompanhe sua evolução e transforme pequenos hábitos em grandes mudanças</p>

        </div>
        <div>

          <img src={logoST} alt="logoST" />

        </div>
      </section> 
      <section > 
        <div className='flex flex-col gap-5'>
          <div className='flex text-center justify-center'>

            <h2 className='font-bold text-2xl w-110 py-20'>Planeje um treino com base nas suas <span className='text-red-600 text-3xl'>PREFERÊNCIAS</span></h2>

          </div>
          <div className='flex justify-between'>

            <img src={alter} alt="pessoa com alter" />
            <img src={flexivel} alt="pessoa fazendo flexão" />
            <img src={corrida} alt="dupla correndo pagar as conta"/>

          </div>
        </div>
        <div >

          <p className='font-bold text-2xl py-20'>Veja oque os nossos usuários tem a dizer sobre nosso aplicativo:</p>

          {/*Carrousel pararelo de obj*/}
          
          <div className='relative flex flex-col items-center py-20'>
            <div className='overflow-hidden rounded-4xl'>
              <motion.div className="flex" 
                initial={{ x:0 }} 
                animate={{ x:-currentIndex * 320 }}
                transition={{type:spring, stiffness:320, damping:40 }}>
                {objetos.map((objeto, index) => (
                  <motion.div className="min-w-full w-20" key={index}>
                    <div className='flex flex-col gap-5'>
                      <img src={objeto.imagem} alt="" className='w-full'/>
                      <p className='text-center'>{objeto.frase}</p>
                      <p className='text-end px-10'>{objeto.nome}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className='flex flex-row w-full justify-between mt-6'>
              <button
                onClick={prevSlide} 
                className='bg-gray-100 p-5 rounded-full shadow transition-all hover:opacity-70'>

                <FaArrowLeft className='text-black text-2xl'/>

              </button>
              <div className='flex flex-row items-center gap-3'>

                {objetos.map((_, index) => (
                  <p
                    key={index} 
                    className={`cursor-pointer text-2xl ${index === currentIndex ? "text-gray-800" : "text-gray-400"
                    }`}
                  >*</p>
                ))}

              </div>
              <button 

                onClick={nextSlide}
                className='bg-gray-100 p-5 rounded-full shadow transition-all hover:opacity-70'>
                <FaArrowRight className='text-black text-2xl'/>

              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='flex flex-row justify-between gap-5 items-center'>
          <div className='flex items-center'>

            <img src={logo} alt="logo" />
            <img src={logoB} alt="logoB" className='h-10'/>

          </div>
          <div className='flex flex-col text-center'>

            <h2 className='text-2xl'>Company</h2>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>

          </div>
          <div className='flex flex-col w-50'>

                <h2>Direitos autorais:</h2>
                <p></p>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;