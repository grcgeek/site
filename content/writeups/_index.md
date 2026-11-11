---
title: "Writeups"
description: "Writeups from my evidence bench: an ITGC workpaper, SOC 2 and FedRAMP Moderate readiness assessments, vendor risk, and the Microsoft evidence layer, plus IR reports and CTFs."
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: false
showWordCount: false
---

The long form: how I worked a problem, what I decided and the evidence behind it. What lands here:

- Workpapers and assessments from the [lab]({{< ref "homelab" >}}): a control tested end to end, SOC 2 and FedRAMP Moderate readiness, a vendor risk assessment, and the Microsoft tooling that collects the evidence
- Incident response reports from retired Hack The Box and TryHackMe boxes and LetsDefend labs
- CTF postmortems and lessons learned, after each event closes

The sanitized workpapers and reports go on [GitHub](https://github.com/grcgeek). Nothing here comes from my employer.

## What's planned

Five lab projects, the lab build behind them, and practice investigations. Each project ends in at least one writeup here, with its workpaper linked.

| Writeup | Covers | Source |
|---|---|---|
| ITGC test of logical access | The risk and control matrix, how the population and sample were pulled from Entra ID, the test of design and operating effectiveness, and the finding memo, mapped to SOC 2 CC6 and 800-53 AC | Project&nbsp;1 |
| SOC 2 control matrix and readiness | The Trust Services Criteria mapped to the fictional company's controls, the gap list, the policies written to close it, and the request list an auditor would send | Project&nbsp;2 |
| FedRAMP Moderate readiness | The 800-53 Moderate baseline scoped to the system, the evidence requested per control, the readiness score and the POA&M, presented as an assessment rather than a build | Project&nbsp;3 |
| Third-party risk assessment | One vendor questionnaire reviewed, a SOC 2 report read critically, the bridge letter checked, and the risk rating with a decision memo | Project&nbsp;4 |
| Microsoft evidence layer | Compliance Manager assessments, scheduled access reviews and PIM, Azure Policy and Intune compliance, Purview Audit, and the Power Automate flows that file it all into an evidence library with a Power BI control-health view | Project&nbsp;5 |
| Lab foundation | The company network, its segments, and the firewall rules between them, exported as configuration evidence | Lab |
| Incident response reports | Full investigations from retired boxes and blue team labs (Hack The Box, TryHackMe, LetsDefend): summary, timeline, IOCs, remediation | Practice |
| CTF writeups | Challenges from scored competitions: approach, tools and what I would do differently. Published after an event closes, and only where its rules allow | {{< ctf-link >}} |

{{< soon title="Nothing published yet" status="drafting" >}}
First up is the ITGC workpaper, since it needs only the tenant, then the SOC 2 control matrix. The FedRAMP assessment and the evidence layer follow once those two are published.

In the meantime, the [Homelab]({{< ref "homelab" >}}) page tracks build status, and the [Blog]({{< ref "blog" >}}) carries the shorter reasoning behind decisions.
{{< /soon >}}
