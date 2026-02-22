import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CAVOK",
  description: "CAVOK privacy policy. Learn how we handle and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-tertiary text-sm mb-12">
          Last updated: February 2026
        </p>

        <div className="prose-invert space-y-8">
          <Section title="1. Introduction">
            <p>
              CAVOK (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and website.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information that you provide directly to us:</p>
            <ul>
              <li>Account information (email address, name)</li>
              <li>Flight logbook data (flight entries, aircraft, airports, times)</li>
              <li>Documents you upload (licenses, certificates, photos)</li>
              <li>Subscription and payment information (processed by Apple)</li>
            </ul>
            <p className="mt-4">We automatically collect:</p>
            <ul>
              <li>Device information (device type, operating system version)</li>
              <li>App usage analytics (anonymized, via privacy-friendly analytics)</li>
              <li>Crash reports (to improve app stability)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul>
              <li>To provide and maintain the CAVOK service</li>
              <li>To sync your logbook data across devices</li>
              <li>To generate statistics and currency tracking</li>
              <li>To process PDF exports and data imports</li>
              <li>To send important service notifications</li>
              <li>To improve our app and fix bugs</li>
            </ul>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>
              Your data is stored securely on Google Cloud Platform (Firebase) with
              encryption at rest and in transit (TLS 1.3). We implement
              industry-standard security measures to protect your personal
              information.
            </p>
            <p className="mt-4">
              Your flight logbook data is stored in your personal Firebase account
              and is only accessible by you. We do not access, read, or analyze
              your individual flight data.
            </p>
          </Section>

          <Section title="5. Data Sharing">
            <p>
              We do not sell, trade, or rent your personal information. We may share
              data only in these circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>With service providers who assist in operating our app (Firebase, analytics) under strict data processing agreements</li>
            </ul>
          </Section>

          <Section title="6. Your Rights (GDPR)">
            <p>If you are in the European Economic Area, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data (CSV and PDF export built into the app)</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your data for as long as your account is active. You can
              delete your account and all associated data at any time from within
              the app. Upon account deletion, all data is permanently removed
              within 30 days.
            </p>
          </Section>

          <Section title="8. Children&apos;s Privacy">
            <p>
              CAVOK is not intended for children under 13. We do not knowingly
              collect personal information from children under 13.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new policy on this page and
              updating the &quot;Last updated&quot; date.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:hello@cavok.app"
                className="text-aviation-blue-light hover:underline"
              >
                hello@cavok.app
              </a>
              .
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="text-text-secondary leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:text-text-secondary">
        {children}
      </div>
    </section>
  );
}
