import { CheckCircle2, ArrowLeft, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMeetingRoom from "@/assets/hero-meeting-room.jpg";

export function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_32%),linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)]">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
        <div className="w-full overflow-hidden rounded-[36px] border border-blue-100/80 bg-white shadow-[0_24px_80px_rgba(30,64,175,0.14)]">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-10 md:p-14">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 shadow-[0_16px_40px_rgba(34,197,94,0.28)]">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
                Submission Received
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Thank You
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                Your request has been submitted successfully. Our Compton team will review your
                requirement and get back to you shortly with the next steps.
              </p>

              <div className="mt-7 grid gap-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  <Sparkles className="h-4 w-4" />
                  We have received your enquiry
                </div>
                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Response Time
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">
                      Within 24 hours
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Project Support
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">
                      Consultation and deployment guidance
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-cta text-primary-foreground shadow-soft">
                  <a href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <a href="mailto:query@compton.in">
                    <Mail className="mr-2 h-4 w-4" /> Email Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#60a5fa_100%)] p-10 md:p-14">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Request in Progress
                  </div>

                  <div className="mt-8 overflow-hidden rounded-[28px] border border-white/12 bg-white/10 backdrop-blur-md">
                    <div className="relative h-52 overflow-hidden border-b border-white/10">
                      <img
                        src={heroMeetingRoom}
                        alt="Compton meeting room"
                        className="h-full w-full object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute left-5 bottom-5 rounded-full border border-white/15 bg-slate-950/65 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        Compton Collaboration Spaces
                      </div>
                    </div>
                    <div className="p-6">
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                          Next
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          Our team will contact you within 24 hours
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                          Support
                        </p>
                        <div className="mt-3 space-y-3 text-white/90">
                          <p className="inline-flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            +91 98110 21810
                          </p>
                          <p className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            query@compton.in
                          </p>
                          <p className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Kalkaji, New Delhi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                <p className="mt-10 max-w-sm text-sm leading-7 text-white/75">
                  Thank you for choosing Compton for your video conferencing and meeting room
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
