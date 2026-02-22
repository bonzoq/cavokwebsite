import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CAVOK",
  description: "CAVOK terms of service. Usage terms, subscription terms, and more.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-text-tertiary text-sm mb-12">
          Last updated: February 2026
        </p>

        <div className="space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using CAVOK (&quot;the App&quot;), you agree to
              be bound by these Terms of Service. If you do not agree, do not use
              the App.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              CAVOK is a digital pilot logbook application for iOS that allows
              pilots to log flights, track currency, manage aircraft, and export
              logbook data. The App is designed as a supplementary tool and should
              not be used as the sole record of flight time where regulatory
              requirements mandate physical logbooks.
            </p>
          </Section>

          <Section title="3. User Accounts">
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials. You agree to provide accurate information and to
              update it as necessary. You are responsible for all activity that
              occurs under your account.
            </p>
          </Section>

          <Section title="4. Subscriptions & Payments">
            <ul>
              <li>
                CAVOK offers a free tier and a paid Pro subscription.
              </li>
              <li>
                Subscriptions are billed through Apple&apos;s App Store and are subject
                to Apple&apos;s terms and conditions.
              </li>
              <li>
                Pro subscriptions auto-renew unless cancelled at least 24 hours
                before the end of the current billing period.
              </li>
              <li>
                You can manage or cancel your subscription in your Apple ID
                settings at any time.
              </li>
              <li>
                Refunds are handled by Apple according to their refund policy.
              </li>
            </ul>
          </Section>

          <Section title="5. User Content & Data">
            <p>
              You retain full ownership of all data you enter into CAVOK, including
              flight entries, documents, and personal information. We do not claim
              any intellectual property rights over your content.
            </p>
            <p className="mt-4">
              You can export your data at any time via CSV or PDF export. You can
              delete your account and all associated data from within the App.
            </p>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse-engineer or decompile the App</li>
              <li>Interfere with or disrupt the service</li>
              <li>Create false or misleading flight records for regulatory purposes</li>
              <li>Share your account credentials with others</li>
            </ul>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              CAVOK is provided &quot;as is&quot; without warranties of any kind. While we
              strive for accuracy, we do not guarantee that currency calculations,
              time computations, or regulatory compliance features are error-free.
              Pilots are ultimately responsible for verifying their own currency
              and flight records.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, CAVOK and its developers
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of data, loss of
              profits, or any damages arising from your use of the App.
            </p>
          </Section>

          <Section title="9. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of material changes through the App or via email.
              Continued use of the App after changes constitutes acceptance of the
              new Terms.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the jurisdiction in which CAVOK operates, without regard to
              conflict of law principles.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For questions about these Terms, contact us at{" "}
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
