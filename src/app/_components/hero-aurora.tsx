import { ArrowRightIcon, RocketIcon } from 'lucide-react'
import { AuroraBackground } from '../_components/aurora-background'

export function HeroAurora() {
  return (
    <section className='relative border-b border-primary/50 bg-[linear-gradient(315deg,#111827_0%,#112327_25%,#272311_50%,#112327_75%,#111827_100%)] animate-gradient-move bg-size-[400%_400%]'>
      <AuroraBackground>
        <div className='max-w-7xl w-full mx-auto pt-[150px] px-6 flex flex-col items-center gap-12 z-2'>
          <div className='flex flex-col items-center max-w-[600px]'>
            <div className='flex flex-col items-center animate-hero-title-in'>
              <div className='flex gap-1.5 text-primary items-center justify-center mb-4 px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm'>
                <RocketIcon className='size-3.5 opacity-95' />
                <span className='font-medium text-center'>
                  Sua aprovação começa aqui
                </span>
              </div>

              <h1 className='text-center text-6xl md:6xl font-display font-semibold text-white mb-6 leading-[1.1]'>
                Aprenda Física
                <br />
                <span className='text-primary'>de verdade!</span>
              </h1>
            </div>

            <div className='flex flex-col items-center animate-hero-text-in'>
              <p className='text-lg text-gray-300 mb-8 leading-relaxed text-center'>
                O Fisiquei vai mudar a forma como você enxerga a Física.
                Prepare-se para o <strong>ENEM e vestibulares</strong> com a
                melhor plataforma do Brasil.
              </p>

              <div className='flex items-center gap-4'>
                <a
                  href='https://app.fisiquei.com.br/cadastro'
                  className='flex items-center gap-3 px-6 py-3 bg-primary font-bold rounded-lg text-primary-foreground text-base hover:scale-105 transition-all hover:bg-primary-light text-center'
                >
                  Comece grátis
                </a>
                <a
                  href='https://app.fisiquei.com.br/ofertas'
                  className='flex items-center gap-3 px-6 py-3 bg-gray-950/15 border border-gray-400 text-white/95 font-bold rounded-lg text-base hover:scale-105 transition-all hover:bg-gray-950/50 hover:text-white text-center'
                >
                  Ver planos <ArrowRightIcon className='size-4' />
                </a>
              </div>
            </div>
          </div>

          <div className='w-full animate-hero-video-in -mb-[140px]'>
            <div className='relative z-20 overflow-hidden rounded-[10px] border-10 border-[#121212] bg-black shadow-[0_0_20px_0px_rgba(255,193,7,0.15)]'>
              <div className='relative w-full aspect-video bg-gray-600 overflow-hidden'>
                <iframe
                  id='panda-2d7450a4-3f1a-42e3-8ece-775a22461b5a'
                  className='border-none absolute top-0 size-full'
                  src='https://player-vz-b027ba5d-190.tv.pandavideo.com.br/embed/?v=2d7450a4-3f1a-42e3-8ece-775a22461b5a&controls=play-large%2Crewind%2Cplay%2Cfast-forward%2Cprogress%2Ccurrent-time%2Cvolume%2Csettings%2Cpip%2Cfullscreen&autoplay=true&smartAutoplay=false&mutedIndicatorIcon=true&mutedIndicatorTextTop=Clique%20aqui&mutedIndicatorTextBottom=para%20ativar%20o%20som&mutedIndicatorTextColor=&mutedIndicatorBackgroundColor=&disableForward=false&hideControlsOnStart=false&playOpensFullscreen=false&playOpensFullscreenNative=false&alternativeProgress=false&alternativeProgressDefaultVelocity=false&alternativeProgressVelocity=false&alternativeProgress2xLimit=false&alternativeProgressHeight=false&disablePause=false&bigPlayButtonSize=150&bigPlayButtonIconSize=85.71428571428571&endThumbnail=https%3A%2F%2Ffisiquei.com.br%2Fwp-content%2Fuploads%2F2025%2F07%2FThumb-Video-de-apresentacao.jpg&page_id=33933&preview=true'
                  allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}
