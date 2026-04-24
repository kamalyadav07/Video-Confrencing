import { motion } from "framer-motion";
import { VolumeX, WifiOff, Layers, Unlink, Hourglass, AlertTriangle } from "lucide-react";
import heroMeetingRoom from "@/assets/hero-meeting-room.jpg";
import meetingRoom from "@/assets/IMG_2081.PNG";
import productPanel from "@/assets/product-panel.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productVideobar from "@/assets/product-videobar.jpg";

const problems = [
  {
    icon: VolumeX,
    image: heroMeetingRoom,
    title: "Poor Audio & Video Quality",
    desc: "Distorted sound, pixelated video, and embarrassing meeting moments.",
  },
  {
    icon: WifiOff,
    image: productVideobar,
    title: "Connectivity Issues",
    desc: "Constant drops and reconnects that break momentum mid-discussion.",
  },
  {
    icon: Layers,
    image: productPanel,
    title: "Platform Confusion",
    desc: "Switching between Zoom, Teams and Meet wastes precious meeting minutes.",
  },
  {
    icon: Unlink,
    image: productPhone,
    title: "No Device Integration",
    desc: "Cameras, mics and displays that simply refuse to talk to each other.",
  },
  {
    icon: Hourglass,
    image: meetingRoom,
    title: "Wasted Productivity",
    desc: "10-15 minutes lost every meeting setting up the basics.",
  },
  {
    icon: AlertTriangle,
    image: heroMeetingRoom,
    title: "Missed Decisions",
    desc: "Frustrated teams, delayed projects, and lost business outcomes.",
  },
];

export function Problems() {
  return (
    <section className="py-24 bg-surface-soft relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Why Most Meeting Rooms <span className="text-gradient">Fail Today</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Outdated AV setups silently cost businesses thousands of productive hours every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group overflow-hidden rounded-[28px] bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-6 bottom-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                  <p.icon className="w-7 h-7 text-destructive" />
                </div>
              </div>

              <div className="p-7 pt-6">
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block px-6 py-3 rounded-full bg-primary-deep text-primary-foreground text-sm md:text-base font-medium">
            Result: Missed decisions, delayed projects & frustrated teams.
          </p>
        </div>
      </div>
    </section>
  );
}
