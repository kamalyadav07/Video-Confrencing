import * as React from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  company: z.string().trim().min(1, "Company is required").max(120),
  requirements: z.string().trim().min(10, "Please share a brief requirement").max(1000),
});

type ContactDialogProps = {
  trigger: React.ReactNode;
  defaultTitle?: string;
};

export function ContactDialog({
  trigger,
  defaultTitle = "Get a Free Consultation",
}: ContactDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      requirements: String(formData.get("requirements") ?? ""),
    };

    const result = schema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem("compton_leads") ?? "[]");
      existing.push({ ...result.data, submittedAt: new Date().toISOString() });
      localStorage.setItem("compton_leads", JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 600));
      setSuccess(true);
      toast.success("Request received! Our team will reach out within 24 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setSuccess(false);
        setErrors({});
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{defaultTitle}</DialogTitle>
          <DialogDescription className="space-y-3">
            <span className="block">
              Share a few details and our experts will get back to you within 24 hours.
            </span>
            <span className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+919811021810" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +91 98110 21810
              </a>
              <a href="mailto:query@compton.in" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                query@compton.in
              </a>
            </span>
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold">Thank you!</h3>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              Your request has been received. A Compton specialist will contact you shortly.
            </p>
            <Button
              onClick={() => handleOpenChange(false)}
              className="gradient-cta text-primary-foreground"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" name="firstName" error={errors.firstName} />
              <Field label="Last Name" name="lastName" error={errors.lastName} />
            </div>
            <Field label="Email Address" name="email" type="email" error={errors.email} />
            <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
            <Field label="Company Details" name="company" error={errors.company} />
            <div className="grid gap-1.5">
              <Label htmlFor="requirements">A brief about your requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Tell us about your meeting room setup, room sizes, number of locations..."
              />
              {errors.requirements && (
                <p className="text-xs text-destructive">{errors.requirements}</p>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="gradient-cta text-primary-foreground hover:opacity-90 shadow-glow"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted by Compton regarding your enquiry.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={label} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
