"use client";

import { motion } from "framer-motion";

type Agent = {
  name: string;
  location: string;
  image: string;
};

const agents: Agent[] = [
  {
    name: "Devon Lane",
    location: "Naperville",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Jane Cooper",
    location: "Fairfield",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Savannah Nguyen",
    location: "Pembroke Pines",
    image:
      "https://images.unsplash.com/photo-1524507621783-1e40b8b1b39e?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Darrell Steward",
    location: "Orange",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Devon Lane",
    location: "Naperville",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Jane Cooper",
    location: "Fairfield",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Savannah Nguyen",
    location: "Pembroke Pines",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80",
  },
  {
    name: "Darrell Steward",
    location: "Orange",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=640&q=80",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const TopAgents = () => {
  return (
    <section className="mt-14">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {agents.map((agent, index) => (
          <motion.article
            variants={card}
            key={`${agent.name}-${index}`}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 36px rgba(15, 23, 42, 0.12)",
            }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition-transform"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={agent.image}
                alt={agent.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {agent.name}
              </h3>
              <p className="text-sm text-slate-500">{agent.location}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default TopAgents;
