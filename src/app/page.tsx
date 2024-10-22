"use client";

import { Carousel, CarouselContent, CarouselControls, CarouselItem } from '@/components/carousel';
import { PostCard } from '@/components/carousel-card';
import { GridFeatures } from '@/components/grid-features';
import { GridServices } from '@/components/grid-services';
import { Header } from '@/components/header';
import { RequestQuoteButton } from '@/components/requestQuoteButton';
import { posts } from '@/mocks/posts';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Home() {


  return (
    <div className="flex flex-col">
      <Header />
      <section className="pb-32 flex flex-col justify-between">
        <div className="flex flex-col gap-6 items-center md:items-start px-4 md:w-1/2 md:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-[40px] leading-10 text-center mt-10 md:text-left md:text-7xl">Get the Sun to Power Your Home</motion.h1>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-normal text-lg text-center leading-7 md:text-left">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</motion.span>
          <motion.div
            className="flex gap-4 items-center justify-center md:items-start md:justify-start"
            initial={{ width: 0, overflow: 'hidden' }}
            animate={{ width: '100%' }}
          >
            <RequestQuoteButton />
          </motion.div>
        </div>
        <blockquote className="flex flex-col text-center mt-16 md:text-left md:w-1/2 md:mt-32">
          <motion.q
            initial={{ opacity: 0, y: 20, animationDelay: "4s" }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.
          </motion.q>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mt-4">
            <Image
              src="/assets/images/image2.svg"
              width={64}
              height={64}
              alt="hero"
            />
            <p className="flex flex-col">
              <cite className="text-lg not-italic">Rwanda Melflor</cite>
              <span className="text-lg leading-4 text-gray-400">zerowaste.com</span>
            </p>
          </motion.div>
        </blockquote>
      </section>
      <section className="relative flex flex-col items-center justify-center w-full h-auto py-12 gap-6">
        <h1 className="flex flex-col items-center w-full justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-medium">
            No more waste
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bold text-4xl">Pick the sun</motion.p>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center px-1 text-md md:w-1/2">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </motion.p>
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center"

        >
          <Image
            src="/assets/images/desktop.svg"
            alt="desktop illustration"
            className="w-full mt-16 md:w-2/3"
            width={300}
            height={250}
          />
        </motion.div>
        <Image
          src="/assets/images/circles.svg" width={1920} height={284}
          alt="circles illustration"
          className="absolute top-1/2 -translate-y-1/2 -z-10 left-0"
        />
      </section>
      <section className="flex flex-col w-full h-auto px-0 py-12 gap-6 md:flex-row-reverse md:pl-0 md:items-center">
        <div className="flex flex-col px-4 md:items-start">
          <h1 className="flex flex-col items-center w-full justify-center md:items-start">
            <span className="text-orange-500 font-medium">
              Services
            </span>
            <p className="font-bold text-4xl mb-6">Personalized services</p>
          </h1>
          <p className="text-center px-4 text-md md:px-0 md:text-left">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          <GridServices />
        </div>
        <div className="md:h-full">
          <Image width={400} height={400} src="/assets/images/phone1.svg" alt="phone illustratino" className="md:w-[750px] lg:w-[600px]" />
        </div>
      </section>
      <section className="flex flex-col w-full h-auto py-12 gap-6 md:flex-row md:pr-0 md:items-center">
        <div className="flex flex-col px-4 gap-6">
          <h1 className="flex flex-col items-center w-full justify-center md:items-start">
            <span className="text-orange-500 font-medium">
              System features
            </span>
            <p className="font-bold text-4xl">Powerful features</p>
          </h1>
          <p className="text-center px-4 text-md md:text-left md:px-0">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          <GridFeatures />
        </div>
        <div className="flex justify-end">
          <Image width={400} height={400} src="/assets/images/phone2.svg" alt="phone illustratino" className="w-[750px] lg:w-[600px]" />
        </div>
      </section>
      <section className="flex flex-col bg-purple-900 py-12 gap-6 md:min-h-fit">
        <div className="flex flex-col md:flex-row md:justify-between">

          <h1 className="flex flex-col items-center w-full justify-center md:items-start md:w-2/3">
            
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-yellow-500 font-medium">
              Join other Sun harvesters
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-bold text-4xl text-white text-center"
            >
              Make something awesome
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center px-4 text-md text-white my-6 md:px-0 md:text-left">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </motion.p>
          </h1>
          <motion.div
            initial={{ overflow: 'hidden', x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center justify-center"
          >
            <RequestQuoteButton
              variant="secondary"
              className="w-full md:w-fit"
            />
          </motion.div>
        </div>
        <div>
          <Carousel>
            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem key={post.description} className="md:basis-1/3">
                  <PostCard user={post.user} alt={post.alt} description={post.description} image={post.image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselControls />
          </Carousel>
        </div>
      </section>
      <section className="w-full relative flex flex-col bg-purple-900 py-12 gap-6 overflow-hidden md:bg-purple-700 md:justify-center md:items-center md:min-h-fit">
        <div className="flex flex-col md:flex-row w-full md:justify-between">

          <h1 className="flex flex-col items-center w-full justify-center md:items-start md:w-1/2">
            <span className="text-yellow-500 font-medium">
              Get the Sun to power your home
            </span>
            <p className="font-bold text-4xl text-white text-center md:text-left">
              All the power that you need for your house is now available
            </p>
          </h1>
          <div className="flex flex-col gap-4 mt-6 md:mt-0 z-10">
            <motion.div
              className="flex gap-4 items-center justify-center"
              initial={{ width: 0, overflow: 'hidden' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
            >

              <RequestQuoteButton variant="secondary" />
            </motion.div>
            <span className="text-white text-center">
              Egestas fringilla aliquam leo
            </span>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src="/assets/images/mackbook.svg"
            alt="macbook illustration"
            className="w-full z-20 md:w-2/3"
            width={358}
            height={196}
          />
        </motion.div>
        <div
          className="w-[360px] rounded-full -z-0 aspect-square bg-purple-500 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 md:w-[780px] md:bottom-full md:left-full md:-translate-x-2/3 md:translate-y-1/3" />
      </section>
      <footer className="flex flex-col items-center bg-white py-6 md:flex-row md:px-[80px] md:gap-6">
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={32}
          />
        </div>
        <span className="my-6 md:w-full">
          @ 2023 Soller, Inc. All rights reserved.
        </span>
        <ul className="flex [&>li:not(:last-child)]:mr-6">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Support</li>
        </ul>
      </footer>
    </div>
  );
}
