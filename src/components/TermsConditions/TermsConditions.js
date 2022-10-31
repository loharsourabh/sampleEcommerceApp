import styles from './TermsConditions.module.css';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function TermsConditions() {
  const [isCanceled, setIsCanceled] = useState(false);
  const [accepted, setAccepted] = useLocalStorage('t&cAccepted', false);

  return (!isCanceled && !accepted) && (
    <div className={styles.termsConditions}>
      <div className={styles.message}>
        <div className={styles.messageText}>
          <h2>TermsConditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id leo eu quam cursus fringilla cursus ut mauris. Phasellus turpis felis, fringilla in laoreet eu, consectetur vitae tellus. Phasellus sodales nulla et enim interdum, ac aliquet ipsum suscipit. Suspendisse tristique est felis. In vel quam at lacus malesuada tempor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id leo eu quam cursus fringilla cursus ut mauris. Phasellus turpis felis, fringilla in laoreet eu, consectetur vitae tellus. Phasellus sodales nulla et enim interdum, ac aliquet ipsum suscipit. Suspendisse tristique est felis. In vel quam at lacus malesuada tempor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id leo eu quam cursus fringilla cursus ut mauris. Phasellus turpis felis, fringilla in laoreet eu, consectetur vitae tellus. Phasellus sodales nulla et enim interdum, ac aliquet ipsum suscipit. Suspendisse tristique est felis. In vel quam at lacus malesuada tempor.</p>
        </div>
        <div className={styles.messageButtons}>
          <button
            className={styles.messageButton}
            onClick={() => setIsCanceled(true)}
          >
            Cancel
          </button>
          <button
            className={styles.messageButton}
            onClick={() => setAccepted(true)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}