import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, FileCheck, Calendar, Users, ArrowRight, CheckCircle } from "lucide-react";
import aiRecommendationIcon from "@/assets/ai-recommendation-icon.jpg";
import documentSupportIcon from "@/assets/document-support-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: aiRecommendationIcon,
      title: "AI Scholarship Matching",
      description: "Advanced algorithms analyze your profile against 10,000+ scholarships to find your perfect matches.",
      benefits: ["Personalized recommendations", "Match percentage scoring", "Competitive analysis", "Profile improvement tips"],
      color: "primary"
    },
    {
      icon: documentSupportIcon,
      title: "Application Support",
      description: "Complete guidance through your application process with AI-powered document review and tracking.",
      benefits: ["Grammar & style checking", "Deadline management", "Strategy optimization", "Mentor connections"],
      color: "secondary"
    }
  ];

  const supportedDocuments = [
    "Research Proposals",
    "Personal Statements", 
    "CV/Resume",
    "Recommendation Letters",
    "Academic Transcripts",
    "Test Scores (IELTS, GRE, GMAT)"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Choose 
            <span className="gradient-primary bg-clip-text text-transparent"> ScholarAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform combines intelligent scholarship matching with comprehensive application support 
            to maximize your chances of studying abroad.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-medium hover:shadow-glow transition-smooth border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-soft">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <div className={`w-12 h-1 rounded-full ${feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'} mt-2`}></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${feature.color === 'primary' ? 'gradient-primary text-primary-foreground border-0' : 'bg-secondary text-secondary-foreground hover:bg-secondary-dark'}`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Smart Analysis</h3>
            <p className="text-sm text-muted-foreground">AI evaluates your strengths against scholarship requirements</p>
          </Card>
          
          <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
            <FileCheck className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Document Review</h3>
            <p className="text-sm text-muted-foreground">Professional proofreading and enhancement suggestions</p>
          </Card>
          
          <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
            <Calendar className="h-12 w-12 text-warning mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Deadline Tracking</h3>
            <p className="text-sm text-muted-foreground">Never miss an application deadline with smart reminders</p>
          </Card>
          
          <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
            <Users className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Mentor Network</h3>
            <p className="text-sm text-muted-foreground">Connect with successful alumni and current students</p>
          </Card>
        </div>

        {/* Supported Documents */}
        <Card className="bg-primary-light/10 border-primary-light shadow-medium">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Complete Document Support</CardTitle>
            <p className="text-muted-foreground">We help you prepare and optimize all required application materials</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportedDocuments.map((doc, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;