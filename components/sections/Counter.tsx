"use client"

import React from "react"

import SectionTitle from "../SectionTitle"
import WorldMap from "../ui/world-map"
import CounterItem from "./CounterItem"

const Counter = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle>Our Journey in Numbers</SectionTitle>
          <p className="text-3xl font-extrabold md:text-4xl text-center mt-8">
            Delivering Excellence, One Milestone at a Time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <CounterItem
            end={6}
            label="Countries"
            description="Global presence across continents"
          />
          <CounterItem
            end={14}
            label="Projects"
            description="Successfully delivered for clients"
          />
          <CounterItem
            end={2}
            label="Years"
            description="Of dedicated service excellence"
          />
        </div>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // alaska
            end: { lat: 27.9944, lng: -81.7603 }, // florida
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // alaska
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
          {
            start: { lat: 27.9944, lng: -81.7603 }, // florida
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
          {
            start: { lat: 23.8103, lng: 90.4125 }, // dhaka
            end: { lat: 23.9999, lng: 90.4203 }, //gazipur
          },
          {
            start: { lat: 23.9999, lng: 90.4203 }, //gazipur
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
          {
            start: { lat: 51.4416, lng: 5.4697 }, // unknown
            end: { lat: 51.5074, lng: 0.1278 }, // london
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
          {
            start: { lat: 52.3555, lng: -1.1743 }, // some england
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
          {
            start: { lat: -1.2864, lng: 36.8172 }, // nigeria
            end: { lat: 51.5074, lng: -0.1278 }, // london
          },
        ]}
      />
    </section>
  )
}

export default Counter
