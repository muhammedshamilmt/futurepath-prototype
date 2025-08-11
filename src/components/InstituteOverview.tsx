import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, TrendingUp } from 'lucide-react';

const InstituteOverview = () => {
  const institute = {
    name: "Indian Institute of Technology Kerala",
    description: "Premier engineering institution with cutting-edge research facilities and excellent placement records. IIT Kerala is known for its innovation-driven curriculum and world-class faculty.",
    accreditation: ["NAAC A++", "NBA", "AICTE"],
    rankings: {
      nirf: 28,
      times: "401-500",
      qs: "751-800"
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Our Institution</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Discover excellence in education with our world-class programs and facilities
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50 max-w-6xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full opacity-20"></div>
              <h3 className="text-3xl font-bold text-foreground mb-6 relative">Excellence in Education</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {institute.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The institute offers a comprehensive range of undergraduate, postgraduate, and doctoral programs 
                  in engineering and technology. With a strong emphasis on research and innovation, the institute 
                  has established itself as a leading center of excellence in technical education.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gradient-to-r from-border/0 via-border to-border/0">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Accreditations
                </h4>
                <div className="flex flex-wrap gap-3">
                  {institute.accreditation.map((acc, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20">
                      {acc}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Rankings
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground">NIRF Ranking</span>
                    <span className="font-semibold text-primary">#{institute.rankings.nirf}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground">QS World Ranking</span>
                    <span className="font-semibold">{institute.rankings.qs}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground">Times Ranking</span>
                    <span className="font-semibold">{institute.rankings.times}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstituteOverview;