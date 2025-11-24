import { CheckCircleIcon } from "lucide-react"
import { platformFeatures } from "@/data/features"

export function PlatformSection() {
  return (
    <section
      id="plataforma"
      className="bg-linear-to-b from-background from-20% to-[#101111] to-90%"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-14 lg:px-8 py-20 pt-[250px] ">
        <div className="flex flex-col gap-3.5 items-center mb-16">
          <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-center text-sm font-medium">
            <span>Por dentro da plataforma</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-center text-white">
            Tudo <span className="text-primary-light">o que você precisa</span>{" "}
            em <span className="text-primary-light">um só lugar</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
          {platformFeatures.map((platformFeature) => {
            const {
              icon: FeatureIcon,
              title,
              topics,
              color,
              imageSrc,
              imageAlt,
              shortText,
            } = platformFeature

            return (
              <article
                key={title}
                style={{ "--feature-color": color } as any}
                className="group relative overflow-hidden flex flex-col gap-x-8 bg-card rounded-xl ring-2 ring-(--feature-color)/20 hover:ring-(--feature-color)/40 transition-all"
              >
                <div className="relative aspect-video min-w-[400px] bg-muted shrink-0 overflow-hidden">
                  <img
                    src={imageSrc}
                    className="absolute inset-0 size-full object-cover object-top group-hover:scale-110 transition-transform"
                    alt={imageAlt}
                  />

                  <div className="absolute inset-0 size-full bg-linear-to-b from-(--feature-color)/3 via-transparent via-12% to-card group-hover:hidden" />
                </div>

                <div className="relative flex flex-col p-6 pt-10 border-t-2 border-transparent group-hover:border-(--feature-color)/40 grow">
                  <div className="absolute inset-x-0 top-[-16px] bottom-0 bg-linear-to-b from-transparent via-(--feature-color)/2 via-20% to-(--feature-color)/3" />

                  <div className="absolute left-0 top-0 translate-y-[-50%] flex items-center gap-3 pl-6 pr-3 bg-linear-to-r from-(--feature-color)/30 to-(--feature-color)/75 group-hover:from-(--feature-color)/90 group-hover:to-(--feature-color) to-20% text-white rounded-r-lg py-1.5 group-hover:rounded-r-xl transition-all">
                    <FeatureIcon className="size-5" />
                    <strong className="text-lg lg:text-xl font-semibold font-display">
                      {title}
                    </strong>
                  </div>

                  <p className="text-sm lg:text-base text-muted group-hover:brightness-125 transition-all">
                    {shortText}
                  </p>

                  <ul className="mt-6 text-base flex flex-col gap-2">
                    {topics.map((featureTopic, featureTopicIndex) => {
                      return (
                        <li
                          key={`${title}-${featureTopicIndex}`}
                          className="flex gap-2 items-center"
                        >
                          <CheckCircleIcon
                            className="size-3.5 shrink-0"
                            style={{ color: color }}
                          />
                          <span className="text-[#cdcdcd] group-hover:text-[#ededed] transition-colors text-sm lg:text-base">
                            {featureTopic}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
