import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, Users } from 'lucide-react';
import student1 from '@/assets/student-1.jpg';
import student2 from '@/assets/student-2.jpg';

const PlacementsSection = () => {
  const placementStats = {
    averagePackage: "₹12.5 LPA",
    highestPackage: "₹45 LPA", 
    placementRate: "95%",
    topRecruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro"]
  };

  const workingStudents = [
    {
      name: "Arjun Menon",
      company: "Google",
      position: "Software Engineer",
      batch: "2022",
      image: student1,
      package: "₹45 LPA"
    },
    {
      name: "Sneha Krishnan", 
      company: "Microsoft",
      position: "Product Manager",
      batch: "2021",
      image: student2,
      package: "₹35 LPA"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Placement Excellence</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Outstanding career opportunities with top industry leaders and exceptional placement records
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50 max-w-6xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300 border border-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {placementStats.averagePackage}
                  </div>
                  <div className="text-muted-foreground font-medium">Average Package</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300 border border-secondary/10">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {placementStats.highestPackage}
                  </div>
                  <div className="text-muted-foreground font-medium">Highest Package</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300 border border-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {placementStats.placementRate}
                  </div>
                  <div className="text-muted-foreground font-medium">Placement Rate</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Top Recruiters
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {placementStats.topRecruiters.map((company, index) => (
                    <div key={index} className="bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 rounded-xl p-4 text-center text-sm font-semibold hover:shadow-md transition-all duration-300 group">
                      <div className="text-foreground group-hover:text-primary transition-colors duration-300">{company}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Alumni Success Stories
                </h4>
                <div className="space-y-4">
                  {workingStudents.map((student, index) => (
                    <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-muted/20 to-muted/10 border border-border/30 rounded-xl hover:shadow-md transition-all duration-300 group">
                      <Avatar className="w-16 h-16 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                        <AvatarImage src={student.image} alt={student.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{student.name}</h5>
                        <p className="text-muted-foreground mb-2">
                          {student.position} at <span className="font-semibold">{student.company}</span> • Batch {student.batch}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{student.package}</div>
                        <div className="text-sm text-muted-foreground">Package</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlacementsSection;