import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface SubmitIdeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitIdeaModal = ({ isOpen, onClose }: SubmitIdeaModalProps) => {
  const [formData, setFormData] = useState({
    handle: "",
    title: "",
    description: "",
    link: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Storing idea:", formData);
    // Reset form and close
    setFormData({ handle: "", title: "", description: "", link: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl glass-panel rounded-xl p-8 shadow-[0_0_50px_rgba(0,191,255,0.3)] animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Add to Vault
          </h2>
          <p className="text-sm text-muted-foreground">
            Store your idea in the Warplet Universe
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Builder Handle
            </label>
            <Input
              value={formData.handle}
              onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
              placeholder="@yourhandle"
              required
              className="bg-background/50 border-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title
            </label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Name your innovation"
              required
              className="bg-background/50 border-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe what you're building..."
              required
              rows={4}
              className="bg-background/50 border-primary/20 focus:border-primary resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Link or File
            </label>
            <div className="flex gap-2">
              <Input
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all"
          >
            Store Idea
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitIdeaModal;
