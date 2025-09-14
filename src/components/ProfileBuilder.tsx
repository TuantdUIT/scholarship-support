import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Languages, 
  MapPin,
  Upload,
  Plus,
  X
} from "lucide-react";
import { useState } from "react";

const ProfileBuilder = () => {
  const [profileCompletion, setProfileCompletion] = useState(65);
  const [skills, setSkills] = useState(["JavaScript", "Python", "Research"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <section id="profile" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Build Your 
            <span className="gradient-primary bg-clip-text text-transparent"> Academic Profile</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Create a comprehensive profile for personalized scholarship recommendations
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Profile Completion</span>
              <span className="text-sm text-primary font-semibold">{profileCompletion}%</span>
            </div>
            <Progress value={profileCompletion} className="h-3" />
          </div>
        </div>

        <div className="grid gap-8">
          {/* Personal Information */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 text-primary mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Background */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 text-secondary mr-2" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentDegree">Current Education Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA / Grade Average</Label>
                  <Input id="gpa" placeholder="e.g., 3.75 or 85%" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">Field of Study</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your field of study" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="business">Business Administration</SelectItem>
                    <SelectItem value="arts">Arts & Humanities</SelectItem>
                    <SelectItem value="sciences">Natural Sciences</SelectItem>
                    <SelectItem value="social-sciences">Social Sciences</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Current Institution</Label>
                <Input id="institution" placeholder="Name of your current school/university" />
              </div>
            </CardContent>
          </Card>

          {/* Experience & Skills */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 text-warning mr-2" />
                Experience & Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="workExperience">Work Experience</Label>
                <Textarea 
                  id="workExperience" 
                  placeholder="Describe your relevant work experience, internships, or projects..."
                  className="min-h-24"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="extracurricular">Extracurricular Activities</Label>
                <Textarea 
                  id="extracurricular" 
                  placeholder="List your clubs, volunteer work, leadership roles, etc..."
                  className="min-h-24"
                />
              </div>
              
              <div className="space-y-4">
                <Label>Skills & Competencies</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language & Test Scores */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Languages className="h-5 w-5 text-success mr-2" />
                Languages & Test Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="english">English Proficiency (IELTS/TOEFL)</Label>
                  <Input id="english" placeholder="e.g., IELTS 7.0 or TOEFL 100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gre">GRE Score (if applicable)</Label>
                  <Input id="gre" placeholder="e.g., 320" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gmat">GMAT Score (if applicable)</Label>
                  <Input id="gmat" placeholder="e.g., 650" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="other-lang">Other Languages</Label>
                  <Input id="other-lang" placeholder="e.g., Spanish (Fluent), French (Intermediate)" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Preferences */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Study Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetDegree">Target Degree Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's</SelectItem>
                      <SelectItem value="master">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scholarshipType">Scholarship Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scholarship type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Scholarship</SelectItem>
                      <SelectItem value="partial">Partial Scholarship</SelectItem>
                      <SelectItem value="any">Any Type</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferredCountries">Preferred Countries</Label>
                <Input id="preferredCountries" placeholder="e.g., USA, Canada, Germany, Australia" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="targetField">Target Field of Study</Label>
                <Input id="targetField" placeholder="e.g., Computer Science, Engineering, Medicine" />
              </div>
            </CardContent>
          </Card>

          {/* CV Upload */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 text-secondary mr-2" />
                Upload Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Upload your CV/Resume</p>
                <p className="text-sm text-muted-foreground mb-4">PDF, DOC, or DOCX files up to 10MB</p>
                <Button variant="outline">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Profile */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-medium px-12"
            >
              Save Profile & Get Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBuilder;