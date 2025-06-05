import { useEffect, useState } from "react";
import Card from "@/components/Card";
import ActionButton from "@/components/ActionButton";
import { useNavigate } from "react-router-dom";

interface Article {
  title: string;
  summary: string;
}

const News = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error("Failed to load news", err));
  }, []);

  return (
    <div className="min-h-screen p-6 space-y-8 max-w-3xl mx-auto page-transition">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/")}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Today's News Summary</h1>
      </div>

      <div className="space-y-6">
        {articles.map((article, idx) => (
          <Card key={idx}>
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.summary}</p>
          </Card>
        ))}
        {articles.length === 0 && (
          <p className="text-gray-600">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default News;
