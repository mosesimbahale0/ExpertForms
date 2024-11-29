type Capabilities = {
    available: string;
    defaultTemperature: number;
    defaultTopK: number;
    maxTopK: number;
  };
  
  type SessionOptions = {
    temperature?: number;
    topK?: number;
    systemPrompt?: string;
    monitor?: (event: Event) => void;
  };
  
  export async function checkCapabilities(): Promise<Capabilities> {
    const capabilities = await ai.languageModel.capabilities();
    return capabilities;
  }
  
  export async function createSession(options: SessionOptions = {}): Promise<any> {
    const session = await ai.languageModel.create(options);
    return session;
  }
  
  export async function promptModel(session: any, prompt: string): Promise<string> {
    const result = await session.prompt(prompt);
    return result;
  }
  
  export async function promptModelStreaming(
    session: any,
    prompt: string,
    onChunk: (chunk: string) => void
  ): Promise<string> {
    const stream = await session.promptStreaming(prompt);
    let result = '';
    let previousChunk = '';
  
    for await (const chunk of stream) {
      const newChunk = chunk.startsWith(previousChunk)
        ? chunk.slice(previousChunk.length)
        : chunk;
      result += newChunk;
      previousChunk = chunk;
      onChunk(newChunk);
    }
  
    return result;
  }
  