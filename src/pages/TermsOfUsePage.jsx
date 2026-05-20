import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import './PrivacyPolicyPage.css';

const TermsOfUsePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms before using our website."
      />
      <section className="pp-section">
        <div className="container pp-content">

          <p className="pp-updated">Last updated: May 2026</p>

          <h2>1. About This Website</h2>
          <p>
            This website is operated by the Royal Naval Association – Forth Valley Branch ("we", "us",
            "our"), a voluntary branch of the Royal Naval Association, a registered charity. By
            accessing or using this website you agree to these terms. If you do not agree, please stop
            using the site.
          </p>

          <h2>2. Use of This Website</h2>
          <p>You may use this website for lawful purposes only. You must not:</p>
          <ul>
            <li>Use the site in any way that breaches applicable local, national, or international law.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
            <li>Attempt to gain unauthorised access to any part of the site or its related systems.</li>
            <li>Use the site in any way that could damage, disable, or impair its operation.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The content on this website — including text, images, logos, and graphics — is owned by
            or licensed to the Royal Naval Association Forth Valley Branch or the Royal Naval
            Association nationally. You may not reproduce, distribute, or use any content from this
            site without our prior written permission, except for personal, non-commercial use.
          </p>
          <p>
            The RNA crest and associated insignia are the property of the Royal Naval Association
            and are used here with permission.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We aim to keep the information on this site accurate and up to date, but we make no
            warranty — express or implied — as to its completeness or accuracy. Event details, meeting
            times, and contact information may change; always verify important details by contacting
            us directly.
          </p>

          <h2>5. External Links</h2>
          <p>
            This website contains links to third-party websites (such as the national RNA website,
            Facebook, and Instagram). These links are provided for your convenience. We have no
            control over the content of those sites and accept no responsibility for them or for any
            loss or damage that may arise from your use of them.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Royal Naval Association Forth Valley Branch
            shall not be liable for any loss or damage arising from your use of, or inability to use,
            this website or any content on it.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of Scotland. Any disputes arising in connection with
            these terms shall be subject to the exclusive jurisdiction of the Scottish courts.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Any changes will be published on this page
            with a revised "Last updated" date. Continued use of the website after changes are posted
            constitutes your acceptance of the updated terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have any questions about these terms, please contact us by phone on{' '}
            <strong>07457 409200</strong>.
          </p>

        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;
