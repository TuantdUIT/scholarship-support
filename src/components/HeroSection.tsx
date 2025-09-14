import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light/20 border border-primary-light">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">AI-Powered Scholarship Matching</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Path to
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Study Abroad Success
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover perfect scholarships with AI recommendations, get application support, 
                and track your journey to studying abroad with personalized guidance every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-medium">
                Start Your Journey
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light/10">
                <Target className="h-5 w-5 mr-2" />
                Find Scholarships
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Students studying abroad with academic success"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-medium">
              <div className="text-sm font-semibold">AI Matched</div>
              <div className="text-xs opacity-80">98% Accuracy</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border px-4 py-3 rounded-lg shadow-medium">
              <div className="text-sm font-semibold text-card-foreground">Application Status</div>
              <div className="text-xs text-success">3 Scholarships Applied</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;