"use client"

import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  review: string;
  date: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatarUrl, name, review, date, stars }) => {
  return (
    <Card className="mt-4 transition-shadow-primary shadow-lg duration-300 transform hover:shadow-primary hover:-translate-y-1">
      <CardHeader>
        <Image
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full"
          unoptimized
        />
        <div className="ml-2">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <div className="flex items-center">
            {Array.from({ length: stars }).map((_, index) => (
              <StarIcon key={index} size={20} />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{review}</p>
      </CardContent>
      <CardFooter>
        <p className="text-gray-600">{date}</p>
      </CardFooter>
    </Card>
  );
};

const Lebanon = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyCTCnW8wFou7aT8nU7DROsDyjbtlIZ5g3s';
    const placeId = '36.214604457833744, -86.29447653917029'; // Get this from your Google My Business account

    axios
      .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
      .then((response) => {
        setReviews(response.data.result.reviews);
      })
      .catch((error) => {
        console.error('Error fetching Google reviews:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div id="aboutus" className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary flex flex-row justify-center items-center">Lebanon</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Left Column */}
            <div>
              <Card className="transition-shadow-primary duration-300 transform shadow-lg hover:shadow-primary hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    Who We Are
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="">
                    AAA Cash Now has been serving Middle TN since 2014. We strive for exceptional customer service and set ourselves apart from our competitors.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="mt-8 transition-shadow-primary duration-300 shadow-lg transform hover:shadow-primary hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="">
                    We are your one-stop shop, aiming to meet all your financial needs in one location. Our goal is to ensure you leave our store satisfied, feeling like your financial needs were met, and all your questions were answered.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="mt-8 transition-shadow-primary shadow-lg duration-300 transform hover:shadow-primary hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    How We Help You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="">
                    Our team members will explain each loan product and help you develop the one that fits your needs best. Join our family today and take the first step toward financial peace of mind.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant={'default'}>
                    Join Us Now
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Right Column (Image or Additional Info) */}
            <div className="hidden md:block">
              <Image
                src="/cashnow.png"
                alt="About Us"
                className="select-none w-full h-full object-cover rounded-lg shadow-primary"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            {reviews.map((reviewData, index) => (
              <ReviewCard
                key={index}
                avatarUrl={reviewData.profile_photo_url}
                name={reviewData.author_name}
                review={reviewData.text}
                date={reviewData.relative_time_description}
                stars={reviewData.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lebanon;
