import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Upload,
  Plus,
  X,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  Star,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const RegisterInstitute = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [courses, setCourses] = useState([{ name: '', duration: '', fees: '', seats: '', cutoff: '' }]);
  const [faculty, setFaculty] = useState([{ name: '', position: '', specialization: '', experience: '', publications: '' }]);
  const [facilities, setFacilities] = useState(['']);
  const [recruiters, setRecruiters] = useState(['']);

  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    type: '',
    city: '',
    state: '',
    description: '',
    established: '',
    website: '',
    
    // Contact Information
    phone: '',
    email: '',
    address: '',
    
    // Institution Details
    totalStudents: '',
    accreditations: [],
    nirfRanking: '',
    qsRanking: '',
    timesRanking: '',
    
    // Placement Information
    placementRate: '',
    averagePackage: '',
    highestPackage: '',
    
    // Media
    logo: null,
    images: []
  });

  const instituteTypes = [
    "Engineering", "Medical", "Management", "Design", "University", 
    "Arts & Science", "Law", "Pharmacy", "Agriculture", "Architecture"
  ];

  const states = [
    "Kerala", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi", "Gujarat",
    "Rajasthan", "Uttar Pradesh", "West Bengal", "Andhra Pradesh", "Other"
  ];

  const accreditationOptions = [
    "NAAC A++", "NAAC A+", "NAAC A", "NBA", "AICTE", "UGC", "NIRF", "ISO Certified"
  ];

  const addCourse = () => {
    setCourses([...courses, { name: '', duration: '', fees: '', seats: '', cutoff: '' }]);
  };

  const removeCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const updateCourse = (index, field, value) => {
    const updated = courses.map((course, i) => 
      i === index ? { ...course, [field]: value } : course
    );
    setCourses(updated);
  };

  const addFaculty = () => {
    setFaculty([...faculty, { name: '', position: '', specialization: '', experience: '', publications: '' }]);
  };

  const removeFaculty = (index) => {
    setFaculty(faculty.filter((_, i) => i !== index));
  };

  const updateFaculty = (index, field, value) => {
    const updated = faculty.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    setFaculty(updated);
  };

  const addFacility = () => {
    setFacilities([...facilities, '']);
  };

  const removeFacility = (index) => {
    setFacilities(facilities.filter((_, i) => i !== index));
  };

  const updateFacility = (index, value) => {
    const updated = facilities.map((facility, i) => 
      i === index ? value : facility
    );
    setFacilities(updated);
  };

  const addRecruiter = () => {
    setRecruiters([...recruiters, '']);
  };

  const removeRecruiter = (index) => {
    setRecruiters(recruiters.filter((_, i) => i !== index));
  };

  const updateRecruiter = (index, value) => {
    const updated = recruiters.map((recruiter, i) => 
      i === index ? value : recruiter
    );
    setRecruiters(updated);
  };

  const handleAccreditationChange = (accreditation, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        accreditations: [...prev.accreditations, accreditation]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        accreditations: prev.accreditations.filter(acc => acc !== accreditation)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    console.log('Courses:', courses);
    console.log('Faculty:', faculty);
    console.log('Facilities:', facilities);
    console.log('Recruiters:', recruiters);
    
    // Show success message or redirect
    alert('Institute registration submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-secondary/20 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F42525' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Register Your Institution
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Join Our 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Platform</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Register your educational institution to reach thousands of prospective students 
              and showcase your programs, faculty, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-1">
                <TabsTrigger value="basic" className="text-xs md:text-sm">Basic Info</TabsTrigger>
                <TabsTrigger value="contact" className="text-xs md:text-sm">Contact</TabsTrigger>
                <TabsTrigger value="courses" className="text-xs md:text-sm">Courses</TabsTrigger>
                <TabsTrigger value="faculty" className="text-xs md:text-sm">Faculty</TabsTrigger>
                <TabsTrigger value="facilities" className="text-xs md:text-sm">Facilities</TabsTrigger>
                <TabsTrigger value="placements" className="text-xs md:text-sm">Placements</TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="mt-8">
                {/* Basic Information */}
                <TabsContent value="basic">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Basic Institution Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Institution Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter institution name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="type">Institution Type *</Label>
                          <Select 
                            value={formData.type} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {instituteTypes.map(type => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                            placeholder="Enter city"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Select 
                            value={formData.state} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              {states.map(state => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="established">Year Established *</Label>
                          <Input
                            id="established"
                            type="number"
                            value={formData.established}
                            onChange={(e) => setFormData(prev => ({ ...prev, established: e.target.value }))}
                            placeholder="e.g., 1995"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="totalStudents">Total Students</Label>
                          <Input
                            id="totalStudents"
                            value={formData.totalStudents}
                            onChange={(e) => setFormData(prev => ({ ...prev, totalStudents: e.target.value }))}
                            placeholder="e.g., 2500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Official Website</Label>
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                          placeholder="https://www.example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Institution Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe your institution, its vision, mission, and unique features..."
                          rows={4}
                          required
                        />
                      </div>

                      {/* Accreditations */}
                      <div className="space-y-3">
                        <Label>Accreditations & Certifications</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {accreditationOptions.map(acc => (
                            <div key={acc} className="flex items-center space-x-2">
                              <Checkbox
                                id={acc}
                                checked={formData.accreditations.includes(acc)}
                                onCheckedChange={(checked) => handleAccreditationChange(acc, checked)}
                              />
                              <Label htmlFor={acc} className="text-sm">{acc}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rankings */}
                      <div className="space-y-4">
                        <Label className="text-base font-semibold">Rankings (Optional)</Label>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nirfRanking">NIRF Ranking</Label>
                            <Input
                              id="nirfRanking"
                              type="number"
                              value={formData.nirfRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, nirfRanking: e.target.value }))}
                              placeholder="e.g., 25"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="qsRanking">QS World Ranking</Label>
                            <Input
                              id="qsRanking"
                              value={formData.qsRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, qsRanking: e.target.value }))}
                              placeholder="e.g., 401-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timesRanking">Times Ranking</Label>
                            <Input
                              id="timesRanking"
                              value={formData.timesRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, timesRanking: e.target.value }))}
                              placeholder="e.g., 501-600"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contact Information */}
                <TabsContent value="contact">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+91-XXX-XXX-XXXX"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="admissions@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="Enter complete address with pincode"
                          rows={3}
                          required
                        />
                      </div>

                      {/* Logo and Images Upload */}
                      <div className="space-y-4">
                        <Label className="text-base font-semibold">Institution Media</Label>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label>Institution Logo</Label>
                            <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
                              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-2">Upload your institution logo</p>
                              <Button type="button" variant="outline" size="sm">
                                Choose File
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Campus Images</Label>
                            <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
                              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-2">Upload campus photos (max 5)</p>
                              <Button type="button" variant="outline" size="sm">
                                Choose Files
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Courses */}
                <TabsContent value="courses">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Courses & Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {courses.map((course, index) => (
                        <div key={index} className="border border-border/50 rounded-lg p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">Course {index + 1}</h4>
                            {courses.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeCourse(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="space-y-2">
                              <Label>Course Name *</Label>
                              <Input
                                value={course.name}
                                onChange={(e) => updateCourse(index, 'name', e.target.value)}
                                placeholder="e.g., B.Tech CSE"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Duration</Label>
                              <Input
                                value={course.duration}
                                onChange={(e) => updateCourse(index, 'duration', e.target.value)}
                                placeholder="e.g., 4 years"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Annual Fees</Label>
                              <Input
                                value={course.fees}
                                onChange={(e) => updateCourse(index, 'fees', e.target.value)}
                                placeholder="e.g., ₹2.5L"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Total Seats</Label>
                              <Input
                                type="number"
                                value={course.seats}
                                onChange={(e) => updateCourse(index, 'seats', e.target.value)}
                                placeholder="e.g., 120"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Cutoff/Eligibility</Label>
                              <Input
                                value={course.cutoff}
                                onChange={(e) => updateCourse(index, 'cutoff', e.target.value)}
                                placeholder="e.g., JEE: 2000"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button type="button" variant="outline" onClick={addCourse} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Course
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Faculty */}
                <TabsContent value="faculty">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Faculty Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {faculty.map((member, index) => (
                        <div key={index} className="border border-border/50 rounded-lg p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">Faculty Member {index + 1}</h4>
                            {faculty.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFaculty(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="space-y-2">
                              <Label>Full Name *</Label>
                              <Input
                                value={member.name}
                                onChange={(e) => updateFaculty(index, 'name', e.target.value)}
                                placeholder="Dr. John Doe"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Position</Label>
                              <Input
                                value={member.position}
                                onChange={(e) => updateFaculty(index, 'position', e.target.value)}
                                placeholder="Professor, Head of Dept"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Specialization</Label>
                              <Input
                                value={member.specialization}
                                onChange={(e) => updateFaculty(index, 'specialization', e.target.value)}
                                placeholder="Machine Learning, AI"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Experience</Label>
                              <Input
                                value={member.experience}
                                onChange={(e) => updateFaculty(index, 'experience', e.target.value)}
                                placeholder="15+ years"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Publications</Label>
                              <Input
                                type="number"
                                value={member.publications}
                                onChange={(e) => updateFaculty(index, 'publications', e.target.value)}
                                placeholder="85"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button type="button" variant="outline" onClick={addFaculty} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Faculty Member
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Facilities */}
                <TabsContent value="facilities">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Campus Facilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Input
                            value={facility}
                            onChange={(e) => updateFacility(index, e.target.value)}
                            placeholder="e.g., State-of-the-art laboratories"
                            className="flex-1"
                          />
                          {facilities.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFacility(index)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}

                      <Button type="button" variant="outline" onClick={addFacility} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Facility
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Placements */}
                <TabsContent value="placements">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Placement Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="placementRate">Placement Rate (%)</Label>
                          <Input
                            id="placementRate"
                            type="number"
                            min="0"
                            max="100"
                            value={formData.placementRate}
                            onChange={(e) => setFormData(prev => ({ ...prev, placementRate: e.target.value }))}
                            placeholder="95"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="averagePackage">Average Package</Label>
                          <Input
                            id="averagePackage"
                            value={formData.averagePackage}
                            onChange={(e) => setFormData(prev => ({ ...prev, averagePackage: e.target.value }))}
                            placeholder="₹12.5 LPA"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="highestPackage">Highest Package</Label>
                          <Input
                            id="highestPackage"
                            value={formData.highestPackage}
                            onChange={(e) => setFormData(prev => ({ ...prev, highestPackage: e.target.value }))}
                            placeholder="₹45 LPA"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Top Recruiting Companies</Label>
                        {recruiters.map((recruiter, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Input
                              value={recruiter}
                              onChange={(e) => updateRecruiter(index, e.target.value)}
                              placeholder="e.g., Google, Microsoft, Amazon"
                              className="flex-1"
                            />
                            {recruiters.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeRecruiter(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}

                        <Button type="button" variant="outline" onClick={addRecruiter} className="w-full">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Recruiting Company
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Navigation Section */}
                <div className="flex justify-between items-center pt-8 border-t border-border/50">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      const tabs = ["basic", "contact", "courses", "faculty", "facilities", "placements"];
                      const currentIndex = tabs.indexOf(activeTab);
                      if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
                    }}
                    disabled={activeTab === "basic"}
                  >
                    ← Previous
                  </Button>
                  
                  <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4" />
                    <span>All information will be verified before going live</span>
                  </div>
                  
                  <div className="flex gap-4">
                    {activeTab !== "placements" ? (
                      <Button 
                        type="button"
                        onClick={() => {
                          const tabs = ["basic", "contact", "courses", "faculty", "facilities", "placements"];
                          const currentIndex = tabs.indexOf(activeTab);
                          if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
                        }}
                      >
                        Next →
                      </Button>
                    ) : (
                      <>
                        <Button type="button" variant="outline">
                          Save as Draft
                        </Button>
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Submit for Review
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterInstitute;