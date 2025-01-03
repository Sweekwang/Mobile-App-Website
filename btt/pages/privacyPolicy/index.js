import { Fragment } from "react";
import Image from "next/image";
import styles from '../../styles/privacyPolicy.module.css';

const PrivatePolicy = () => (
  <Fragment>
    <nav className={styles.navbar}>
      <Image
        src="/1024.png"
        alt="Singapore Basic Theory Test BTT App"
        width="45"
        height="45"
        className={styles.logo}
      />
      <p className={styles.navTitle}>BTT, FTT, RTT - Theory Test SG</p>
      <div></div>
    </nav>

    <header className={styles.content}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Chua Swee Kwang</strong> and <strong>Chua Swee Liang</strong> built the 
        <strong> BTT, FTT, RTT - Theory Test SG</strong> app (referred to as the “Service”) as a Free app. 
        This Service is provided at no cost and is intended for use as-is.
      </p>
      <p>
        This page informs visitors of our policies regarding the collection, use, 
        and disclosure of personal information if anyone decides to use our Service.
      </p>
      <p>
        By choosing to use this Service, you agree to the collection and use of 
        information as described in this policy. We use personal information only for 
        providing and improving the Service. We will not use or share your information 
        with anyone except as described in this Privacy Policy.
      </p>
      <p>
        Unless otherwise defined, terms used in this Privacy Policy have the same 
        meanings as in our Terms and Conditions.
      </p>
      <br />

      <h2>Information Collection and Use</h2>
      <p>
        We only collect personal data when you use the “Report an Issue” feature. 
        Specifically, we collect your email address for the sole purpose of:
      </p>
      <ul className={styles.bullet}>
        <li>Contacting you regarding the issue you have reported.</li>
        <li>Providing updates on or resolving the reported issue.</li>
      </ul>
      <p>
        <strong>Once the reported issue is resolved, your email address is permanently 
        deleted from our records.</strong> We do not use your email for marketing 
        or share it with third parties.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The app uses third-party services that may collect certain information used 
        to identify you (for example, analytics or error reporting). Below is a link 
        to the privacy policy of one such third-party service:
      </p>
      <ul className={styles.bullet}>
        <li>
          <a 
            href="https://www.google.com/policies/privacy/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Google Play Services
          </a>
        </li>
      </ul>

      <h2>Log Data</h2>
      <p>
        Whenever you use the Service, in the event of an error, we (or third-party 
        services) may collect data and information from your device called “Log Data.” 
        This may include your device&apos;s IP address, device name, operating system 
        version, the configuration of the app when utilizing our Service, the time 
        and date of your use, and other statistics.
      </p>

      <h2>Cookies</h2>
      <p>
        Cookies are files with a small amount of data that are commonly used as 
        anonymous unique identifiers. These are sent to your browser from the websites 
        you visit and stored on your device&apos;s internal memory.
      </p>
      <p>
        Our Service does not use cookies explicitly. However, it may include code or 
        libraries from third parties that use cookies to collect information and 
        improve their services. You have the option to accept or refuse these cookies 
        and to know when a cookie is being sent to your device. If you choose to 
        refuse cookies, some portions of the Service may not function properly.
      </p>

      <h2>Service Providers</h2>
      <p>
        We may employ third-party companies and individuals for the following reasons:
      </p>
      <ul className={styles.bullet}>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
        These third parties may have access to your personal information in order 
        to perform tasks on our behalf. However, they are obligated not to disclose 
        or use the information for any other purpose.
      </p>

      <h2>Security</h2>
      <p>
        We value your trust in providing us with your email when reporting an issue. 
        We take commercially acceptable means to protect it. However, remember that 
        no method of transmission over the internet or method of electronic storage 
        is 100% secure. While we strive to use acceptable means to protect your data, 
        we cannot guarantee its absolute security.
      </p>

      <h2>Links to Other Sites</h2>
      <p>
        Our Service may contain links to external websites. If you click on a 
        third-party link, you will be directed to that site. These external sites 
        are not operated by us, and we strongly advise you to review their privacy 
        policies. We have no control over and assume no responsibility for the 
        content, privacy policies, or practices of any third-party sites or services.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 13. We do not knowingly 
        collect personally identifiable information from children under 13. If you are 
        a parent or guardian and you are aware that your child has provided us with 
        personal information, please contact us so that we can take the necessary 
        steps to remove that information from our servers.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. You are advised to review 
        this page periodically for any changes. We will notify you of any changes by 
        posting the new Privacy Policy on this page.
      </p>

      <p>This policy is effective as of 2022-05-03</p>

      <h2 id='contact-us'>Contact Us</h2>
      <p>
        If you have any questions or suggestions about this Privacy Policy, do not 
        hesitate to contact us at <strong>SWEEKWANG94@GMAIL.COM</strong>.
      </p>
      <p>
        This privacy policy page was created at 
        <a 
          href="https://privacypolicytemplate.net" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          privacypolicytemplate.net
        </a> 
        and modified/generated by 
        <a 
          href="https://app-privacy-policy-generator.nisrulz.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          App Privacy Policy Generator
        </a>.
      </p>
    </header>
  </Fragment>
);

export default PrivatePolicy;
