"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Cpu, Code2, ShieldCheck, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <p className="section-label mb-3">{label}</p>
      {children}
    </motion.section>
  );
}

const experience = [
  { role: "Machine Learning Intern", org: "Resolve-SUPARCO, Karachi", date: "Jul – Aug 2025", desc: "Contributed to reinforcement learning projects — model development, experimentation, and performance evaluation with multidisciplinary teams." },
  { role: "AI/ML Intern", org: "NCBC Lab, NEDUET", date: "Aug – Sep 2024", desc: "Built and validated Flask/Django web applications integrating ML models for predictive functionality." },
  { role: "Web Development Intern", org: "Pakistan Engineers Forum, Karachi", date: "Dec 2024 – Feb 2025", desc: "Developed responsive WordPress CMS sites with PHP, MySQL, and server management." },
];

const projects = [
  { title: "RUN-GAIT PRO", date: "Jun 2025 – Jun 2026", desc: "Wearable gait monitoring solution integrating sensors, embedded hardware, and ML for real-time analysis and anomaly detection." },
  { title: "Chess Pieces Detection System", desc: "YOLOv11s/RT-DETR-L object detection for 12 chess piece classes on an 804-image dataset, with real-time inference pipeline." },
  { title: "FPGA-Based Smart Parking System", desc: "RTL modules in Verilog HDL for parking slot detection and availability management, verified and synthesized on FPGA." },
  { title: "720p SoC-FPGA Snake Game", desc: "720p Snake game on DE1-SoC using Verilog HDL, Avalon-MM DMA, DDR3 framebuffer, and Linux C." },
  { title: "FashionNet", desc: "Microservices e-commerce system with Flask REST APIs, Docker, Azure deployment, and GitHub Actions CI/CD." },
];

const skills = [
  { icon: Code2, label: "ML & AI", items: "Deep Learning, Reinforcement Learning, Computer Vision, YOLO, CNNs" },
  { icon: Cpu, label: "Hardware & Digital Design", items: "RTL Design, Verilog HDL, FPGA Design & Simulation, FSMs, Embedded Systems" },
  { icon: ShieldCheck, label: "Cybersecurity & Networking", items: "Internet Computing, Network Security" },
  { icon: GraduationCap, label: "Tools & Platforms", items: "Linux, Git/GitHub, Flask, Django, Docker, Azure" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="section-label mb-4">Computer & Information Systems Engineer</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Yusra <span className="accent-text">Khalid</span>
          </h1>
          <div className="pulse-line w-32 mx-auto mb-6" />
          <p className="text-text-dim max-w-xl mx-auto text-lg" style={{ color: "var(--text-dim)" }}>
            Bridging hardware and software — from RTL design and FPGA prototyping to machine learning and full-stack systems.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#projects" className="px-6 py-3 rounded-full font-medium" style={{ background: "var(--accent)", color: "var(--bg)" }}>
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full font-medium border" style={{ borderColor: "var(--border)" }}>
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" label="About">
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-dim)" }}>
          Computer & Information Systems Engineering graduate from NED University with hands-on experience
          spanning machine learning, embedded systems, FPGA/RTL design, and software development. Completed
          the Government of Pakistan&apos;s IC Design & Verification Program, gaining exposure to digital IC design,
          verification methodologies, and semiconductor design flows. Skilled in Python, Verilog HDL, and Linux,
          with a track record of building and deploying AI/ML models and hardware-software systems.
        </p>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.role} className="card p-6">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <span className="text-sm" style={{ color: "var(--accent)" }}>{e.date}</span>
              </div>
              <p className="text-sm mb-2" style={{ color: "var(--text-dim)" }}>{e.org}</p>
              <p style={{ color: "var(--text-dim)" }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.title} className="card p-6">
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              {p.date && <p className="text-sm mb-2" style={{ color: "var(--accent)" }}>{p.date}</p>}
              <p style={{ color: "var(--text-dim)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills">
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="card p-6 flex gap-4">
              <s.icon className="w-6 h-6 flex-shrink-0" style={{ color: "var(--accent)" }} />
              <div>
                <h3 className="font-semibold mb-1">{s.label}</h3>
                <p style={{ color: "var(--text-dim)" }}>{s.items}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <div className="flex flex-col gap-4">
          <a href="mailto:yusrakhalid825@gmail.com" className="flex items-center gap-3 hover:opacity-80">
            <Mail className="w-5 h-5" style={{ color: "var(--accent)" }} /> yusrakhalid825@gmail.com
          </a>
          <a href="https://linkedin.com/in/yusra-khalid-294795279" className="flex items-center gap-3 hover:opacity-80">
            <Linkedin className="w-5 h-5" style={{ color: "var(--accent)" }} /> LinkedIn
          </a>
          <a href="https://github.com/yusrakh" className="flex items-center gap-3 hover:opacity-80">
            <Github className="w-5 h-5" style={{ color: "var(--accent)" }} /> GitHub
          </a>
        </div>
      </Section>
    </main>
  );
}