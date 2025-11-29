

export const projectsData = [
  {
  title: "Music-Separation-as-a-Service (MSaaS)",
  shortDescription: [
    "Developed a Kubernetes-based microservices platform that performs automatic audio source separation using Demucs.",
    "Designed scalable REST APIs, worker pipelines, Redis task queues, and MinIO storage on top of a production-grade GKE cluster."
  ],
  fullDescription: `Music-Separation-as-a-Service (MSaaS) is a fully containerized, Kubernetes-orchestrated platform that allows users to upload MP3 files and automatically separate vocals, drums, bass, and other stems. I designed the entire architecture around high scalability, efficient computation, and cloud-native deployment principles.

The system consists of four main microservices: a Flask REST API, Redis for task brokering, Demucs-powered worker nodes for audio separation, and MinIO for object storage. Incoming MP3 files are uploaded via the API, queued in Redis, and processed by distributed worker nodes running Demucs. The workers store separated tracks back into MinIO buckets for retrieval.

I deployed the platform using Google Kubernetes Engine (GKE), leveraging Kubernetes for autoscaling, resiliency, and clean service isolation. During development, I relied on Docker and port-forwarding to simulate the cluster locally. Each service was containerized with versioned Docker images, allowing easy rollbacks and CI/CD integration.

I optimized compute resources to handle the memory-intensive Demucs model, added logging pipelines via Redis, and tested the system using real audio samples. This project demonstrated my ability to design and deploy complex distributed architectures, manage cloud infrastructure, and integrate advanced machine learning workloads into production-ready microservice systems.`,
  images: [],
  technologies: [
    "Kubernetes",
    "GKE",
    "Docker",
    "Flask",
    "Python",
    "Redis",
    "MinIO",
    "Demucs",
    "Microservices",
    "Cloud Native"
  ],
  link: "https://github.com/your-repo-here"
}
,
  {
  title: "Multimodal RAG Search Agent",
  shortDescription: [
    "Designed an end-to-end multimodal Retrieval-Augmented Generation (RAG) system capable of ingesting URLs, files, text, and images for vector-based semantic search.",
    "Built modular AI agent workflows using LangChain, LangGraph, and OpenAI embeddings with ChromaDB acting as the vector store."
  ],
  fullDescription: `I developed a Multimodal RAG Search Agent that enables intelligent search across text, images, documents, and URLs using vector embeddings. The goal of this project was to build a highly modular, pluggable RAG pipeline that supports different modalities and can be extended into larger agentic workflows.

Using OpenAI’s embedding models, LangChain, and LangGraph, I implemented a processing pipeline where input data—such as PDFs, URLs, plain text, and even images—is pre-processed, chunked, embedded, and stored inside ChromaDB. I designed the workflow so each step (ingestion, splitting, embedding, retrieval, reasoning) is independently orchestrated, making it easy to extend into a system like Temporal for production-grade workflows.

The system supports semantic search across multiple modalities, meaning users can perform natural language queries and retrieve contextually relevant matches regardless of input type. LangGraph allowed me to organize the entire pipeline into stateful, observable agent nodes, improving both transparency and debugging.

Building this project strengthened my understanding of RAG architectures, embedding pipelines, multimodal search, and agent-style orchestration—key foundations for scalable AI systems.`,
  images: [],
  technologies: [
    "OpenAI",
    "Python",
    "LangChain",
    "LangGraph",
    "ChromaDB",
    "Vector Search",
    "RAG"
  ],
  link: "https://github.com/your-repo-here"
}
,
  {
    title: "Trail Explorer",
    shortDescription: [
      "Trail Explorers is a platform designed for outdoor enthusiasts, offering real-time weather forecasts, detailed trail information, and insights on various activities.",
      "It helps users plan and explore outdoor adventures with ease. The platform also features pet and child-friendly trails, scenic views, and local wildlife details.",
    ],
    fullDescription: `In collaboration with five other graduate students for our Big Data Architecture course, we developed Trail Explorers—a comprehensive platform tailored for outdoor enthusiasts. This project boasts an array of functionalities, including real-time weather forecasts, trail length, elevation gain, and detailed information on various activities like hiking, bird watching, and star gazing. Additionally, it provides insights on pet and child-friendly trails, scenic views, and local wildlife, accompanied by captivating images.

    As a member of the backend team, my role primarily focused on building a robust REST API using Flask. Leveraging the power of AWS DynamoDB, I seamlessly integrated our backend with the database, ensuring efficient retrieval and manipulation of trail data. Utilizing Boto3, I established a secure connection to DynamoDB, enabling seamless transmission of JSON-formatted information to the frontend. This backend infrastructure formed the backbone of Trail Explorers, facilitating smooth communication between the user interface and the vast repository of trail data.

    Trail Explorers represents a harmonious blend of technological innovation and outdoor exploration, empowering users to discover and engage with nature in a meaningful way. Through our collaborative efforts, we aimed to revolutionize the outdoor adventure experience, providing a one-stop destination for trail enthusiasts to plan, explore, and connect with nature like never before.`,
    images: [
    
    ],
    technologies: [
      "AWS",
      "React.js",
      "Python",
      "Flask",
      "REST API",
      "DevOps",
      "DynamoDB",
    ],
    link: "https://github.com/TrailExplorer",
  },
  {
    title: "CryptoCurrency Price Prediction using Stacked LSTM",
    shortDescription: [
      "This is a website to predict the future value of Cryptocurrency prices using real time data.",
      "It also provides with top crypto currency in the market and also provides information about the present live crypto news.",
    ],
    fullDescription: ` A cryptocurrency price prediction model built using Stacked LSTM and integrated into a ReactJS website for a seamless user experience. The website provides real-time cryptocurrency prices, news, and trends to help users make informed decisions in the dynamic market. The prediction model uses historical data and considers multiple factors to make accurate predictions. The use of LSTM networks enables the model to capture long-term dependencies and trends in the data, leading to improved accuracy in predictions.

      The ReactJS website has been designed to be highly responsive, providing an optimal viewing experience on any device. The live news and trend section keeps users updated with the latest developments in the cryptocurrency market. The website also includes interactive charts and graphs that allow users to easily track the performance of their investments.

      In conclusion, the combination of a robust prediction model and a user-friendly ReactJS website makes this solution an ideal tool for anyone looking to invest in the cryptocurrency market. With its accurate predictions and real-time market insights, users can make informed decisions and stay ahead of the curve in the dynamic and rapidly evolving world of cryptocurrency.

      Some key uses include:
      Investment decisions: The model provides accurate predictions of cryptocurrency prices, helping investors make informed decisions about when to buy and sell.
      Market insights: The website provides real-time news and trends in the cryptocurrency market, keeping users informed and up-to-date on the latest developments.
      Investment decisions: The model provides accurate predictions of cryptocurrency prices, helping investors make informed decisions about when to buy and sell.
      Portfolio management: Users can track the performance of their investments using the interactive charts and graphs provided on the website.
      Education: The website can be used as a learning tool for those who are new to cryptocurrency and want to understand the market better.
      Trading: The prediction model can be used by traders to make profitable trades by anticipating price changes in the market.
      Risk management: The model can help investors minimize their risks by providing insight into market trends and potential price changes.`,
    images: ["/assets/images/Capture.png", "/assets/images/Capture1.png"],
    technologies: [
      "Machine Learning",
      "React.js",
      "Python",
      "LSTM",
      "API Integration",
    ],
    link: "https://your-project-link.com",
  },
  {
    title: "Image Caption Generator",
    shortDescription: [
      "This project involves developing an advanced image captioning system by combining Convolutional Neural Networks (CNN) for image feature extraction and NLP techniques for text generation." ,
      " Utilizing the InceptionV3 model, two caption generation methods, Greedy Search and Beam Search, were implemented and evaluated using the Facebook Public Multimodal Dataset. The system achieved competitive performance based on BLEU, ROUGE-L, and METEOR scores.",
    ],
      fullDescription: `Image captioning is a fascinating intersection of computer vision and natural language processing (NLP), where the goal is to generate human-readable descriptions that accurately depict the content of an image. In this project, I developed an advanced image captioning system leveraging Convolutional Neural Networks (CNN) for image feature extraction and NLP techniques for text generation.

      Using the InceptionV3 model for image feature extraction, I implemented two caption generation techniques: Greedy Search (argmax) and Beam Search. The system was trained and evaluated on a subset of the Facebook Public Multimodal Dataset (PMD), comprising 16,000 training images and 1,600 test images. The generated captions were evaluated using standard metrics such as BLEU, ROUGE-L, and METEOR to ensure accuracy and relevance.

      Key Highlights:

      Utilized InceptionV3 for robust image feature extraction.

      Implemented and compared Greedy Search and Beam Search for caption generation.

      Trained and tested the model on a large-scale dataset (Facebook PMD).

      Achieved competitive performance as measured by BLEU, ROUGE-L, and METEOR scores.

      Impact:

      Provides a framework for generating accurate and meaningful image captions.

      Demonstrates the effectiveness of combining computer vision and NLP techniques.

      Offers insights into the comparative performance of different caption generation approaches.

      This project showcases the potential of deep learning and NLP in bridging the gap between visual content and textual descriptions. I’m excited about the possibilities this technology holds for applications in accessibility, content generation, and multimedia analysis.`,
    images: [

    ],
    technologies: [
      "Machine Learning",
      "React.js",
      "Python",
      "LSTM",
      "API Integration",
    ],
    link: "https://your-project-link.com",
  },
  {
    title: "VidzSlayers - Distributed Video Frame Processing for Object Detection ",
    shortDescription: [
      "Vidzslayers is a distributed video processing system that detects and highlights objects in video frames using a pre-trained Deep Neural Network (DNN).",
      " It efficiently processes frames in parallel, reconstructing the video with detected objects and their counts for scalable and real-time video analytics.",
    ],
    fullDescription: `Vidzslayers is a distributed video processing system designed to detect and highlight objects in video frames using a pre-trained Deep Neural Network (DNN). Developed as part of the CSCI 5253: Datacenter Scale Computing course at the University of Colorado Boulder, this project efficiently processes video by splitting it into individual frames, performing object detection in parallel, and reconstructing the modified video with detected objects and their counts.

Key Features:

Scalable Distributed Processing Leverages parallel computing to process video frames independently.
Pre-trained Deep Neural Network Detects and highlights objects such as cars, people, and more.
Efficient Video Reconstruction  Ensures the processed frames are merged while maintaining the original order.
This project bridges datacenter scale computing, deep learning, and video analytics, demonstrating how distributed systems can enhance real-time object detection in video processing.`,
    images: [

    ],
    technologies: [
      "Machine Learning",
      "React.js",
      "Python",
      "LSTM",
      "API Integration",
    ],
    link: "https://your-project-link.com",
  },
  {
    title: "Left Ventricle Automatic segmentation using ELU-Net Architecture",
    shortDescription: [
      "This project leverages the ELU-Net architecture for automated left ventricle segmentation in cardiac MRI images, improving accuracy and efficiency while reducing human error.",
      " By training on a diverse dataset, it enhances diagnostic consistency, aiding early detection and treatment of cardiovascular diseases.",
    ],
    fullDescription: `In the field of cardiac MRI, accurate analysis of the left ventricle (LV) is critical for diagnosing and treating cardiovascular diseases. Manual segmentation of the LV is time-consuming, prone to human error, and often leads to inconsistencies in diagnosis. To address these challenges, I developed an innovative solution leveraging the ELU-Net architecture for automated and precise segmentation of the left ventricle in cardiac MRI images.

This project focuses on training a deep learning model on a large dataset of annotated cardiac images to accurately identify and delineate the LV boundaries, even in the presence of noise and variations in image quality. By automating this process, the system significantly reduces the time required for analysis while improving accuracy and consistency.

Key Highlights:

Utilized the ELU-Net architecture for robust and accurate segmentation.

Trained on a diverse dataset to ensure generalization across different patient populations and imaging modalities.

Achieved fully automated segmentation, reducing reliance on manual intervention.

Demonstrated potential to enhance diagnostic accuracy and treatment planning for cardiovascular diseases.

This innovative approach not only improves the efficiency of cardiac imaging analysis but also holds great promise for advancing medical imaging technologies. By providing clinicians with reliable and consistent measurements of left ventricular function, this solution can play a pivotal role in the early diagnosis, treatment planning, and monitoring of cardiac diseases.

Impact:

Reduces human error and false positives in LV segmentation.

Enhances the speed and accuracy of cardiac MRI analysis.

Contributes to better patient outcomes through improved diagnostic tools.

I’m excited about the potential of this project to revolutionize cardiac imaging and improve patient care. Looking forward to further research and collaboration in this space!`,
    images: [

    ],
    technologies: [
      "Machine Learning",
      "Python",
      "ELU-Net Architecture",
    ],
    link: "https://your-project-link.com",
  },
  // Add more projects following the same structure
];
