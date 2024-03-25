import Link from "next/link";

export default function PrivacyPolicy() {
  const list = [
    "Collection of your Personal Information",
    "Use of your Personal Information",
    "Sharing of your Personal Information",
    "Tracking User Behavior",
    "Automatically Collected Information",
    "Use of Cookies",
    "Third-Party Links",
    "Security and Retention of Your Personal Information",
    "Your Choices",
    "Changes to this Notice",
    "Contact Information",
    "Additional Information for California Residents",
  ];

  const collectionList = [
    "Directly from you when you provide it to us, such as when you register for an account, sign up to receive communications from us, start a challenge or contact us by phone, email, or otherwise;",
    "Automatically through the use of cookies, server logs, and other similar technologies when you interact with the Site, promotional material, advertisements and emails; and",
    "From other sources, including, for example, our affiliates, business partners, service providers, online social media networks, and other third parties, or from publicly available sources. For example, if you submit a job application, or become an employee, we may conduct a background check.",
  ];

  const personalInfoCollectionList = [
    "Operate and deliver the products or services you have requested.",
    "We may also use your personally identifiable information to inform you of other products or services available from STB and its affiliates.",
    "To identify you when you visit our Sites or use our products or services.",
    "To improve our services and product offerings.",
    "To conduct analytics.",
    "To communicate with you, such as to respond to and/or follow-up on your requests, inquiries, issues, or feedback.",
    "To detect and protect against malicious, deceptive, fraudulent, or illegal activity, other policies, security incidents, and harm to the rights, property, or safety of our company and our users, employees, or others.",
    "To debug, identify and repair errors that impair existing intended functionality of our website and services.",
    "To comply with our legal or regulatory obligations, to establish or exercise our rights, and to defend against a legal claim.",
    "For internal administrative purposes, as well as to manage our relationships.",
    "For such other purposes as you may consent (from time to time).",
  ];

  const thirdPartyShareList = [
    "Affiliates and Acquisitions: We may share information with our corporate affiliates (e.g., parent company, sister companies, subsidiaries, joint ventures, or other companies under common control). If another company acquires, or plans to acquire, our company, business, or our assets, we will also share information with that company, including at the negotiation stage.",
    "Other Disclosures without Your Consent: We may disclose information in response to subpoenas, warrants, or court orders, or in connection with any legal process, or to comply with relevant laws. We may also share your information in order to establish or exercise our rights, to defend against a legal claim, to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, safety of person or Page 5 of 12 property, or a violation of our policies, or to comply with your request for the shipment of products to or the provision of services by a third-party intermediary.",
    "Public: Our website may provide the opportunity to post comments, or reviews, in a public forum. If you decide to submit information on these pages, that information may be publicly available.",
    "Service Providers: We may share your information with service providers. Among other things service providers may help us to administer our website, conduct surveys, provide technical support, process payments, and assist in the fulfillment of orders.",
    "Other trading platforms: We may share information with other trading platforms and/or related affiliates in order to detect and protect against malicious, deceptive, fraudulent, or illegal activity.",
    "Other Disclosures with Your Consent: We may disclose your information to other third parties when we have your consent or direction to do so.",
  ];

  const choicesList = [
    "Access to Your Personal Information: You may request access to your personal information or confirmation that we have information about you. In certain limited circumstances, you may also request to receive access to your data in a portable, machine-readable format.",
    "Changes to Your Personal Information: We rely on you to update and correct your personal information. Most of our websites allow you to modify or delete your account profile. If our website does not permit you to update or correct certain information, you can contact us at the address described below to request that your information be modified. You may ask us to correct information that is inaccurate or incomplete. Note that we may keep historical information in our backup files as permitted by law.",
    "Deletion of Your Personal Information: You may request that we delete your personal information. If required by law, we will grant a request to delete information, but you should note that in many situations we must keep your personal information to comply with our legal obligations, resolve disputes, enforce our agreements, or for other business purposes.",
    "Opt-out of Selling or Sharing for Targeted Advertising: You may opt-out of online tracking based targeted advertising (e.g., cookies) by clicking the “Reject” button in the “We value your privacy” window. Please note that if you change browsers or computers, or if you clear your browser&apos;s cache, you may need to click the link again to apply your preference. You can also reject cookies on our cookie banner. Please note that not all sharing or disclosure of your personal information is a “sale” and not all sharing or disclosure is subject to the right to opt out.",
    "Objection to Certain Processing: You may object to our use or disclosure of your personal information by contacting us at the address described below.",
    "Online Tracking: We do not currently recognize the “Do Not Track” signal.",
    "Promotional Emails: From time to time, we may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. If you would like to stop receiving marketing or promotional communications via email from us, you may opt out of such communications by clicking on the “unsubscribe” button found at the bottom of each email.",
    "Revocation of Consent. Where we process your personal information based upon consent, you may revoke consent. Please note, if you revoke your consent for the processing of personal information then we may no longer be able to provide you with the Services.",
  ];

  const californiaList = [
    "California Shine the Light: If you would like more information concerning the categories of personal information (if any) we share with third parties or affiliates for those parties to use for direct marketing, please submit a written request to us using the information in the Contact Information section above.",
    "Notice of Collection: The table below describes the categories of personal information we collect, disclose for a business purpose, “sell” and/or “share” (as those terms are defined by California law). Please note, in addition to the recipients identified below, we may disclose any of the categories of personal information we collect with government entities, as may be needed to comply with law or prevent illegal activity. We may sell or lease customer information to third parties for the following reasons:",
    "We may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party.",
    "We may, if we in our discretion consider it potentially beneficial to you, share personal data or information with our affiliates or trusted third-party partners in order to provide you with further educational, marketing and promotional offers we believe may be of interest to you. You are always entitled to opt-out from receiving such offers.",
    "Fraud Prevention: You explicitly consent to STB and FBS sharing your personal information with other proprietary trading firms or third parties for the purposes of detecting fraudulent, deceptive, malicious, or criminal behavior or any violations of our Terms or this Agreement.",
  ];

  const TableDataCollectionList = [
    {
      context: "Account Registration",
      typesOfData:
        "We may collect your name, financial information, and contact information when you create an account. We also collect information relating to the actions that you perform while logged into your account.",
      primaryPurpose:
        "We have a legitimate interest in providing account related functionalities to our users and preventing illegal conduct.",
    },
    {
      context: "Biometric Identifiers",
      typesOfData:
        "We may collect certain biometric information about you, such as imagery of the iris, retina, fingerprint, face, hand, palm, vein patterns, and voice recordings, from which an identifier template, such as a faceprint, a minutiae template, or a voiceprint, can be extracted, and keystroke patterns or rhythms, gait patterns, or rhythms, and sleep, health, or exercise data that contain identifying information.",
      primaryPurpose:
        "We are required to collect this information to meet our legal obligations and have a legitimate interest in doing so and preventing fraud.",
    },
    {
      context: "Client Information",
      typesOfData:
        "We collect the names and contact information of our clients and their employees with whom we may interact.",
      primaryPurpose:
        "We have a legitimate interest in contacting our clients and communicating with them concerning normal business administration such as projects, services, and billing.",
    },
    {
      context: "Cookies and First-Party Tracking",
      typesOfData:
        "We use cookies and clear GIFs. “Cookies” are small pieces of information that a website sends to a computer&apos;s hard drive while a website is viewed.",
      primaryPurpose:
        "We have a legitimate interest in making our website operate efficiently.",
    },
    {
      context: "Cookies and Third-Party Tracking",
      typesOfData:
        "We may place tracking technology on our website that collects analytics, records how you interact with our website, or allows us to participate in behavior-based advertising. This means that a third party uses technology (e.g., a cookie) to collect information about your use of our website so that they can report analytics to us or provide advertising about products and services tailored to your interests. That third party might also collect information over time and across different websites in order to serve advertisements on our website or other websites.",
      primaryPurpose:
        "Where required by law, we base the use of third-party cookies upon consent.",
    },
    {
      context: "Demographic Information",
      typesOfData:
        "We collect personal information, such as your date of birth, race or location.",
      primaryPurpose:
        "We have a legitimate interest in ensuring our users are legitimate and to prevent fraudulent and illegal activity.",
    },
    {
      context: "Email Interconnectivity",
      typesOfData:
        "If you receive email from us, we use certain tools to capture data related to when you open our message, click on any links or banners it contains and make purchases.",
      primaryPurpose:
        "We have a legitimate interest in understanding how you interact with our communications to you.",
    },
    {
      context: "Employment",
      typesOfData:
        "If you apply for a job posting, or become an employee, we collect information necessary to process your application or to retain you as an employee. This may include, among other things, your Social Security Number. Providing this information is required for employment.",
      primaryPurpose:
        "We use information about current employees to fulfil our obligations to employees. In some contexts, we are also required by law to collect information about employees or applicants. We also have a legitimate interest in using your information to have efficient staffing and work force operations.",
    },
    {
      context: "Feedback/Support",
      typesOfData:
        "If you provide us feedback or contact us for support, we will collect your name and email address, as well as any other content that you send to us, in order to reply.",
      primaryPurpose:
        "We have a legitimate interest in receiving, and acting upon, your feedback or issues.",
    },
    {
      context: "Mobile Devices",
      typesOfData:
        "We collect information from your mobile device such as unique identifying information broadcast from your device when visiting our website or when visiting one of our stores.",
      primaryPurpose:
        "We have a legitimate interest in identifying unique visitors, and in understanding how users interact with us on their mobile devices.",
    },
    {
      context: "Order Placement",
      typesOfData:
        "We collect your name, billing address, email address, phone number, and credit card number when you place an order.",
      primaryPurpose:
        "We use your information to perform our contract to provide you with products or services.",
    },
    {
      context: "Partner Promotion",
      typesOfData:
        "We collect information that you provide as part of a co-branded promotion with another company.",
      primaryPurpose:
        "We have a legitimate interest in fulfilling our promotions.",
    },
    {
      context: "Public Health and Safety",
      typesOfData:
        "In certain situations where a serious public health threat has been identified, we may collect information from employees, guests, and other individuals accessing our facilities. This may include medical and health information, such as body temperature, symptoms, and underlying health conditions. In some cases, we may also collect medical, health, and related information about an employee&apos;s children, family member, or other individuals under the employee&apos;s care.",
      primaryPurpose:
        "We have a legitimate interest in protecting the health and safety of our employees and guests. In some jurisdictions we may be required by law, regulation, or governmental order to collect and retain information related to issues of public health and safety. We have a legitimate interest in complying with the laws in the jurisdictions in which we operate.",
    },
    {
      context: "Surveys",
      typesOfData:
        "When you participate in a survey, we collect information that you provide through the survey. If the survey is provided by a third-party service provider, the third party&apos;s privacy policy applies to the collection, use, and disclosure of your information.",
      primaryPurpose:
        "We have a legitimate interest in understanding your opinions and collecting information relevant to our organization.",
    },
    {
      context: "Sweepstakes or contests",
      typesOfData:
        "When you participate in a sweepstakes or contest, we collect information about you which includes contact information to notify you if you are selected.",
      primaryPurpose:
        "We have a legitimate interest in operating the sweepstakes and contests. In some contexts, we are also required by law to collect information about those that enter into our sweepstakes and contests, and we have a legitimate interest in complying with those laws.",
    },
    {
      context: "Website interactions",
      typesOfData:
        "We use technology to monitor how you interact with our website. This may include which links you click on, or information that you type into our online forms. This may also include information about your device or browser.",
      primaryPurpose:
        "We have a legitimate interest in understanding how you interact with our website to better improve it, and in understanding your preferences and interests to select offerings that you might find most useful. We also have a legitimate interest in detecting and preventing fraud.",
    },
    {
      context: "Web logs",
      typesOfData:
        "We collect information, including your browser type, operating system, Internet Protocol (IP) address (a number that is automatically assigned to a computer when the internet is used), domain name, click-activity, referring website, and/or a date/time stamp for visitors.",
      primaryPurpose:
        "We have a legitimate interest in monitoring our networks and the visitors to our websites. Among other things, it helps us understand which of our services is the most popular.",
    },
  ];
  const TableDataCollectionListSales = [
    {
      category:
        "Identifiers - this may include real name, alias, postal address, unique personal identifier, online identifier, email address, account name, or other similar identifiers.",
      disclosure: [
        "Affiliates or subsidiaries.",
        "Business partners.",
        "Data analytics providers.",
        "Data brokers.",
        "Internet service providers.",
        "Joint marketing partners.",
        "Operating systems and platforms.",
        "Other service providers.",
        "Payment processors and financial institutions.",
        "Professional services organizations - this may include auditors and legal counsel.",
        "Social networks.",
      ],
      sharing: ["Business partners", "Joint marketing partners"],
      sales: ["Business partners", "Joint marketing partners"],
    },
    {
      category:
        "Government Issued Identification – this may include social security number, driver&apos;s license number, or state issued identification number, passport number.",
      disclosure: [
        "Service providers",
        "Professional services organizations - this may include auditors and legal counsel",
      ],
      sharing: ["None"],
      sales: ["None"],
    },
    {
      category:
        "Financial Information – this may include bank account number, credit card number, debit card number, and other financial information.",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Internet service providers",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations - this may include auditors and legal counsel",
      ],
      sharing: ["None"],
      sales: ["None"],
    },
    {
      category:
        "Characteristics of protected classifications – this may include age, sex, race, ethnicity, physical, or mental handicap, etc.",
      disclosure: [
        "Service provider",
        "Payment processors and financial institutions",
        "Professional services organizations - this may include auditors and legal counsel",
      ],
      sharing: ["None"],
      sales: ["None"],
    },
    {
      category:
        "Commercial information – this may include information about products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["Business partners", "Joint marketing partners"],
      sales: ["Business partners", "Joint marketing partners"],
    },
    {
      category:
        "Biometric information – this may include imagery of the iris, retina, fingerprint, face, hand, palm, vein patterns, and voice recordings, from which an identifier template, such as a faceprint, a minutiae template, or a voiceprint, can be extracted, and keystroke patterns or rhythms, gait patterns, or rhythms, and sleep, health, or exercise data that contain identifying information",
      disclosure: ["Service providers"],
      sharing: ["None"],
      sales: ["None"],
    },
    {
      category:
        "Internet or other electronic network activity information – this may include browsing history, search history, and information regarding an individual&apos;s interaction with an internet website, application, or advertisement.",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["Business partners", "Joint marketing partners"],
      sales: ["Business partners", "Joint marketing partners"],
    },
    {
      category: "Geolocation data",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["Business partners", "Joint marketing partners"],
      sales: ["Business partners", "Joint marketing partners"],
    },
    {
      category: "Professional or employment related information",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["None"],
      sales: ["None"],
    },
    {
      category: "Inferences drawn from any of the information listed above",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["Business partners", "Joint marketing partners"],
      sales: ["Business partners", "Joint marketing partners"],
    },
    {
      category:
        "Additional categories of personal information described in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)) – this may include signature, physical characteristics, or description, , insurance policy number.",
      disclosure: [
        "Affiliates or subsidiaries",
        "Business partners",
        "Data analytics providers",
        "Data brokers",
        "Internet service providers",
        "Joint marketing partners",
        "Operating systems and platforms",
        "Other service providers",
        "Payment processors and financial institutions",
        "Professional services organizations, this may include auditors and legal counsel",
        "Social networks",
      ],
      sharing: ["None"],
      sales: ["None"],
    },
  ];
  return (
    <section id="privacy-policy" className="base">
      <section className="section legal hero">
        <div className="section_in">
          <div className="row">
            <div className="column">
              <h1 className="legal__title text-center">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section legal" data-id="privacy-policy">
        <div className="section_in">
          <div className="row">
            <div className="column">
              <div className="content">
                <h1>Privacy Policy</h1>
                <p>
                  Voyage Markets SPC (“VM” or “we” or “us”) respect your privacy
                  and are committed to ensuring that consumers who access our
                  website and/or use or access products or services offered by
                  us (“you” or “your”) are informed regarding the way their
                  personal data is used. This Privacy Policy (this “Policy”)
                  applies to VM, <Link href="/">https://voyagemarkets.net</Link>{" "}
                  (the “Site”), and all products and services offered by VM, and
                  governs personal data collection and usage by us. For the
                  purposes of this Policy, unless otherwise noted, all
                  references to VM include the Site and VM. The Site is an
                  ecommerce website. By using the Site, you consent to the data
                  practices described in this Policy and all revisions or
                  amendments made to this Policy from time to time. VM provides
                  assistance to individuals with disabilities to communicate
                  effectively with them. Please contact us through our e-mail
                  address:{" "}
                  <Link href="mailto:support@voyagemarkets.net">
                    support@voyagemarkets.net
                  </Link>
                  .
                </p>
                <ul>
                  {list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h2>Collection of your Personal Information</h2>
                <p>
                  We collect information about you in a variety of ways
                  depending on how you interact with us, the Site and our
                  services, including:
                </p>
                <ol>
                  {collectionList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p>
                  In order to better provide you with products and services
                  offered, we may collect personally identifiable information,
                  such as the following, which sets forth the types of personal
                  information we collect and how we use the information:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Context</th>
                      <th>Types of Data</th>
                      <th>Primary Purpose for Collection and Use of Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableDataCollectionList.map((row) => (
                      <tr key={row.context}>
                        <td>{row.context}</td>
                        <td>{row.typesOfData}</td>
                        <td>{row.primaryPurpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>
                  We collect this data and provide it to third parties, as
                  discussed below, if it is a necessary step in the user&apos;s
                  account creation process, contributes to the ease of use,
                  reliability, security, or functionality of our products. If
                  you purchase our products or services, we collect billing and
                  credit card information. This information is used to complete
                  the purchase transaction or issue payments to you.
                </p>
                <p>
                  You may be required to provide certain personal information to
                  us when you elect to use certain products or services. We also
                  may gather additional personal or non-personal information in
                  the future for the same purpose.
                </p>
                <h2>Use of your Personal Information</h2>
                <p>We collect and use your personal information to:</p>
                <ol>
                  {collectionList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <p>
                  Although the sections above describe our primary purpose in
                  collecting your information, in many situations we have more
                  than one purpose. As a result, our collection and processing
                  of your information may be based in different contexts
                  depending on your consent, our need to fulfil a contract, our
                  obligations under law, and/or our legitimate interest in
                  conducting our business. You explicitly consent to sharing
                  your data by us and/or our affiliates with other proprietary
                  trading firms or third parties for the purposes of detecting
                  fraudulent, deceptive, malicious, or criminal behavior or any
                  violations of our Terms or this Agreement.
                </p>
                <h2>Sharing of your Personal Information</h2>
                <p>
                  In addition to the specific situations discussed elsewhere in
                  this Statement, we may disclose personal information in the
                  following situations:
                </p>
                <ol>
                  {thirdPartyShareList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>Tracking User Behavior</h2>
                <p>
                  We may track and record the websites and pages our users
                  visit, in order to determine what our services are the most
                  popular. This data is used to deliver customized content and
                  advertising to customers whose behavior indicates that they
                  are interested in a particular subject area.
                </p>
                <h2>Automatically Collected Information</h2>
                <p>
                  Information about your computer hardware and software may be
                  automatically collected by us. This information can include:
                  your IP address, browser type, domain names, access times and
                  referring website addresses. This information is used for the
                  operation of the service, to maintain the quality of the
                  service, and to provide general statistics regarding use of
                  our website.
                </p>
                <h2>Use of Cookies</h2>
                <p>
                  Our website may use “cookies” to help you personalize your
                  online experience. A cookie is a text file that is placed on
                  your hard disk by a web page server. Cookies cannot be used to
                  run programs or deliver viruses to your computer. Cookies are
                  uniquely assigned to you and can only be read by a web server
                  in the domain that issued the cookie to you.
                </p>
                <p>
                  One of the primary purposes of cookies is to provide a
                  convenience feature to save you time. The purpose of a cookie
                  is to tell the Web server that you have returned to a specific
                  page. For example, if you personalize the webpages, or
                  register with our site or services, a cookie helps us to
                  recall your specific information on subsequent visits. This
                  simplifies the process of recording your personal information,
                  such as billing addresses, shipping addresses, and so on. When
                  you return to the same website, the information you previously
                  provided can be retrieved, so you can easily use the features
                  that you customized.
                </p>
                <p>
                  You have the ability to accept or decline cookies. Most Web
                  browsers automatically accept cookies, but you can usually
                  modify your browser setting to decline cookies if you prefer.
                  If you choose to decline cookies, you may not be able to fully
                  experience the interactive features of our services or
                  websites you visit. Additionally, depending on where you live,
                  you may have the right to restrict certain cookies using the
                  cookie banner on our website.
                </p>
                <h2>Third-Party Links</h2>
                <p>
                  This website contains links to other sites. Please be aware
                  that we are not responsible for the content or privacy
                  practices of such other sites. We encourage our users to be
                  aware when they leave our site and to read the privacy
                  statements of any other site that collects personally
                  identifiable information.
                </p>
                <h2>Security and Retention of Your Personal Information</h2>
                <p>
                  We take reasonable security measures to protect against
                  unauthorized access to or alteration of your personal
                  information. Notwithstanding the foregoing, no data
                  transmission over the Internet or any wireless network can be
                  guaranteed to be 100% secure. As a result, while we strive to
                  protect your personal information, you acknowledge that: (a)
                  there are security and privacy limitations inherent to the
                  Internet which are beyond our control; and (b) security,
                  integrity, and privacy of any and all information and data
                  exchanged between you and us through this Site cannot be
                  guaranteed. In the event that we are required by law to inform
                  you of a breach to your personal information we may, at our
                  discretion, notify you electronically, in writing, or by
                  telephone, if permitted to do so by law.
                </p>
                <p>
                  Some of our websites permit you to create an account. When you
                  do you will be prompted to create a password. You are
                  responsible for maintaining the confidentiality of your
                  password, and you are responsible for any access to or use of
                  your account by someone else that has obtained your password,
                  whether or not such access or use has been authorized by you.
                  You should notify us of any unauthorized use of your password
                  or account.
                </p>
                <p>
                  We retain your personal information for only as long as
                  necessary to fulfil the purposes outlined in this Privacy
                  Policy, including for the purposes of satisfying any legal,
                  accounting, or reporting requirements, unless a longer
                  retention period is required or permitted by law. To determine
                  the appropriate retention period for personal information, we
                  consider the amount, nature, and sensitivity of the
                  information, the potential risk of harm from unauthorized use
                  or disclosure of the information, the purposes for which we
                  obtained the information and whether we can achieve those
                  purposes through other means, as well as applicable legal
                  requirements.
                </p>
                <h2>Your Choices</h2>
                <p>
                  Subject to certain exceptions, and only for those individuals
                  who meet specific jurisdictional and legal requirements, you
                  have the right to make the following requests:
                </p>
                <ol>
                  {choicesList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <p>
                  To exercise any of your rights, you may email us at
                  support@securethebag.com, Attn: Data Privacy Officer. In some
                  circumstances, you may authorize an agent to exercise your
                  rights by emailing us on your behalf. If you use an agent to
                  submit an opt out request, you must provide the agent with
                  signed written permission demonstrating that they have been
                  authorized by you to act on your behalf. We may require more
                  information to ensure proper verification of you and your
                  agent&apos;s identity and authorization. Depending on your
                  request, we will ask for information such as your name,
                  information about the last interaction you had with us, or the
                  date of your last purchase from us. We may also ask you to
                  provide a signed declaration confirming your identity. If you
                  are utilizing an agent, we require a signed and notarized
                  permission from you stating that the agent has authorization
                  to act on your behalf. We will deny the request if we are
                  unable to verify the requestor or the authorized agent.
                </p>
                <h2>Changes to this Statement</h2>
                <p>
                  We reserve the right to amend this Policy from time to time.
                  We will notify you about significant changes in the way we
                  treat personal information by sending a notice to the primary
                  email address specified in your account, by placing a
                  prominent notice on our website, and/or by updating any
                  privacy information. Your continued use of the website and/or
                  Services available after any such modifications will
                  constitute your: (a) acknowledgment of the revised Policy; and
                  (b) agreement to abide and be bound by such Policy as revised.
                </p>
                <h2>Contact Information</h2>
                <p>
                  We welcome your questions or comments regarding this
                  Statement. If you have any questions or comments, please
                  contact us at:
                </p>
                <p>Voyage Markets SPC</p>
                <p>Attn: Data Privacy Officer</p>
                <p>Cra. 25 #40-27</p>
                <p>Calarcá, Quindío</p>
                <p>Colombia</p>
                <Link href="mailto:support@voyagemarkets.net">
                  support@voyagemarkets.net
                </Link>
                <h2>Additional Information for California Residents</h2>
                <p>
                  California law requires us to disclose the following
                  additional information related to our privacy practices. If
                  you are a California resident, the following privacy
                  disclosures apply to you in addition to the rest of the
                  Privacy Policy.
                </p>
                <ul>
                  {californiaList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <table className="personalInfoTable">
                  <thead>
                    <tr>
                      <th>Category of Personal Information</th>
                      <th>Category of Recipients</th>
                      <th></th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>Disclosures for Business Purposes</th>
                      <th>Sharing for Cross Context Behavioral Advertising</th>
                      <th>Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableDataCollectionListSales.map((row) => (
                      <tr key={row.category}>
                        <td>{row.category}</td>
                        <td>
                          <ol>
                            {row.disclosure.map((disclosure) => (
                              <li key={disclosure}>{disclosure}</li>
                            ))}
                          </ol>
                        </td>
                        <td>
                          {row.sharing &&
                          row.sharing.length > 0 &&
                          row.sharing[0] !== "None" ? (
                            <ol>
                              {row.sharing.map((share) => (
                                <li key={share}>{share}</li>
                              ))}
                            </ol>
                          ) : (
                            "None"
                          )}
                        </td>
                        <td>
                          {row.sales &&
                          row.sales.length > 0 &&
                          row.sales[0] !== "None" ? (
                            <ol>
                              {row.sales.map((sale) => (
                                <li key={sale}>{sale}</li>
                              ))}
                            </ol>
                          ) : (
                            "None"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ul>
                  {" "}
                  <li>
                    {" "}
                    <strong>
                      California Sensitive Information Disclosure:
                    </strong>
                    We collect the following categories of sensitive personal
                    information (as defined under California law): your
                    biometric data. This information is collected to process
                    transactions, comply with laws, manage our business, or
                    provide you with services. Note that we do not use such
                    information for any purposes that are not identified within
                    the California Privacy Rights Act Section 1798.121. We do
                    not “sell” or “share” sensitive personal information for
                    purposes of cross-context behavioral advertising.
                  </li>
                </ul>
                <h2>Additional Information For European Residents</h2>
                <p>
                  This European Privacy Notice describes how Voyage Markets SPC
                  (“VM” or “we”), organized in the Cayman Islands, comply with
                  the General Data Protection Regulation effective as of 2018
                  and the United Kingdom&apos;s Data Protection Act of 2018
                  (collectively, “GDPR”) with respect to personal data collected
                  about citizens or residents of the European Union or United
                  Kingdom, respectively (“European data subjects”).
                </p>
                <h3>How VM Processes Data</h3>
                <p>
                  How VM Processes DataWe collect with your express consent, or
                  may collect in the future, your first and last name, email
                  address, phone number, and your financial information. We may
                  collect other information about you with your express consent.
                  We collect your data through the online or physical
                  registration process, completion of surveys or feedbacks,
                  payment methods used to purchase our products or reimburse
                  you, and use of cookies on our websites. We may also partner
                  with cloud computing companies to store personal data through
                  their software.
                </p>
                <p>
                  We may receive your data indirectly through your credit card
                  processing companies and governmental agencies.
                </p>
                <h3>How VM Uses Your Data</h3>
                <p>
                  We use your data to process your purchase or to issue payments
                  to you, manage your account, email you with special offers on
                  other products we think you might like, send billing
                  reminders, and perform other activities necessary and proper
                  to serve you as best we can.
                </p>
                <h3>GDPR Rights</h3>
                <p>
                  The GDPR is a law of the European Union (and set of rules some
                  countries outside of the EU mirror) that gives individuals in
                  Europe additional rights relating to the personal information
                  collected about them. The main rights under that law are:
                </p>
                <ul>
                  <li>
                    <strong>Right to Access.</strong> You have the right to
                    request VM to make copies of your personal data. You may be
                    charged a small fee for this service.
                  </li>
                  <li>
                    <strong>Right to Rectification.</strong> You have the right
                    to request us to correct any information you believe is
                    inaccurate. You also have the right to request us to
                    complete any information you believe is incomplete.
                  </li>
                  <li>
                    <strong>Right to Erasure.</strong> You have the right to
                    request us to erase your personal data, with certain
                    exceptions.
                  </li>
                  <li>
                    <strong>Right to Restrict Processing.</strong> You have the
                    right to request us to restrict the processing of your
                    personal data, with certain exceptions.
                  </li>
                  <li>
                    <strong>Right to Object to Processing.</strong> You have the
                    right to object to us processing of your personal data, with
                    certain exceptions.
                  </li>
                  <li>
                    <strong>Right to Data Portability.</strong> You have the
                    right to request us to transfer the data that we have
                    collected toanother organization, or directly to you, with
                    certain exceptions.
                  </li>
                </ul>
                <p>
                  These rights can be exercised by an individual in Europe or
                  their designated agent such as an attorney or those in
                  possession of a power of attorney.
                </p>
                <h2>Scope</h2>
                <p>
                  The GDPR applies to personal data of citizens or residents of
                  the European Union or the United Kingdom, such as those who
                  interact with VM&apos;s products and websites. “Personal data”
                  is defined broadly in the GDPR, and essentially encompasses
                  any information that can be used directly or indirectly to
                  identify an individual in Europe (or other non-EU state that
                  adopted the provisions within GDPR). GDPR Article 4 defies
                  “personal data” as any information relating to an identified
                  or identifiable natural person (“data subject”); an
                  identifiable natural person is one who can be identified,
                  directly or indirectly, in particular by reference to an
                  identifier such as a name, an identification number, location
                  data, an online identifier or to one or more factors specific
                  to the physical, physiological, genetic, mental, economic,
                  cultural, or social identity of that natural person.
                </p>
                <p>
                  GDPR applies to personal data processed through purely
                  automatic means or through non- automatic means
                </p>
                <h2>Right to Access</h2>
                <p>
                  In accordance with the GDPR requirements, Europeandata
                  subjects may contact VM to exercise their right to access the
                  personal data that VM holds about them as well as how the data
                  was used, the categories and the identity of third parties
                  with whom the data was shared, and the purpose(s) for the
                  sharing of the information. They can do so by exercising that
                  right via one of the other options identified in the Contact
                  Methods section of this Notice.
                </p>
                <p>
                  European data subjects or their authorized agents who seek to
                  exercise this right are subject to comprehensive verification
                  to minimize any risk to individuals of sharing their person
                  information with an unauthorized individual. We will deny the
                  request if it is unable to verify the requestor or the
                  authorized agent.
                </p>
                <p>
                  We can also deny the request if either company does not hold
                  any personal data about the individual which falls within the
                  scope of GDPR. This European Privacy Notice applies only to
                  European data subjects and the scope of data covered by
                  applicable European laws.
                </p>
                <h2>Right to Contact</h2>
                <p>
                  In accordance with the GDPR requirements, European data
                  subjects may contact VM to change, correct, or add to the
                  information VM has about them if they think that the data VM
                  collected is incorrect or incomplete. Upon proper verification
                  of the European data subject and proper request, VM will
                  rectify the errors, if any. If the personal data was made
                  public or shared with third parties, VM will make efforts to
                  communicate to the third party the need to rectify the
                  personal data.
                </p>
                <p>
                  Upon completion of rectification, VM will contact the European
                  data subject promptly.
                </p>
                <h2>Right to Erasure</h2>
                <p>
                  European data subjects have the right to request erasure of
                  their personal data, and can make the request directly to us
                  in his or her individual capacity or throughan authorized
                  agent.They can do so by exercising that right through one of
                  the other options identified in the Contact Methods section of
                  this Notice.
                </p>
                <p>
                  VM is not obligated to erase personal information if we are
                  required or permitted to retain such information in accordance
                  with one of the exemptions in the GDPR. Individuals who
                  exercise their right to request deletion directly or through
                  an authorized agent will be subject to verification in
                  accordance with the GDPR requirements. Valid reasons for the
                  erasure are:
                </p>
                <ol className="lower-alpha">
                  <li>
                    The personal data are no longer necessary in relation to the
                    purposes for which they were collected;
                  </li>
                  <li>The European data subject withdraws consent;</li>
                  <li>The European data subject objects to the processing;</li>
                  <li>The personal data was unlawfully processed;</li>
                  <li>There are existing legal obligations; or</li>
                  <li>
                    The personal data have been collected in relation to the
                    offer of information society services.
                  </li>
                </ol>
                <p>
                  When VM process a request for erasure from a verifiedEuropean
                  data subject, they will delete the data from their systems in
                  a secure and irreversible manner, to prevent the data from
                  being restored. To the extent that VM has entrusted any of the
                  personal data of the European data subject to a third party,
                  they will also contact that third party to process the erasure
                  request and will confirm to the European data subject or the
                  agent that they have done so. If the data was made public, VM
                  will take reasonably steps to inform other controllers of the
                  data that the data subject has requested the erasure.
                </p>
                <p>
                  Upon completion of erasure, VM will contactthe European data
                  subject promptly.
                </p>
                <h2>Right to Restrict of Processing</h2>
                <p>
                  European data subjects have the right to restrict the
                  processing of their personal data in order to effectuate other
                  rights or to effectuate the right to restrict processing in
                  and of itself. When the restriction is effectuated, VM will
                  not process the personal data objected to with the exception
                  of storage, only to be processed with the data subject&apos;s
                  consentor for the establishment, exercise, or defense of legal
                  claims, or for the protection on the rights of another natural
                  or legal person. This right may be restricted further as the
                  law demands.
                </p>
                <p>
                  A European data subject who has obtained restriction of
                  processing will be informed by the Data Protection Officer
                  before the restriction if processing is lifted.
                </p>
                <h2>Right to Object to Processing</h2>
                <p>
                  European data subjects may object, on grounds relating to his
                  or her particular situation, at any time. At which point, VM
                  willcease processing of personal data concerning him or her
                  unless they can demonstrate compelling, legitimate grounds for
                  the processing.
                </p>
                <p>
                  Please do note that VM may not adhere to objections to
                  processing of data if the processing is necessary for the
                  performance of a task carried out for reasons of public or
                  national interest.
                </p>
                <h2>Right to Data Portability</h2>
                <p>
                  European data subjects can request VM to transferthe personal
                  data they have on them to the desired institution or person
                  where technically feasible.
                </p>
                <p>
                  Upon completion of transfer, VM will contact the European data
                  subject promptly.
                </p>
                <h2>Response and Completion Times</h2>
                <p>
                  VM will acknowledge, respond,and complete the requests to
                  exercise the above Rights within one calendar month of
                  receipt, and provide the information requested by the verified
                  European data subject. If a reasonable delay is necessary, VM
                  will contactthe European data subjectof the delay. The
                  periodmay be extended up to two additional months if
                  necessaryto respond to the requests.
                </p>
                <h2>Exceptions to the Rights</h2>
                <p>
                  GDPR provides certain instances when VM does not have to
                  comply with a request to exercise GDPR rights. Such instances
                  include: national security, defense, public security, the
                  prevention and investigation of crime, protection of judicial
                  independence and judicial proceedings, prevention,
                  investigation, detection, and prosecution of breaches of
                  ethics for regulated professions, enforcement of civil law
                  claims, or other important objectives of general public
                  interest
                </p>
                <h2>Contact Methods</h2>
                <p>
                  VM is an e-commerce entity with no physical storefront. They
                  exclusively operate through their websites or other online
                  methods, and they have direct relationships with their
                  customers. You can email or mail them to exercise your rights.
                  When you email your request, please write “My European Privacy
                  Rights” in the subject field and identify as to who you are.
                  VM is not responsible for notices that are not properly
                  labeled or sent. When you mail your request, please write “My
                  European Privacy Rights” on the header. If you believe VM is
                  in breach of GDPR, you may contact your proper Commission.
                </p>
                <p>
                  In order to contact VM to exercise your rights as an
                  individual in Europe, you can mail or message them through the
                  following:
                </p>
                <p>Voyage Markets SPC</p>
                <p>Attn: Data Protection Office</p>
                <p>Cra. 25 #40-27</p>
                <p>Calarcá, Quindío</p>
                <p>Colombia</p>
                <p>
                  <Link href="mailto:support@voyagemarkets.net">
                    support@voyagemarkets.net
                  </Link>
                </p>
                <p>
                  <strong>Effective Date: March 8, 2024</strong>
                </p>
                <p>
                  <strong>Last Update: March, 2024</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
