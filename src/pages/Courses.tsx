import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  BookOpen, 
  MapPin, 
  Star, 
  Users, 
  Building,
  User,
  Award,
  ExternalLink,
  MessageCircle,
  Calendar,
  Briefcase
} from 'lucide-react';
import institute1 from '@/assets/institute-1.jpg';
import student1 from '@/assets/student-1.jpg';
import student2 from '@/assets/student-2.jpg';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // All available courses for search suggestions
  const allCourses = [
    "Computer Science Engineering", "Data Science", "Digital Marketing", "MBBS", 
    "UX/UI Design", "MBA", "Mechanical Engineering", "Civil Engineering", 
    "Electrical Engineering", "Medicine", "Psychology", "Business Administration",
    "Graphic Design", "Web Development", "Mobile App Development", "AI/ML",
    "Cybersecurity", "Cloud Computing", "Blockchain", "Digital Art"
  ];

  // Institutes data with courses they offer
  const institutes = [
    {
      id: 1,
      name: "Indian Institute of Technology Delhi",
      location: "New Delhi",
      type: "Engineering College",
      rating: 4.9,
      reviews: 1250,
      students: "8,500+",
      image: institute1,
      establishedYear: 1961,
      courses: ["Computer Science Engineering", "Data Science", "AI/ML", "Mechanical Engineering", "Civil Engineering"],
      fees: "₹2-8L per year",
      placement: "98%",
      description: "Premier engineering institution with cutting-edge research facilities and excellent placement records."
    },
    {
      id: 2,
      name: "Indian Institute of Management Bangalore",
      location: "Bangalore",
      type: "Management Institute",
      rating: 4.8,
      reviews: 890,
      students: "1,200+",
      image: institute1,
      establishedYear: 1973,
      courses: ["MBA", "Digital Marketing", "Business Administration"],
      fees: "₹20-25L per year",
      placement: "100%",
      description: "Top-tier management institute known for excellent MBA programs and industry connections."
    },
    {
      id: 3,
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      type: "Medical College",
      rating: 4.9,
      reviews: 2100,
      students: "3,000+",
      image: institute1,
      establishedYear: 1956,
      courses: ["MBBS", "Medicine"],
      fees: "₹1-5L per year",
      placement: "100%",
      description: "Leading medical institution with state-of-the-art facilities and renowned faculty."
    },
    {
      id: 4,
      name: "National Institute of Design",
      location: "Ahmedabad",
      type: "Design Institute",
      rating: 4.7,
      reviews: 450,
      students: "800+",
      image: institute1,
      establishedYear: 1961,
      courses: ["UX/UI Design", "Graphic Design", "Digital Art"],
      fees: "₹3-6L per year",
      placement: "92%",
      description: "Premier design institute focusing on innovative design education and research."
    },
    {
      id: 5,
      name: "International Institute of Information Technology",
      location: "Hyderabad",
      type: "Technology Institute",
      rating: 4.6,
      reviews: 780,
      students: "2,500+",
      image: institute1,
      establishedYear: 1998,
      courses: ["Computer Science Engineering", "Web Development", "Mobile App Development", "Cybersecurity"],
      fees: "₹8-12L per year",
      placement: "95%",
      description: "Leading technology institute with strong industry partnerships and modern curriculum."
    }
  ];

  // People/Mentors data with their expertise
  const mentors = [
    {
      id: 1,
      name: "Rahul Sharma",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore",
      experience: "8 years",
      rating: 4.9,
      sessions: 150,
      image: student1,
      expertise: ["Computer Science Engineering", "Data Science", "Web Development", "AI/ML"],
      education: "IIT Delhi - B.Tech CSE",
      description: "Experienced software engineer specializing in machine learning and full-stack development.",
      hourlyRate: "₹2,000/hour"
    },
    {
      id: 2,
      name: "Priya Patel",
      title: "UX Design Lead",
      company: "Microsoft",
      location: "Hyderabad",
      experience: "6 years",
      rating: 4.8,
      sessions: 120,
      image: student2,
      expertise: ["UX/UI Design", "Digital Marketing", "Graphic Design"],
      education: "NID Ahmedabad - M.Des",
      description: "Passionate designer with expertise in user experience and digital product design.",
      hourlyRate: "₹1,500/hour"
    },
    {
      id: 3,
      name: "Dr. Arun Kumar",
      title: "Senior Physician",
      company: "AIIMS Delhi",
      location: "New Delhi",
      experience: "12 years",
      rating: 4.9,
      sessions: 80,
      image: student1,
      expertise: ["MBBS", "Medicine"],
      education: "AIIMS Delhi - MBBS, MD",
      description: "Experienced physician and medical educator with extensive clinical experience.",
      hourlyRate: "₹3,000/hour"
    },
    {
      id: 4,
      name: "Suresh Menon",
      title: "Marketing Director",
      company: "Unilever",
      location: "Mumbai",
      experience: "10 years",
      rating: 4.7,
      sessions: 200,
      image: student2,
      expertise: ["MBA", "Digital Marketing", "Business Administration"],
      education: "IIM Bangalore - MBA",
      description: "Marketing executive with extensive experience in brand management and digital strategies.",
      hourlyRate: "₹2,500/hour"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      title: "Full Stack Developer",
      company: "Flipkart",
      location: "Bangalore",
      experience: "5 years",
      rating: 4.6,
      sessions: 95,
      image: student1,
      expertise: ["Web Development", "Mobile App Development", "Computer Science Engineering"],
      education: "IIIT Hyderabad - B.Tech CSE",
      description: "Full-stack developer with expertise in modern web and mobile technologies.",
      hourlyRate: "₹1,800/hour"
    }
  ];

  const categories = ["All Categories", "Engineering", "Technology", "Business", "Medical", "Design"];
  const levels = ["All Levels", "Certificate", "Diploma", "Bachelor", "Master"];

  // Filter institutes based on search query
  const getFilteredInstitutes = () => {
    if (!searchQuery.trim()) return [];
    
    return institutes.filter(institute =>
      institute.courses.some(course =>
        course.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  // Filter mentors based on search query
  const getFilteredMentors = () => {
    if (!searchQuery.trim()) return [];
    
    return mentors.filter(mentor =>
      mentor.expertise.some(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  // Get course suggestions for search
  const getCourseSuggestions = () => {
    if (!searchQuery.trim()) return [];
    
    return allCourses.filter(course =>
      course.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
  };

  const filteredInstitutes = getFilteredInstitutes();
  const filteredMentors = getFilteredMentors();
  const courseSuggestions = getCourseSuggestions();

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
              <BookOpen size={16} className="mr-2" />
              Find Your Course
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Search 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Courses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Search for any course and discover institutes that offer it, plus connect with experienced 
              professionals who can guide your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search for courses (e.g., Computer Science, Data Science, MBA, MBBS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base"
              />
            </div>

            {/* Course Suggestions */}
            {courseSuggestions.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Popular courses:</p>
                <div className="flex flex-wrap gap-2">
                  {courseSuggestions.map((course, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      onClick={() => setSearchQuery(course)}
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && (
              <div className="mt-4 text-sm text-muted-foreground">
                Found {filteredInstitutes.length} institutes and {filteredMentors.length} mentors for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchQuery && (filteredInstitutes.length > 0 || filteredMentors.length > 0) ? (
        <section className="py-16">
          <div className="container mx-auto px-8">
            <Tabs defaultValue="institutes" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="institutes" className="flex items-center space-x-2">
                  <Building size={16} />
                  <span>Institutes ({filteredInstitutes.length})</span>
                </TabsTrigger>
                <TabsTrigger value="mentors" className="flex items-center space-x-2">
                  <User size={16} />
                  <span>Mentors ({filteredMentors.length})</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="institutes">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredInstitutes.map((institute, index) => (
                    <Card 
                      key={institute.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative">
                        <img 
                          src={institute.image} 
                          alt={institute.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-background/90 rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{institute.rating}</span>
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {institute.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {institute.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <MapPin size={14} />
                            <span>{institute.location}</span>
                          </div>
                          <Badge variant="secondary">{institute.type}</Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-3 border-t border-border/50">
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-1">
                              <Users size={12} />
                              <span>Students</span>
                            </div>
                            <div className="font-semibold text-sm">{institute.students}</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-1">
                              <Calendar size={12} />
                              <span>Est.</span>
                            </div>
                            <div className="font-semibold text-sm">{institute.establishedYear}</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-1">
                              <Award size={12} />
                              <span>Placement</span>
                            </div>
                            <div className="font-semibold text-sm">{institute.placement}</div>
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="text-muted-foreground">Courses matching your search: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {institute.courses
                              .filter(course => course.toLowerCase().includes(searchQuery.toLowerCase()))
                              .map((course, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm text-muted-foreground">
                            {institute.reviews} reviews
                          </div>
                          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            View Details
                            <ExternalLink size={14} className="ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredInstitutes.length === 0 && (
                  <div className="text-center py-16">
                    <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No institutes found</h3>
                    <p className="text-muted-foreground">No institutes offer courses matching "{searchQuery}"</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="mentors">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMentors.map((mentor, index) => (
                    <Card 
                      key={mentor.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name}
                            className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {mentor.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">{mentor.title}</p>
                            <p className="text-sm text-muted-foreground">{mentor.company}</p>
                          </div>
                          <div className="flex items-center space-x-1 bg-background/90 rounded-full px-2 py-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">{mentor.rating}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {mentor.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-3 border-t border-border/50">
                          <div>
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                              <Briefcase size={12} />
                              <span>Experience</span>
                            </div>
                            <div className="font-semibold text-sm">{mentor.experience}</div>
                          </div>
                          <div>
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                              <MessageCircle size={12} />
                              <span>Sessions</span>
                            </div>
                            <div className="font-semibold text-sm">{mentor.sessions}</div>
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="text-muted-foreground">Expertise matching your search: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {mentor.expertise
                              .filter(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
                              .map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm font-medium text-foreground">
                            {mentor.hourlyRate}
                          </div>
                          <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            Connect
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredMentors.length === 0 && (
                  <div className="text-center py-16">
                    <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No mentors found</h3>
                    <p className="text-muted-foreground">No mentors have experience with "{searchQuery}"</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      ) : (
        /* No Search Results or Empty State */
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl mx-auto text-center">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {searchQuery ? "No Results Found" : "Start Your Course Search"}
              </h3>
              <p className="text-muted-foreground mb-8">
                {searchQuery 
                  ? `We couldn't find any institutes or mentors for "${searchQuery}". Try searching for a different course.`
                  : "Enter a course name in the search bar above to find institutes that offer it and mentors with expertise in that field."
                }
              </p>
              
              {!searchQuery && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Popular searches:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Computer Science Engineering", "Data Science", "MBA", "MBBS", "UX/UI Design"].map((course, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        onClick={() => setSearchQuery(course)}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Courses;