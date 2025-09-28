import Card from "./Card";

export default function FeaturedArticles({}) {
  return (
    <div className="bg-white py-12">
      <div className="site-container space-y-20">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {[1, 2, 3, 4].map((el) => (
            <Card key={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
