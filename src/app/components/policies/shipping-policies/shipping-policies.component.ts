import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-policies',
  templateUrl: './shipping-policies.component.html',
  styleUrls: ['./shipping-policies.component.scss']
})
export class ShippingPoliciesComponent {
  public deliveryPolicy = [
    {
      label: "Delivery of Digital Products",
      content: [
        "Downloadable digital products are made available immediately after successful payment confirmation.",
        "Customers receive a download link via email and (if applicable) their account dashboard.",
        "If payment processing is delayed, access is provided once the order is manually marked as paid."
      ]
    },
    {
      label: "Download Availability & Limitations",
      content: [
        "Download links remain active for 3 Months or unlimited download attempts—whichever occurs first.",
        "After expiration, access may be reissued at the Owner’s discretion.",
        "The Owner reserves the right to revoke download access if the Terms are violated (e.g. sharing or unauthorized redistribution)."
      ]
    },
    {
      label: "File Format & Compatibility",
      content: [
        "Digital products are provided in the following formats: [e.g. PDF, MP4, PNG].",
        "Customers are responsible for using compatible software or devices (e.g. Adobe Reader for PDFs).",
        "No guarantee of future compatibility is provided."
      ]
    },
    {
      label: "Refunds for Digital Products",
      content: [
        "Due to the nature of digital goods, refunds are not permitted once a download link has been accessed or issued—unless explicitly stated otherwise.",
        "If access issues occur, customer support may assist in resolving download errors rather than issuing a refund."
      ]
    }
  ];

}
