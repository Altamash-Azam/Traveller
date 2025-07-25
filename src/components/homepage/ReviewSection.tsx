"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/Layout-grid";

export default function ReviewSection() {
  return (
    <div className="h-screen py-5 w-full">
        <div className='mx-4 lg:mx-20 font-medium text-xl text-center text-[#259ada] mb-5'>//REVIEWS</div>
        <div className="text-5xl text-center">Your trusted source of travel insipration</div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Sofia Rossi
      </p>
      <p className="  text-base text-white"></p>
      <p className=" text-base my-4 max-w-lg text-neutral-200">
        "As someone who loves details, this tool is a dream come true. The ability to add notes, costs, and booking references to every single item is fantastic. I loved how it automatically calculated our total expenses, keeping us on budget. Plus, having all our confirmations and plans in one place, accessible on our phones, made the actual travel days so much smoother and stress-free."
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Marcus Thompson
      </p>
      <p className="  text-base text-white"></p>
      <p className="  text-base my-4 max-w-lg text-neutral-200">
        "We knew we wanted a European adventure but were overwhelmed with options. The 'Discover' section was our starting point. We found a stunning pre-made itinerary for the Amalfi Coast, customized it to fit our style and budget, and had the most incredible trip of our lives. It's perfect for when you need a little inspiration to get started."
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Priya Sharma
      </p>
      <p className="  text-base text-white"></p>
      <p className="  text-base my-4 max-w-lg text-neutral-200">
        "Planning a trip for a group of 8 friends has always been a nightmare... until now. The collaborative feature is pure genius. Everyone could add their suggestions, vote on activities, and see the budget update in real-time. It completely eliminated the chaos of group chats and email chains. Our trip to Spain was a massive success, and we owe a huge part of that to this platform."
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Alex Chen
      </p>
      <p className="  text-base text-white"></p>
      <p className="  text-base my-4 max-w-lg text-neutral-200">
        "I used to spend weeks planning trips with messy spreadsheets and endless bookmarks. This website changed everything. I planned a two-week solo trip to Vietnam in a single evening. The interface is so intuitive, and seeing my entire trip laid out visually was a game-changer. I felt more organized and confident than ever before. Highly recommended!"
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
