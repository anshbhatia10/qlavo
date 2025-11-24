
// Static Site Compatible Service
// The real-time AI features have been removed to comply with static hosting requirements (No Server/Env Vars).

export const generateConsultationResponse = async (userPrompt: string): Promise<string> => {
    // Mock response for static demo purposes if this service is ever re-connected.
    // In a fully static build without a backend, we cannot safely expose the API Key.
    return "Thank you for your interest. The live AI consultation feature is currently disabled in this static preview. Please contact us directly via the form below for a comprehensive audit.";
};
