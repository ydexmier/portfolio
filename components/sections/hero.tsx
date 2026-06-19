"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground"
            aria-hidden="true"
          >
            {profile.initials}
          </motion.span>

          <motion.p
            variants={item}
            className="text-sm font-medium uppercase tracking-wider text-accent"
          >
            {profile.subtitle} · {profile.experienceYears} ans d&apos;expérience
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {profile.heroTagline}
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl text-lg text-muted">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Button href="/projects">Voir mes projets</Button>
            <Button href="/contact" variant="secondary">
              Me contacter
            </Button>
          </motion.div>

          <motion.p variants={item} className="text-sm text-muted">
            {profile.location} · {profile.availability}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
