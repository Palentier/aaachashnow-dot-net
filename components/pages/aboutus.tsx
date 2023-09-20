import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Aboutus = () => {
  return (
    <div id="aboutus" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl font-bold mb-6">About Us</h1>

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
            <img src="/cashnow.png" alt="About Us" className="select-none w-full h-full object-cover rounded-lg shadow-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
