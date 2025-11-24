import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export function HeroYoutubePlayer() {
  return (
    <div className="aspect-video">
      <LiteYouTubeEmbed
        id="kmxFCmboHL0"
        title="Apresentação Plataforma Fisiquei"
        poster="maxresdefault"
        seo={{
          name: "Apresentação da Plataforma Fisiquei",
          description:
            "Vídeo de apresentaçao da Plataforma Fisiquei pelo professor Thales Quirino.",
        }}
        params={new URLSearchParams({
          rel: "0",
          cc: "pt-br",
          hl: "pt-br",
          controls: "1",
        }).toString()}
        webp={true}
        lazyLoad={false}
        rel="preload"
        thumbnail="/images/plataforma/inicio.png"
        announce="Assistir"
      />
    </div>
  )
}
