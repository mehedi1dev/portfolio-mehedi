import React from "react";
import {
  ArrowRight,
  Box,
  ClipboardList,
  Cloud,
  Code,
  Database,
  DatabaseZap,
  Edit,
  Frame,
  GitBranch,
  Github,
  Layers,
  Layout,
  Search,
  SearchCode,
  Server,
  Settings,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layers className="w-6 h-6" />,
    items: [
      {
        name: "JavaScript",
        icon: <Code className="w-4 h-4" />,
        description:
          "Deep expertise in JavaScript, including ES6+ features, asynchronous programming, and functional paradigms.",
      },
      {
        name: "TypeScript",
        icon: <Code className="w-4 h-4" />,
        description:
          "Strong experience with TypeScript for building large-scale, type-safe applications.",
      },
      {
        name: "React",
        icon: <Code className="w-4 h-4" />,
        description:
          "Expert in building component-based UIs using React, including hooks and context API.",
      },
      {
        name: "Next.js",
        icon: <ArrowRight className="w-4 h-4" />,
        description:
          "Proficient in Next.js for building fast, server-rendered React applications with dynamic routing.",
      },
      {
        name: "React Query",
        icon: <Cloud className="w-4 h-4" />,
        description:
          "Skilled in handling server-side data fetching and caching efficiently with React Query.",
      },
      {
        name: "Redux",
        icon: <Box className="w-4 h-4" />,
        description:
          "Experienced in managing complex state with Redux, including Redux Toolkit and middleware.",
      },
      {
        name: "Tailwind CSS",
        icon: <Layout className="w-4 h-4" />,
        description:
          "Proficient in creating responsive designs and utility-first styling with Tailwind CSS.",
      },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      {
        name: "Node.js",
        icon: <Code className="w-4 h-4" />,
        description:
          "Extensive experience in building scalable server-side applications and APIs using Node.js.",
      },
      {
        name: "Express.js",
        icon: <Frame className="w-4 h-4" />,
        description:
          "Proficient in developing RESTful APIs and web services using the Express.js framework.",
      },
      {
        name: "Python",
        icon: <Code className="w-4 h-4" />,
        description:
          "Experienced in using Python for backend development, automation, and scripting.",
      },
      {
        name: "MongoDB",
        icon: <DatabaseZap className="w-4 h-4" />,
        description:
          "Proficient in designing and managing NoSQL databases with MongoDB, including aggregation and indexing.",
      },
      {
        name: "PostgreSQL",
        icon: <Database className="w-4 h-4" />,
        description:
          "Skilled in writing complex SQL queries, optimizing performance, and managing PostgreSQL databases.",
      },
    ],
  },
  {
    category: "Tools",
    icon: <Settings className="w-6 h-6" />,
    items: [
      {
        name: "Git",
        icon: <GitBranch className="w-4 h-4" />,
        description:
          "Proficient in version control with Git, including branching strategies and collaboration workflows.",
      },
      {
        name: "GitHub",
        icon: <Github className="w-4 h-4" />,
        description:
          "Experienced in managing repositories, issues, and pull requests using GitHub.",
      },
      {
        name: "Figma",
        icon: <Edit className="w-4 h-4" />,
        description:
          "Skilled in using Figma for UI/UX design, wireframing, and prototyping collaborative design solutions.",
      },
      {
        name: "JIRA",
        icon: <ClipboardList className="w-4 h-4" />,
        description:
          "Experienced in using JIRA for project management, task tracking, and sprint planning.",
      },
    ],
  },
  {
    category: "Others",
    icon: <Search className="w-6 h-6" />,
    items: [
      {
        name: "Searching",
        icon: <SearchCode className="w-4 h-4" />,
        description:
          "Proficient in quickly finding and acquiring new skills, tools, and technologies through research and experimentation.",
      },
    ],
  },
];

const SkillComponent: React.FC = () => {
  return (
    <>
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <div className="mt-1 mr-2">{skill.icon}</div>
                      <div>
                        <h4 className="font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-600">
                          {skill.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillComponent;
