---
title: "Homelab"
description: "My evidence bench: a fictional SaaS company audited against SOC 2 and FedRAMP Moderate on my own Microsoft tenant, with the Microsoft stack collecting the evidence. Workpapers on GitHub."
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
showWordCount: false
---

An evidence bench: a fictional company, audited the way a real one is, with the workpapers published. At work I do this inside someone else's program. Here I get to run the whole thing.

{{< brief facts="Auditee :: A small B2B SaaS company with enterprise customers and one federal agency | Scope :: SOC 2 Type II, then FedRAMP Moderate | Cloud :: Microsoft 365 and Azure trial tenant, Entra ID for identity | On-prem :: Proxmox and OPNsense, a domain controller, Windows and Linux endpoints" goals="Test one control end to end, population to finding memo, and publish the workpaper | Take the company through SOC 2 and FedRAMP Moderate readiness, gap list and POA&M included | Make the evidence collect itself: the Microsoft stack files it, nobody pulls screenshots" note="Everything here is invented, built on my own tenant and hardware, on my own time. Nothing comes from my employer." >}}

## Build Status

{{< pipeline items="ITGC workpaper :: In progress :: Logical access in Entra ID, mapped to SOC 2 CC6 and 800-53 AC: a risk and control matrix, population and sample, evidence, test of design and operating effectiveness, and a finding memo | Lab foundation :: In progress :: Proxmox and OPNsense, then the company network: a domain controller and Windows and Ubuntu endpoints | SOC 2 and FedRAMP readiness :: Next :: The Trust Services Criteria mapped to the company's controls with a gap list, then a FedRAMP Moderate readiness assessment scored per control | Microsoft evidence layer :: Planned :: Compliance Manager, access reviews and PIM, Azure Policy, Intune and Purview Audit, with Power Automate filing the evidence" >}}

The lab is done when each piece has a published writeup and its workpaper is on GitHub, not when every tool is installed.
{.callout}

## Where the Evidence Comes From

| Source | What it gives the audit |
|---|---|
| Microsoft Entra ID | The user and group population, Conditional Access and MFA policy, sign-in logs, scheduled access reviews and PIM activations: the evidence behind logical and privileged access (SOC 2 CC6, 800-53 AC) |
| Purview Compliance Manager | Assessments against the SOC 2 and FedRAMP Moderate templates, improvement actions as the control owner's to-do list, evidence attached per control |
| Defender for Cloud | Its regulatory compliance view scores the Azure side against FedRAMP Moderate and SOC 2 continuously; Azure Policy underneath it holds the configuration baseline and flags drift (CM-2, CM-6) |
| Intune | Compliance policies per device: encryption, patch level, screen lock, reported as compliant or not (CC6.8, SI-2) |
| Purview Audit | The unified audit log: admin and configuration changes with who, what and when, for change management evidence (CC8.1, CM-3) |
| Power Automate | Scheduled flows that pull populations through Microsoft Graph, file them in a SharePoint evidence library and feed a Power BI control-health view |
| ServiceNow | Findings, exceptions and remediation tracked as tickets on a developer instance, the way I track them at work |

Workpapers, the risk and control matrix and the readiness assessments are Excel and Markdown, the way most compliance teams actually keep them, and go on GitHub sanitized. Everything else is supporting cast: Proxmox for the virtual machines, OPNsense for the segments, and Windows event logs for the operations controls. Microsoft Sentinel, Defender for Endpoint and vulnerability management are off the bench for now; this lab is governance, risk and compliance, not security operations.

## The Projects

{{< projects keys="itgc,soc2,fedramp,tprm,msev" >}}
| Project | What it proves | Uses |
|---|---|---|
| 1. ITGC test of logical access | I can test a control end to end: risk and control matrix, population and sample, evidence, test of design and operating effectiveness, and a finding memo with a remediation recommendation | Entra ID, Active Directory, Excel sampling |
| 2. SOC 2 control matrix and readiness | I can map the Trust Services Criteria to a company's controls, find the gaps, write the policies that close them, and prepare the request list an auditor would send | SOC 2 TSC, control matrix, policy set |
| 3. FedRAMP Moderate readiness | I can assess rather than build: the 800-53 Moderate baseline scoped to the system, evidence requested per control, a readiness score, and a POA&M for what fails | NIST SP 800-53 Rev 5, SSP sections, POA&M |
| 4. Third-party risk assessment | I can read a SOC 2 report critically: a vendor questionnaire reviewed, the report read through, the bridge letter checked, and a risk rating with a decision | SOC 2 reports, bridge letters, vendor questionnaire |
| 5. Microsoft evidence layer | I can make the evidence collect itself: Compliance Manager assessments, scheduled access reviews and PIM, Azure Policy and Intune compliance, Purview Audit, and Power Automate flows filing it all into an evidence library with a Power BI control-health view | Compliance Manager, Graph PowerShell, Power Automate, Power BI |
{{< /projects >}}

Project 1 ships first because it is the artifact a controls analyst produces every week, and it needs only the tenant. Projects 2 and 3 turn it into a program. Project 4 is a desk exercise. Project 5 comes last on purpose: automating evidence only makes sense once the controls and their tests exist. Each control traces back to a line in the risk and control matrix.

## Under the Hood {.h-minor}

| Part | What it is |
|---|---|
| Host | AMD Ryzen 9 5900X, 32GB DDR4, 1TB NVMe, running Proxmox VE with ZFS |
| Network | OPNsense with four segments: management, corporate, and two isolated test segments |
| Cloud | Microsoft 365 and Azure trial tenant with Entra ID; the Azure side to be defined in Terraform |
| Workpapers | Excel and Markdown, sanitized, in the public repository on GitHub |
| Next purchase | Storage: a second NVMe or a 2TB SATA SSD |

{{< network-diagram >}}

## Operating Constraints {.h-minor}

{{< rules >}}
- Nothing here comes from my employer, its customers, its auditors or its programs. The auditee is fictional, the evidence is generated in this lab, and the workpapers are mine.
- Built on my own tenant and my own hardware, on my own time. No company equipment touches the lab.
- No inbound port forwards. The lab is never reachable from the internet.
- The isolated segments and the management network never touch the cloud tenant.
- The tenant holds lab users and test data only. Admin accounts use MFA and Conditional Access, and a break-glass account stays sealed.
- Evidence is sanitized before it is published: no tenant IDs, public IPs, real emails or secrets.
- The risk and control matrix, the workpapers and the evidence live on GitHub, so every claim on this page can be checked.
{{< /rules >}}

{{< wip title="Still cooking" >}}
I'm building the bench and documenting it as it lands. Workpapers, the readiness assessments and the evidence flows go up on [GitHub](https://github.com/grcgeek) alongside it.

The finished projects live in [Writeups]({{< ref "writeups" >}}).
{{< /wip >}}
