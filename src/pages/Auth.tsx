import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign-in with Supabase
    console.log('Google Sign-in clicked');
  };

  const handleEmailSignIn = () => {
    // TODO: Implement Email Sign-in
    console.log('Email Sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F42525' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="w-full max-w-md relative">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>

        <Card className="backdrop-blur-sm bg-card/80 shadow-2xl border-border/50">
          <CardHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold">Welcome to EduPath</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to access personalized course recommendations and connect with your perfect educational institution
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Sign-in */}
            <Button 
              onClick={handleGoogleSignIn}
              variant="outline" 
              className="w-full h-12 text-base font-semibold border-2 hover:bg-secondary/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full flex-shrink-0"></div>
                <span>Continue with Google</span>
              </div>
            </Button>

            <div className="relative">
              <Separator className="my-6" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-4 text-sm text-muted-foreground">or</span>
              </div>
            </div>

            {/* Email Sign-in */}
            <Button 
              onClick={handleEmailSignIn}
              variant="outline" 
              className="w-full h-12 text-base font-semibold border-2 hover:bg-secondary/50 transition-all duration-300"
            >
              Continue with Email
            </Button>

            {/* Sign up option */}
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>

            {/* Terms */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                By continuing, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional info */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            🎓 Join 10,000+ students already using EduPath
          </p>
          <p className="text-xs text-muted-foreground/70">
            Trusted by students across Kerala & India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;