import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Star,
  ExternalLink,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const ScholarshipDashboard = () => {
  const recommendations = [
    {
      id: 1,
      name: "Fulbright Foreign Student Program",
      country: "United States",
      amount: "$25,000 - $45,000/year",
      deadline: "2024-10-15",
      matchPercentage: 92,
      type: "Full Scholarship",
      level: "Master's/PhD",
      field: "All Fields",
      requirements: ["GPA 3.5+", "TOEFL 80+", "Research Experience"],
      strengths: ["Strong academic record", "Research background matches"],
      improvements: ["TOEFL score could be higher", "Need more publications"],
      status: "recommended"
    },
    {
      id: 2,
      name: "DAAD Scholarships for Development",
      country: "Germany", 
      amount: "€850-1,200/month",
      deadline: "2024-11-30",
      matchPercentage: 87,
      type: "Full Scholarship",
      level: "Master's",
      field: "Engineering, Sciences",
      requirements: ["Bachelor's degree", "German B1", "2 years experience"],
      strengths: ["Perfect field match", "Excellent grades"],
      improvements: ["Learn basic German", "Get more work experience"],
      status: "recommended"
    },
    {
      id: 3,
      name: "Australia Awards Scholarships",
      country: "Australia",
      amount: "$70,000-$100,000 total",
      deadline: "2024-12-01",
      matchPercentage: 78,
      type: "Full Scholarship", 
      level: "Master's/PhD",
      field: "All Fields",
      requirements: ["IELTS 6.5+", "Leadership experience", "Development focus"],
      strengths: ["Good IELTS score", "Leadership activities"],
      improvements: ["Show more development impact", "Strengthen SOP"],
      status: "potential"
    },
    {
      id: 4,
      name: "Chevening Scholarships",
      country: "United Kingdom",
      amount: "£18,000-£30,000",
      deadline: "2024-11-02",
      matchPercentage: 65,
      type: "Full Scholarship",
      level: "Master's",
      field: "All Fields", 
      requirements: ["IELTS 6.5+", "2 years work experience", "Leadership"],
      strengths: ["Strong profile", "Good English"],
      improvements: ["Need more work experience", "Demonstrate leadership better"],
      status: "stretch"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recommended': return 'bg-success text-success-foreground';
      case 'potential': return 'bg-warning text-warning-foreground';  
      case 'stretch': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 85) return 'text-success';
    if (percentage >= 70) return 'text-warning';
    return 'text-secondary';
  };

  return (
    <section id="search" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Personalized 
            <span className="gradient-primary bg-clip-text text-transparent"> Scholarship Matches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered recommendations based on your profile with detailed analysis and improvement suggestions
          </p>
        </div>

        {/* Search & Filter */}
        <Card className="shadow-medium mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search scholarships by name, country, or field..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="bachelor">Bachelor's</SelectItem>
                    <SelectItem value="master">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="shadow-medium mb-8 bg-primary-light/10 border-primary-light">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <TrendingUp className="h-5 w-5 mr-2" />
              AI Insights for Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">4</div>
                <div className="text-sm text-muted-foreground">Strong Matches Found</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">83%</div>
                <div className="text-sm text-muted-foreground">Average Match Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">2</div>
                <div className="text-sm text-muted-foreground">Areas to Improve</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scholarship Recommendations */}
        <div className="space-y-6">
          {recommendations.map((scholarship) => (
            <Card key={scholarship.id} className="shadow-medium hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                      <Badge className={getStatusColor(scholarship.status)}>
                        {scholarship.status.charAt(0).toUpperCase() + scholarship.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {scholarship.country}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getMatchColor(scholarship.matchPercentage)}`}>
                      {scholarship.matchPercentage}%
                    </div>
                    <div className="text-sm text-muted-foreground">Match</div>
                    <Progress value={scholarship.matchPercentage} className="w-20 mt-2" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Type</div>
                    <div>{scholarship.type}</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Level</div>
                    <div>{scholarship.level}</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Field</div>
                    <div>{scholarship.field}</div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-warning" />
                    Requirements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.requirements.map((req, index) => (
                      <Badge key={index} variant="outline">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-success">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Your Strengths
                    </h4>
                    <ul className="space-y-2">
                      {scholarship.strengths.map((strength, index) => (
                        <li key={index} className="text-sm text-success flex items-start">
                          <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-warning">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Areas to Improve
                    </h4>
                    <ul className="space-y-2">
                      {scholarship.improvements.map((improvement, index) => (
                        <li key={index} className="text-sm text-warning flex items-start">
                          <span className="w-1.5 h-1.5 bg-warning rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button className="gradient-primary text-primary-foreground border-0 hover:opacity-90">
                    Start Application
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline">
                    <Star className="h-4 w-4 mr-2" />
                    Save for Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Scholarships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipDashboard;