import Card from "./Card";

export default function FeaturedArticles({ articles = [] }) {
  if (!articles.length) return null;

  return (
    <div className="bg-white py-12">
      <div className="site-container space-y-20">
        <div className="flex gap-4 md:gap-12 lg:gap-16 overflow-scroll snap-x snap-mandatory">
          {articles.map((record: any) => (
            <Card
              className="snap-start w-1/2 flex-shrink-0 md:flex-shrink-1 md:w-1/3"
              key={record.id}
              tags={false}
              record={record}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
