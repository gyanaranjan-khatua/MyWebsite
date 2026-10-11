
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  ContactShadows,
  Environment,
  Sparkles,
  Html,
} from "@react-three/drei";
import { motion } from "framer-motion";
import developerWorkspaceImage from "../assets/lightheroimg.jpeg";
import {
  ArrowUpRight,
  Code2,
  CheckCircle2,
  Zap,
  Smartphone,
  Monitor,
  RotateCcw,
  RotateCw,
  RefreshCcw,
  Layers3,
  ShieldCheck,
} from "lucide-react";

/* ---------------- WEBSITE MOCKUP ON LAPTOP SCREEN ---------------- */

function WebsiteScreen() {
  return (
    <Html
       transform
  position={[0.1, -0.45, 0.8]}
  scale={0.2}
  distanceFactor={7}
  zIndexRange={[20, 0]}
  occlude={false}
      style={{
        width: "1000px",
        height: "625px",
        overflow: "hidden",
        borderRadius: "7px",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "625px",
          overflow: "hidden",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Browser bar */}
        <div
          style={{
            height: "35px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "0 14px",
            background: "#f3f4f6",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          {["#fb7185", "#fbbf24", "#34d399"].map((color) => (
            <span
              key={color}
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: color,
              }}
            />
          ))}

          <div
            style={{
              marginLeft: "18px",
              background: "#fff",
              borderRadius: "5px",
              padding: "5px 22px",
              width: "450px",
              color: "#6b7280",
              fontSize: "10px",
            }}
          >
            www.yourbusiness.com
          </div>
        </div>

        {/* Website navbar */}
        <div
          style={{
            height: "65px",
            padding: "0 38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              fontSize: "23px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            <span style={{ color: "#7c3aed" }}>NEX</span>
            <span style={{ color: "#111827" }}>ORA.</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "12px",
              color: "#475569",
            }}
          >
            <span style={{ color: "#7c3aed", fontWeight: 700 }}>Home</span>
            <span>Services</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
            <span
              style={{
                background: "#7c3aed",
                color: "#fff",
                padding: "11px 17px",
                borderRadius: "7px",
                fontWeight: 700,
              }}
            >
              Let's Talk ↗
            </span>
          </div>
        </div>

        {/* Website hero */}
        <div
          style={{
            height: "410px",
            padding: "36px 42px",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "24px",
            background:
              "radial-gradient(ellipse at 80% 35%, #ede9fe 0%, #ffffff 55%)",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#f3e8ff",
                color: "#7c3aed",
                borderRadius: "30px",
                padding: "8px 13px",
                fontSize: "10px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              ✦ DIGITAL EXPERIENCES THAT MATTER
            </div>

            <div
              style={{
                fontSize: "48px",
                lineHeight: 1.08,
                letterSpacing: "-2px",
                fontWeight: 900,
                color: "#111827",
              }}
            >
              Build your
              <br />
              <span style={{ color: "#7c3aed" }}>digital future.</span>
            </div>

            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.8,
                color: "#64748b",
                marginTop: "18px",
                maxWidth: "390px",
              }}
            >
              Beautiful websites. Powerful technology. Digital experiences
              designed to help your business grow.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "23px",
              }}
            >
              <span
                style={{
                  background: "#7c3aed",
                  color: "#fff",
                  padding: "13px 17px",
                  borderRadius: "7px",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                Explore Our Work ↗
              </span>

              <span
                style={{
                  border: "1px solid #ddd6fe",
                  padding: "12px 17px",
                  borderRadius: "7px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#6d28d9",
                }}
              >
                Our Services
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "28px",
                marginTop: "29px",
                color: "#64748b",
                fontSize: "10px",
              }}
            >
              <span>✓ Modern design</span>
              <span>✓ Fast performance</span>
            </div>
          </div>

          {/* Website visual */}
          <div
            style={{
              position: "relative",
              height: "290px",
              marginTop: "16px",
              borderRadius: "17px",
              background: "#4c1d95",
              overflow: "hidden",
              boxShadow: "0 24px 45px rgba(109,40,217,0.22)",
            }}
          >
            <img
              src={developerWorkspaceImage}
              alt="Developer working at a computer"
               style={{
                 display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}

            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(140deg, rgba(76,29,149,.35), rgba(109,40,217,.12))",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "230px",
                height: "230px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "50%",
                top: "30px",
                left: "52px",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "50%",
                top: "55px",
                left: "78px",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "145px",
                height: "180px",
                top: "45px",
                left: "95px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #ffffff, #ddd6fe)",
                transform: "rotate(-9deg)",
                boxShadow: "0 20px 35px rgba(30,15,70,.25)",
                padding: "15px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  height: "7px",
                  width: "50px",
                  borderRadius: "4px",
                  background: "#c4b5fd",
                }}
              />

              <div
                style={{
                  height: "48px",
                  marginTop: "12px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #7c3aed, #c084fc)",
                }}
              />

              <div
                style={{
                  height: "6px",
                  width: "85px",
                  marginTop: "12px",
                  borderRadius: "4px",
                  background: "#a78bfa",
                }}
              />

              <div
                style={{
                  height: "6px",
                  width: "60px",
                  marginTop: "7px",
                  borderRadius: "4px",
                  background: "#ddd6fe",
                }}
              />

              <div
                style={{
                  height: "22px",
                  width: "80px",
                  marginTop: "12px",
                  borderRadius: "5px",
                  background: "#7c3aed",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: "15px",
                bottom: "22px",
                padding: "12px",
                borderRadius: "10px",
                background: "rgba(255,255,255,.95)",
                color: "#6d28d9",
                fontSize: "11px",
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(0,0,0,.1)",
              }}
            >
              ✦ Creative Studio
            </div>

            <div
              style={{
                position: "absolute",
                left: "18px",
                top: "20px",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              DESIGN / DEVELOP / GROW
            </div>
          </div>
        </div>

        {/* Website services strip */}
        <div
          style={{
            height: "65px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignItems: "center",
            padding: "0 42px",
            background: "#ffffff",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          {[
            ["01", "Web Development"],
            ["02", "Creative Design"],
            ["03", "Digital Growth"],
          ].map(([number, title]) => (
            <div
              key={number}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  color: "#8b5cf6",
                  fontWeight: 900,
                  fontSize: "19px",
                }}
              >
                {number}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#334155",
                }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom edge */}
        <div
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 42px",
            background: "#fafafa",
            borderTop: "1px solid #f1f5f9",
            fontSize: "10px",
            color: "#64748b",
          }}
        >
          <span>Thoughtful design. Exceptional experiences.</span>
          <span style={{ color: "#7c3aed", fontWeight: 700 }}>
            Discover what's possible ↗
          </span>
        </div>
      </div>
    </Html>
  );
}

/* -------------------- 3D LAPTOP MODEL -------------------- */

function LaptopModel({ controlRef }) {
  const laptopRef = useRef(null);
  const introTime = useRef(0);
  const targetRotation = useRef({ x: -0.04, y: -0.2 });
  const drag = useRef({ active: false, x: 0, y: 0 });

  React.useEffect(() => {
    controlRef.current = {
      left: () => {
        targetRotation.current.y -= Math.PI / 6;
      },
      right: () => {
        targetRotation.current.y += Math.PI / 6;
      },
      reset: () => {
        targetRotation.current = { x: -0.04, y: -0.2 };
      },
    };

    return () => {
      controlRef.current = null;
    };
  }, [controlRef]);

  useFrame((_, delta) => {
    if (!laptopRef.current) return;

    introTime.current = Math.min(introTime.current + delta, 1.1);
    const introProgress = introTime.current / 1.1;
    const easedProgress =
      introProgress * introProgress * (3 - 2 * introProgress);
    laptopRef.current.position.y = -0.2 * (1 - easedProgress);

    const rotationLerp = 1 - Math.exp(-8 * delta);
    laptopRef.current.rotation.y +=
      (targetRotation.current.y - laptopRef.current.rotation.y) *
      rotationLerp;

    laptopRef.current.rotation.x +=
      (targetRotation.current.x - laptopRef.current.rotation.x) *
      rotationLerp;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.018} floatIntensity={0.16}>
      <group
        ref={laptopRef}
        position={[0, -0.2, 0]}
        rotation={[-0.04, -0.2, 0]}
        onPointerDown={(event) => {
          event.stopPropagation();
          drag.current = {
            active: true,
            x: event.clientX,
            y: event.clientY,
          };
        }}
        onPointerUp={(event) => {
          event.stopPropagation();
          drag.current.active = false;
        }}
        onPointerOut={() => {
          drag.current.active = false;
        }}
        onPointerMove={(event) => {
          if (!drag.current.active) return;

          event.stopPropagation();

          const dx = event.clientX - drag.current.x;
          const dy = event.clientY - drag.current.y;

          targetRotation.current.y += dx * 0.009;
          targetRotation.current.x += dy * 0.005;

          targetRotation.current.x = Math.max(
            -0.35,
            Math.min(0.25, targetRotation.current.x)
          );

          drag.current.x = event.clientX;
          drag.current.y = event.clientY;
        }}
      >
        {/* Laptop display outer shell */}
        <group position={[0, 0.75, 0]}>
          <RoundedBox
            args={[4.12, 2.76, 0.16]}
            radius={0.13}
            smoothness={8}
            castShadow
          >
            <meshPhysicalMaterial
              color="#85818f"
              metalness={0.85}
              roughness={0.22}
              clearcoat={0.8}
            />
          </RoundedBox>

          {/* Black screen bezel */}
          <RoundedBox
            args={[3.98, 2.62, 0.07]}
            radius={0.09}
            smoothness={8}
            position={[0, 0, 0.09]}
          >
            <meshStandardMaterial color="#09090f" roughness={0.25} />
          </RoundedBox>

          {/* Website interface */}
          <WebsiteScreen />

          {/* Camera */}
          <mesh position={[0, 1.29, 0.13]}>
            <circleGeometry args={[0.025, 24]} />
            <meshStandardMaterial
              color="#292538"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* Laptop hinge */}
        <RoundedBox
          args={[3.65, 0.09, 0.15]}
          radius={0.04}
          smoothness={6}
          position={[0, -0.65, -0.01]}
        >
          <meshStandardMaterial color="#77717f" metalness={0.85} />
        </RoundedBox>

        {/* Laptop keyboard base */}
        <RoundedBox
          args={[4.5, 0.15, 2.85]}
          radius={0.12}
          smoothness={8}
          position={[0, -0.79, 0.72]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#aaa5b5"
            metalness={0.82}
            roughness={0.28}
            clearcoat={0.6}
          />
        </RoundedBox>

        {/* Keyboard surface */}
        <RoundedBox
          args={[3.55, 0.025, 1.02]}
          radius={0.045}
          smoothness={4}
          position={[0, -0.695, 0.18]}
        >
          <meshStandardMaterial color="#24212d" roughness={0.4} />
        </RoundedBox>

        {/* Keyboard rows */}
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 14 }).map((__, col) => (
            <mesh
              key={`${row}-${col}`}
              position={[
                -1.61 + col * 0.248,
                -0.674,
                -0.18 + row * 0.22,
              ]}
            >
              <boxGeometry args={[0.17, 0.018, 0.13]} />
              <meshStandardMaterial
                color="#625d70"
                metalness={0.25}
                roughness={0.45}
              />
            </mesh>
          ))
        )}

        {/* Trackpad */}
        <RoundedBox
          args={[1.05, 0.018, 0.72]}
          radius={0.06}
          smoothness={6}
          position={[0, -0.69, 1.12]}
        >
          <meshStandardMaterial
            color="#8c8798"
            metalness={0.4}
            roughness={0.3}
          />
        </RoundedBox>

        {/* Front lip */}
        <mesh position={[0, -0.79, 2.145]}>
          <boxGeometry args={[0.32, 0.025, 0.025]} />
          <meshStandardMaterial color="#6d6878" metalness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

/* -------------------- 3D SCENE -------------------- */

function LaptopScene({ controlRef }) {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={2.8}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 3]}
        intensity={32}
        color="#8b5cf6"
      />

      <pointLight
        position={[3, -2, -2]}
        intensity={22}
        color="#d946ef"
      />

      <Suspense fallback={null}>
        <LaptopModel controlRef={controlRef} />
        <Environment preset="city" />
      </Suspense>

      <ContactShadows
        position={[0, -2.35, 0]}
        opacity={0.3}
        scale={7}
        blur={2.5}
        far={4}
      />

      <Sparkles
        count={40}
        scale={6}
        size={2}
        speed={0.25}
        color="#a78bfa"
        opacity={0.55}
      />
    </>
  );
}

/* -------------------- MAIN WEB DEVELOPMENT SECTION -------------------- */

function WebDev() {
  const laptopControls = useRef(null);

  const features = [
    {
      icon: Monitor,
      title: "Responsive Websites",
      description: "Beautiful experiences across desktop, tablet and mobile.",
    },
    {
      icon: Code2,
      title: "Modern Development",
      description: "Clean, maintainable code built with modern technologies.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized loading and smooth user experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Built to Scale",
      description: "Reliable foundations that grow with your business.",
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

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-20">
        {/* LEFT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
            <Monitor size={16} />
            Website Development
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
            Websites that
            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              move business forward.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            We create modern, responsive websites that combine thoughtful
            design, powerful technology, and seamless user experiences to help
            your business stand out online.
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
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.1,
                  }}
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

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-violet-500/35"
            >
              Build Your Website
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#web-process"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-white/15 dark:hover:text-violet-300"
            >
              Our Process
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Trust line */}
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

        {/* RIGHT: 3D LAPTOP */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative order-1 flex min-h-[400px] items-center justify-center sm:min-h-[530px] lg:order-2 lg:min-h-[620px]"
        >
          {/* Glow behind laptop */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px] sm:h-80 sm:w-80" />

          {/* Decorative rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/15 sm:h-[430px] sm:w-[430px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-500/10 sm:h-[500px] sm:w-[500px]" />

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[12%] z-10 hidden items-center gap-3 rounded-2xl border border-violet-500/15 bg-white/85 p-3 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:bg-[#151020]/85 sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
              <Layers3 size={20} />
            </span>

            <div>
              <p className="text-xs font-semibold">Modern web design</p>
              <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                Designed to impress
              </p>
            </div>
          </motion.div>

          {/* Floating badge */}
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
                Responsive & fast
              </p>
            </div>
          </motion.div>

          {/* Three.js canvas */}
          <div className="relative z-[1] h-[360px] w-full max-w-[600px] sm:h-[480px] lg:h-[520px]">
            <Canvas
              camera={{ position: [0, 0, 9.7], fov: 37 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <LaptopScene controlRef={laptopControls} />
            </Canvas>
          </div>

          {/* Rotation controls */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border border-violet-500/20 bg-white/90 p-2 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:bg-[#100d1b]/95 sm:bottom-3 sm:gap-2">
            <button
              type="button"
              title="Rotate laptop left"
              aria-label="Rotate laptop left"
              onClick={() => laptopControls.current?.left()}
              className="rounded-xl p-2.5 text-violet-600 transition hover:bg-violet-500/10 dark:text-violet-300 sm:p-3"
            >
              <RotateCcw size={19} />
            </button>

            <span className="px-1 text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">
              Drag to rotate
            </span>

            <button
              type="button"
              title="Rotate laptop right"
              aria-label="Rotate laptop right"
              onClick={() => laptopControls.current?.right()}
              className="rounded-xl p-2.5 text-violet-600 transition hover:bg-violet-500/10 dark:text-violet-300 sm:p-3"
            >
              <RotateCw size={19} />
            </button>

            <button
              type="button"
              title="Reset laptop view"
              aria-label="Reset laptop view"
              onClick={() => laptopControls.current?.reset()}
              className="rounded-xl p-2.5 text-violet-600 transition hover:bg-violet-500/10 dark:text-violet-300 sm:p-3"
            >
              <RefreshCcw size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WebDev;
