export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: February 4, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the PNRV Infra website (www.pnrvinfra.com), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Transmit any viruses, malware, or harmful code</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                PNRV Infra provides infrastructure development and construction services. All quotes, estimates, and project timelines provided are subject to detailed assessment and formal agreement. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of PNRV Infra and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting any content through our contact forms or other communication channels, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content for business purposes related to providing our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Quotes and Estimates</h2>
              <p className="text-muted-foreground leading-relaxed">
                All quotes and estimates provided are valid for 30 days from the date of issuance and are subject to site inspection and detailed project assessment. Final pricing may vary based on actual project requirements, material costs, and site conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, PNRV Infra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless PNRV Infra, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our website or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the website after changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>PNRV Infra</p>
                <p>Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
                <p>Email: info@pnrvinfra.com</p>
                <p>Phone: +91 522 4567890</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
