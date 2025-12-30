// Simulated AI features - no actual AI integration, just smart-looking responses

export interface SentimentAnalysis {
  sentiment: 'positive' | 'neutral' | 'negative';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  insights: string;
}

// Keyword-based sentiment analysis (simulated)
function analyzeSentiment(message: string, subject: string): 'positive' | 'neutral' | 'negative' {
  const text = (message + ' ' + subject).toLowerCase();
  
  const negativeKeywords = ['problem', 'issue', 'scam', 'fraud', 'stolen', 'hack', 'lost', 'urgent', 'help', 'emergency', 'critical', 'fail', 'error', 'broken'];
  const positiveKeywords = ['thank', 'great', 'excellent', 'good', 'happy', 'satisfied', 'appreciate', 'wonderful', 'amazing'];
  
  const negativeCount = negativeKeywords.filter(keyword => text.includes(keyword)).length;
  const positiveCount = positiveKeywords.filter(keyword => text.includes(keyword)).length;
  
  if (negativeCount > positiveCount && negativeCount > 2) return 'negative';
  if (positiveCount > negativeCount && positiveCount > 1) return 'positive';
  return 'neutral';
}

// Keyword-based priority analysis (simulated)
function analyzePriority(message: string, subject: string): 'low' | 'medium' | 'high' | 'urgent' {
  const text = (message + ' ' + subject).toLowerCase();
  
  const urgentKeywords = ['urgent', 'emergency', 'critical', 'asap', 'immediately', 'stolen', 'hack', 'fraud', 'scam'];
  const highKeywords = ['important', 'help', 'issue', 'problem', 'lost', 'need', 'required'];
  const lowKeywords = ['question', 'info', 'inquiry', 'general', 'curious'];
  
  if (urgentKeywords.some(keyword => text.includes(keyword))) return 'urgent';
  if (highKeywords.some(keyword => text.includes(keyword))) return 'high';
  if (lowKeywords.some(keyword => text.includes(keyword))) return 'low';
  return 'medium';
}

// Generate insights based on content (simulated)
function generateInsights(message: string, subject: string, sentiment: string, priority: string): string {
  const text = message.toLowerCase();
  let insights = [];
  
  if (text.includes('scam') || text.includes('fraud')) {
    insights.push('Contains fraud/scam report - requires immediate attention');
  }
  if (text.includes('transaction') || text.includes('wallet')) {
    insights.push('Transaction-related inquiry');
  }
  if (text.includes('compliance') || text.includes('aml')) {
    insights.push('Compliance/AML related query');
  }
  if (text.includes('recovery') || text.includes('trace')) {
    insights.push('Asset recovery inquiry');
  }
  if (sentiment === 'negative' && priority === 'urgent') {
    insights.push('High urgency case with negative sentiment');
  }
  if (priority === 'high' || priority === 'urgent') {
    insights.push('Priority case - recommend quick response');
  }
  
  if (insights.length === 0) {
    insights.push(`Sentiment: ${sentiment}, Priority: ${priority} - Standard inquiry`);
  }
  
  return insights.join('. ') + '.';
}

export async function analyzeContactForm(
  message: string,
  subject: string
): Promise<SentimentAnalysis> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const sentiment = analyzeSentiment(message, subject);
  const priority = analyzePriority(message, subject);
  const insights = generateInsights(message, subject, sentiment, priority);
  
  return {
    sentiment,
    priority,
    insights,
  };
}

// Simulated AI chat responses
const aiResponses = {
  greeting: [
    "Hello! I'm here to help you manage contacts and analyze data. How can I assist you today?",
    "Hi there! I'm your AI assistant for the CyberTrace admin dashboard. What would you like to know?",
  ],
  contacts: [
    "I can help you analyze contact patterns and suggest status updates. Would you like to review pending contacts?",
    "Contact management is important. I recommend prioritizing contacts with 'urgent' or 'high' priority status.",
  ],
  status: [
    "Based on typical patterns, contacts with urgent priority should be reviewed within 24 hours. High priority contacts can be reviewed within 48 hours.",
    "I suggest updating contact statuses regularly. New contacts should be reviewed and moved to 'in-progress' within a few days.",
  ],
  metrics: [
    "Your dashboard metrics show contact trends. Monitoring these helps identify patterns and optimize response times.",
    "I notice you have several contacts in the system. Regular status updates improve customer satisfaction.",
  ],
  default: [
    "I'm here to help with contact management, status tracking, and providing insights about your dashboard data.",
    "I can assist with analyzing contacts, suggesting status updates, and explaining metrics. What would you like to know?",
    "Feel free to ask me about contact management, priority handling, or dashboard analytics.",
  ],
};

function getResponseCategory(message: string): keyof typeof aiResponses {
  const lower = message.toLowerCase();
  
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return 'greeting';
  if (lower.includes('contact') || lower.includes('inquiry') || lower.includes('message')) return 'contacts';
  if (lower.includes('status') || lower.includes('priority') || lower.includes('update')) return 'status';
  if (lower.includes('metric') || lower.includes('stat') || lower.includes('analytics') || lower.includes('chart')) return 'metrics';
  return 'default';
}

export async function generateAIChatResponse(userMessage: string): Promise<string> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  
  const category = getResponseCategory(userMessage);
  const responses = aiResponses[category];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  return randomResponse;
}
