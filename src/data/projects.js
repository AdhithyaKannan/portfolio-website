export const projects = [
  {
    id: 'neuro-symbolic-vlm',
    title: 'Neuro-Symbolic Vision–Language Diagnosis',
    shortDescription:
      'Explainable medical diagnosis combining vision, language, and symbolic reasoning.',
    bullets: [
      'CNN & ViT-based X-ray understanding',
      'ClinicalBERT for symptom reasoning',
      'Neuro-symbolic explainability with Grad-CAM',
    ],
    tech: ['PyTorch', 'Vision Transformer', 'ClinicalBERT', 'Grad-CAM'],
  },

  {
    id: 'voice-obstacle-detection',
    title: 'Voice-Activated Obstacle Detection System',
    shortDescription:
      'Assistive navigation system for visually impaired users.',
    bullets: [
      'YOLO-based real-time object detection',
      'Ultrasonic sensor fusion for depth',
      'Directional audio feedback via TTS',
    ],
    tech: ['Raspberry Pi', 'YOLO', 'OpenCV', 'Text-to-Speech'],
  },

  {
    id: 'fall-risk-wearable',
    title: 'Adaptive Low Power IoT Wearable for Fall Risk Prediction',
    shortDescription:
      'TinyML-based wearable for real-time fall detection.',
    bullets: [
      'IMU + BMP280 multi-sensor fusion',
      'On-device CNN inference with TinyML',
      'Ultra-low power ESP32-C3 deployment',
    ],
    tech: ['ESP32-C3', 'TinyML', 'TFLM', 'IMU', 'CNN'],
  },

  {
    id: 'disaster-prediction',
    title: 'Disaster Prediction from Pre-Disaster Images',
    shortDescription:
      'Early disaster risk prediction using satellite imagery.',
    bullets: [
      'CNN & ResNet-based scene analysis',
      'Autoencoder-driven anomaly detection',
      'Pre-disaster risk assessment pipeline',
    ],
    tech: ['Python', 'CNN', 'ResNet', 'Autoencoders', 'OpenCV'],
  },

  {
    id: 'hybrid-sentiment-analysis',
    title: 'Hybrid Sentiment Analysis using VADER and RoBERTa',
    shortDescription:
      'Robust sentiment analysis combining rules and transformers.',
    bullets: [
      'VADER + RoBERTa ensemble model',
      'SMOTE-based class imbalance handling',
      'Reduced false negatives in minority classes',
    ],
    tech: ['Python', 'VADER', 'RoBERTa', 'SMOTE', 'Logistic Regression'],
  },

  {
    id: 'smart-medical-cast',
    title: 'IoT Smart Medical Cast for Infection Monitoring',
    shortDescription:
      'Conceptual smart cast for infection monitoring and itch relief.',
    bullets: [
      'Embedded sensors for infection indicators',
      'Safe itch-relief mechanism design',
      'Non-invasive continuous monitoring',
    ],
    tech: ['Embedded Systems', 'IoT Sensors', 'Microcontrollers'],
  },

  {
    id: 'rag-chatbot-postgres',
    title: 'RAG Chatbot over PostgreSQL Sensor Data',
    shortDescription:
      'Local RAG chatbot grounded in live sensor data.',
    bullets: [
      'Real-time PostgreSQL querying',
      'LLM-based retrieval augmented generation',
      'Context-aware structured responses',
    ],
    tech: ['LLMs', 'RAG', 'PostgreSQL', 'Python', 'Embeddings'],
  },

  {
    id: 'emotiva-tales',
    title: 'EmotivaTales – Emotion Driven Story Generator',
    shortDescription:
      'Emotion-aware story and motivation generation app.',
    bullets: [
      'Emotion-conditioned LLM generation',
      'Text-to-speech narration',
      'Story history and playback support',
    ],
    tech: ['Python', 'Streamlit', 'LLMs', 'Text-to-Speech'],
  },
];
