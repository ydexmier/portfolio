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
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const facts = [
    { label: "Rôle", value: profile.subtitle },
    { label: "Expérience", value: `${profile.experienceYears} ans` },
    { label: "Lieu", value: profile.location },
    { label: "Dispo", value: profile.availability },
  ];

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Container>
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.p variants={item} className="font-mono text-xs uppercase tracking-wider text-accent">
            Bonjour, je suis {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif-display mt-6 max-w-2xl text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl"
          >
            {profile.heroTagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.heroDescription}
          </motion.p>

          <motion.dl variants={item} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">Voir mes projets →</Button>
            <Button href="/contact" variant="secondary">
              Me contacter
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
