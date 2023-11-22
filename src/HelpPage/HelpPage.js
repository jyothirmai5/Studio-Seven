import React, { useState } from 'react';
import Layout from "../Layout/Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function HelpPage() {
  return (
    <Layout>
      <div className="row">
        <header>
          <h1>Help Center</h1>
        </header>

        <main>
          <section>
            <h2>Frequently Asked Questions</h2>
            <p>
              <strong>Q: How do I reset my password?</strong>
            </p>
            <p>
              A: To reset your password, go to the login page and click on the
              "Forgot Password" link. Follow the instructions sent to your email
              to reset your password.
            </p>

            <p>
              <strong>Q: Can I change my email address?</strong>
            </p>
            <p>
              A: Yes, you can change your email address in the account settings.
              Go to the "Profile" section and update your email address.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any further questions or issues, feel free to contact
              our support team:
            </p>
            <p>Email: support@example.com</p>
            <p>Phone: 123-456-7890</p>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default HelpPage;
