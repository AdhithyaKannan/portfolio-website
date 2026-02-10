export const projectReports = {
  'neuro-symbolic-vlm': {
    github: 'https://github.com/yourusername/neuro-symbolic-vlm',
    report: '/assets/reports/neuro-symbolic-vlm.pdf',
    sections: [
      {
        title: 'Problem Statement',
        content:
          'Most deep learning models for medical imaging act as black boxes, producing predictions without clear reasoning. In clinical environments, this lack of interpretability limits trust, adoption, and regulatory approval. The goal of this project was to design a system that combines accuracy with explainability by integrating vision, language, and symbolic reasoning.',
      },
      {
        title: 'System Architecture',
        content:
           'The system is designed as a modular pipeline consisting of visual understanding, language understanding, and reasoning components. Each module processes a different modality of information and contributes structured evidence to a shared representation. This architecture allows the system to remain flexible, interpretable, and extensible for different medical use cases.',
      },
      {
        title: 'Vision and Language Understanding',
        content:
          'Visual features are extracted from medical images such as X-rays using a combination of Convolutional Neural Networks and Vision Transformers, enabling both local and global feature learning. In parallel, clinical text describing patient symptoms is encoded using ClinicalBERT, which captures domain-specific medical semantics. These two modalities are aligned to form a unified understanding of both visual and textual evidence.',
      },
      {
        title: 'Neuro-Symbolic Reasoning',
        content:
          'Instead of relying solely on end-to-end neural predictions, the model maps learned representations into a symbolic reasoning space. A learnable neuro-symbolic layer evaluates consistency between visual findings and symptom descriptions, allowing the system to generate evidence-based disease hypotheses. This approach introduces logical structure into the decision-making process while retaining the flexibility of neural models.',
      },
      {
        title: 'Explainability',
        content:
          'Model interpretability is enhanced using Grad-CAM to highlight image regions that influence predictions. In addition, reasoning traces provide insight into how different pieces of evidence contribute to the final diagnosis. Together, these mechanisms allow clinicians to understand both where the model is looking and how it is reasoning.',
      },
      {
        title: 'Outcome',
        content:
          'The proposed framework demonstrates that explainability can be integrated into medical AI systems without sacrificing performance. By combining vision, language, and symbolic reasoning, the system improves transparency and trust, making it suitable for clinical decision support applications where interpretability is critical.',
      },
    ],
  },

  'voice-obstacle-detection': {
    github: 'https://github.com/yourusername/voice-obstacle-detection',
    report: '/assets/reports/voice-obstacle-detection.pdf',
    sections: [
      {
        title: 'Overview',
        content:
          'This project focuses on building an assistive navigation system designed to help visually impaired users safely perceive and navigate their surroundings. The goal is to provide real-time environmental awareness using a combination of computer vision and sensor-based depth estimation, while keeping the system affordable, wearable, and easy to use.',
      },
      {
        title: 'Hardware Setup',
        content:
          'The system is built around a Raspberry Pi equipped with a camera module and multiple ultrasonic sensors positioned to capture obstacles from different directions. The hardware setup is designed to be lightweight and wearable, allowing continuous use in real-world environments. The Raspberry Pi acts as the central processing unit, handling sensor fusion, object detection, and audio feedback.',
      },
      {
        title: 'Object Detection',
        content:
          'Real-time object detection is performed using a YOLO-based model running on the live camera feed. The model identifies common obstacles such as people, vehicles, walls, and objects in the user’s path. This enables semantic understanding of the environment rather than relying solely on distance measurements.',
      },
      {
        title: 'Sensor Fusion',
        content:
          'Ultrasonic sensors provide accurate distance measurements that complement the vision-based detections. Sensor fusion techniques combine visual object information with ultrasonic depth data to estimate obstacle proximity and direction. This integration enables a 3D-like spatial awareness, helping the system distinguish between near and far obstacles and prioritize warnings accordingly.',
      },
      {
        title: 'Audio Feedback',
        content:
          'The system provides feedback through text-to-speech and directional audio cues delivered via headphones. Users receive spoken alerts describing detected obstacles along with their relative position, allowing intuitive and hands-free interaction. Voice-based feedback ensures accessibility without requiring visual attention or manual controls.',
      },
      {
        title: 'Outcome',
        content:
          'The project demonstrates that effective assistive navigation can be achieved using low-cost hardware and edge AI techniques. By combining object detection with sensor-based depth estimation, the system provides reliable spatial awareness and real-time guidance, making it suitable for wearable assistive technologies aimed at improving mobility and independence for visually impaired users.',
      },
    ],
  },

  'fall-risk-wearable': {
    github: 'https://github.com/yourusername/fall-risk-wearable',
    report: '/assets/reports/fall-risk-wearable.pdf',
    sections: [
      {
        title: 'Overview',
        content:
          'This project aims to develop a low-power wearable system capable of detecting falls and predicting fall risk in real time. The focus is on continuous monitoring using lightweight hardware and on-device intelligence, making the system suitable for elderly care and long-term health monitoring.',
      },
      {
        title: 'System Design',
        content:
          'The wearable is built around an ESP32-C3 microcontroller, chosen for its low power consumption and support for edge AI workloads. Multiple sensors, including an Inertial Measurement Unit (IMU) and a BMP280 pressure sensor, are integrated to capture both motion and environmental context. The system is designed to operate continuously with minimal energy usage.',
      },
      {
        title: 'Sensor Fusion',
        content:
          'Motion data from the IMU provides information about acceleration, orientation, and sudden movements, while the BMP280 sensor captures changes in pressure that can indicate vertical displacement. These sensor streams are fused to improve robustness, reduce noise, and minimize false positives in fall detection.',
      },
      {
        title: 'TinyML Deployment',
        content:
          'A lightweight CNN model is trained and deployed using TensorFlow Lite Micro, enabling inference directly on the microcontroller without cloud dependency. This allows the system to make real-time decisions while preserving user privacy and ensuring low latency.',
      },
      {
        title: 'Optimization',
        content:
          'The model is quantized to int8 to reduce memory footprint and computational cost. Through careful optimization, the system achieves inference times below 100 ms while maintaining high accuracy, making it suitable for real-time fall detection on constrained hardware.',
      },
      {
        title: 'Outcome',
        content:
          'The wearable achieves approximately 91% accuracy in fall detection while maintaining ultra-low power consumption. This demonstrates the feasibility of deploying reliable health monitoring systems using TinyML, enabling scalable and energy-efficient wearable solutions.',
      },
    ],
  },

  'disaster-prediction': {
    github: 'https://github.com/yourusername/disaster-prediction',
    report: '/assets/reports/disaster-prediction.pdf',
    sections: [
      {
        title: 'Overview',
        content:
          'This project focuses on predicting the likelihood of disasters by analyzing satellite images captured before the event occurs. The objective is to explore whether visual patterns present in pre-disaster imagery can provide early indicators of potential disasters, enabling proactive risk assessment and early warning systems.',
      },
      {
        title: 'Data and Preprocessing',
        content:
          'Satellite images are preprocessed to normalize lighting variations, remove noise, and enhance structural features relevant to terrain and infrastructure. This preprocessing step ensures that the model focuses on meaningful visual cues rather than environmental artifacts such as illumination changes or sensor noise.',
      },
      {
        title: 'Modeling Approach',
        content:
          'Convolutional Neural Networks and ResNet-based architectures are used to extract high-level spatial and contextual features from satellite imagery. These models capture both fine-grained textures and large-scale scene patterns, allowing effective representation of complex geographic regions.',
      },
      {
        title: 'Anomaly Detection',
        content:
          'Autoencoders are trained to learn representations of normal pre-disaster conditions. Deviations from these learned patterns are treated as anomalies, which may indicate heightened disaster risk. This approach allows the system to identify subtle changes in terrain or infrastructure that could precede a disaster.',
      },
      {
        title: 'Risk Prediction',
        content:
          'Extracted features and anomaly scores are combined to estimate disaster likelihood. Rather than producing binary predictions, the system provides a risk score that can be used to prioritize regions for closer monitoring or intervention.',
      },
      {
        title: 'Outcome',
        content:
          'The project demonstrates that pre-disaster satellite imagery contains valuable signals for early risk prediction. By leveraging deep learning and anomaly detection, the system shows potential for supporting early warning mechanisms and disaster preparedness efforts.',
      },
    ],
  },

  'hybrid-sentiment-analysis': {
    github: 'https://github.com/yourusername/hybrid-sentiment-analysis',
    report: '/assets/reports/hybrid-sentiment-analysis.pdf',
    sections: [
      {
        title: 'Overview',
        content:
          'This project focuses on improving sentiment analysis performance by combining rule-based and transformer-based approaches. Traditional sentiment models often struggle with either contextual understanding or domain-specific cues. The goal of this project is to leverage the strengths of both methods to build a more robust and reliable sentiment classification system.',
      },
      {
        title: 'Hybrid Model Architecture',
        content:
          'The system integrates VADER, a rule-based sentiment analyzer effective at capturing explicit sentiment cues such as punctuation and negation, with RoBERTa, a transformer model capable of understanding deeper contextual and semantic relationships in text. By combining outputs from both models, the system balances interpretability and contextual awareness.',
      },
      {
        title: 'data Preprocessing',
        content:
          'Text data is preprocessed through normalization, tokenization, and feature scaling to ensure compatibility across both models. This unified preprocessing pipeline ensures consistent input representation while preserving sentiment-relevant information.',
      },
      {
        title: 'Class Imbalance Handling',
        content:
          'To address skewed sentiment distributions, SMOTE is applied to oversample minority classes. This reduces bias toward majority classes and improves the model’s ability to detect less frequent but important sentiment categories.',
      },
      {
        title: 'Evaluation and performance',
        content:
          'Model performance is evaluated using standard classification metrics, with particular attention to false negatives in minority classes. The hybrid approach significantly improves recall and overall robustness compared to using either VADER or RoBERTa alone.',
      },
      
      {
        title: 'Outcome',
        content:
          'The hybrid sentiment analysis system reduces false negatives by approximately 40% in minority sentiment classes. This demonstrates the effectiveness of combining rule-based and deep learning techniques for more balanced and accurate sentiment classification.',
      },
    ],
  },

  'smart-medical-cast': {
    github: '',
    report: '',
    sections: [
      {
        title: 'Overview',
        content:
          'This project proposes a smart medical plaster cast designed to improve patient comfort and safety during long-term immobilization. Traditional casts prevent monitoring of the affected area and can cause discomfort due to itching or undetected infections. The goal of this concept is to integrate sensing and assistive mechanisms directly into the cast without requiring removal.',
      },
      {
        title: 'Design',
        content:
          'The smart cast is envisioned to embed multiple low-profile sensors within the plaster structure. These sensors monitor physiological and environmental indicators such as temperature, humidity, and localized swelling, which can serve as early signs of infection or complications. The system is designed to be lightweight, non-intrusive, and safe for prolonged wear.',
      },
       {
        title: 'Infection Monitoring',
        content:
          'Continuous monitoring of temperature and moisture levels enables early detection of abnormal conditions beneath the cast. By tracking deviations from baseline readings, the system can alert caregivers or clinicians to potential infections before they become severe, reducing the need for emergency cast removal.',
      },
      {
        title: 'Itch Relief Mechanism',
        content:
          'To address patient discomfort, the design includes a safe itch-relief mechanism that operates without direct skin contact or cast removal. This mechanism provides controlled relief while ensuring that it does not compromise the integrity of the cast or interfere with the healing process.',
      },
      {
        title: 'Data Transmission and Privacy',
        content:
          'Sensor data can be transmitted wirelessly to an external device for monitoring and analysis. The system prioritizes patient safety, ensuring that all embedded components operate within safe limits and do not generate heat or pressure that could harm the user.',
      },
      {
        title: 'Outcome',
        content:
          'The smart medical cast concept demonstrates how embedded sensing and assistive mechanisms can enhance patient comfort and enable early detection of complications. This approach has the potential to improve recovery outcomes and reduce the risks associated with traditional plaster casts.',
      },
    ],
  },

  'rag-chatbot-postgres': {
    github: '',
    report: '',
    sections: [
      {
        title: 'Overview',
        content:
          'This project focuses on building a Retrieval-Augmented Generation (RAG) chatbot capable of answering user queries using real-time sensor data stored in a PostgreSQL database. Unlike traditional chatbots that rely only on static knowledge, this system grounds its responses in live, structured data, enabling accurate and context-aware interactions.',
      },
      {
        title: 'Architecture',
        content:
          'The system is designed as a local pipeline consisting of a database retrieval layer, an embedding-based retrieval module, and a large language model for response generation. User queries are first analyzed to determine relevant database fields before triggering structured data retrieval from PostgreSQL.',
      },
      {
        title: 'Database Integration',
        content:
          'Sensor data is stored in a relational PostgreSQL database, allowing efficient querying and real-time access to structured information. SQL queries are dynamically generated based on user intent, ensuring that responses reflect the most recent sensor readings rather than outdated or hallucinated information.',
      },
      {
        title: 'Retrieval-Augmented Generation',
        content:
          'Retrieved database records are converted into embeddings and provided as context to the language model. This RAG approach ensures that generated responses are grounded in factual data, improving reliability and reducing hallucinations commonly observed in standalone LLM systems.',
      },
      {
        title: 'Context-Aware Responses',
        content:
          'By combining structured retrieval with natural language generation, the chatbot can produce explanations, summaries, and insights tailored to user queries. This enables flexible interaction with sensor data without requiring users to write SQL queries manually.',
      },
      {
        title: 'Outcome',
        content:
          'The project demonstrates how RAG can be effectively applied to structured databases, enabling dynamic and trustworthy AI-driven interfaces over live sensor data. This approach is well-suited for monitoring systems, analytics dashboards, and real-time decision support applications.',
      },
    ],
  },

  'emotiva-tales': {
    github: '',
    report: '',
    sections: [
      {
        title: 'Overview',
        content:
          'EmotivaTales is an emotion-aware application designed to generate personalized stories or motivational content based on a user’s emotional state and contextual input. The goal of the project is to explore how generative AI can be used to create emotionally resonant content that adapts to the user rather than producing generic outputs.',
      },
      {
        title: 'User Interaction Flow',
        content:
          'Users begin by selecting or entering their current emotion along with a brief scenario or context. Based on this input, the system dynamically adjusts the tone, narrative style, and content of the generated output. Users can choose between story generation and motivational responses, allowing flexible use cases.',
      },
      {
        title: 'Generation Pipeline',
        content:
          'The application leverages a large language model to generate context-aware narratives conditioned on emotional input. Prompt engineering techniques are used to guide the model’s tone and structure, ensuring emotional alignment with the user’s state. The generation pipeline is designed to be lightweight and responsive.',
      },
      {
        title: 'Text-to-Speech Integration',
        content:
          'To enhance accessibility and immersion, generated content is converted into speech using text-to-speech technology. This allows users to listen to stories or motivational messages, making the experience more engaging and suitable for hands-free use.',
      },
      {
        title: 'History and Personalization',
        content:
          'The system maintains a history of generated content, enabling users to revisit previous stories or messages. This feature supports continuity and personalization, allowing the application to evolve with user interactions over time.',
      },
      {
        title: 'Outcome',
        content:
          'EmotivaTales demonstrates how emotion-aware generative AI can be applied to create personalized and engaging user experiences. By combining emotional context, language generation, and audio feedback, the project highlights the potential of AI-driven storytelling and motivation systems.',
      },
    ],
  },
};
