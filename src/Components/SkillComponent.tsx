import React from "react";
import {
  Box,
  Cloud,
  Code,
  Database,
  GitBranch,
  GitPullRequest,
  Layers,
  Search,
  Server,
  Settings,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layers className="w-6 h-6" />,
    items: [
      {
        name: "React",
        icon: <Code className="w-4 h-4" />,
        description:
          "Expert in building complex, scalable UIs with React, including hooks, context, and advanced patterns.",
      },
      {
        name: "TypeScript",
        icon: <Code className="w-4 h-4" />,
        description:
          "Strong typing skills, including advanced types, generics, and type inference in large-scale applications.",
      },
      {
        name: "CSS",
        icon: <Layers className="w-4 h-4" />,
        description:
          "Extensive experience in responsive design, CSS-in-JS, and modern layout techniques like Flexbox and Grid.",
      },
      {
        name: "Redux",
        icon: <Layers className="w-4 h-4" />,
        description:
          "Skilled in state management with Redux, including middleware, selectors, and Redux Toolkit.",
      },
      {
        name: "Webpack",
        icon: <Settings className="w-4 h-4" />,
        description:
          "Proficient in configuring and optimizing Webpack for complex build processes and performance optimization.",
      },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      {
        name: "Node.js",
        icon: <Server className="w-4 h-4" />,
        description:
          "Extensive experience in building scalable server-side applications and RESTful APIs with Node.js.",
      },
      {
        name: "Express",
        icon: <Server className="w-4 h-4" />,
        description:
          "Proficient in creating robust web applications and APIs using Express.js framework.",
      },
      {
        name: "Python",
        icon: <Code className="w-4 h-4" />,
        description:
          "Strong skills in Python for backend development, data processing, and automation tasks.",
      },
      {
        name: "Django",
        icon: <Layers className="w-4 h-4" />,
        description:
          "Experienced in building full-stack web applications with Django, including ORM and admin interface.",
      },
      {
        name: "GraphQL",
        icon: <Database className="w-4 h-4" />,
        description:
          "Skilled in designing and implementing GraphQL APIs for efficient data querying and manipulation.",
      },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: [
      {
        name: "MongoDB",
        icon: <Database className="w-4 h-4" />,
        description:
          "Proficient in designing and managing MongoDB databases, including aggregation pipelines and indexing.",
      },
      {
        name: "PostgreSQL",
        icon: <Database className="w-4 h-4" />,
        description:
          "Experienced in complex SQL queries, stored procedures, and performance optimization in PostgreSQL.",
      },
      {
        name: "MySQL",
        icon: <Database className="w-4 h-4" />,
        description:
          "Skilled in MySQL database design, query optimization, and administration.",
      },
      {
        name: "Redis",
        icon: <Database className="w-4 h-4" />,
        description:
          "Proficient in using Redis for caching, session management, and real-time applications.",
      },
      {
        name: "Elasticsearch",
        icon: <Search className="w-4 h-4" />,
        description:
          "Experienced in implementing full-text search and analytics with Elasticsearch.",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Settings className="w-6 h-6" />,
    items: [
      {
        name: "Git",
        icon: <GitBranch className="w-4 h-4" />,
        description:
          "Advanced Git user, proficient in branching strategies, rebasing, and managing large repositories.",
      },
      {
        name: "Docker",
        icon: <Box className="w-4 h-4" />,
        description:
          "Skilled in containerizing applications and managing multi-container environments with Docker and Docker Compose.",
      },
      {
        name: "CI/CD",
        icon: <GitPullRequest className="w-4 h-4" />,
        description:
          "Experienced in setting up and maintaining CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions.",
      },
      {
        name: "AWS",
        icon: <Cloud className="w-4 h-4" />,
        description:
          "Proficient in deploying and managing applications on AWS, including EC2, S3, Lambda, and ECS.",
      },
      {
        name: "Kubernetes",
        icon: <Layers className="w-4 h-4" />,
        description:
          "Experienced in deploying, scaling, and managing containerized applications with Kubernetes.",
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
