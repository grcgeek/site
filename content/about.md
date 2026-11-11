---
title: "whoami"
description: "Christian Carrasco: ten years in IT operations and security, now IT risk and controls in security GRC at a cybersecurity company. How I work, and who I am outside of it."
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
showWordCount: false
showPagination: false
layout: "about"   # layouts/_default/about.html, the spotlight theme
room: "lab"
---

{{< intro image="img/author.jpg" alt="Christian Carrasco" >}}
I'm Christian. For ten years I worked where IT operations and security meet: keeping enterprise systems running, keeping them defensible, and staying steady on the call when something big broke. I ran the systems auditors test. Now I'm on the other side of the request, doing IT risk and controls in security GRC at a cybersecurity company in Orlando.
{{< /intro >}}

## Why controls, after operations

In every role I held, compliance showed up as work, not as a title. At Cigna it was the access records an auditor asked for. At TelevisaUnivision it was testing controls against NIST CSF, mapping them to PCI DSS, and chasing findings through ServiceNow until someone either fixed them or signed the risk acceptance. At Toyota it was the ISO 27001 review, the change board, the SLA breaches that needed a root cause and an owner, and client AWS accounts reviewed for the misconfigurations nobody had time to look at.

That was the part of each job I kept volunteering for, so I made it the job. Operations leadership turned out to be the right preparation: getting evidence out of busy teams, explaining a finding to someone who does not want to hear it, and tracking remediation until it is actually closed are most of what a controls analyst does all day. What I'm still adding is depth in the frameworks themselves, SOC 2 and FedRAMP above all, and I'm adding it on a schedule: the SSCP in November, the CISSP next, and a set of workpapers in the [lab]({{< ref "homelab" >}}) so the method shows up as evidence, not as a claim.

The dates, titles, and details are on my [resume]({{< ref "resume" >}}). This page is about how I work, and who I am outside of it.

## How I work

{{< principles >}}
**A finding is only as useful as the owner it reaches.** At TelevisaUnivision, my part of the program came after the test: tracing each finding to the team that owned the system and following exception requests through to a decision. At Toyota, the same discipline carried into cloud assessments, where misconfigurations stayed on my list until they were closed.

**Evidence should survive someone who wasn't in the room.** The AWS cost and tagging report at Toyota replaced a manual pull that cost a team 25 to 30 hours a week, and the point was not the hours. It was that leadership could review the result without trusting the person who ran it. A workpaper should hold up the same way.

**The same outage has three versions.** Engineers need the technical picture, executives need the business impact and a restoration estimate, and the service desk needs something it can actually say. Audit findings work the same way. Getting each version right is most of the job in any senior role.

**The underrated part of an incident is the review afterward.** For over five years I assigned severity, coordinated the response, and decided when to escalate when production went down. The work that lasts is the post-incident review that stops the same failure from paging anyone again.

**A good team spends its time on what matters.** Leading the engineering team meant a shared backlog, an on-call rotation, and SLA commitments somebody is measuring. The job is triage discipline, clear ownership, and removing the recurring noise.
{{< /principles >}}


## Off the clock

{{< off-clock >}}

I've known my beautiful wife for quite a while, and winning her over took longer than any incident I ever managed. Once I finally did, we dated for four years, and as of 2026 we've been happily married for more than three. We recently welcomed our son, and I am grateful to the Lord Jesus Christ for blessing us with him.

The house is rarely quiet. Two doodles run the place, along with a parrot that talks, at least when it isn't busy inventing new sounds and dialects.

Where we live, natural springs are never far away. When the Florida heat and humidity settle in, a cold, clear spring is the best part of the weekends, and it hasn't gotten old yet.

If the parrot ever learns a new word worth sharing, you'll hear about it here first.

## What you'll find here

The [Homelab]({{< ref "homelab" >}}) page is my evidence bench: a fictional SaaS company audited against SOC 2 and FedRAMP Moderate on my own Microsoft tenant and hardware, where I go deeper than the day job allows and publish the sanitized workpapers on [GitHub](https://github.com/grcgeek). Each finished piece becomes a [writeup]({{< ref "writeups" >}}). None of it comes from my employer, its customers or its auditors.

{{< connect-mini url="https://linkedin.com/in/cybercc" label="Connect on LinkedIn" >}}
Thanks for stopping by. Let's connect!
{{< /connect-mini >}}
