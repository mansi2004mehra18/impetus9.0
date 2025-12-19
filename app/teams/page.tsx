"use client";

import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ContactCard from "@/components/ContactCard";
import { teamsData } from "@/data/teams";

export default function TeamPage() {
  const [value, setValue] = useState(0);

  const teamsList = teamsData.teams;
  const currentTeam = teamsList[value];

  // Separate roles for spatial hierarchy
  const heads = currentTeam.members.filter(
    (m) =>
      m.post.toLowerCase().includes("head") ||
      m.post.toLowerCase() === "coordinator"
  );

  const staff = currentTeam.members.filter(
    (m) =>
      !m.post.toLowerCase().includes("head") &&
      m.post.toLowerCase() !== "coordinator"
  );

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", pb: 15 }}>
      {/* Team Selector (Flow Content, Not Navigation) */}
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4">
          {teamsList.map((team, idx) => {
            const isActive = value === idx;

            return (
              <button
                key={team.slug}
                onClick={() => setValue(idx)}
                className={`
                  relative
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  font-semibold
                  transition-all
                  duration-300
                  ${isActive
                    ? "text-yellow-400"
                    : "text-zinc-500 hover:text-zinc-300"
                  }
                `}
              >
                {team.teamName}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    left-1/2
                    -bottom-2
                    h-px
                    bg-yellow-400
                    transition-all
                    duration-300
                    ${isActive
                      ? "w-full -translate-x-1/2 opacity-100"
                      : "w-0 -translate-x-1/2 opacity-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      <Container maxWidth="lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* SECTION 1: HEADS */}
            <div className="flex flex-wrap justify-center gap-16 mb-24">
              {heads.map((person, idx) => (
                <ContactCard key={`head-${idx}`} person={person} />
              ))}
            </div>

            {/* Spatial divider */}
            {staff.length > 0 && (
              <div className="flex items-center justify-center mb-16">
                <div className="w-12 h-px bg-zinc-800" />
              </div>
            )}

            {/* SECTION 2: STAFF */}
            <div className="flex flex-wrap justify-center gap-8">
              {staff.map((person, idx) => (
                <ContactCard key={`staff-${idx}`} person={person} />
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
