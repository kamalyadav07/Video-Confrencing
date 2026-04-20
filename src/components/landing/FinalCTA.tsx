import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  company: z.string().trim().min(1, "Company is required").max(120),
  requirements: z.string().trim().min(10, "Please share a brief requirement").max(1000),
});

export function FinalCTA() {
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
        if (key && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem("compton_leads") ?? "[]");
      existing.push({ ...result.data, submittedAt: new Date().toISOString() });
      localStorage.setItem("compton_leads", JSON.stringify(existing));
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSuccess(true);
      toast.success("Request received! Our team will reach out within 24 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="gradient-hero shadow-elegant relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative flex flex-col items-stretch justify-center gap-12 md:flex-row">
            <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
              <span className="inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                Limited Slots This Month
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
                Upgrade Your Meeting Rooms Today
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/85 md:text-xl">
                Don&apos;t let outdated meeting rooms slow your business growth. Get a{" "}
                <span className="font-semibold text-primary-foreground">
                  FREE Consultation & Demo
                </span>{" "}
                from our experts.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button
                  size="lg"
                  className="bg-background text-primary shadow-glow text-base transition-all duration-300 hover:scale-105 hover:bg-background/90"
                  asChild
                >
                  <a href="tel:+910000000000">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-foreground text-background text-base transition-all duration-300 hover:scale-105 hover:bg-foreground/90"
                >
                  Talk to Our Experts <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80 md:justify-start">
                <span className="flex items-center gap-2">✓ No-obligation consultation</span>
                <span className="flex items-center gap-2">✓ Response within 24 hours</span>
                <span className="flex items-center gap-2">✓ Custom tailored proposal</span>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center rounded-2xl border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-3xl md:w-[420px]">
              <div className="mb-6 text-center">
                <h3 className="font-display mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-2xl font-bold text-transparent">
                  Request a Quote
                </h3>
                <p className="text-sm text-muted-foreground">
                  Share a few details and our experts will get back to you within 24 hours.
                </p>
              </div>

              {success ? (
                <div className="animate-in fade-in zoom-in space-y-3 py-8 text-center duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Thank you!</h3>
                  <p className="mx-auto max-w-sm text-sm text-muted-foreground">
                    Your request has been received. A Compton specialist will contact you shortly.
                  </p>
                  <Button
                    onClick={() => setSuccess(false)}
                    className="gradient-cta text-primary-foreground transition-all duration-300 hover:opacity-90"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-2 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First Name" name="firstName" error={errors.firstName} />
                    <Field label="Last Name" name="lastName" error={errors.lastName} />
                  </div>
                  <Field label="Email Address" name="email" type="email" error={errors.email} />
                  <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
                  <Field label="Company Details" name="company" error={errors.company} />
                  <div className="grid gap-1.5">
                    <Label htmlFor="requirements" className="text-sm font-medium text-gray-700">
                      A brief about your requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      placeholder="Tell us about your meeting room setup, room sizes, number of locations..."
                      className="resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.requirements && (
                      <p className="animate-in slide-in-from-top-1 text-xs text-destructive">
                        {errors.requirements}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="gradient-cta text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-xl"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by Compton regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        className="transition-all duration-200 hover:border-primary/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="animate-in slide-in-from-top-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
