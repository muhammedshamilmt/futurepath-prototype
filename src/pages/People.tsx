import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search,
  MessageCircle, 
  Star, 
  Users, 
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Filter
} from 'lucide-react';

const People = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');

  const people = [
    {
      id: 1,
      name: "Aditi Sharma",
      role: "Student Mentor",
      institute: "IIT Kerala",
      course: "B.Tech Computer Science",
      year: "Final Year",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 45,
      sessions: 120,
      specialization: ["Engineering Entrance", "Career Guidance", "Study Tips"],
      bio: "Currently pursuing Computer Science at IIT Kerala. Passionate about helping juniors navigate the complex world of engineering admissions and campus life.",
      verified: true,
      responseTime: "< 2 hours",
      location: "Palakkad, Kerala"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Academic Counselor",
      institute: "KIMS Kochi",
      course: "Medical Education",
      year: "Professor",
      avatar: "/api/placeholder/80/80",
      rating: 4.8,
      reviews: 89,
      sessions: 250,
      specialization: ["Medical Entrance", "NEET Preparation", "Medical Colleges"],
      bio: "Professor of Medicine with 15+ years of experience. Specialized in guiding students through medical entrance exams and career planning in healthcare.",
      verified: true,
      responseTime: "< 4 hours",
      location: "Kochi, Kerala"
    },
    {
      id: 3,
      name: "Priya Nair",
      role: "Alumni Mentor",
      institute: "IIM Kozhikode",
      course: "MBA",
      year: "2019 Graduate",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 67,
      sessions: 180,
      specialization: ["MBA Preparation", "CAT Strategy", "Business Schools"],
      bio: "MBA graduate working as Product Manager at a Fortune 500 company. Love helping students crack CAT and choose the right business school.",
      verified: true,
      responseTime: "< 1 hour",
      location: "Bangalore, Karnataka"
    },
    {
      id: 4,
      name: "Arjun Menon",
      role: "Student Mentor",
      institute: "NID Kerala",
      course: "M.Des Industrial Design",
      year: "Second Year",
      avatar: "/api/placeholder/80/80",
      rating: 4.7,
      reviews: 32,
      sessions: 85,
      specialization: ["Design Portfolio", "NID Entrance", "Creative Careers"],
      bio: "Design student passionate about industrial design and innovation. Helping aspiring designers build strong portfolios and crack design entrances.",
      verified: true,
      responseTime: "< 3 hours",
      location: "Kozhikode, Kerala"
    },
    {
      id: 5,
      name: "Sneha Thomas",
      role: "Career Counselor",
      institute: "Multiple Institutions",
      course: "Career Guidance",
      year: "Professional",
      avatar: "/api/placeholder/80/80",
      rating: 4.8,
      reviews: 156,
      sessions: 400,
      specialization: ["Career Planning", "Skill Development", "Industry Insights"],
      bio: "Certified career counselor with 8+ years of experience. Specialized in helping students discover their passions and plan their career paths.",
      verified: true,
      responseTime: "< 2 hours",
      location: "Thiruvananthapuram, Kerala"
    },
    {
      id: 6,
      name: "Vikram Rao",
      role: "Industry Expert",
      institute: "Tech Industry",
      course: "Software Engineering",
      year: "10+ Experience",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 78,
      sessions: 200,
      specialization: ["Tech Careers", "Coding Interview", "Startup Guidance"],
      bio: "Senior Software Engineer at a leading tech company. Mentoring students interested in technology careers and startup ecosystem.",
      verified: true,
      responseTime: "< 6 hours",
      location: "Hyderabad, Telangana"
    }
  ];

  const roles = ["All Roles", "Student Mentor", "Alumni Mentor", "Academic Counselor", "Career Counselor", "Industry Expert"];
  const institutes = ["All Institutes", "IIT Kerala", "KIMS Kochi", "IIM Kozhikode", "NID Kerala", "CUSAT", "Multiple Institutions"];

  const filteredPeople = people.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         person.specialization.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         person.institute.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === '' || selectedRole === 'All Roles' || person.role === selectedRole;
    const matchesInstitute = selectedInstitute === '' || selectedInstitute === 'All Institutes' || person.institute === selectedInstitute;
    
    return matchesSearch && matchesRole && matchesInstitute;
  });

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
              Connect with Mentors
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Learn from 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Real People</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with students, alumni, and professionals who can guide you through your educational 
              journey with authentic insights and personalized advice.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search mentors by name, expertise, or institution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 w-full md:w-auto">
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <SelectValue placeholder="Role" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <div className="flex items-center space-x-2">
                      <GraduationCap size={16} />
                      <SelectValue placeholder="Institute" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {institutes.map(institute => (
                      <SelectItem key={institute} value={institute}>{institute}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredPeople.length} of {people.length} mentors
            </div>
          </div>
        </div>
      </section>

      {/* People Grid */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPeople.map((person, index) => (
              <Card 
                key={person.id}
                className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      {person.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{person.role}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{person.rating}</span>
                        <span className="text-xs text-muted-foreground">({person.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {person.bio}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <GraduationCap size={14} />
                      <span>{person.institute}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <BookOpen size={14} />
                      <span>{person.course}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={14} />
                      <span>{person.location}</span>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {person.specialization.map((spec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{person.sessions}</div>
                      <div className="text-xs text-muted-foreground">Sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{person.responseTime}</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MessageCircle size={16} className="mr-2" />
                    Connect Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPeople.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No mentors found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default People;