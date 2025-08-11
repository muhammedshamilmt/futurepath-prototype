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
  MapPin, 
  Star, 
  Users, 
  GraduationCap,
  Filter,
  ExternalLink,
  Calendar,
  Award
} from 'lucide-react';
import institute1 from '@/assets/institute-1.jpg';

const Institutes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const institutes = [
    {
      id: 1,
      name: "Indian Institute of Technology Kerala",
      type: "Engineering",
      city: "Palakkad",
      state: "Kerala",
      rating: 4.8,
      reviews: 324,
      students: "2.5k+",
      established: 2016,
      image: institute1,
      featured: true,
      description: "Premier engineering institution with cutting-edge research facilities and excellent placement records.",
      courses: ["B.Tech", "M.Tech", "PhD"],
      fees: "₹2.5L - ₹5L",
      placement: "95%"
    },
    {
      id: 2,
      name: "Kerala Institute of Medical Sciences",
      type: "Medical",
      city: "Kochi",
      state: "Kerala",
      rating: 4.7,
      reviews: 189,
      students: "1.8k+",
      established: 1982,
      image: institute1,
      featured: false,
      description: "Leading medical college with state-of-the-art hospital and research facilities.",
      courses: ["MBBS", "MD", "MS"],
      fees: "₹15L - ₹25L",
      placement: "98%"
    },
    {
      id: 3,
      name: "Cochin University of Science & Technology",
      type: "University",
      city: "Kochi",
      state: "Kerala",
      rating: 4.6,
      reviews: 567,
      students: "15k+",
      established: 1971,
      image: institute1,
      featured: true,
      description: "Comprehensive university offering diverse programs in science, technology, and management.",
      courses: ["B.Tech", "MBA", "M.Sc"],
      fees: "₹1L - ₹8L",
      placement: "88%"
    },
    {
      id: 4,
      name: "National Institute of Design Kerala",
      type: "Design",
      city: "Kozhikode",
      state: "Kerala",
      rating: 4.9,
      reviews: 145,
      students: "800+",
      established: 2019,
      image: institute1,
      featured: false,
      description: "Premier design institute focusing on industrial design, communication design, and textile design.",
      courses: ["B.Des", "M.Des", "PhD"],
      fees: "₹3L - ₹6L",
      placement: "92%"
    },
    {
      id: 5,
      name: "Indian Institute of Management Kozhikode",
      type: "Management",
      city: "Kozhikode",
      state: "Kerala",
      rating: 4.8,
      reviews: 278,
      students: "1.2k+",
      established: 1996,
      image: institute1,
      featured: true,
      description: "Top-tier management institute known for excellent MBA programs and industry connections.",
      courses: ["MBA", "PGDM", "PhD"],
      fees: "₹20L - ₹25L",
      placement: "100%"
    },
    {
      id: 6,
      name: "College of Engineering Trivandrum",
      type: "Engineering",
      city: "Thiruvananthapuram",
      state: "Kerala",
      rating: 4.5,
      reviews: 423,
      students: "3k+",
      established: 1939,
      image: institute1,
      featured: false,
      description: "One of India's oldest engineering colleges with a strong alumni network and excellent faculty.",
      courses: ["B.Tech", "M.Tech", "MBA"],
      fees: "₹1.5L - ₹4L",
      placement: "85%"
    }
  ];

  const cities = ["All Cities", "Kochi", "Palakkad", "Kozhikode", "Thiruvananthapuram"];
  const types = ["All Types", "Engineering", "Medical", "Management", "Design", "University"];

  const filteredInstitutes = institutes.filter(institute => {
    const matchesSearch = institute.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         institute.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === '' || selectedCity === 'All Cities' || institute.city === selectedCity;
    const matchesType = selectedType === '' || selectedType === 'All Types' || institute.type === selectedType;
    
    return matchesSearch && matchesCity && matchesType;
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
              Discover Institutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Find Your Perfect 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Institution</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore verified institutions across India with authentic reviews, detailed information, 
              and insights from current students and alumni.
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
                  placeholder="Search institutes, courses, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 w-full md:w-auto">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <SelectValue placeholder="City" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <div className="flex items-center space-x-2">
                      <Filter size={16} />
                      <SelectValue placeholder="Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredInstitutes.length} of {institutes.length} institutions
            </div>
          </div>
        </div>
      </section>

      {/* Institutes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {institute.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
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
                      <span>{institute.city}, {institute.state}</span>
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
                      <div className="font-semibold text-sm">{institute.established}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-1">
                        <Award size={12} />
                        <span>Placement</span>
                      </div>
                      <div className="font-semibold text-sm">{institute.placement}</div>
                    </div>
                  </div>


                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      {institute.reviews} reviews
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = `/institute/${institute.id}`}
                    >
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
              <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No institutions found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institutes;