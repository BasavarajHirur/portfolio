import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  public privacyPolicies = [
    {
      label: "1. Information We Collect",
      content: [
        "Personal data: name, email, phone, address, payment information via Razorpay, KYC documents as required",
        "Technical/usage data: IP address, browser type, device info, referrer URL, cookies",
        "Sensitive financial info when needed (e.g. card, bank details) as per IT Rules 2011 and DPDP Act 2023"
      ]
    },
    {
      label: "2. Purpose of Collection & Use",
      content: [
        "To process payments via Razorpay and provide the requested service",
        "To send transactional alerts, service updates, or newsletters if you opt in",
        "To improve website performance, detect fraud, and comply with legal requirements"
      ]
    },
    {
      label: "3. Disclosure of Information",
      content: [
        "We do not sell or rent personal data",
        "May share data with trusted third‑party processors (e.g. Razorpay, hosting, analytics) under confidentiality terms",
        "We may disclose data when legally required (e.g. under Criminal Procedure Code §91), or to prevent fraud"
      ]
    },
    {
      label: "4. Your Rights Under Indian Law",
      content: [
        "Under the Digital Personal Data Protection Act, 2023, you may access, correct, or request deletion of your personal data (unless legal retention applies)",
        "You may withdraw consent for processing at any time",
        "You may file a grievance with our designated officer or Data Protection Board"
      ]
    },
    {
      label: "5. Security Measures",
      content: [
        "We implement reasonable security practices (e.g. encryption, restricted access, secure storage) as mandated under IT Rules and DPDP Act",
        "While we strive for robust protection, we cannot guarantee absolute security of internet-based data transmissions"
      ]
    },
    {
      label: "6. Cookies & Tracking",
      content: [
        "We use cookies or similar technologies for session management, analytics, and site improvement",
        "You may disable cookies in browser settings, though it may impact functionality"
      ]
    },
    {
      label: "7. Data Retention",
      content: [
        "We retain personal data only for as long as necessary to fulfill services, legal or accounting obligations (typically 3–7 years for transaction records)",
        "Unused or outdated data may be deleted or anonymized securely"
      ]
    },
    {
      label: "9. Payment & Razorpay Processing",
      content: [
        "Payments are processed via Razorpay and your card/bank details are not stored by us",
        "Transaction data is used only to complete the purchase or service delivery"
      ]
    },
    {
      label: "10. Changes to this Policy",
      content: [
        "We may update this policy over time. Updates will include a revised effective date",
        "Continuing to use the site after changes means you accept the updated policy"
      ]
    },
    {
      label: "11. Contact & Grievance Officer",
      content: [
        "If you want to request access, correction, or deletion of your personal data—or to file a grievance—please contact us at bassu.h789@gmail.com",
        "You may also approach Razorpay’s grievance channels as per their published privacy notice"
      ]
    }
  ];

}
