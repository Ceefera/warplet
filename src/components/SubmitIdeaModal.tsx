import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
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
    link: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");

    try {
      await emailjs.send(
        "service_g9gtrfg", // ✅ your service ID
        "template_9fgln9x", // ✅ your template ID
        formData,
        "3wKv2Lf_3HlhkXjmo" // ✅ your public key
      );

      setSuccessMessage("✅ Idea sent successfully!");
      setFormData({ handle: "", title: "", description: "", link: "" });

      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSuccessMessage("❌ Failed to send idea. Please try again.");
    } finally {
      setIsSending(false);
    }
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
            Add to Directory
          </h2>
          <p className="text-sm text-muted-foreground">
            Submit a Warplet-based project to the Warplet Legos. Add your idea to our Universe Catalog.
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
              Product Name
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
              Website or Miniapp Link
            </label>
            <Input
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="https://..."
              className="bg-background/50 border-primary/20 focus:border-primary"
            />
          </div>

          {/* Success or Error Message */}
          {successMessage && (
            <p
              className={`text-sm text-center ${
                successMessage.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {successMessage}
            </p>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSending}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all"
          >
            {isSending ? "Sending..." : "Store Idea"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitIdeaModal;
