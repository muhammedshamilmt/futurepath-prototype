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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  Briefcase,
  Save,
  Edit,
  Camera,
  ImageIcon,
  Calendar,
  Eye,
  FileImage
} from 'lucide-react';
import institute1 from '@/assets/institute-1.jpg';

const InstituteProfile = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [isEditing, setIsEditing] = useState(false);
  const [courses, setCourses] = useState([
    { name: 'Computer Science & Engineering', duration: '4 years', fees: '₹2.5L/year', seats: '120', cutoff: 'JEE Advanced: 2000' },
    { name: 'Electrical Engineering', duration: '4 years', fees: '₹2.5L/year', seats: '80', cutoff: 'JEE Advanced: 3500' }
  ]);
  const [faculty, setFaculty] = useState([
    { name: 'Dr. Rajesh Kumar', position: 'Professor & Head, CSE', specialization: 'Machine Learning, AI', experience: '15+ years', publications: '85' },
    { name: 'Dr. Priya Sharma', position: 'Associate Professor, EE', specialization: 'Power Systems, Renewable Energy', experience: '12+ years', publications: '62' }
  ]);
  const [facilities, setFacilities] = useState([
    'State-of-the-art laboratories',
    '24/7 Library with 50,000+ books',
    'High-speed WiFi campus',
    'Modern hostels for 2000+ students'
  ]);
  const [recruiters, setRecruiters] = useState(['Google', 'Microsoft', 'Amazon', 'TCS']);
  const [galleryImages, setGalleryImages] = useState([institute1]);
  const [ads, setAds] = useState([
    { id: 1, title: 'Summer Engineering Program', description: 'Join our intensive summer program for aspiring engineers', active: true },
    { id: 2, title: 'Research Opportunities', description: 'Undergraduate research positions available', active: true }
  ]);

  const [formData, setFormData] = useState({
    // Basic Information
    name: 'Indian Institute of Technology Kerala',
    type: 'Engineering',
    city: 'Palakkad',
    state: 'Kerala',
    description: 'Premier engineering institution with cutting-edge research facilities and excellent placement records. IIT Kerala is known for its innovation-driven curriculum and world-class faculty.',
    established: '2016',
    website: 'https://iitpkd.ac.in',
    
    // Contact Information
    phone: '+91-491-256-2999',
    email: 'admissions@iitpkd.ac.in',
    address: 'IIT Palakkad Campus, Ahalia Integrated Campus, Kozhippara, Palakkad - 678557',
    
    // Institution Details
    totalStudents: '2500',
    accreditations: ['NAAC A++', 'NBA', 'AICTE'],
    nirfRanking: '28',
    qsRanking: '751-800',
    timesRanking: '401-500',
    
    // Placement Information
    placementRate: '95',
    averagePackage: '12.5',
    highestPackage: '45',
    
    // Media
    logo: null,
    images: [institute1]
  });

  // Institute ID (simulating it's 4)
  const instituteId = 4;

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

  const addGalleryImage = () => {
    setGalleryImages([...galleryImages, null]);
  };

  const removeGalleryImage = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const addAd = () => {
    setAds([...ads, { id: Date.now(), title: '', description: '', active: true }]);
  };

  const removeAd = (id) => {
    setAds(ads.filter(ad => ad.id !== id));
  };

  const updateAd = (id, field, value) => {
    setAds(ads.map(ad => ad.id === id ? { ...ad, [field]: value } : ad));
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

  const handleSave = () => {
    // Here you would typically send the data to your backend
    console.log('Saving profile data...', { formData, courses, faculty, facilities, recruiters });
    setIsEditing(false);
    // Show success message
    alert('Institute profile updated successfully!');
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={institute1} alt={formData.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-white text-3xl">
                    {formData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="absolute -bottom-2 -right-2">
                    <Label htmlFor="logo-upload" className="cursor-pointer">
                      <Button size="sm" className="rounded-full w-8 h-8 p-0" asChild>
                        <div>
                          <Camera className="w-4 h-4" />
                        </div>
                      </Button>
                      <Input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </Label>
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                    {formData.type} Institution
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Est. {formData.established}
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {formData.name}
                </h1>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{formData.city}, {formData.state}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>NIRF Rank #{formData.nirfRanking}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "outline" : "default"}
                  >
                    <Edit className="mr-2 w-4 h-4" />
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                  {isEditing && (
                    <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                      <Save className="mr-2 w-4 h-4" />
                      Save Changes
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Form */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Institute ID Display */}
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Institute ID: <span className="font-mono text-primary">#{instituteId}</span>
              </div>
              <Badge variant="outline" className="text-xs">Profile Management</Badge>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-8">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="placements">Placements</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="ads">Ads</TabsTrigger>
              </TabsList>

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
                        {isEditing ? (
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter institution name"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.name}</div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="type">Institution Type *</Label>
                        {isEditing ? (
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
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.type}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        {isEditing ? (
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                            placeholder="Enter city"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.city}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        {isEditing ? (
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
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.state}</div>
                        )}
                      </div>

                       <div className="space-y-2">
                         <Label htmlFor="established">Year Established *</Label>
                         {isEditing ? (
                           <Input
                             id="established"
                             type="number"
                             value={formData.established}
                             onChange={(e) => setFormData(prev => ({ ...prev, established: e.target.value }))}
                             placeholder="e.g., 1995"
                             min="1800"
                             max={new Date().getFullYear()}
                           />
                         ) : (
                           <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.established}</div>
                         )}
                       </div>

                      <div className="space-y-2">
                        <Label htmlFor="totalStudents">Total Students</Label>
                        {isEditing ? (
                          <Input
                            id="totalStudents"
                            value={formData.totalStudents}
                            onChange={(e) => setFormData(prev => ({ ...prev, totalStudents: e.target.value }))}
                            placeholder="e.g., 2500"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.totalStudents}</div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Official Website</Label>
                      {isEditing ? (
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                          placeholder="https://www.example.com"
                        />
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <a href={formData.website} target="_blank" rel="noopener noreferrer" 
                             className="text-primary hover:underline">
                            {formData.website}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Institution Description *</Label>
                      {isEditing ? (
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe your institution, its vision, mission, and unique features..."
                          rows={4}
                        />
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg text-foreground min-h-[100px]">
                          {formData.description}
                        </div>
                      )}
                    </div>

                    {/* Accreditations */}
                    <div className="space-y-3">
                      <Label>Accreditations & Certifications</Label>
                      {isEditing ? (
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
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {formData.accreditations.map((acc, index) => (
                            <Badge key={index} variant="secondary" className="px-3 py-1">
                              {acc}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rankings */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Rankings (Optional)</Label>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nirfRanking">NIRF Ranking</Label>
                          {isEditing ? (
                            <Input
                              id="nirfRanking"
                              type="number"
                              value={formData.nirfRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, nirfRanking: e.target.value }))}
                              placeholder="e.g., 25"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">#{formData.nirfRanking}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="qsRanking">QS World Ranking</Label>
                          {isEditing ? (
                            <Input
                              id="qsRanking"
                              value={formData.qsRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, qsRanking: e.target.value }))}
                              placeholder="e.g., 401-500"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.qsRanking}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timesRanking">Times Ranking</Label>
                          {isEditing ? (
                            <Input
                              id="timesRanking"
                              value={formData.timesRanking}
                              onChange={(e) => setFormData(prev => ({ ...prev, timesRanking: e.target.value }))}
                              placeholder="e.g., 501-600"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.timesRanking}</div>
                          )}
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
                        {isEditing ? (
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+91-XXX-XXX-XXXX"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.phone}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="admissions@example.com"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.email}</div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Complete Address *</Label>
                      {isEditing ? (
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="Enter complete address with pincode"
                          rows={3}
                        />
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg text-foreground min-h-[80px]">
                          {formData.address}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Courses & Programs
                      </div>
                      {isEditing && (
                        <Button onClick={addCourse} size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Course
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {courses.map((course, index) => (
                      <div key={index} className="border border-border/30 rounded-lg p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-foreground">Course {index + 1}</h4>
                          {isEditing && courses.length > 1 && (
                            <Button onClick={() => removeCourse(index)} variant="destructive" size="sm">
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Course Name</Label>
                            {isEditing ? (
                              <Input
                                value={course.name}
                                onChange={(e) => updateCourse(index, 'name', e.target.value)}
                                placeholder="e.g., Computer Science & Engineering"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{course.name}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Duration</Label>
                            {isEditing ? (
                              <Input
                                value={course.duration}
                                onChange={(e) => updateCourse(index, 'duration', e.target.value)}
                                placeholder="e.g., 4 years"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{course.duration}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Fees</Label>
                            {isEditing ? (
                              <Input
                                value={course.fees}
                                onChange={(e) => updateCourse(index, 'fees', e.target.value)}
                                placeholder="e.g., ₹2.5L/year"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{course.fees}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Total Seats</Label>
                            {isEditing ? (
                              <Input
                                value={course.seats}
                                onChange={(e) => updateCourse(index, 'seats', e.target.value)}
                                placeholder="e.g., 120"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{course.seats}</div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Admission Cutoff</Label>
                          {isEditing ? (
                            <Input
                              value={course.cutoff}
                              onChange={(e) => updateCourse(index, 'cutoff', e.target.value)}
                              placeholder="e.g., JEE Advanced: 2000"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{course.cutoff}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Faculty Tab */}
              <TabsContent value="faculty">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Faculty & Staff
                      </div>
                      {isEditing && (
                        <Button onClick={addFaculty} size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Faculty
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {faculty.map((member, index) => (
                      <div key={index} className="border border-border/30 rounded-lg p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-foreground">Faculty Member {index + 1}</h4>
                          {isEditing && faculty.length > 1 && (
                            <Button onClick={() => removeFaculty(index)} variant="destructive" size="sm">
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Name</Label>
                            {isEditing ? (
                              <Input
                                value={member.name}
                                onChange={(e) => updateFaculty(index, 'name', e.target.value)}
                                placeholder="e.g., Dr. John Smith"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{member.name}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Position</Label>
                            {isEditing ? (
                              <Input
                                value={member.position}
                                onChange={(e) => updateFaculty(index, 'position', e.target.value)}
                                placeholder="e.g., Professor & Head, CSE"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{member.position}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Specialization</Label>
                            {isEditing ? (
                              <Input
                                value={member.specialization}
                                onChange={(e) => updateFaculty(index, 'specialization', e.target.value)}
                                placeholder="e.g., Machine Learning, AI"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{member.specialization}</div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Experience</Label>
                            {isEditing ? (
                              <Input
                                value={member.experience}
                                onChange={(e) => updateFaculty(index, 'experience', e.target.value)}
                                placeholder="e.g., 15+ years"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">{member.experience}</div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Publications</Label>
                          {isEditing ? (
                            <Input
                              value={member.publications}
                              onChange={(e) => updateFaculty(index, 'publications', e.target.value)}
                              placeholder="e.g., 85"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{member.publications}</div>
                          )}
                        </div>
                        
                        {/* Faculty Image Upload */}
                        {isEditing && (
                          <div className="space-y-2">
                            <Label>Faculty Photo</Label>
                            <div className="border-2 border-dashed border-border/50 rounded-lg p-4 text-center">
                              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-2">Upload faculty photo</p>
                              <Input
                                type="file"
                                accept="image/*"
                                className="max-w-xs mx-auto"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Facilities Tab */}
              <TabsContent value="facilities">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Facilities & Infrastructure
                      </div>
                      {isEditing && (
                        <Button onClick={addFacility} size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Facility
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border border-border/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          {isEditing ? (
                            <Input
                              value={facility}
                              onChange={(e) => updateFacility(index, e.target.value)}
                              placeholder="e.g., State-of-the-art laboratories"
                            />
                          ) : (
                            <span className="text-foreground">{facility}</span>
                          )}
                        </div>
                        {isEditing && facilities.length > 1 && (
                          <Button onClick={() => removeFacility(index)} variant="destructive" size="sm">
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Placements Tab */}
              <TabsContent value="placements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Placement Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="placementRate">Placement Rate (%)</Label>
                        {isEditing ? (
                          <Input
                            id="placementRate"
                            type="number"
                            value={formData.placementRate}
                            onChange={(e) => setFormData(prev => ({ ...prev, placementRate: e.target.value }))}
                            placeholder="e.g., 95"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{formData.placementRate}%</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="averagePackage">Average Package (LPA)</Label>
                        {isEditing ? (
                          <Input
                            id="averagePackage"
                            value={formData.averagePackage}
                            onChange={(e) => setFormData(prev => ({ ...prev, averagePackage: e.target.value }))}
                            placeholder="e.g., 12.5"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">₹{formData.averagePackage} LPA</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="highestPackage">Highest Package (LPA)</Label>
                        {isEditing ? (
                          <Input
                            id="highestPackage"
                            value={formData.highestPackage}
                            onChange={(e) => setFormData(prev => ({ ...prev, highestPackage: e.target.value }))}
                            placeholder="e.g., 45"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">₹{formData.highestPackage} LPA</div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base font-semibold">Top Recruiters</Label>
                        {isEditing && (
                          <Button onClick={addRecruiter} size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Recruiter
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {recruiters.map((recruiter, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 border border-border/30 rounded-lg">
                            <div className="flex-1">
                              {isEditing ? (
                                <Input
                                  value={recruiter}
                                  onChange={(e) => updateRecruiter(index, e.target.value)}
                                  placeholder="e.g., Google"
                                />
                              ) : (
                                <span className="text-foreground font-medium">{recruiter}</span>
                              )}
                            </div>
                            {isEditing && recruiters.length > 1 && (
                              <Button onClick={() => removeRecruiter(index)} variant="destructive" size="sm">
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Placement Images */}
                    {isEditing && (
                      <div className="space-y-2">
                        <Label>Placement Photos (Campus drives, ceremonies, etc.)</Label>
                        <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">Upload placement related photos</p>
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            className="max-w-xs mx-auto"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gallery Tab */}
              <TabsContent value="gallery">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-primary" />
                        Institute Gallery
                      </div>
                      {isEditing && (
                        <Button onClick={addGalleryImage} size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Image
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square border border-border/30 rounded-lg overflow-hidden bg-muted/30">
                            {image ? (
                              <img 
                                src={image} 
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FileImage className="w-8 h-8 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                          {isEditing && (
                            <>
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                {!image && (
                                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                                    <Upload className="w-4 h-4" />
                                  </Button>
                                )}
                                {galleryImages.length > 1 && (
                                  <Button 
                                    size="sm" 
                                    variant="destructive" 
                                    className="h-8 w-8 p-0"
                                    onClick={() => removeGalleryImage(index)}
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                              {!image && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                  />
                                  <div className="text-center text-white">
                                    <Upload className="w-6 h-6 mx-auto mb-1" />
                                    <p className="text-xs">Upload Image</p>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {!isEditing && galleryImages.length > 0 && (
                      <div className="flex justify-center">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View All Photos
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Ads Tab */}
              <TabsContent value="ads">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Advertisements & Announcements
                      </div>
                      {isEditing && (
                        <Button onClick={addAd} size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Advertisement
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {ads.map((ad) => (
                      <div key={ad.id} className="border border-border/30 rounded-lg p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Badge variant={ad.active ? "default" : "secondary"}>
                              {ad.active ? "Active" : "Inactive"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">Ad ID: #{ad.id}</span>
                          </div>
                          {isEditing && ads.length > 1 && (
                            <Button onClick={() => removeAd(ad.id)} variant="destructive" size="sm">
                              <X className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Advertisement Title</Label>
                            {isEditing ? (
                              <Input
                                value={ad.title}
                                onChange={(e) => updateAd(ad.id, 'title', e.target.value)}
                                placeholder="e.g., Summer Program 2024"
                              />
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground font-medium">{ad.title}</div>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Status</Label>
                            {isEditing ? (
                              <Select 
                                value={ad.active ? "active" : "inactive"} 
                                onValueChange={(value) => updateAd(ad.id, 'active', value === "active")}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="active">Active</SelectItem>
                                  <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <div className="p-3 bg-muted/30 rounded-lg text-foreground">
                                {ad.active ? "Active" : "Inactive"}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Description</Label>
                          {isEditing ? (
                            <Textarea
                              value={ad.description}
                              onChange={(e) => updateAd(ad.id, 'description', e.target.value)}
                              placeholder="Describe your advertisement..."
                              rows={3}
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground min-h-[80px]">
                              {ad.description}
                            </div>
                          )}
                        </div>

                        {isEditing && (
                          <div className="space-y-2">
                            <Label>Advertisement Image</Label>
                            <div className="border-2 border-dashed border-border/50 rounded-lg p-4 text-center">
                              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-2">Upload advertisement banner</p>
                              <Input
                                type="file"
                                accept="image/*"
                                className="max-w-xs mx-auto"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {!isEditing && ads.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No advertisements to display</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Sidebar - Institute ID display in small view */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-10 hidden lg:block">
        <Card className="p-4 bg-background/95 backdrop-blur-sm border-primary/20">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Institute</p>
            <p className="text-2xl font-bold text-primary">#{instituteId}</p>
            <p className="text-xs text-muted-foreground mt-1">Profile</p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default InstituteProfile;