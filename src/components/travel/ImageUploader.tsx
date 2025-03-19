
import { useState } from "react";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ImageUploaderProps {
  onImageAnalyzed: (imageUrl: string) => void;
  isAnalyzing: boolean;
  destination: string;
}

const ImageUploader = ({ onImageAnalyzed, isAnalyzing, destination }: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileInputState, setFileInputState] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result as string;
      setSelectedImage(result);
    };
    setFileInputState(e.target.value);
  };

  const handleAnalyzeClick = () => {
    if (selectedImage) {
      onImageAnalyzed(selectedImage);
    }
  };

  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-3xl font-display">Get AI Excursion Ideas</CardTitle>
        <CardDescription>
          Upload a photo of {destination} and our AI will suggest personalized excursions based on what it sees
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="cursor-pointer"
                onChange={handleFileChange}
                value={fileInputState}
              />
              <Button onClick={handleAnalyzeClick} disabled={!selectedImage || isAnalyzing}>
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                {isAnalyzing ? <span className="ml-2 animate-spin">⏳</span> : <Camera className="ml-2 h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Upload your photo of {destination} to get AI-powered excursion recommendations
            </p>
          </div>
          
          {selectedImage && (
            <div className="flex items-center justify-center">
              <div className="relative max-w-sm w-full overflow-hidden rounded-lg shadow-md">
                <img
                  src={selectedImage}
                  alt="Selected destination"
                  className="w-full h-auto object-cover"
                />
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-semibold">Analyzing image...</p>
                      <p className="text-sm mt-2">Using AI to generate excursion ideas</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
