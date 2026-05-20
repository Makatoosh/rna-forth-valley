import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />
      <section className="pp-section">
        <div className="container pp-content">

          <p className="pp-updated">Last updated: May 2026</p>

          <h2>1. Who We Are</h2>
          <p>
            Royal Naval Association – Forth Valley Branch ("we", "us", "our") is a voluntary branch of
            the Royal Naval Association, a registered charity. Our branch meets at RBLS Grangemouth,
            4 Dundas Street, Grangemouth, FK3 8BQ. You can contact us by phone on 07457 409200.
          </p>
          <p>
            The <strong>data controller</strong> for this website is the Branch Secretary of the
            Royal Naval Association Forth Valley Branch, contactable at the address and phone number
            above.
          </p>

          <h2>2. What Information We Collect</h2>
          <p>We collect personal information only when you voluntarily provide it to us, specifically:</p>
          <ul>
            <li><strong>Contact form submissions</strong> – your name, email address, phone number (optional), subject, and message when you use the "Get in Touch" form on our website.</li>
          </ul>
          <p>
            We do not use tracking cookies, analytics scripts, or advertising technologies on this website.
            The site is hosted on GitHub Pages; GitHub may collect standard server access logs (IP address,
            browser type, page requested) in accordance with{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
              GitHub's Privacy Statement
            </a>.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information you submit via our contact form solely to:</p>
          <ul>
            <li>Respond to your enquiry or request.</li>
            <li>Direct your message to the appropriate branch officer.</li>
          </ul>
          <p>We will never use your information for marketing or pass it to third parties for their own use.</p>

          <h2>4. How Your Data Is Processed</h2>
          <p>
            Our contact form is processed by <strong>Web3Forms</strong> (web3forms.com), a third-party
            form submission service. When you submit the form, your data is transmitted securely to
            Web3Forms and then forwarded to our branch email address. Web3Forms acts as a data processor
            on our behalf. You can review their privacy practices at{' '}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">
              web3forms.com/privacy
            </a>.
          </p>
          <p>
            Form data is not stored permanently by Web3Forms beyond the period needed to deliver the
            message.
          </p>

          <h2>5. Legal Basis for Processing</h2>
          <p>
            We process your data on the basis of <strong>legitimate interests</strong> — specifically,
            to respond to communications you have initiated — and your implied consent in submitting
            the form.
          </p>

          <h2>6. How Long We Keep Your Data</h2>
          <p>
            Enquiry emails are retained in our branch email account for as long as reasonably necessary
            to handle your enquiry and any follow-up, typically no longer than 12 months unless an
            ongoing membership or welfare relationship requires otherwise.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data ("right to be forgotten").</li>
            <li>Object to or restrict processing in certain circumstances.</li>
            <li>Lodge a complaint with the Information Commissioner's Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us by phone on <strong>07457 409200</strong>.
          </p>

          <h2>8. External Links</h2>
          <p>
            Our website contains links to external sites (e.g. the national RNA website, Facebook,
            Instagram). We are not responsible for the privacy practices of those sites and encourage
            you to read their privacy policies.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be published on this page
            with a revised "Last updated" date.
          </p>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
