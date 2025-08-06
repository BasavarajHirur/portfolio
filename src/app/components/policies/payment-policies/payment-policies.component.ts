import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-policies',
  templateUrl: './payment-policies.component.html',
  styleUrls: ['./payment-policies.component.scss']
})
export class PaymentPoliciesComponent {
  public cancellationRefundPolicy = [
    {
      label: "Cancellation Eligibility",
      content: [
        "Clients may cancel a service request up to 48 hours before the scheduled start without penalty",
        "Cancellations within 48 hours of delivery or project start may be subject to fees or non‑refund, based on stage of work"
      ]
    },
    {
      label: "Refund Types Offered",
      content: [
        "Full refunds for cancellations made ≥ 48 hours before service or project commencement",
        "Partial refunds (pro‑rated) if work has begun but not completed",
        "No refund if milestone has been completed or deliverables submitted"
      ]
    },
    {
      label: "Refund Method & Timeline",
      content: [
        "All refunds are issued via Razorpay to the original payment method used by the customer",
        "Refund processing typically takes 5–10 business days depending on banking partner timelines",
        "Razorpay chargeback protection requires refunds return to original source (card, UPI, bank) only"
      ]
    },
    {
      label: "Fees & Deductions",
      content: [
        "No processing fee for standard refunds; however Razorpay transaction fees charged at payment capture are non‑refundable to the merchant",
        "Instant refunds (if you choose via Razorpay) may incur a small fee charged by Razorpay",
        "Any cancellation fees or deductions (e.g., work done, admin charges) will be explicitly communicated before confirming refund"
      ]
    },
    {
      label: "Change Request vs Cancellation",
      content: [
        "Minor changes (e.g., date or scope adjustments) within 48 hours may be accommodated without refund",
        "Major changes after service start or delivery may require partial cancellation or refund policy application"
      ]
    },
    {
      label: "Non‑Refundable Situations",
      content: [
        "No refunds for services fully delivered or completed (e.g. final drafts, designs, consulting sessions delivered)",
        "No refund for digital goods or downloads once accessed or shared",
        "No refund for custom work once client has approved deliverable drafts"
      ]
    },
    {
      label: "Refund Request Process",
      content: [
        "Submit cancellation or refund request via email to bassu.h789@gmail.com with order or invoice number",
        "Requests must include reason for cancellation and request date",
        "Refund will be processed within 2 business days of request acceptance and credit issued per timeline above"
      ]
    },
    {
      label: "Dispute Resolution",
      content: [
        "If you're unsatisfied with refund processing, contact us first to resolve",
        "If unresolved after 7 days, you may escalate via Razorpay’s grievance channel or bank chargeback process",
        "Ensure you provide full details to assist in fair resolution"
      ]
    },
    {
      label: "Policy Changes",
      content: [
        "This policy is effective from 1/07/2025. Any updates will be posted with a new effective date",
        "By using the service after updates, you agree to the revised terms"
      ]
    }
  ];
}
