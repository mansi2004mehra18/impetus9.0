"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Clock } from "lucide-react";
import { eventsData } from "@/data/events";

export default function CascadingEventsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <style jsx global>{`
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <DaySection
        dayTitle={eventsData.day1.title}
        events={eventsData.day1.events}
        isReversed={false}
      />
      <div className="h-[20vh] bg-gradient-to-b from-black to-zinc-900/50" />
      <DaySection
        dayTitle={eventsData.day2.title}
        events={eventsData.day2.events}
        isReversed={true}
      />
    </div>
  );
}
const DaySection = ({ dayTitle, events, isReversed }: { dayTitle: string, events: any[], isReversed: boolean }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });
  return (
    <div ref={container} className="relative min-h-[300vh] mb-20"> {/* min-h ensures we have scroll space */}
      <div className="sticky top-10 z-20 flex justify-center mb-10 pointer-events-none">
        <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white border border-white/10">
          {dayTitle}
        </span>
      </div>
      <div className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"} relative`}>
        <div className="w-[15%] md:w-[20%] hidden md:flex justify-center relative">
          <div className="h-screen sticky top-0 flex flex-col justify-center">
            <Timeline progress={scrollYProgress} events={events} />
          </div>
        </div>
        <div className="w-full md:w-[80%] px-4 md:px-10">
          {events.map((project, i) => {
            const targetScale = 1 - ((events.length - i) * 0.05);
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                total={events.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Timeline = ({ progress, events }: { progress: MotionValue<number>; events: any[] }) => {
  return (
    <div className="relative flex flex-col gap-16 border-l border-zinc-800 pl-8">
      <motion.div
        className="absolute left-[-1px] top-0 w-[3px] bg-yellow-500 origin-top"
        style={{ height: "100%", scaleY: progress }}
      />
      {events.map((event, i) => {
        const step = 1 / events.length;
        const start = i * step;
        const end = start + step;
        const opacity = useTransform(progress, [start, end], [0.3, 1]);
        const scale = useTransform(progress, [start, end], [1, 1.2]);
        const color = useTransform(progress, [start, end], ["#52525b", "#EAB308"]); // Zinc to Yellow
        return (
          <motion.div key={i} style={{ opacity }} className="flex flex-col gap-1">
            <motion.span style={{ color }} className="text-xs font-mono font-bold uppercase tracking-wider">
              {event.time}
            </motion.span>
            <motion.span style={{ scale, originX: 0 }} className="text-sm font-bold uppercase tracking-tight">
              {event.title}
            </motion.span>
          </motion.div>
        )
      })}
    </div>
  );
};
const Card = ({ i, title, description, src, date, time, color, progress, range, targetScale, total }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="
          relative
          w-full
          max-w-4xl
          h-[60vh] md:h-[600px]
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          shadow-2xl
          origin-top
        "
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between z-10 relative">
            <div>
              <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono tracking-widest uppercase mb-8">
                <span className="flex items-center gap-1 text-zinc-400"><Calendar size={12} /> {date}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span className="flex items-center gap-1 text-yellow-600"><Clock size={12} /> {time}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-white mb-6">
                {title}
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <button className="w-fit flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-colors">
              Register Event <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="relative w-full md:w-[55%] h-full overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-900" /> {/* Placeholder while loading */}
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover grayscale scale-105 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/50 md:to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};