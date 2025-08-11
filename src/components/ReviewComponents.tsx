import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, Edit, Trash2, MessageCircle, ThumbsUp, Flag, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: number;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  course?: string;
  year?: string;
}

interface WriteReviewFormData {
  rating: number;
  title: string;
  content: string;
  course: string;
  year: string;
}

interface WriteReviewFormProps {
  instituteName: string;
  onSubmit: (data: WriteReviewFormData) => void;
}

export const WriteReviewForm: React.FC<WriteReviewFormProps> = ({ instituteName, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<WriteReviewFormData>();
  const { toast } = useToast();

  const courses = [
    'Computer Science & Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics & Communication',
    'Chemical Engineering',
    'Biotechnology',
    'MBA',
    'Other'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Alumni'];

  const handleFormSubmit = (data: WriteReviewFormData) => {
    const reviewData = { ...data, rating };
    onSubmit(reviewData);
    reset();
    setRating(0);
    setIsOpen(false);
    toast({
      title: "Review Submitted",
      description: "Your review has been submitted successfully.",
    });
  };

  const StarRating = ({ currentRating, onRatingChange, editable = true }: { 
    currentRating: number; 
    onRatingChange?: (rating: number) => void;
    editable?: boolean;
  }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer transition-colors ${
            star <= currentRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
          onClick={() => editable && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <MessageCircle className="w-4 h-4 mr-2" />
          Write a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Write a Review for {instituteName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label>Overall Rating *</Label>
            <StarRating currentRating={rating} onRatingChange={setRating} />
            {rating === 0 && <p className="text-destructive text-sm">Please select a rating</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Select {...register('course', { required: 'Course is required' })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.course && <p className="text-destructive text-sm">{errors.course.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Academic Year</Label>
              <Select {...register('year', { required: 'Year is required' })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.year && <p className="text-destructive text-sm">{errors.year.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Review Title *</Label>
            <Input
              id="title"
              {...register('title', { required: 'Title is required', minLength: { value: 5, message: 'Title must be at least 5 characters' } })}
              placeholder="Summarize your experience in a few words"
            />
            {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Your Review *</Label>
            <Textarea
              id="content"
              {...register('content', { required: 'Review content is required', minLength: { value: 50, message: 'Review must be at least 50 characters' } })}
              placeholder="Share your detailed experience about the institute, faculty, facilities, placement, etc."
              rows={6}
            />
            {errors.content && <p className="text-destructive text-sm">{errors.content.message}</p>}
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Review Guidelines:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Be honest and provide constructive feedback</li>
              <li>• Focus on your personal experience</li>
              <li>• Avoid using offensive language</li>
              <li>• Provide specific details to help others</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={rating === 0} className="flex-1">
              Submit Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface EditReviewFormProps {
  review: Review;
  onEdit: (id: number, data: WriteReviewFormData) => void;
}

export const EditReviewForm: React.FC<EditReviewFormProps> = ({ review, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(review.rating);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<WriteReviewFormData>({
    defaultValues: {
      title: review.title,
      content: review.content,
      course: review.course || '',
      year: review.year || ''
    }
  });
  const { toast } = useToast();

  const courses = [
    'Computer Science & Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics & Communication',
    'Chemical Engineering',
    'Biotechnology',
    'MBA',
    'Other'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Alumni'];

  const handleFormSubmit = (data: WriteReviewFormData) => {
    onEdit(review.id, { ...data, rating });
    setIsOpen(false);
    toast({
      title: "Review Updated",
      description: "Your review has been updated successfully.",
    });
  };

  const StarRating = ({ currentRating, onRatingChange }: { 
    currentRating: number; 
    onRatingChange: (rating: number) => void;
  }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer transition-colors ${
            star <= currentRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Your Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label>Overall Rating *</Label>
            <StarRating currentRating={rating} onRatingChange={setRating} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Select defaultValue={review.course} onValueChange={(value) => setValue('course', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Academic Year</Label>
              <Select defaultValue={review.year} onValueChange={(value) => setValue('year', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Review Title *</Label>
            <Input
              id="title"
              {...register('title', { required: 'Title is required' })}
              placeholder="Summarize your experience"
            />
            {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Your Review *</Label>
            <Textarea
              id="content"
              {...register('content', { required: 'Review content is required' })}
              placeholder="Share your experience..."
              rows={6}
            />
            {errors.content && <p className="text-destructive text-sm">{errors.content.message}</p>}
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Update Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface ReviewsListProps {
  reviews: Review[];
  onEdit?: (id: number, data: WriteReviewFormData) => void;
  onDelete?: (id: number) => void;
  showActions?: boolean;
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ 
  reviews, 
  onEdit, 
  onDelete, 
  showActions = false 
}) => {
  const { toast } = useToast();

  const handleHelpful = (reviewId: number) => {
    toast({
      title: "Thank you!",
      description: "Your feedback helps others.",
    });
  };

  const handleReport = (reviewId: number) => {
    toast({
      title: "Review Reported",
      description: "We'll review this content. Thank you for your feedback.",
    });
  };

  const StarDisplay = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{review.userName}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(review.date).toLocaleDateString()}
                    {review.course && (
                      <>
                        <span>•</span>
                        <Badge variant="secondary" className="text-xs">{review.course}</Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <StarDisplay rating={review.rating} />
                <span className="text-sm font-medium">{review.rating}.0</span>
              </div>
            </div>

            <h4 className="font-semibold text-lg mb-2">{review.title}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleHelpful(review.id)}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Helpful ({review.helpful})
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleReport(review.id)}
                >
                  <Flag className="w-4 h-4 mr-1" />
                  Report
                </Button>
              </div>

              {showActions && onEdit && onDelete && (
                <div className="flex gap-2">
                  <EditReviewForm review={review} onEdit={onEdit} />
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onDelete(review.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};