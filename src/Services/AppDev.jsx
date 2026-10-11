
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  useTexture,
  ContactShadows,
  Environment,
  Sparkles,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Smartphone,
  CheckCircle2,
  Code2,
  Zap,
  ShieldCheck,
  Layers3,
} from "lucide-react";

// Replace this filename with your actual app interface image filename.
import appInterface from "../assets/mobile2.png";

/* -------------------- 3D PHONE -------------------- */

function PhoneModel() {
  const phoneRef = useRef(null);
  const screenTexture = useTexture(appInterface);

  useFrame((state) => {
    if (!phoneRef.current) return;

    // Smoothly react to pointer position.
    const targetY = state.pointer.x * 0.2;
    const targetX = -state.pointer.y * 0.12;

    phoneRef.current.rotation.y +=
      (targetY - phoneRef.current.rotation.y) * 0.035;

    phoneRef.current.rotation.x +=
      (targetX - phoneRef.current.rotation.x) * 0.035;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={phoneRef} rotation={[0.02, -0.18, -0.04]}>
        {/* Outer phone body */}
        <RoundedBox
          args={[2.25, 4.45, 0.24]}
          radius={0.28}
          smoothness={8}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#171322"
            metalness={0.75}
            roughness={0.23}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </RoundedBox>

        {/* Metallic side frame */}
        <RoundedBox
          args={[2.27, 4.47, 0.19]}
          radius={0.3}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.22}
          />
        </RoundedBox>

        {/* Front screen */}
        <mesh position={[0, 0, 0.126]}>
          <planeGeometry args={[1.99, 4.13]} />
          <meshBasicMaterial
            map={screenTexture}
            toneMapped={false}
          />
        </mesh>

        {/* Small top speaker / camera island */}
        <mesh position={[0, 1.93, 0.139]}>
          <capsuleGeometry args={[0.055, 0.22, 4, 12]} />
          <meshStandardMaterial color="#08070c" />
        </mesh>

        {/* Camera lens */}
        <mesh position={[0.19, 1.93, 0.145]}>
          <circleGeometry args={[0.045, 24]} />
          <meshStandardMaterial
            color="#272044"
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>

        {/* Volume buttons */}
        <RoundedBox
          args={[0.07, 0.48, 0.12]}
          radius={0.025}
          smoothness={4}
          position={[-1.145, 0.85, 0]}
        >
          <meshStandardMaterial color="#a78bfa" metalness={0.6} />
        </RoundedBox>

        <RoundedBox
          args={[0.07, 0.34, 0.12]}
          radius={0.025}
          smoothness={4}
          position={[-1.145, 0.27, 0]}
        >
          <meshStandardMaterial color="#a78bfa" metalness={0.6} />
        </RoundedBox>

        {/* Power button */}
        <RoundedBox
          args={[0.07, 0.55, 0.12]}
          radius={0.025}
          smoothness={4}
          position={[1.145, 0.55, 0]}
        >
          <meshStandardMaterial color="#a78bfa" metalness={0.6} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function PhoneScene() {
  return (
    <>
      <ambientLight intensity={1.6} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={2.5}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 3]}
        intensity={35}
        color="#8b5cf6"
      />

      <pointLight
        position={[3, -2, -2]}
        intensity={25}
        color="#d946ef"
      />

      <Suspense fallback={null}>
        <PhoneModel />
        <Environment preset="city" />
      </Suspense>

      <ContactShadows
        position={[0, -2.55, -0.5]}
        opacity={0.35}
        scale={6}
        blur={2.5}
        far={4}
      />

      <Sparkles
        count={45}
        scale={5.5}
        size={2}
        speed={0.25}
        color="#a78bfa"
        opacity={0.65}
      />
    </>
  );
}

/* -------------------- MAIN APP DEVELOPMENT SECTION -------------------- */

function AppDev() {
  const features = [
    {
      icon: Smartphone,
      title: "iOS & Android Apps",
      description: "Powerful mobile experiences for both platforms.",
    },
    {
      icon: Layers3,
      title: "Beautiful UI/UX",
      description: "Intuitive interfaces designed around your users.",
    },
    {
      icon: Zap,
      title: "Fast & Scalable",
      description: "Smooth performance with room to grow.",
    },
    {
      icon: ShieldCheck,
      title: "Secure by Design",
      description: "Reliable architecture and thoughtful security.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] text-slate-950 dark:bg-[#050509] dark:text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.09) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        {/* LEFT: 3D smartphone */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 flex min-h-[430px] items-center justify-center sm:min-h-[540px] lg:min-h-[620px]"
        >
          {/* Glow behind phone */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px] sm:h-80 sm:w-80" />

          {/* Decorative rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/15 sm:h-[440px] sm:w-[440px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-500/10 sm:h-[510px] sm:w-[510px]" />

          {/* Floating label */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[18%] z-10 hidden items-center gap-3 rounded-2xl border border-violet-500/15 bg-white/85 p-3 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:bg-[#151020]/85 sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
              <Code2 size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold">Clean development</p>
              <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                Built for performance
              </p>
            </div>
          </motion.div>

          {/* Second floating label */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[17%] right-0 z-10 hidden items-center gap-3 rounded-2xl border border-violet-500/15 bg-white/85 p-3 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:bg-[#151020]/85 sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <CheckCircle2 size={20} />
            </span>
            <div>
              <p className="text-xs font-semibold">Ready to launch</p>
              <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                Android & iOS
              </p>
            </div>
          </motion.div>

          {/* Three.js canvas */}
          <div className="relative z-[1] h-[440px] w-full max-w-[480px] sm:h-[560px]">
            <Canvas
              camera={{ position: [0, 0, 8.2], fov: 38 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <PhoneScene />
            </Canvas>
          </div>

          <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-500/15 bg-white/80 px-4 py-2 text-[10px] text-slate-500 shadow-lg backdrop-blur-xl dark:bg-black/40 dark:text-slate-300 sm:bottom-0 sm:text-xs">
            Move your pointer to interact with the 3D phone
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
            <Smartphone size={16} />
            Mobile App Development
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
            Your ideas,
            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              built for mobile.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Turn your idea into a powerful mobile experience. We design and
            develop modern applications that look beautiful, feel intuitive,
            and help your business connect with customers wherever they are.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/15 bg-violet-500/[0.07] text-violet-600 dark:text-violet-300">
                    <Icon size={19} />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-violet-500/35"
            >
              Build Your App
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#app-process"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-white/15 dark:hover:text-violet-300"
            >
              Our Process
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Bottom trust line */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-violet-500" />
              User-focused design
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-violet-500" />
              Modern technology
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AppDev;
