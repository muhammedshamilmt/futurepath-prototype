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
  Star, 
  ThumbsUp, 
  MessageSquare,
  GraduationCap,
  MapPin,
  Calendar,
  User,
  Filter,
  TrendingUp
} from 'lucide-react';

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const reviews = [
    {
      id: 1,
      studentName: "Ananya K.",
      studentType: "Current Student",
      course: "B.Tech Computer Science",
      year: "3rd Year",
      institute: "IIT Kerala",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent faculty and research opportunities",
      content: "IIT Kerala has exceeded my expectations in every way. The faculty is world-class, and the research opportunities are incredible. The campus infrastructure is top-notch, and the placement support is outstanding. The peer learning environment has helped me grow both academically and personally.",
      likes: 45,
      helpful: 38,
      verified: true,
      tags: ["Faculty", "Research", "Placements", "Infrastructure"]
    },
    {
      id: 2,
      studentName: "Rahul M.",
      studentType: "Alumni",
      course: "MBBS",
      year: "2022 Graduate",
      institute: "KIMS Kochi",
      rating: 4,
      date: "2024-01-10",
      title: "Great medical education with practical exposure",
      content: "KIMS provided excellent clinical exposure and hands-on training. The hospital attached to the college gave us real-world experience. However, the hostel facilities could be improved. Overall, I'm well-prepared for my medical career thanks to the comprehensive curriculum.",
      likes: 32,
      helpful: 29,
      verified: true,
      tags: ["Clinical Training", "Hospital", "Curriculum", "Hostel"]
    },
    {
      id: 3,
      studentName: "Priya S.",
      studentType: "Alumni",
      course: "MBA",
      year: "2021 Graduate",
      institute: "IIM Kozhikode",
      rating: 5,
      date: "2024-01-08",
      title: "Life-changing experience with excellent ROI",
      content: "IIM Kozhikode transformed my career completely. The case-study method, diverse peer group, and industry connections are unmatched. The placement cell worked tirelessly to ensure everyone got their dream job. Two years well spent!",
      likes: 67,
      helpful: 52,
      verified: true,
      tags: ["Case Studies", "Placements", "Peer Group", "Career Growth"]
    },
    {
      id: 4,
      studentName: "Arjun V.",
      studentType: "Current Student",
      course: "M.Des Industrial Design",
      year: "Final Year",
      institute: "NID Kerala",
      rating: 5,
      date: "2024-01-05",
      title: "Perfect for creative minds",
      content: "NID Kerala is a paradise for design enthusiasts. The faculty encourages experimentation and innovation. The workshops and studios are well-equipped. The exposure to industry projects and international design trends is invaluable.",
      likes: 28,
      helpful: 24,
      verified: true,
      tags: ["Creative Freedom", "Industry Projects", "Workshops", "Innovation"]
    },
    {
      id: 5,
      studentName: "Sneha R.",
      studentType: "Current Student",
      course: "B.Tech Civil Engineering",
      year: "2nd Year",
      institute: "CUSAT",
      rating: 4,
      date: "2024-01-03",
      title: "Good value for money with decent facilities",
      content: "CUSAT offers good education at affordable fees. The faculty is experienced, and the campus is beautiful. Some labs need upgrades, but overall it's a solid choice for engineering. The cultural life on campus is very vibrant.",
      likes: 19,
      helpful: 16,
      verified: true,
      tags: ["Affordable", "Campus Life", "Cultural Activities", "Value for Money"]
    },
    {
      id: 6,
      studentName: "Vikram P.",
      studentType: "Alumni",
      course: "M.Tech Mechanical",
      year: "2020 Graduate",
      institute: "CET Trivandrum",
      rating: 4,
      date: "2023-12-28",
      title: "Strong alumni network and placement support",
      content: "CET has a rich legacy and strong alumni network. The placement cell is very active, and seniors are always willing to help. The academic rigor prepared me well for the industry. Library and research facilities are good.",
      likes: 24,
      helpful: 21,
      verified: true,
      tags: ["Alumni Network", "Placements", "Academic Rigor", "Research"]
    }
  ];

  const institutes = ["All Institutes", "IIT Kerala", "KIMS Kochi", "IIM Kozhikode", "NID Kerala", "CUSAT", "CET Trivandrum"];
  const ratings = ["All Ratings", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.institute.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInstitute = selectedInstitute === '' || selectedInstitute === 'All Institutes' || review.institute === selectedInstitute;
    const matchesRating = selectedRating === '' || selectedRating === 'All Ratings' || 
                         selectedRating === `${review.rating} Star${review.rating > 1 ? 's' : ''}`;
    
    return matchesSearch && matchesInstitute && matchesRating;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

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
              Student Reviews
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Real Stories from 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Real Students</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Read authentic reviews and experiences from current students and alumni to make 
              informed decisions about your educational journey.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{reviews.length}+</div>
                <div className="text-sm text-muted-foreground">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-3xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Verified Reviews</div>
              </div>
            </div>
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
                  placeholder="Search reviews by institution, course, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 w-full md:w-auto">
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

                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-full md:w-32 h-12">
                    <div className="flex items-center space-x-2">
                      <Star size={16} />
                      <SelectValue placeholder="Rating" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map(rating => (
                      <SelectItem key={rating} value={rating}>{rating}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredReviews.length} of {reviews.length} reviews
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredReviews.map((review, index) => (
              <Card 
                key={review.id}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-foreground">{review.studentName}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {review.studentType} • {review.course} • {review.year}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <GraduationCap size={14} />
                          <span>{review.institute}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {review.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {review.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {review.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ThumbsUp size={16} />
                        <span>{review.likes} likes</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <MessageSquare size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.helpful} found this helpful
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-16">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No reviews found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}

          {/* Write Review CTA */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Share Your Experience
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Help other students by sharing your authentic experience at your institution. 
                  Your review can make a difference in someone's educational journey.
                </p>
                <Button size="lg" className="mt-4">
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;