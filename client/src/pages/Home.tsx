import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, Check, Zap, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { newsData, ToneType } from "@/data/news";

/**
 * AI News Dashboard - Tech-Forward Executive Interface
 * Design: Dark theme with cyan/blue accents, Poppins + IBM Plex Mono typography
 * Features: News selection, tone switching, copy posts with hashtags
 */
export default function Home() {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);
  const [selectedTone, setSelectedTone] = useState<ToneType>("provocativa");
  const [copiedPostId, setCopiedPostId] = useState<number | null>(null);

  const copyToClipboard = (text: string, newsId: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPostId(newsId);
    toast.success("Post copiado para a área de transferência!");
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const copyPostWithHashtags = (newsId: number) => {
    const post = selectedNews.posts[selectedTone];
    const hashtags = selectedNews.hashtags.join(" ");
    const fullContent = `${post}\n\n${hashtags}`;
    navigator.clipboard.writeText(fullContent);
    setCopiedPostId(newsId);
    toast.success("Post com hashtags copiado!");
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const getHypeColor = (level: number): string => {
    if (level >= 9.5) return "hype-level-red";
    if (level >= 9.0) return "hype-level-orange";
    if (level >= 8.5) return "hype-level-yellow";
    return "hype-level-green";
  };

  const getToneLabel = (tone: ToneType): string => {
    const labels = {
      provocativa: "Provocativa",
      educacional: "Educacional",
      emocional: "Emocional"
    };
    return labels[tone];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold font-sans">Estrategista de Conteúdo IA</h1>
          </div>
          <p className="text-muted-foreground text-sm">Notícias hypadas para seu LinkedIn</p>
          <p className="text-xs text-muted-foreground mt-2">Atualizado em {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - News List */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Notícias</h2>
              <div className="space-y-2">
                {newsData.map((news) => (
                  <button
                    key={news.id}
                    onClick={() => {
                      setSelectedNews(news);
                      setSelectedTone("provocativa");
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                      selectedNews.id === news.id
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border bg-transparent text-foreground hover:border-accent/50 hover:bg-card/50"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                        {news.rank}
                      </Badge>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold line-clamp-2">{news.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className={`h-1.5 flex-1 rounded-full ${getHypeColor(news.hypeLevel)}`} />
                          <span className="text-xs font-mono text-accent">{news.hypeLevel}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - News Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* News Header */}
            <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">#{selectedNews.rank}</Badge>
                    <span className="text-xs font-mono text-accent font-semibold">Hype: {selectedNews.hypeLevel}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-sans mb-2">{selectedNews.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{selectedNews.source}</span>
                    <span>•</span>
                    <span>{selectedNews.date}</span>
                  </div>
                </div>
              </div>

              {/* Hype Level Bar */}
              <div className={`h-2 rounded-full mb-4 ${getHypeColor(selectedNews.hypeLevel)}`} />

              {/* Summary */}
              <p className="text-sm leading-relaxed text-foreground/90">{selectedNews.summary}</p>
            </Card>

            {/* Featured Image */}
            <Card className="border-border overflow-hidden bg-card/50">
              <img
                src={selectedNews.imageUrl}
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </Card>

            {/* Tone Selector */}
            <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Selecione o tom
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {(["provocativa", "educacional", "emocional"] as ToneType[]).map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`py-2 px-3 rounded-lg border font-medium text-sm transition-all duration-200 ${
                      selectedTone === tone
                        ? "tone-button-active"
                        : "tone-button-inactive"
                    }`}
                  >
                    {getToneLabel(tone)}
                  </button>
                ))}
              </div>
            </Card>

            {/* LinkedIn Post */}
            <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Post para LinkedIn ({getToneLabel(selectedTone)})
                </h3>
              </div>

              {/* Post Content */}
              <div className="bg-background/50 rounded-lg p-4 mb-4 border border-border">
                <p className="post-content text-foreground/90">{selectedNews.posts[selectedTone]}</p>
              </div>

              {/* Copy Buttons */}
              <div className="flex gap-3 mb-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => copyToClipboard(selectedNews.posts[selectedTone], selectedNews.id)}
                      variant={copiedPostId === selectedNews.id ? "default" : "outline"}
                      size="sm"
                      className="flex-1"
                    >
                      {copiedPostId === selectedNews.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar Post
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copia apenas o post</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => copyPostWithHashtags(selectedNews.id)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      + Hashtags
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copia post + hashtags</TooltipContent>
                </Tooltip>
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2">
                {selectedNews.hashtags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      navigator.clipboard.writeText(tag);
                      toast.success(`${tag} copiado!`);
                    }}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Card>

            {/* Source Link & Strategy Tip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-border bg-card/50 backdrop-blur-sm p-4">
                <a
                  href={selectedNews.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  <span>Ler fonte original</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur-sm p-4">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">💡 Dica:</span> Customize o tom conforme seu público. Provocativa para engajamento, Educacional para autoridade, Emocional para conexão.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-12">
        <div className="container py-6">
          <p className="text-xs text-muted-foreground text-center">
            Estrategista de Conteúdo IA • Notícias atualizadas diariamente • Desenvolvido com precisão e propósito
          </p>
        </div>
      </footer>
    </div>
  );
}
