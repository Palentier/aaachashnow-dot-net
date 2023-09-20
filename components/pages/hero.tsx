"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Aboutus from './aboutus';
import Locations from './locations';

export default function Hero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative w-full flex flex-col justify-center items-center h-screen min-h-[800px] text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl text-primary font-black">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-flicker-in-glow"
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-flicker-in-glow"
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-flicker-in-glow"
                >
                  A
                </motion.span>{" "}
                
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-flicker-in-glow"
                >
                  C
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  S
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  H
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  N
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  O
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="text-flicker-in-glow"
                >
                  W
                </motion.span>
              </h1>
              <p className='mt-2 text-lg font-medium'>
              Your Trusted Source for Quick Financial Assistance.
              </p>
              <div className="flex flex-row mt-2 gap-4 rounded-lg w-[17rem] text-[16px] ">
              <Button variant={'default'}>
                Customer Portal
              </Button>
              <Button
              className=''
               variant={'secondary'}>
                About Us
              </Button>
              </div>
             
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mb-[2rem] lg:mb-[8rem] order-1 lg:order-2">
                <motion.img
                  src="/undraw_treasure_of-9-i.svg"
                  className=" h-auto "
                  alt="Image FAiled to upload"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
          </div>
         
        </div>
      </div>
        <Aboutus/>
        <Locations/>
    </div>
  );
}
