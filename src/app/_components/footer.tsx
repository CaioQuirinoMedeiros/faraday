import InstagramLogo from '../../assets/icons/instagram-logo.svg'
import YoutubeLogo from '../../assets/icons/youtube-logo.svg'
import ThreadsLogo from '../../assets/icons/threads-logo.svg'
import XLogo from '../../assets/icons/x-logo.svg'

export function Footer() {
  return (
    <footer className='bg-[#121211] border-t border-[#101010] text-white py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-12 mb-8'>
          <div>
            <img
              src='/images/logo_fisiquei_365x100.png'
              className='h-[38px] aspect-365/100 object-contain mb-4'
              alt=''
            />
            <div className='text-sm text-gray-400 flex flex-col gap-2'>
              <p className='leading-relaxed'>
                Porque a Física não precisa ser complicada
              </p>
              <p className=''>
                Ajudando milhares de estudantes a conquistarem suas aprovações
                desde 2020
              </p>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Links rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-gray-400 hover:text-[#FFC107] transition-colors'
                  href='#plataforma'
                >
                  A Plataforma
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-[#FFC107] transition-colors'
                  href='#professor'
                >
                  Sobre o Professor
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-[#FFC107] transition-colors'
                  href='#plataforma'
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-[#FFC107] transition-colors'
                  href='#plataforma'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-4'>Redes sociais</h4>
            <p className='text-gray-400 text-sm mb-2'>
              Acompanhe dicas, conteúdos gratuitos e novidades
            </p>
            <div className='flex gap-3'>
              <a
                className='group size-10 bg-[#333] rounded-lg flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all'
                target='_blank'
                href='https://instagram.com/thales-quirino'
                aria-label='Acessar o Instagram do Fisiquei'
              >
                <InstagramLogo className='size-[16px] fill-white group-hover:fill-primary-foreground' />
              </a>
              <a
                className='group size-10 bg-[#333] rounded-lg flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all'
                target='_blank'
                href='https://youtube.com/@fisiquei'
                aria-label='Acessar o YouTube do Fisiquei'
              >
                <YoutubeLogo className='size-[18px] fill-white group-hover:fill-primary-foreground' />
              </a>
              <a
                className='group size-10 bg-[#333] rounded-lg flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all'
                target='_blank'
                href='https://x.com/fisiquei'
                aria-label='Acessar o X (Twitter) do Fisiquei'
              >
                <XLogo className='size-[15px] fill-white group-hover:fill-primary-foreground' />
              </a>
              <a
                className='group size-10 bg-[#333] rounded-lg flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-all'
                target='_blank'
                href='https://www.threads.com/@thalesquirino'
                aria-label='Acessar o Threads do Fisiquei'
              >
                <ThreadsLogo className='size-[16px] fill-white group-hover:fill-primary-foreground' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-white/15 pt-8 text-center'>
          <p className='text-gray-200 mb-2'>
            © 2025 FISIQUEI - Todos os direitos reservados
          </p>
          <div>
            <a
              href='/termos'
              className='text-xs text-foreground/60 underline hover:opacity-75'
            >
              Termos de Uso & Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
