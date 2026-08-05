import { createFileRoute } from "@tanstack/react-router";
import { Animate } from "@/components/Animate";

export const Route = createFileRoute("/$lang/terms-and-privacy")({
  head: () => {
    const pagePath = "/terms-and-privacy";
    return {
      meta: [
        { title: "Terms & Conditions · Privacy Policy — Kafe con Propósito" },
        {
          name: "description",
          content:
            "Terms & Conditions and Privacy Policy for Kafe con Propósito gatherings, memberships, events, and kafeconproposito.com.",
        },
      ],
      links: [
        { rel: "alternate", hreflang: "en", href: `/en${pagePath}` },
        { rel: "alternate", hreflang: "x-default", href: `/en${pagePath}` },
      ],
    };
  },
  component: TermsAndPrivacy,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-3xl text-burgundy mt-14 mb-4 pb-2 border-b border-terracotta/30">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-foreground mt-6 mb-2">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-foreground/75 leading-relaxed mb-4">{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-foreground/75 leading-relaxed mb-4">{children}</ul>;
}

function InfoTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-terracotta/20 rounded-xl overflow-hidden">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-terracotta/10 last:border-b-0">
              <td className="bg-cream font-semibold text-burgundy px-4 py-3 w-1/3 align-top">{label}</td>
              <td className="px-4 py-3 text-foreground/75 align-top">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DataTable({ header, rows }: { header: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-terracotta/20 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-burgundy text-primary-foreground">
            {header.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-terracotta/10 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-foreground/75 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TermsAndPrivacy() {
  return (
    <div>
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Animate>
            <p className="text-xs tracking-[0.25em] text-terracotta">LEGAL</p>
          </Animate>
          <Animate delay={100}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl bg-gradient-to-r from-burgundy to-terracotta bg-clip-text text-transparent">
              Terms & Conditions · Privacy Policy
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-sm text-muted-foreground">Effective Date: August 5, 2026 · Last Updated: August 2026</p>
          </Animate>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center mb-2">PART 1 — Terms & Conditions</h2>
          </Animate>

          <H2>1. Who We Are</H2>
          <P>
            These Terms & Conditions govern your use of the website kafeconproposito.com/en and your participation in any Kafe con
            Propósito gathering, membership, event, or programme. Kafe con Propósito is operated by Tamara Medina, trading as
            Sapovalova Solutions (Business ID / IČO: 09523065), registered in the Czech Republic.
          </P>
          <InfoTable
            rows={[
              ["Business Name", "Kafe con Propósito (a project of Sapovalova Solutions)"],
              ["Operator", "Tamara Medina"],
              ["IČO", "09523065"],
              ["Registered Address", "Palackeho 69, Poděbrady III, 290 01, Czech Republic"],
              ["Email", "tamara@sapovalovasolutions.com"],
              ["Website", "kafeconproposito.com/en"],
            ]}
          />

          <H2>2. Services Covered</H2>
          <P>These Terms apply to all services and offerings under Kafe con Propósito, including but not limited to:</P>
          <Ul>
            <li><strong className="text-foreground">Kafe con Propósito Gatherings</strong> — women's community gatherings held in Central Bohemia, including all membership tiers (Espresso Shot, Brew Community, The Roastery).</li>
            <li><strong className="text-foreground">One Cup, One Story (Una Taza, Una Historia)</strong> — a storytelling series embedded within Kafe con Propósito gatherings, and its associated filming, clips, and digital content.</li>
            <li><strong className="text-foreground">Premium Events & Guest Speaker Workshops</strong> — expert-led workshops available to members and non-members.</li>
            <li><strong className="text-foreground">Sponsorship & Partnership Arrangements</strong> — commercial partnerships with local and regional brands.</li>
            <li><strong className="text-foreground">Digital content, blog, and associated materials</strong> — published on kafeconproposito.com.</li>
          </Ul>

          <H2>3. Acceptance of Terms</H2>
          <P>
            By accessing this website, registering for a gathering or event, or purchasing a membership, you confirm that you have
            read, understood, and agree to these Terms. If you do not agree, please do not use our services.
          </P>

          <H2>4. Registration & Payment</H2>
          <H3>4.1 Events & Workshops</H3>
          <P>
            Registration is confirmed upon receipt of payment. Places are limited and allocated on a first-come, first-served basis.
            Your registration constitutes a binding agreement to the specific event's terms, which will be communicated at point of
            sale.
          </P>
          <H3>4.2 Kafe con Propósito Memberships</H3>
          <P>
            Memberships are offered on a monthly rolling basis unless otherwise stated. The three tiers — Espresso Shot (450
            CZK/session), Brew Community (850 CZK/month), and The Roastery (1,950 CZK/month) — are outlined on the Memberships page.
            Monthly memberships begin on the date of purchase. Membership benefits are non-transferable.
          </P>
          <H3>4.3 Payment</H3>
          <P>
            Prices are displayed on the website and are inclusive of any applicable taxes. Accepted payment methods are communicated
            at checkout. We reserve the right to update pricing with 30 days' notice to existing members.
          </P>

          <H2>5. Cancellations & Refunds</H2>
          <H3>5.1 Events & Workshops</H3>
          <Ul>
            <li>Cancellations 14+ days before the event start date: full refund minus a 10% administrative fee.</li>
            <li>Cancellations 7–13 days before: 50% refund or full credit toward a future event.</li>
            <li>Cancellations less than 7 days before: no refund. A transfer of place to another person may be possible upon written request.</li>
            <li>If Kafe con Propósito cancels an event, a full refund will be issued within 14 business days.</li>
          </Ul>
          <H3>5.2 Kafe con Propósito Memberships</H3>
          <Ul>
            <li>Monthly memberships may be cancelled at any time with effect from the end of the current billing period. No pro-rata refunds are issued for partial months.</li>
            <li>Espresso Shot (pay-as-you-go) session fees are non-refundable once a spot has been reserved.</li>
          </Ul>

          <H2>6. Filming, Photography & Content</H2>
          <P>
            Kafe con Propósito gatherings and Una Taza, Una Historia events may be filmed and photographed for use in social media,
            website content, and promotional materials.
          </P>
          <Ul>
            <li>By attending a gathering, you acknowledge that photography and filming may take place.</li>
            <li>If you do not wish to appear in any content, please notify Tamara in writing before the event.</li>
            <li>Featured women in One Cup, One Story will be informed in advance of filming and will receive a short clip for their own use. Clips will be published on Instagram, Facebook, LinkedIn, and kafeconproposito.com.</li>
            <li>Kafe con Propósito retains all intellectual property rights in content produced, including clips, photographs, and blog posts.</li>
          </Ul>

          <H2>7. Confidentiality</H2>
          <P>
            Kafe con Propósito treats all participant information as strictly confidential. We will not share your personal
            information with third parties without your written consent, except where required by law.
          </P>
          <P>
            You agree to maintain confidentiality in relation to other participants at workshops and Kafe con Propósito gatherings.
            What is shared in the room stays in the room.
          </P>

          <H2>8. Intellectual Property</H2>
          <P>
            All content on kafeconproposito.com — including text, graphics, session materials, and the Una Taza, Una Historia
            format — is the intellectual property of Kafe con Propósito / Sapovalova Solutions. You may not reproduce, distribute, or
            use any content without prior written permission.
          </P>

          <H2>9. Limitation of Liability</H2>
          <P>
            Kafe con Propósito provides community gatherings and events for educational and developmental purposes. Results are not
            guaranteed. Tamara Medina is not a licensed therapist, psychologist, financial advisor, or legal professional. Nothing
            shared at gatherings or events constitutes professional financial, legal, or medical advice.
          </P>
          <P>
            To the maximum extent permitted by applicable law, our total liability shall not exceed the fees paid by you for the
            specific service giving rise to the claim.
          </P>

          <H2>10. Governing Law</H2>
          <P>
            These Terms are governed by the laws of the Czech Republic. Any disputes shall be subject to the exclusive jurisdiction
            of the Czech courts. You also have the right to contact the Czech Trade Inspection Authority (Česká obchodní inspekce)
            for out-of-court dispute resolution.
          </P>

          <H2>11. Changes to These Terms</H2>
          <P>
            Kafe con Propósito may update these Terms to reflect changes in services, pricing, or legal requirements. Significant
            changes will be communicated via email or a notice on the website. Continued use of our services after notification
            constitutes acceptance.
          </P>

          <Animate>
            <h2 className="font-display text-4xl text-burgundy text-center mt-20 mb-2">PART 2 — Privacy Policy</h2>
            <p className="text-center text-sm text-muted-foreground mb-8">Last Updated: August 2026 · Effective Date: August 5, 2026</p>
          </Animate>

          <H2>1. Data Controller</H2>
          <P>Your personal data is processed by:</P>
          <InfoTable
            rows={[
              ["Controller", "Tamara Medina / Kafe con Propósito (Sapovalova Solutions)"],
              ["IČO", "09523065"],
              ["Address", "Palackeho 69, Poděbrady III, 290 01, Czech Republic"],
              ["Email", "tamara@sapovalovasolutions.com"],
            ]}
          />
          <P>
            Processing is carried out in accordance with the General Data Protection Regulation (GDPR) and Czech Act No. 110/2019
            Coll. on Personal Data Processing.
          </P>

          <H2>2. What Data We Collect</H2>
          <H3>2.1 Data You Provide Directly</H3>
          <Ul>
            <li>Name and surname</li>
            <li>Email address and phone number</li>
            <li>Company name and role (where applicable, e.g. sponsors and partners)</li>
            <li>Billing and payment details</li>
            <li>Information shared during gatherings, workshops, or events</li>
            <li>Registration details for events or memberships</li>
            <li>Messages and communications sent via contact forms, email, or social media</li>
            <li>Testimonials, feedback, and survey responses (with your consent)</li>
          </Ul>
          <H3>2.2 Data Collected Automatically</H3>
          <Ul>
            <li>IP address and browser type when visiting the website</li>
            <li>Cookie and session data</li>
            <li>Website usage information (pages visited, time on site, referral source)</li>
            <li>Website analytics data</li>
          </Ul>
          <H3>2.3 Data from Third Parties</H3>
          <Ul>
            <li>Social media profile information when you interact with our pages on Instagram, Facebook, or LinkedIn</li>
            <li>Event registration data processed via our event registration provider</li>
          </Ul>

          <H2>3. Why We Process Your Data</H2>
          <DataTable
            header={["Purpose", "Legal Basis (GDPR)", "Examples"]}
            rows={[
              ["Managing event & membership registrations", "Contract performance (Art. 6(1)(b))", "Kafe gatherings, Premium Events, Guest Speaker Workshops"],
              ["Processing payments", "Contract performance (Art. 6(1)(b))", "Issuing invoices, processing fees"],
              ["Legal & accounting compliance", "Legal obligation (Art. 6(1)(c))", "Tax records, financial reporting"],
              ["Community management", "Legitimate interest (Art. 6(1)(f))", "Facebook group, WhatsApp, event follow-ups"],
              ["Website improvement & security", "Legitimate interest (Art. 6(1)(f))", "Analytics, preventing fraud"],
              ["Marketing & newsletters", "Consent (Art. 6(1)(a))", "Email campaigns, event announcements"],
              ["Testimonials & case studies", "Consent (Art. 6(1)(a))", "Website, social media, sponsor materials"],
              ["Filming & photography at events", "Consent (Art. 6(1)(a))", "Una Taza, Una Historia clips, gathering recaps"],
            ]}
          />

          <H2>4. How Long We Keep Your Data</H2>
          <InfoTable
            rows={[
              ["Event & membership registration data", "3 years after last interaction"],
              ["Financial & invoicing records", "10 years (Czech legal requirement)"],
              ["Marketing communications", "Until you withdraw consent"],
              ["Website analytics", "26 months"],
              ["Filming & photography content", "Until you request removal (see Section 9)"],
            ]}
          />

          <H2>5. Who We Share Your Data With</H2>
          <P>We do not sell your data. We may share data with the following service providers, all of whom are bound by data processing agreements:</P>
          <Ul>
            <li>Our website hosting and content management provider</li>
            <li>Accounting and bookkeeping service providers</li>
            <li>Email service providers</li>
            <li>Professional advisors (legal, compliance) where necessary</li>
            <li>Government or regulatory authorities, only when legally required</li>
            <li>Photography and videography partners (e.g. event photographers) — limited to images/footage relating to you</li>
          </Ul>
          <P>
            Data may be stored on servers outside the EU/EEA. Where this occurs, we ensure appropriate safeguards are in place,
            including EU Standard Contractual Clauses.
          </P>

          <H2>6. Your Rights Under GDPR</H2>
          <P>You have the following rights regarding your personal data:</P>
          <Ul>
            <li><strong className="text-foreground">Access</strong> — request a copy of the data we hold about you</li>
            <li><strong className="text-foreground">Rectification</strong> — ask us to correct inaccurate or incomplete data</li>
            <li><strong className="text-foreground">Erasure</strong> — request deletion of your data ("right to be forgotten"), including removal from filmed content where technically feasible</li>
            <li><strong className="text-foreground">Restriction</strong> — request that we limit how we use your data</li>
            <li><strong className="text-foreground">Portability</strong> — receive your data in a structured, machine-readable format</li>
            <li><strong className="text-foreground">Objection</strong> — object to processing based on legitimate interest, including direct marketing</li>
            <li><strong className="text-foreground">Withdraw consent</strong> — at any time, where processing is based on consent, without affecting prior processing</li>
          </Ul>
          <P>To exercise any of these rights, email tamara@sapovalovasolutions.com. We will respond within 30 days.</P>

          <H2>7. Cookie Policy</H2>
          <H3>7.1 Essential Cookies</H3>
          <P>Required for the website to function. Cannot be disabled. Legal basis: legitimate interest.</P>
          <H3>7.2 Analytics Cookies</H3>
          <P>Used to understand how visitors use the website. Legal basis: your consent. You can disable these through the cookie consent banner or your browser settings.</P>
          <H3>7.3 Marketing Cookies</H3>
          <P>May be set by embedded social media content or third-party tools. Legal basis: your consent. Manageable via cookie preferences on the site.</P>

          <H2>8. Data Security</H2>
          <P>We take appropriate technical and organisational measures to protect your personal data, including:</P>
          <Ul>
            <li>Encrypted data transmission (HTTPS)</li>
            <li>Secure password management</li>
            <li>Access controls limiting data to authorised individuals</li>
            <li>Regular review of security practices</li>
            <li>Secure backups</li>
          </Ul>

          <H2>9. Filming & Photography at Events</H2>
          <P>
            Kafe con Propósito gatherings, Una Taza, Una Historia, and other Kafe con Propósito events may be filmed or photographed.
            This content may be used for promotional purposes including social media, the website, and sponsor materials.
          </P>
          <Ul>
            <li>You will be informed prior to any event where filming will take place.</li>
            <li>If you do not wish to be filmed or photographed, please inform us in writing before the event. We will make reasonable accommodations.</li>
            <li>Featured women in Una Taza, Una Historia will provide explicit consent before filming and will receive a copy of the clip for their own use.</li>
            <li>If you wish to be removed from previously published content, contact tamara@sapovalovasolutions.com and we will comply where technically possible.</li>
          </Ul>

          <H2>10. Complaints</H2>
          <P>If you believe your data has been processed unlawfully, you have the right to lodge a complaint with:</P>
          <InfoTable
            rows={[
              ["Direct contact", "tamara@sapovalovasolutions.com — we aim to respond within 2 business days"],
              ["Czech Data Protection Authority", "Office for Personal Data Protection (Úřad pro ochranu osobních údajů)"],
              ["Address", "Pplk. Sochora 27, 170 00 Prague 7, Czech Republic"],
              ["Email", "posta@uoou.cz"],
              ["Website", "uoou.cz"],
            ]}
          />

          <H2>11. Updates to This Policy</H2>
          <P>
            This Privacy Policy may be updated to reflect changes in our services, legal requirements, or data practices. Where
            changes are significant, we will notify you by email or via a notice on the website. Continued use of our services after
            notification constitutes acceptance of the updated policy.
          </P>

          <div className="mt-14 pt-8 border-t border-terracotta/30 text-center text-sm text-muted-foreground">
            <p>Tamara Medina · Kafe con Propósito · kafeconproposito.com/en · tamara@sapovalovasolutions.com</p>
            <p className="mt-1">IČO 09523065 · Palackeho 69, Poděbrady III, 290 01, Czech Republic</p>
          </div>
        </div>
      </section>
    </div>
  );
}
