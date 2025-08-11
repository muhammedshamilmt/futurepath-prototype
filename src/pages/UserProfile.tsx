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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  BookOpen,
  Heart,
  Star,
  Award,
  Briefcase,
  Save,
  Edit,
  Camera,
  School,
  Building2,
  Target,
  Trophy
} from 'lucide-react';
import student1 from '@/assets/student-1.jpg';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    // Personal Information
    name: 'Arjun Menon',
    email: 'arjun.menon@gmail.com',
    phone: '+91-98765-43210',
    dateOfBirth: '1999-05-15',
    gender: 'Male',
    location: 'Kochi, Kerala',
    bio: 'Passionate computer science student interested in machine learning and software development. Currently pursuing B.Tech in Computer Science.',
    
    // Academic Information
    currentInstitute: 'Indian Institute of Technology Kerala',
    course: 'B.Tech Computer Science & Engineering',
    year: '3rd Year',
    cgpa: '8.5',
    board10th: 'CBSE',
    percentage10th: '95.2',
    board12th: 'CBSE',
    percentage12th: '92.8',
    
    // Preferences
    interestedFields: ['Software Development', 'Machine Learning', 'Data Science'],
    preferredLocations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Chennai'],
    careerGoals: 'To become a skilled software engineer and contribute to innovative technology solutions.',
    
    // Additional
    achievements: ['Winner - State Level Programming Contest', 'Dean\'s List - Semester 5', 'Volunteer - Tech Fest 2023'],
    skills: ['Python', 'Java', 'React', 'Node.js', 'Machine Learning'],
    
    profilePicture: student1
  });

  const [savedInstitutes, setSavedInstitutes] = useState([
    {
      name: 'Indian Institute of Technology Bombay',
      type: 'Engineering',
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      savedDate: '2024-01-15'
    },
    {
      name: 'Indian Institute of Science',
      type: 'Research',
      location: 'Bangalore, Karnataka',
      rating: 4.8,
      savedDate: '2024-01-10'
    }
  ]);

  const [reviewsGiven, setReviewsGiven] = useState([
    {
      id: 1,
      instituteName: 'Indian Institute of Technology Kerala',
      rating: 5,
      review: 'Excellent faculty and infrastructure. Great learning environment with world-class facilities.',
      date: '2024-01-20'
    },
    {
      id: 2,
      instituteName: 'National Institute of Technology Calicut',
      rating: 4,
      review: 'Good academic programs but hostel facilities could be improved.',
      date: '2023-12-15'
    }
  ]);

  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];
  const boardOptions = ['CBSE', 'ICSE', 'State Board', 'IB', 'Other'];

  const handleSave = () => {
    // Here you would typically send the data to your backend
    console.log('Saving profile data...', profileData);
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  const handleArrayFieldUpdate = (field, index, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field, defaultValue = '') => {
    setProfileData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValue]
    }));
  };

  const removeArrayField = (field, index) => {
    setProfileData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F42525' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={profileData.profilePicture} alt={profileData.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-white text-3xl">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                    <Camera className="w-4 h-4" />
                  </Button>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Student
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    {profileData.year}
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {profileData.name}
                </h1>
                
                <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground mb-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5" />
                    <span>{profileData.currentInstitute}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{profileData.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {profileData.bio}
                </p>
                
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

      {/* Profile Content */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="saved">Saved Institutes</TabsTrigger>
                <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        {isEditing ? (
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter your full name"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.name}</div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="Enter your email"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.email}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="Enter your phone number"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.phone}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        {isEditing ? (
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                            placeholder="Enter your city, state"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.location}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        {isEditing ? (
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={profileData.dateOfBirth}
                            onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">
                            {new Date(profileData.dateOfBirth).toLocaleDateString()}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        {isEditing ? (
                          <Select 
                            value={profileData.gender} 
                            onValueChange={(value) => setProfileData(prev => ({ ...prev, gender: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              {genderOptions.map(option => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.gender}</div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <Textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                          placeholder="Tell us about yourself..."
                          rows={4}
                        />
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg text-foreground min-h-[100px]">
                          {profileData.bio}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic Information */}
              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Academic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentInstitute">Current Institute</Label>
                        {isEditing ? (
                          <Input
                            id="currentInstitute"
                            value={profileData.currentInstitute}
                            onChange={(e) => setProfileData(prev => ({ ...prev, currentInstitute: e.target.value }))}
                            placeholder="Enter your current institute"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.currentInstitute}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course">Course</Label>
                        {isEditing ? (
                          <Input
                            id="course"
                            value={profileData.course}
                            onChange={(e) => setProfileData(prev => ({ ...prev, course: e.target.value }))}
                            placeholder="Enter your course"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.course}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="year">Current Year</Label>
                        {isEditing ? (
                          <Select 
                            value={profileData.year} 
                            onValueChange={(value) => setProfileData(prev => ({ ...prev, year: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              {yearOptions.map(option => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.year}</div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cgpa">CGPA</Label>
                        {isEditing ? (
                          <Input
                            id="cgpa"
                            value={profileData.cgpa}
                            onChange={(e) => setProfileData(prev => ({ ...prev, cgpa: e.target.value }))}
                            placeholder="Enter your CGPA"
                          />
                        ) : (
                          <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.cgpa}</div>
                        )}
                      </div>
                    </div>

                    {/* 10th Class Details */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">10th Class Details</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="board10th">Board</Label>
                          {isEditing ? (
                            <Select 
                              value={profileData.board10th} 
                              onValueChange={(value) => setProfileData(prev => ({ ...prev, board10th: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select board" />
                              </SelectTrigger>
                              <SelectContent>
                                {boardOptions.map(option => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.board10th}</div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="percentage10th">Percentage</Label>
                          {isEditing ? (
                            <Input
                              id="percentage10th"
                              value={profileData.percentage10th}
                              onChange={(e) => setProfileData(prev => ({ ...prev, percentage10th: e.target.value }))}
                              placeholder="Enter percentage"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.percentage10th}%</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 12th Class Details */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">12th Class Details</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="board12th">Board</Label>
                          {isEditing ? (
                            <Select 
                              value={profileData.board12th} 
                              onValueChange={(value) => setProfileData(prev => ({ ...prev, board12th: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select board" />
                              </SelectTrigger>
                              <SelectContent>
                                {boardOptions.map(option => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.board12th}</div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="percentage12th">Percentage</Label>
                          {isEditing ? (
                            <Input
                              id="percentage12th"
                              value={profileData.percentage12th}
                              onChange={(e) => setProfileData(prev => ({ ...prev, percentage12th: e.target.value }))}
                              placeholder="Enter percentage"
                            />
                          ) : (
                            <div className="p-3 bg-muted/30 rounded-lg text-foreground">{profileData.percentage12th}%</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Achievements</h4>
                      <div className="space-y-2">
                        {profileData.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Preferences & Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Interested Fields</Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.interestedFields.map((field, index) => (
                          <Badge key={index} className="px-3 py-1">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Preferred Locations</Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.preferredLocations.map((location, index) => (
                          <Badge key={index} variant="outline" className="px-3 py-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="careerGoals">Career Goals</Label>
                      {isEditing ? (
                        <Textarea
                          id="careerGoals"
                          value={profileData.careerGoals}
                          onChange={(e) => setProfileData(prev => ({ ...prev, careerGoals: e.target.value }))}
                          placeholder="Describe your career goals..."
                          rows={4}
                        />
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg text-foreground min-h-[100px]">
                          {profileData.careerGoals}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Saved Institutes */}
              <TabsContent value="saved">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Saved Institutes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedInstitutes.map((institute, index) => (
                        <div key={index} className="border border-border/30 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">{institute.name}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                <span className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4" />
                                  {institute.type}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {institute.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="font-medium">{institute.rating}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Saved on {new Date(institute.savedDate).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* My Reviews */}
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      My Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="space-y-6">
                      {reviewsGiven.map((review, index) => {
                        const handleEditReview = (id, data) => {
                          setReviewsGiven(prev => prev.map(r => r.id === id ? { ...r, ...data } : r));
                        };
                        
                        const handleDeleteReview = (id) => {
                          setReviewsGiven(prev => prev.filter(r => r.id !== id));
                        };

                         return (
                        <div key={index} className="border border-border/30 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">{review.instituteName}</h4>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(review.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Edit Review
                            </Button>
                          </div>
                        </div>
                      );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserProfile;