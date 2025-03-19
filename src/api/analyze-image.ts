
import { analyzeImage } from "@/lib/openai";

// This is a mock API endpoint since we're running in the browser
// In a real application, this would be a server-side API route
export const handleImageAnalysis = async (req: {
  imageUrl: string;
  destination: string;
}) => {
  try {
    const { imageUrl, destination } = req;
    const result = await analyzeImage(imageUrl, destination);
    return result;
  } catch (error) {
    console.error("Error in image analysis API:", error);
    throw error;
  }
};
