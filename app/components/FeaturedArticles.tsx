import Card from "./Card";

export default function FeaturedArticles({ articles = [] }) {
  if (!articles.length) return null;

  return (
    <div className="bg-white py-12">
      <div className="site-container space-y-20">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {articles.map((record: any) => (
            <Card key={record.id} tags={false} record={record} />
          ))}
        </div>
      </div>
    </div>
  );
}
