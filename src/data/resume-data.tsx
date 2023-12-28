import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Andreas Hailu",
  location: "New York Metropolitan Area",
  initials: "AH",
  locationLink: "https://maps.app.goo.gl/jgUwM8XiGiT5ifJ47",
  about:
    "Software Engineer",
  summary:
    "I've built enterprise-grade distributed systems and applications for the past 8 years, ensuring developer productivity and code quality as part of the process. Currently, I work mostly with Java, TypeScript, and Amazon Web Services.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQFQQj1CCK7a6g/profile-displayphoto-shrink_400_400/0/1690816492804?e=1709164800&v=beta&t=cFnphYlZqxXuRxkERCcsWFESiAK_DySiVSHD9vIl1yg",
  contact: {
    email: "andreashailu@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hailuand",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hailuand/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Michigan",
      degree: "B.S. Computer Science, Physics Minor",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      badges: [],
      title: "Vice President Software Engineer → Lead",
      start: "May 2023",
      end: "present",
      description:
        "Core Data Engineering - Lead for services orchestration of next generation of firm core data platform built on cloud-native & cloud-hosted Lakehouse architecture.",
    },
    {
      company: "",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      badges: [],
      title: "Vice President Software Engineer → Lead",
      start: "Jan 2022",
      end: "May 2023",
      description:
        "Data Lake Engineering - Lead for firm enterprise Data Lake platform ingest services. 160K unique datasets ingesting 180K pipelines per day for reporting & analytics use cases.",
    },
    {
      company: "",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      badges: [],
      title: "Associate Software Engineer",
      start: "Jan 2019",
      end: "Dec 2021",
      description:
        "Data Lake Engineering - Contributed to enterprise Data Lake platform ingest & catalog services. Migrated ingest framework from MapReduce to Apache Flink.",
    },
    {
      company: "",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      badges: [],
      title: "Analyst Software Engineer",
      start: "Mar 2016",
      end: "Dec 2019",
      description:
        "Data Lake Engineering - Contributed to frontend + core backend metadata services for data cataloging, governance, and refinement for early stage enterprise Data Lake platform.",
    },
    {
      company: "",
      link: "https://www.goldmansachs.com/careers/our-firm/engineering/",
      badges: [],
      title: "Software Engineer Intern",
      start: "Jun 2015",
      end: "Aug 2015",
      description:
        "Data Lake Engineering - Developed data duplication risk analysis application for pre-production version of platform.",
    },
  ],
  languages: [
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C++",
    "C",
    "SQL"
  ],
  technologies: [
    "Apache Flink",
    "Apache Avro",
    "Apache Parquet",
    "CI/CD",
    "Git",
    "Docker",
    "Node",
    "JUnit",
    "Maven",
    "Gradle",
    "NoSQL",
    "REST",
    "RPC",
    "Apache HBase",
    "Apache Iceberg",
    "Apache Kafka",
    "Apache ZooKeeper",
    "HDFS",
    "MapReduce",
    "AWS",
    "Spring Boot",
    "Dropwizard",
    "Kubernetes",
    "DynamoDB",
    "Snowflake",
    "Containers",
    "gRPC",
    "Confluent Schema Registry",
    "GitHub",
    "GitLab"
  ],
  talks: [
    {
      title: "Batch Processing at Scale with Flink & Iceberg",
      description: "Flink Forward 2022",
      topics: [
      ],
      link: {
        href: "https://www.flink-forward.org/sf-2022/conference-program#batch-processing-at-scale-with-flink---iceberg",
      },
    }
  ],
  projects: [
    {
      title: "Apache Avro",
      techStack: [
        "Open Source",
        "Data Format",
        "Serialization",
      ],
      description:
        "Apache Avro is a data serialization system.",
      link: {
        href: "https://github.com/apache/avro",
      },
    },
    {
      title: "Apache Parquet",
      techStack: [
        "Open Source",
        "Data Format",
        "Serialization",
      ],
      description:
        "Apache Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval.",
      link: {
        href: "https://github.com/apache/parquet-mr/",
      },
    },
    {
      title: "chatRPC",
      techStack: [
        "Java",
        "gRPC",
      ],
      description:
        "Chat server supporting multiple clients built using gRPC framework.",
      link: {
        href: "https://github.com/hailuand/chatRPC",
      },
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      link: "https://www.credly.com/badges/83f9f1ea-d0e5-48d6-8dfe-4eda13411a66"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/8b6ea32a-9c25-438f-b266-390b5d650cd1"
    }
  ]
} as const;