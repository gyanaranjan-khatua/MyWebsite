
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
  Sphere,
  Environment,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Layers3,
  Sparkles as SparkleIcon,
} from "lucide-react";

const services = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    shortTitle: "Websites",
    description:
      "High-performance websites that communicate your brand, engage your audience, and turn visitors into customers.",
    features: [
      "Responsive, modern interfaces",
      "Performance-focused development",
      "SEO-friendly structure",
    ],
    icon: Code2,
    color: "#a78bfa",
    href: "#contact",
  },
  {
    id: "app",
    number: "02",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Intuitive mobile applications designed to bring your ideas to life with smooth experiences and reliable functionality.",
    features: [
      "Modern mobile experiences",
      "Smooth and intuitive interactions",
      "Scalable application architecture",
    ],
    icon: Smartphone,
    color: "#c084fc",
    href: "#contact",
  },
  {
    id: "design",
    number: "03",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    description:
      "Thoughtful digital experiences that balance beautiful interfaces with usability, clarity, and your users' needs.",
    features: [
      "User-centered design",
      "Interactive prototypes",
      "Consistent design systems",
    ],
    icon: Palette,
    color: "#e879f9",
    href: "#contact",
  },
  {
    id: "marketing",
    number: "04",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Strategic digital marketing that strengthens your online presence and helps your business reach the right audience.",
    features: [
      "Search visibility strategy",
      "Audience-focused campaigns",
      "Growth-oriented planning",
    ],
    icon: TrendingUp,
    color: "#818cf8",
    href: "#contact",
  },
];

function DigitalCore({ activeService, onSelect }) {
  const activeIndex = services.findIndex(
    (service) => service.id === activeService
  );

  return (
    <>
      {/* Scene lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 5]} intensity={35} color="#8b5cf6" />
      <pointLight position={[-4, -2, 3]} intensity={20} color="#d946ef" />
      <Environment preset="city" />

      {/* Central digital core */}
      <Float speed={1.4} rotationIntensity={0.22} floatIntensity={0.55}>
        <group>
          <mesh>
            <sphereGeometry args={[1.08, 64, 64]} />
            <MeshDistortMaterial
              color="#7138e8"
              emissive="#4c1d95"
              emissiveIntensity={1.1}
              roughness={0.2}
              metalness={0.45}
              distort={0.24}
              speed={1.5}
            />
          </mesh>

          {/* Inner luminous center */}
          <mesh scale={0.69}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshStandardMaterial
              color="#c4b5fd"
              emissive="#8b5cf6"
              emissiveIntensity={2.5}
              transparent
              opacity={0.45}
              roughness={0.15}
            />
          </mesh>

          {/* Orbit rings */}
          {[0, 1, 2].map((ring) => (
            <mesh
              key={ring}
              rotation={[
                Math.PI / 2 + ring * 0.52,
                ring * 0.48,
                ring * 0.3,
              ]}
            >
              <torusGeometry
                args={[1.55 + ring * 0.15, 0.008, 8, 120]}
              />
              <meshBasicMaterial
                color={ring === 1 ? "#e879f9" : "#a78bfa"}
                transparent
                opacity={0.55 - ring * 0.08}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Interactive service nodes */}
      {services.map((service, index) => {
        const angle = (index / services.length) * Math.PI * 2;
        const position = [
          Math.cos(angle) * 2.15,
          Math.sin(angle) * 1.35,
          index % 2 === 0 ? 0.4 : -0.45,
        ];
        const selected = activeService === service.id;

        return (
          <Float
            key={service.id}
            speed={1.5 + index * 0.15}
            floatIntensity={0.25}
            rotationIntensity={0.2}
          >
            <group position={position}>
              <mesh
                scale={selected ? 0.3 : 0.22}
                onClick={() => onSelect(service.id)}
                onPointerOver={(event) => {
                  event.stopPropagation();
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                  document.body.style.cursor = "auto";
                }}
              >
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                  color={service.color}
                  emissive={service.color}
                  emissiveIntensity={selected ? 2.5 : 0.7}
                  roughness={0.22}
                  metalness={0.5}
                />
              </mesh>

              {selected && (
                <mesh scale={0.43}>
                  <sphereGeometry args={[1, 24, 24]} />
                  <meshBasicMaterial
                    color={service.color}
                    wireframe
                    transparent
                    opacity={0.5}
                  />
                </mesh>
              )}
            </group>
          </Float>
        );
      })}

      <Sparkles
        count={100}
        scale={7}
        size={2}
        speed={0.25}
        opacity={0.65}
        color="#c4b5fd"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </>
  );
}

function ServiceExplorer() {
  const [activeService, setActiveService] = useState("web");
  const selectedService =
    services.find((service) => service.id === activeService) || services[0];

  const ActiveIcon = selectedService.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fafafa] py-20 text-slate-950 sm:py-28 dark:bg-[#050509] dark:text-white"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
            <SparkleIcon size={16} />
            Explore Our Expertise
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Your vision.
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              Our technology.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Explore our digital services through an interactive experience.
            Choose what you need, discover our approach, and let's build
            something meaningful together.
          </p>
        </motion.div>

        {/* Explorer */}
        <div className="mt-12 grid items-center gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: service selector and details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(service.id)}
                    aria-pressed={isActive}
                    className={`group flex min-h-[94px] items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-violet-500/50 bg-violet-500/[0.09] shadow-lg shadow-violet-500/[0.08]"
                        : "border-slate-200 bg-white/60 hover:border-violet-400/40 dark:border-white/[0.08] dark:bg-white/[0.025]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : "bg-violet-500/10 text-violet-600 dark:text-violet-300"
                      }`}
                    >
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold tracking-widest text-violet-500">
                        {service.number}
                      </span>
                      <span className="mt-1 block text-xs font-semibold leading-5 sm:text-sm">
                        {service.shortTitle}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected service details */}
            <div className="mt-5 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl sm:p-8 dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                      <ActiveIcon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
                        Selected service
                      </p>
                      <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {selectedService.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {selectedService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <Check
                          size={16}
                          className="shrink-0 text-violet-600 dark:text-violet-400"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={selectedService.href}
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-400 sm:w-auto"
                  >
                    Book This Service
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: interactive 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/15 bg-gradient-to-br from-violet-500/[0.07] via-white/50 to-fuchsia-500/[0.07] dark:from-violet-500/[0.09] dark:via-[#0b0914] dark:to-fuchsia-500/[0.08]">
              {/* Canvas glow */}
              <div className="pointer-events-none absolute inset-10 rounded-full bg-violet-500/10 blur-[90px]" />

              <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[540px]">
                <Suspense
                  fallback={
                    <div className="flex h-full items-center justify-center text-sm text-violet-500">
                      Preparing your digital universe...
                    </div>
                  }
                >
                  <Canvas
                    camera={{ position: [0, 0, 7.5], fov: 42 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true }}
                    onCreated={({ gl }) => {
                      gl.setClearColor("#000000", 0);
                    }}
                  >
                    <DigitalCore
                      activeService={activeService}
                      onSelect={setActiveService}
                    />
                  </Canvas>
                </Suspense>

                {/* Canvas label */}
                <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-violet-500/15 bg-white/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700 backdrop-blur-xl dark:bg-black/30 dark:text-violet-300 sm:left-7 sm:top-7">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Interactive service universe
                </div>

                {/* Instruction */}
                <div className="pointer-events-none absolute bottom-5 left-0 right-0 text-center text-xs text-slate-500 dark:text-slate-400">
                  Select a service to explore · Drag to rotate
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Layers3 size={15} className="text-violet-500" />
              <span>Designed around your goals, built with purpose.</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#050509]" />
    </section>
  );
}

export default ServiceExplorer;
