import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InstituteOverview from '@/components/InstituteOverview';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import PlacementsSection from '@/components/PlacementsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import { WriteReviewForm, ReviewsList } from '@/components/ReviewComponents';
import { QuickInfoBox, ContactInfoBox, AdmissionDeadlineBox, FeesBreakdownBox, SimilarInstitutesBox, QuickActionsBox } from '@/components/SidebarBoxes';
import { 
  MapPin, 
  Star, 
  Users, 
  GraduationCap,
  Calendar,
  Award,
  Building,
  Phone,
  Mail,
  Globe,
  BookOpen,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  CheckCircle
} from 'lucide-react';
import institute1 from '@/assets/institute-1.jpg';

const InstituteDetails = () => {
  const { id } = useParams();
  
  // Reviews state
  const [reviews, setReviews] = React.useState([
    {
      id: 1,
      userName: 'Arjun Menon',
      rating: 5,
      title: 'Excellent institution with world-class facilities',
      content: 'IIT Palakkad has exceeded my expectations in every aspect. The faculty is highly knowledgeable and supportive. The infrastructure is modern with state-of-the-art laboratories. The campus life is vibrant with various clubs and activities. The placement opportunities are outstanding with top companies visiting regularly.',
      date: '2024-01-20',
      helpful: 24,
      course: 'Computer Science & Engineering',
      year: '3rd Year'
    },
    {
      id: 2,
      userName: 'Priya Sharma',
      rating: 4,
      title: 'Great academic environment, could improve hostel facilities',
      content: 'The academic programs are rigorous and well-structured. Professors are very experienced and research opportunities are abundant. However, the hostel facilities need some improvement, especially the dining options. Overall, it\'s a great place to pursue engineering education.',
      date: '2024-01-15',
      helpful: 18,
      course: 'Electrical Engineering',
      year: '2nd Year'
    },
    {
      id: 3,
      userName: 'Rahul Kumar',
      rating: 5,
      title: 'Outstanding placement support and industry connections',
      content: 'The placement cell at IIT Palakkad is exceptional. They provide comprehensive training for interviews and aptitude tests. The industry connections are strong, and many top-tier companies visit for recruitment. The career guidance has been invaluable in shaping my future.',
      date: '2024-01-10',
      helpful: 31,
      course: 'Mechanical Engineering',
      year: 'Graduate'
    }
  ]);

  const handleReviewSubmit = (reviewData) => {
    const newReview = {
      id: reviews.length + 1,
      userName: 'Current User', // This would come from auth context
      ...reviewData,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    setReviews([newReview, ...reviews]);
  };

  // Featured institute data for the hero section
  const institute = {
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
    description: "Premier engineering institution with cutting-edge research facilities and excellent placement records. IIT Kerala is known for its innovation-driven curriculum and world-class faculty.",
    courses: ["B.Tech", "M.Tech", "PhD"],
    fees: "₹2.5L - ₹5L",
    placement: "95%",
    website: "https://iitpkd.ac.in",
    phone: "+91-491-256-2999",
    email: "admissions@iitpkd.ac.in",
    address: "IIT Palakkad Campus, Ahalia Integrated Campus, Kozhippara, Palakkad - 678557",
    accreditation: ["NAAC A++", "NBA", "AICTE"],
    rankings: {
      nirf: 28,
      times: "401-500",
      qs: "751-800"
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-8">
          {/* Hero Section */}
          <section className="pb-12 relative overflow-hidden">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
              
              <img 
                src={institute.image} 
                alt={institute.name}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-white text-center">
                    <div className="text-sm opacity-80">NIRF Ranking</div>
                    <div className="text-2xl font-bold">#{institute.rankings.nirf}</div>
                  </div>
                </div>
              </div>
              
              {/* Institute Info Overlay */}
              <div className="absolute bottom-12 left-8 right-8 text-white">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      {institute.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg">
                          ⭐ Featured Institute
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                        {institute.type}
                      </Badge>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text">
                      {institute.name}
                    </h1>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/90 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{institute.city}, {institute.state}</span>
                      </div>
                      <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-lg">Est. {institute.established}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                      {institute.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <span className="text-3xl font-bold">{institute.rating}</span>
                      </div>
                      <div className="text-sm text-white/80">{institute.reviews} reviews</div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button size="lg" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button size="lg" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                        <Heart className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 relative rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] rounded-3xl" />
            <div className="relative px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Institute at a Glance</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover the key highlights that make this institution stand out in academic excellence
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-primary/10">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-foreground mb-2">{institute.students}</div>
                    <div className="text-sm text-muted-foreground font-medium">Students</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-secondary/10">
                    <Award className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-foreground mb-2">{institute.placement}</div>
                    <div className="text-sm text-muted-foreground font-medium">Placement</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-primary/10">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-foreground mb-2">#{institute.rankings.nirf}</div>
                    <div className="text-sm text-muted-foreground font-medium">NIRF Ranking</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-secondary/10">
                    <BookOpen className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-foreground mb-2">{institute.courses.length}+</div>
                    <div className="text-sm text-muted-foreground font-medium">Programs</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-primary/10">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-foreground mb-2">{institute.accreditation.length}</div>
                    <div className="text-sm text-muted-foreground font-medium">Accreditations</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <InstituteOverview />

          {/* Courses Section */}
          <CoursesSection />

          {/* Faculty Section */}
          <FacultySection />

          {/* Placements Section */}
          <PlacementsSection />

          {/* Facilities Section */}
          <FacilitiesSection />

          {/* Reviews Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Student Reviews</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Read authentic reviews from current students and alumni to get real insights
              </p>
            </div>
            
            <div className="grid gap-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold mb-2">Share Your Experience</h3>
                  <p className="text-muted-foreground">Help future students by sharing your honest review</p>
                </div>
                <WriteReviewForm 
                  instituteName={institute.name} 
                  onSubmit={handleReviewSubmit} 
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">All Reviews ({reviews.length})</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{institute.rating}</span>
                    <span className="text-muted-foreground">({institute.reviews} reviews)</span>
                  </div>
                </div>
                
                <ReviewsList reviews={reviews} />
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstituteDetails;