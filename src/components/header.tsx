"use client"

import React from "react";
import { RequestQuoteButton } from "./requestQuoteButton";

import { motion } from 'framer-motion';
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header
      className="flex px-4 justify-between items-start md:items-center
       z-10 md:px-[80px] md:py-3">
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        className="font-bold text-4xl py-2">soller</motion.h1>
      <motion.ul
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        className="hidden md:flex md:flex-1 ml-8 gap-4">
        <ListItem>Products</ListItem>
        <ListItem>Solutions</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Configure</ListItem>
      </motion.ul>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
      >
        <RequestQuoteButton className="hidden md:flex" />
      </motion.div>
      <Image src="/assets/images/image1.svg" width={500} height={500} alt="hero" className="md:absolute top-0 right-0 -z-10 lg:w-[600px]" />
    </header>
  )
}

type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({ children }) => { 
  return (
    <li className="px-2 py-3 font-medium text-md">{children}</li>
  )
};