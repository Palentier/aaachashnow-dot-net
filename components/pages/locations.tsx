import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LocationCard = ({ title, description, imageSrc }: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <Card className="transition-shadow-primary p-4 duration-300 transform hover:shadow-primary hover:-translate-y-1">
      <div className="relative aspect-w-3 aspect-h-2">
        {/* Fixed Aspect Ratio Container */}
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant={'default'} >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

const Locations = () => {
  const locations = [
    {
      title: "Cash City",
      description: "9 Locations across Middle TN and East TN",
      imageSrc: "/undraw_receipt_re_fre3.svg", // Replace with the actual image source
    },
    {
      title: "Cash 1",
      description: "6 Locations across Middle and West TN",
      imageSrc: "/cash1.png", // Replace with the actual image source
    },
    {
      title: "Advanced Cash",
      description: "4 Locations across Middle and East TN",
      imageSrc: "/advanced-cash-image.jpg", // Replace with the actual image source
    },
  ];

  return (
    <div id="locations" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">
          Our Locations
        </h1>
        <div className="flex flex-wrap -mx-4">
          {locations.map((location, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <LocationCard {...location} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
