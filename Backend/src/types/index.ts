/**
 * Message type for AI communication
 */
export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

/**
 * Template response type
 */
export interface TemplateResponse {
  prompts: string[];
  uiPrompts: string[];
}

/**
 * Chat response type
 */
export interface ChatResponse {
  response: string;
}

/**
 * Error response type
 */
export interface ErrorResponse {
  error: string;
} 