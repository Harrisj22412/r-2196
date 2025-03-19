
// OpenAI API Integration
import OpenAI from "openai";

// Initialize OpenAI client
// In a real application, you would use environment variables
const openai = new OpenAI({
  apiKey: "your-openai-api-key", // Replace this with your actual OpenAI API key
  dangerouslyAllowBrowser: true // This is only for demo purposes
});

export interface ImageAnalysisResponse {
  suggestions: string[];
}

export const analyzeImage = async (
  imageUrl: string,
  destination: string
): Promise<ImageAnalysisResponse> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an AI travel assistant that specializes in analyzing images from tourist destinations and suggesting unique, personalized excursions based on what's in the image.
          
          For each image, provide 3-5 specific excursion ideas that:
          1. Relate directly to landmarks, scenery, or cultural elements visible in the image
          2. Include specific activities tourists could do
          3. Mention nearby attractions related to what's visible
          4. Consider the type of traveler who would take this photo
          
          Format each suggestion as a complete, conversational sentence beginning with an action verb. Make them sound enticing and unique.`
        },
        {
          role: "user",
          content: [
            { type: "text", text: `This is a photo from ${destination}. Based on what you see in this image, please suggest 3-5 personalized excursion ideas that tourists might enjoy.` },
            { type: "image_url", image_url: { url: imageUrl } }
          ]
        }
      ],
      max_tokens: 500,
    });

    const suggestions = response.choices[0]?.message?.content
      ?.split('\n')
      .filter(line => line.trim().length > 0) || [];

    return { suggestions };
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    throw new Error("Failed to analyze image");
  }
};
