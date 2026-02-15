export const projectsData = [
  {
    title: 'Music-Separation-as-a-Service (MSaaS)',
    category: 'distributed',
    shortDescription: [
      'Kubernetes-based microservices platform for automatic audio source separation using Demucs, with scalable REST APIs, Redis queues, and MinIO storage on GKE.',
    ],
    fullDescription: `Fully containerized, Kubernetes-orchestrated platform for uploading MP3 files and automatically separating vocals, drums, bass, and other stems. Architecture: Flask REST API → Redis task broker → Demucs worker nodes → MinIO object storage. Deployed on GKE with autoscaling and clean service isolation. Optimized for memory-intensive ML workloads with logging pipelines and fault-tolerant job handling.`,
    images: [],
    technologies: ['Kubernetes', 'GKE', 'Docker', 'Flask', 'Python', 'Redis', 'MinIO', 'Demucs', 'Microservices'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Multimodal RAG Search Agent',
    category: 'ai',
    shortDescription: [
      'End-to-end multimodal RAG system for vector-based semantic search across text, images, documents, and URLs using LangChain, LangGraph, and ChromaDB.',
    ],
    fullDescription: `Multimodal RAG Search Agent enabling intelligent search across text, images, PDFs, and URLs using vector embeddings. Built with OpenAI embeddings, LangChain, and LangGraph — each pipeline step (ingestion, splitting, embedding, retrieval, reasoning) is independently orchestrated as stateful, observable agent nodes. Supports semantic search across multiple modalities with natural language queries.`,
    images: [],
    technologies: ['OpenAI', 'Python', 'LangChain', 'LangGraph', 'ChromaDB', 'Vector Search', 'RAG'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Trail Explorer',
    category: 'fullstack',
    shortDescription: [
      'Outdoor adventure platform with real-time weather forecasts, trail info, and activity insights — built with Flask, AWS DynamoDB, and React.',
    ],
    fullDescription: `Trail Explorers — a comprehensive outdoor enthusiast platform featuring real-time weather, trail length, elevation, hiking, bird watching, and stargazing data. Built a robust Flask REST API backed by AWS DynamoDB using Boto3, enabling efficient trail data retrieval. Collaborative project with 5 graduate students for the Big Data Architecture course at CU Boulder.`,
    images: [],
    technologies: ['AWS', 'React.js', 'Python', 'Flask', 'REST API', 'DynamoDB'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Crypto Price Prediction (Stacked LSTM)',
    category: 'ai',
    shortDescription: [
      'Real-time cryptocurrency price prediction using Stacked LSTM networks with a ReactJS frontend for live prices, trends, and market analysis.',
    ],
    fullDescription: `Cryptocurrency price prediction model using Stacked LSTM networks trained on historical data. Integrated into a responsive ReactJS website providing real-time prices, news feed, interactive charts, and portfolio tracking. The LSTM architecture captures long-term market dependencies for improved prediction accuracy.`,
    images: ['/assets/images/Capture.png', '/assets/images/Capture1.png'],
    technologies: ['Machine Learning', 'React.js', 'Python', 'LSTM', 'API Integration'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Image Caption Generator',
    category: 'research',
    shortDescription: [
      'CNN + NLP image captioning system using InceptionV3 with Greedy and Beam Search, evaluated on Facebook PMD with BLEU, ROUGE-L, and METEOR scores.',
    ],
    fullDescription: `Advanced image captioning system combining InceptionV3 for feature extraction with NLP-based text generation. Implemented Greedy Search and Beam Search methods, trained on 16,000 images from Facebook's Public Multimodal Dataset. Achieved competitive BLEU, ROUGE-L, and METEOR scores.`,
    images: [],
    technologies: ['Machine Learning', 'Python', 'InceptionV3', 'NLP', 'Computer Vision'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'VidzSlayers — Distributed Video Processing',
    category: 'distributed',
    shortDescription: [
      'Distributed video frame processing system for real-time object detection using pre-trained DNNs with parallel frame processing and reconstruction.',
    ],
    fullDescription: `Distributed video processing system for detecting and highlighting objects in video frames using a pre-trained DNN. Splits video into frames, processes them in parallel across distributed workers, performs object detection (cars, people, etc.), and reconstructs the modified video with object counts. Built for the Datacenter Scale Computing course at CU Boulder.`,
    images: [],
    technologies: ['Distributed Systems', 'Python', 'Deep Learning', 'Video Analytics', 'DNN'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Left Ventricle Segmentation (ELU-Net)',
    category: 'research',
    shortDescription: [
      'Automated cardiac MRI left ventricle segmentation using ELU-Net architecture, reducing manual analysis time and improving diagnostic consistency.',
    ],
    fullDescription: `Automated left ventricle segmentation in cardiac MRI images using the ELU-Net architecture. Trained on a diverse dataset of annotated cardiac images to accurately delineate LV boundaries even with noise and quality variations. Significantly reduces analysis time while improving accuracy and consistency for cardiovascular disease diagnosis.`,
    images: [],
    technologies: ['Machine Learning', 'Python', 'ELU-Net', 'Medical Imaging'],
    link: 'https://github.com/Anirudhpk2001',
  },
  {
    title: 'Code Intelligence System',
    category: 'ai',
    shortDescription: [
      'Full-stack code analysis platform using FastAPI, AST parsers, and multi-LLM adapters (Gemini, OpenAI, Ollama) to extract and analyze code metadata from GitHub repos and local directories.',
    ],
    fullDescription: `Code Intelligence System — a full-stack platform for deep code analysis. Features AST-based parsers for Python, JavaScript, and TypeScript that extract classes, functions, imports, and dependencies. Supports multi-LLM backends (Gemini, OpenAI, Ollama) for AI-powered code insights. The FastAPI backend uses SQLAlchemy 2.0 with async operations, Pydantic v2 for validation, and httpx for GitHub integration. React + Vite frontend with file detail views, local directory browsing, and analysis navigation.`,
    images: [],
    technologies: ['FastAPI', 'Python', 'React', 'Vite', 'SQLAlchemy', 'Pydantic', 'Gemini', 'OpenAI', 'AST Parsing'],
    link: 'https://github.com/Anirudhpk2001/Code-analysis',
  },
  {
    title: 'A2A + AG-UI Multi-Agent Starter',
    category: 'ai',
    shortDescription: [
      'Multi-agent orchestration system using Google A2A and AG-UI protocols with LangGraph research agent, ADK analysis agent, and a Next.js + CopilotKit frontend.',
    ],
    fullDescription: `A2A + AG-UI Multi-Agent Starter — demonstrates how specialized agents built with different frameworks can communicate via the A2A protocol. Architecture: Next.js UI (CopilotKit) → A2A Middleware → Orchestrator (ADK, port 9000) → Research Agent (LangGraph, port 9001) + Analysis Agent (ADK, port 9002). The orchestrator coordinates specialized agents — one gathers and summarizes information, the other analyzes findings and provides insights. Built with Google's Agent-to-Agent protocol for inter-agent communication and AG-UI protocol for frontend connectivity.`,
    images: [],
    technologies: ['LangGraph', 'Google ADK', 'A2A Protocol', 'AG-UI', 'Next.js', 'CopilotKit', 'Python', 'Multi-Agent'],
    link: 'https://github.com/Anirudhpk2001/app-retire',
  },
  {
    title: 'Inventory Management System',
    category: 'fullstack',
    shortDescription: [
      'Desktop inventory management application built with C# and .NET Framework, featuring WinForms GUI, SQL Server storage, and advanced search capabilities.',
    ],
    fullDescription: `Inventory Management System — a desktop application built with C# and .NET Framework. Features include adding, viewing, updating, and deleting products with details like product code, price, brand, company, and images. Includes both basic search (by product code or price range) and advanced multi-parameter search. Uses WinForms for the GUI and SQL Server for reliable data storage.`,
    images: [],
    technologies: ['C#', '.NET Framework', 'WinForms', 'SQL Server', 'CRUD'],
    link: 'https://github.com/Anirudhpk2001/Inventory-management',
  },
];
