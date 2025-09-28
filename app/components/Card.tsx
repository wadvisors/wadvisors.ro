export default function Card({}) {
  return (
    <article className="relative space-y-4 transition-opacity hover:not-tag-hover:opacity-80">
      <a
        className="after:absolute after:inset-0 after:z-10"
        href="/my-emerging-heuristics-for-assessing-ai-design/"
      >
        <h3 className="text-2xl font-heading-1 text-pretty">
          My Emerging Heuristics for Assessing AI Design
        </h3>
      </a>
      <div className="flex items-start gap-x-6 mt-4">
        <div className="flex-1 space-y-4 font-normal text-primary-900">
          <p>
            Personal heuristics for assessing AI Design, blending insights from
            Design and Thinking to improve clarity in digital experiences.
          </p>
          <div className="hidden gap-x-2 has-child:flex">
            <a
              className="tag btn-xs var-tag z-20"
              href="https://glide.ektothemes.com/tag/design/"
            >
              Design
            </a>
          </div>
        </div>
        <picture className="block w-28 bg-bg-50 aspect-landscape overflow-hidden mt-2 rounded xs:w-36">
          <img
            className="size-full object-cover"
            src="https://glide.ektothemes.com/content/images/size/w380/format/avif/2025/06/Surreal-Cityscape-Art.jpeg"
            alt="My Emerging Heuristics for Assessing AI Design"
            loading="lazy"
          />
        </picture>
      </div>
    </article>
  );
}
