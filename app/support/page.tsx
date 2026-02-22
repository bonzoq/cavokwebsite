import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { Mail, MessageCircle, Bug, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — CAVOK",
  description: "Get help with CAVOK. FAQ, contact information, and support resources.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            How can we help?
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find answers to common questions below, or reach out to us directly.
            We&apos;re pilots too — we get it.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            title="Email Us"
            description="General questions and support"
            action="hello@cavok.app"
            href="mailto:hello@cavok.app"
          />
          <ContactCard
            icon={<MessageCircle className="w-5 h-5" />}
            title="App Support"
            description="In-app help and troubleshooting"
            action="Open in App Store"
            href="https://apps.apple.com"
          />
          <ContactCard
            icon={<Lightbulb className="w-5 h-5" />}
            title="Feature Request"
            description="Tell us what you'd like to see"
            action="Send request"
            href="mailto:hello@cavok.app?subject=Feature%20Request"
          />
          <ContactCard
            icon={<Bug className="w-5 h-5" />}
            title="Report a Bug"
            description="Help us squash issues"
            action="Report bug"
            href="mailto:hello@cavok.app?subject=Bug%20Report"
          />
        </div>
      </div>

      {/* Reuse FAQ section */}
      <FAQ />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="glass-card glass-card-hover rounded-2xl p-6 block transition-all duration-200 hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aviation-blue to-aviation-blue-light flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h2 className="font-heading font-semibold text-white text-lg">{title}</h2>
      <p className="text-text-secondary text-sm mt-1">{description}</p>
      <span className="text-aviation-blue-light text-sm font-medium mt-3 inline-block">
        {action} &rarr;
      </span>
    </a>
  );
}
