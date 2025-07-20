import { useState } from 'react';
import { Bot, Search, TrendingUp, Users, MessageSquare, Zap, Eye, Tag, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const stats = [
    { icon: MessageSquare, label: 'Comments Analyzed', value: '2,847', change: '+23%' },
    { icon: Users, label: 'Unique Commenters', value: '1,239', change: '+18%' },
    { icon: TrendingUp, label: 'Sentiment Score', value: '78%', change: '+5%' },
    { icon: Zap, label: 'AI Accuracy', value: '94.2%', change: '+2%' },
  ];

  const commenters = [
    { name: 'Sarah Chen', tag: 'Top Fan', comments: 127, sentiment: 'positive', score: 95 },
    { name: 'Alex Rodriguez', tag: 'Loyal Viewer', comments: 89, sentiment: 'positive', score: 88 },
    { name: 'Jamie Parker', tag: 'Potential Customer', comments: 34, sentiment: 'neutral', score: 72 },
    { name: 'Chris Taylor', tag: 'Critic', comments: 23, sentiment: 'negative', score: 45 },
    { name: 'Morgan Lee', tag: 'Supporter', comments: 56, sentiment: 'positive', score: 84 },
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      'Top Fan': 'bg-accent text-accent-foreground',
      'Loyal Viewer': 'bg-primary text-primary-foreground',
      'Potential Customer': 'bg-secondary text-secondary-foreground',
      'Critic': 'bg-destructive text-destructive-foreground',
      'Supporter': 'bg-accent text-accent-foreground',
    };
    return colors[tag as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen grid-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-8 w-8 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold hologram-text">Comment CRM</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="glass-card">
                <Eye className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button className="gradient-primary text-primary-foreground neon-glow">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* URL Input Section */}
        <div className="mb-8">
          <Card className="glass-card cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Analyze Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Paste YouTube, Instagram, or Facebook URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="glass-card border-primary/30 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button 
                  onClick={handleAnalyze}
                  disabled={!url || isAnalyzing}
                  className="gradient-primary text-primary-foreground neon-glow"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Bot className="h-4 w-4 mr-2" />
                      Analyze with AI
                    </>
                  )}
                </Button>
              </div>
              {isAnalyzing && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>AI Processing...</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2 glass-card" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover:neon-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-accent">{stat.change} from last week</p>
                  </div>
                  <div className="relative">
                    <stat.icon className="h-8 w-8 text-primary animate-float" />
                    <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commenters Table */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>AI-Categorized Commenters</span>
              <Badge className="gradient-accent text-accent-foreground ml-auto">
                Live Analysis
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commenters.map((commenter, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg glass-card hover:neon-glow-secondary transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {commenter.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{commenter.name}</h3>
                      <p className="text-sm text-muted-foreground">{commenter.comments} comments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Badge className={getTagColor(commenter.tag)}>
                      <Tag className="h-3 w-3 mr-1" />
                      {commenter.tag}
                    </Badge>
                    
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">Score: {commenter.score}%</p>
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-accent transition-all duration-500"
                          style={{ width: `${commenter.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scanning Effect */}
        {isAnalyzing && (
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-50"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
