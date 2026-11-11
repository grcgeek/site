---
title: "Resume"
description: "Christian Carrasco's resume: IT Risk & Controls Analyst in security GRC at a cybersecurity company, after ten years in IT operations and security with control testing and audit evidence from the IT side."
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
showWordCount: false
showPagination: false
showBreadcrumbs: false
build:
  publishResources: false
---

{{< resume-head download="on" facts="Now :: IT Risk & Controls Analyst, Orlando | Experience :: Ten Plus Years in Enterprise IT | Languages :: English and Spanish, fluent | Certs :: SSCP passed · CISSP next" hook="Ran the *systems*. Now I prove the *controls*." >}}
IT Risk & Controls Analyst at a cybersecurity company in Orlando: audit evidence and compliance records, evidence requests with auditors, remediation and exception tracking, policies and review schedules, vendor reviews and continuous monitoring submissions, in a SOC 2 and FedRAMP world. Before that, ten plus years in enterprise IT, most of it in regulated environments, split between keeping production running and keeping it secure: major incident management for Toyota Motor North America's production applications, leading an engineering team, the SIEM in TelevisaUnivision's security operations center, and identity and access across Microsoft environments.

Most of my career was on the side that gets audited. At TelevisaUnivision the compliance work was mostly control testing against NIST CSF, with PCI DSS alongside it, plus tracking findings and risk acceptance in ServiceNow and answering auditor requests. At Toyota I supported the annual ISO 27001 review, reviewed AWS accounts for misconfigurations, automated cost and tagging reporting across 160+ accounts, and handled access and MFA policy, change requests and SLA reporting. At Cigna I pulled the access evidence for HIPAA audits.

That compliance work was the part of every job I kept volunteering for, so now it is the job. I bring the operations side with me: getting evidence from busy teams, explaining findings clearly, and following remediation until it is closed. I passed the SSCP exam in November, the CISSP is next, and the [lab]({{< ref "homelab" >}}) is where I keep practicing.

{{< /resume-head >}}

## Controls I've Operated {.h-minor}

{{< certs seal="false" class="certs--wide" groups="Logical access :: Microsoft Entra ID, Conditional Access and MFA, Active Directory and Group Policy, Exchange permissions, Access and privileged account reviews, Joiner mover leaver, AWS IAM | Change management :: CAB-validated change procedure, Maintenance windows and releases, DNS and certificate change validation, Decommissioning with sign-off | IT operations :: Monitoring and alerting, Dynatrace and PagerDuty, Incident runbooks and escalation matrices, SOPs, Backup images and rebuild documentation | Compliance :: Control testing, Evidence collection, Findings and risk acceptance in ServiceNow, Audit requests" >}}

Grouped the way an IT general controls review groups them. Every item here is something I ran before I assessed any of it; the assessment side is on my [Homelab]({{< ref "homelab" >}}) page, with a writeup as each workpaper lands.

## Experience {.h-minor}

{{< xp >}}

{{< job company="A cybersecurity company" dates="2026 to now" location="Orlando, FL" context="Name to follow" >}}
{{< role title="IT Risk & Controls Analyst" dates="Nov 2026 to now" tags="SOC 2, FedRAMP, Audit Evidence, Remediation Tracking, Vendor Reviews, Continuous Monitoring, Access Reviews, Policies" >}}
- Collect, organize and maintain audit evidence and compliance records, and coordinate evidence requests and follow-ups with internal teams and auditors.
- Track remediation tasks, findings, exceptions and deadlines, and maintain policies, procedures, review schedules and approval records.
- Support vendor reviews (security reports, questionnaires and supporting documentation), continuous monitoring submissions, training records and access review documentation.
{{< /role >}}
{{< /job >}}

{{< job company="Beyondsoft Consulting" dates="2021 to 2026" location="Remote" context="On assignment at Toyota Motor North America" >}}
{{< role title="Operations Manager" dates="2023 to 2026" promoted="2023" tags="ISO 27001, AWS Reporting Automation, Major Incident Management, Change Management, SLA Management, Vendor Management, Team Leadership, ServiceNow" >}}
- Supported the annual ISO 27001 compliance review: reviewed each identified risk and its remediation plan, assessed remediation adequacy and residual risk, and gave written feedback to the compliance stakeholders running the assessment.
- Automated cost and tagging reporting across 160+ client AWS accounts with Power Automate and AWS Lambda, covering tagging compliance and actual and forecast spend, replacing a manual pull that cost the team 25 to 30 hours a week with a repeatable, reviewable report.
- Managed major incidents end to end: severity against business impact, response coordinated across IT, security and application teams, restoration, and executive and client communication through resolution.
- Ran SLA performance as a recurring control: identified breaches, performed root cause analysis, assigned corrective action plans to control owners, and tracked them to closure, with MTTR, aging, backlog and repeat-incident reporting for leadership.
- Coordinated change management for maintenance windows, change requests and releases, documenting scope, risk and approvals so work executed inside approved change windows.
- Led the engineering team as its manager, owning hiring, performance and development with one hire in three to four years, and the Dynatrace and PagerDuty contracts: renewals, utilization reviews and spend against contracted limits.
- Led post-incident reviews and root cause analysis, and kept the runbooks, escalation matrices and SOPs that made recurring work repeatable and auditable rather than person-dependent.
{{< /role >}}
{{< role title="Senior/Lead Technical Systems Analyst" dates="2021 to 2023" tags="Microsoft Entra ID, Conditional Access, MFA, Access Reviews, AWS IAM, Change Management, CAB, DNS, SSL/TLS, Dynatrace, PagerDuty" >}}
- Administered logical access controls in Azure AD and Microsoft Entra ID: provisioning and deprovisioning, Conditional Access, MFA and password policy, license audits and periodic access reviews, with authentication log review to validate the controls operated as designed.
- Assessed client AWS accounts for misconfigurations that could become exploitable, reviewing IAM policies, security groups and access configurations, documenting findings, and tracking remediation with application owners to closure.
- Designed and documented a change management procedure for DNS record changes after finding the team reused prior tickets, validating approvers, approval counts, risk categorization and CAB requirements with governance.
- Managed the SSL/TLS certificate lifecycle across client domains and validated DNS record changes against security requirements before execution, for continuous compliance and audit readiness.
- Administered monitoring and alerting controls in Dynatrace and PagerDuty for production workloads: coverage onboarding, threshold tuning, and escalation and routing policies.
- Led implementation of a self-hosted VPN on AWS for roughly 25 users, replacing an MSP-hosted service and saving over $30,000 a year, with MFA for every user and backup images and rebuild documentation as the recovery control.
{{< /role >}}
{{< /job >}}

{{< job company="TelevisaUnivision" dates="2019 to 2020" location="Onsite then remote · Doral, FL" >}}
{{< role title="Information Security Analyst" tags="Control Testing, NIST CSF, PCI DSS, ServiceNow, Access Reviews, Vulnerability Management, Risk Acceptance, LogRhythm" >}}
- Tested security controls for design and operating effectiveness against NIST CSF, with PCI DSS requirements in view, and coordinated audit evidence, documentation and auditor requests for security tooling through audit cycles.
- Tracked control testing and remediation in ServiceNow, correlating findings to the CMDB to assign control owners, driving items to closure, and collecting closure evidence and log extracts for internal audit and compliance stakeholders.
- Ran the vulnerability remediation and exception process: identified owning teams, assessed exploitability and business impact, followed up on exception requests, documented formal risk acceptance, and remediated directly on systems the security team managed.
- Performed user access reviews and reviewed administrative and privileged account configurations to verify least-privilege adherence.
- Maintained log retention against compliance requirements and kept detection logic, tuning rationale and runbooks documented so the monitoring controls were auditable and continuous.
- Lead LogRhythm SIEM administrator: correlation rules, custom parsers, detection coverage reviews, a SIEM migration with coverage validated after it, and spear-phishing investigations aimed at senior staff.
{{< /role >}}
{{< /job >}}

{{< job company="Cigna HealthCare" dates="2014 to 2019" location="Hybrid · Doral, FL" >}}
{{< role title="Technical Support Analyst" tags="HIPAA, Access Administration, Active Directory, Exchange, Group Policy, SCCM, Onboarding and Offboarding, Level 3 Support" >}}
- Supported HIPAA audit requirements in an environment built around FACETS, the core patient information system, providing access records and evidence to compliance and audit teams on request and enforcing policy and control standards in daily administration.
- Administered logical access: role-based provisioning under least privilege, timely revocation on termination as a controlled, documented offboarding step, and the SOPs for provisioning and deprovisioning.
- Administered Active Directory, Exchange permissions and Group Policy, and deployed antivirus, threat detection and DLP clients and security patches across endpoints with SCCM.
- Level 3 escalation point for a team of four supporting about 350 employees at 30 to 60 tickets a day within SLA, mentoring junior technicians and writing the knowledge base articles that reduced repeat escalations.
{{< /role >}}
{{< /job >}}

{{< job company="Commonwealth-Altadis" dates="2013 to 2014" location="Fort Lauderdale, FL" context="Contract" >}}
{{< role title="IT Support Specialist" tags="Active Directory, Asset Management, Endpoint Deployment, ServiceNow" >}}
- Imaged and deployed more than 300 machines supporting a sales force of over 1,500 agents.
- Provisioned Active Directory accounts and OU changes, and kept ServiceNow asset and user records accurate.
{{< /role >}}
{{< /job >}}

{{< /xp >}}

## Certifications {.h-minor}

{{< certs class="certs--wide" groups="In progress :: ISC2 SSCP ~ progress ~ Passed · endorsement pending, ISC2 CISSP ~ progress ~ Next · 2027 | Active :: LPI Linux Essentials ~ active ~ Lifetime, CompTIA Project+ ~ active ~ Lifetime, CompTIA Cloud Essentials+ ~ active ~ Lifetime, Azure AI Fundamentals (AI-900) ~ active ~ 2024 | Previously held :: Cisco CCNA Routing & Switching ~ held ~ 2020 to 2023, CompTIA Security+ ~ held ~ 2019 to 2022, Certified Ethical Hacker (CEH) ~ held ~ 2019 to 2022, AWS Certified Cloud Practitioner ~ held ~ 2019 to 2022, CompTIA A+ ~ held ~ 2018 to 2022, ITIL 4 Foundation ~ held ~ 2019 to 2023" >}}

## Compliance and Frameworks {.h-minor}

{{< certs seal="false" class="certs--wide" groups="Programs :: SOC 2, FedRAMP, ISO 27001, PCI DSS, HIPAA | Frameworks :: NIST SP 800-53, NIST CSF, ITIL v4, NIST SP 800-171 (self-study) | Controls work :: Control testing for design and operating effectiveness, Audit evidence and workpapers, User access reviews, Findings and exceptions tracked to closure, Vendor reviews, Continuous monitoring" >}}

## Tools and Platforms {.h-minor}

{{< certs seal="false" class="certs--wide" groups="GRC, ITSM and audit :: ServiceNow (ticketing and CMDB), Remediation tracking, Excel analysis and sampling, Purview Compliance Manager (lab), Power Automate, AWS Lambda | Microsoft :: Microsoft Entra ID, Conditional Access, Active Directory, Group Policy, Exchange, Microsoft 365, Microsoft Defender for Cloud Apps, Office 365 Security and Compliance (now Purview), Windows Server, Hyper-V, Microsoft Azure | Security :: LogRhythm, Sophos, Cylance, Check Point, Cisco Umbrella, Imperva, Vulnerability Management, Wireshark | Cloud :: AWS IAM, Amazon CloudFront, Amazon Route 53, AWS Shield and WAF, Site-to-Site VPN | Operations :: Dynatrace, PagerDuty, Jenkins, SCCM, KACE, Password Safe, FACETS | Infrastructure :: Linux, PXE imaging, VMware" >}}

## Education and Competitions {.h-minor}

{{< xp >}}

{{< job company="Western Governors University" dates="2017 to 2021" location="Online" positions="B.S. Network Operations and Security" >}}
- Competency-based degree covering network design, network operations, and network and cloud security, with industry certifications built into the program. Completed while working full time.

{{< proof items="Diploma :: wgu-diploma.jpg :: Western Governors University diploma: Bachelor of Science, Network Operations and Security, conferred to Christian Carrasco in January 2021" >}}
{{< /job >}}

{{< job id="ncl-2020" company="National Cyber League" dates="2020" location="Remote" context="Western Governors University" positions="Individual Game, Cyber Skyline" >}}
- Hands-on skills assessment scored on accuracy and completion across nine challenge modules. Spring 2020 season, climbing from the top 11.2% in Fall 2019 to the top 6.3% and adding 285 points.
- Spring 2020: ranked 338th of 5,356 players (top 6.3%) with 1,755 of 3,000 points at 79.5% accuracy and 74.8% completion. Strongest in OSINT, wireless access exploitation, network traffic analysis, password cracking, cryptography, and log analysis.

{{< proof items="Certificate :: ncl-spring-2020-certificate.jpg :: NCL Spring 2020 certificate of participation for Christian Carrasco, verified by Cyber Skyline | Score card :: ncl-spring-2020-scorecard.jpg :: NCL Spring 2020 score card: 1,755 of 3,000 points, 79.5 percent accuracy, 74.8 percent completion" >}}
{{< /job >}}

{{< job id="ncl-2019" company="National Cyber League" dates="2019" location="Remote" context="Western Governors University" positions="Individual Game, Cyber Skyline" >}}
- Hands-on skills assessment scored on accuracy and completion across nine challenge modules. Fall 2019 season.
- Fall 2019: ranked 463rd of 4,147 players (top 11.2%) with 1,470 of 3,000 points at 72.9% accuracy and 65.3% completion. Strongest in OSINT, cryptography, wireless access exploitation, network traffic analysis, and password cracking.

{{< proof items="Certificate :: ncl-certificate.jpg :: NCL Fall 2019 certificate of participation for Christian Carrasco, verified by Cyber Skyline | Score card :: ncl-scorecard.jpg :: NCL Fall 2019 score card: 1,470 of 3,000 points, 72.9 percent accuracy, 65.3 percent completion" >}}
{{< /job >}}

{{< /xp >}}
