import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {

  public termsConditions = [
    {
      label: "1. Acceptance of Terms",
      content: [
        "By accessing or using this Website and its services—including payments via Razorpay—you agree to be bound by these Terms and our Privacy Policy.",
        "If you disagree with any part of these Terms, please discontinue use immediately."
      ]
    },
    {
      label: "2. Services",
      content: [
        "This Website showcases my portfolio and may offer paid services such as design, coaching, or digital products.",
        "All payments are processed via Razorpay; you are responsible for transactions initiated through the Website."
      ]
    },
    {
      label: "3. User Obligations",
      content: [
        "You must not misuse or interfere with the Website’s operation.",
        "Posting spam, profanity, or infringing content is prohibited.",
        "All intellectual property rights remain with the Owner; unauthorized use, copying, or redistribution is forbidden."
      ]
    },
    {
      label: "4. Intellectual Property",
      content: [
        "Content on the Website—including designs, text, images, and code—is owned or licensed by the Owner.",
        "You may view or download content only for personal, non-commercial use and must preserve copyright notices."
      ]
    },
    {
      label: "5. Disclaimer & Limitation of Liability",
      content: [
        "Content is provided “as is”—no guarantee of accuracy or suitability for professional purposes.",
        "Owner is not liable for any direct or indirect damages arising from use of the Website or services."
      ]
    },
    {
      label: "6. Refunds & Cancellations",
      content: [
        "Refunds or cancellations of paid services are handled case‑by‑case and may be issued via Razorpay if permitted by policy.",
        "Razorpay transaction fees are non‑refundable unless stated otherwise."
      ]
    }]

}
