---
title: 'Screenshots Are Not Evidence — Until You Document Them'
description: 'Professional standards for documenting screenshots in cybersecurity labs, investigations, and technical reporting.'
pubDate: '2026-02-26'
heroImage:  '../../assets/firewall-screenshot.png'
---

In cybersecurity, screenshots are often submitted as proof.

But a screenshot without explanation is not evidence.

It is a visual artifact with no analytical value.

Professional cybersecurity documentation requires structure, context, and interpretation. Whether you are conducting a vulnerability assessment, reviewing logs, analyzing firewall activity, or completing a lab assignment, your screenshots must function as defensible technical artifacts.

This article outlines the professional standard I expect in technical reporting.

---

# The Problem: Screenshots Without Analysis

Common issues in student and junior analyst reports:
- Images inserted without captions  
- No explanation of what we are seeing  
- No description of how the result was obtained  
- No timestamps  
- No tool versions  
- No connection to findings  
- No analysis  

A screenshot should never force the reader to guess.

If I have to interpret the image myself, the documentation is incomplete.

---

# The Professional Documentation Framework

Use this structure for every screenshot in technical reporting.

---

## 1. Caption (Formal Figure Label)

Each screenshot must include a descriptive figure label.

**Example:**

> **Figure 1: Firewall Log Showing Repeated Denied SSH Attempts**

The title should state what the image demonstrates — not simply “Firewall Screenshot.”

---

## 2. Context and Purpose

Explain:
- Why this screenshot is included  
- What event, configuration, or control it represents  
- How it supports the objective of the assignment or investigation  

This section tells the reader *why the image matters* before they examine it.

---

## 3. Step-by-Step Methodology

Document how the screenshot was generated.

Include:
- Tool name and version  
- Navigation path  
- Filters applied  
- Commands executed  
- Relevant configuration steps  

Professional reporting must be reproducible. If another analyst cannot replicate your process, the documentation is insufficient.

---

## 4. Annotations and Observations

Do not assume the reader will identify critical elements.

Explicitly call out:
- Source and destination IP addresses  
- Ports  
- Protocols  
- Timestamps  
- Status indicators  
- Error messages  
- Configuration values  

Highlight visually and explain in writing.

---

## 5. Analysis

This is where professionalism becomes evident. Do not describe, interpret.

Explain:
- Whether the activity represents expected behavior or an anomaly
- Why the pattern is significant  
- What it confirms about security controls  
- What risks remain  

Screenshots support analysis. They do not replace it.

---

## 6. Technical Details

Always include:
- Tool name  
- Version number  
- Log type or module  
- Date and time (with timezone)  

Precision builds credibility.

---

## 7. Redaction and Professional Presentation

Before submitting:
- Remove unnecessary desktop clutter  
- Crop to relevant sections  
- Redact sensitive information  
- Ensure image clarity  

Professional documentation reflects professional discipline.

---

# Example: Firewall Log Analysis

Below is an example of what proper documentation looks like.

---

![Firewall Log Viewer Showing Denied SSH Connections](/images/firewall-screenshot.png)
## Figure 1: Firewall Log Showing Repeated Denied SSH Attempts

### Context and Purpose
This log excerpt shows repeated inbound SSH connection attempts that were successfully blocked by the firewall. The objective is to validate that perimeter controls are functioning correctly and preventing unauthorized remote access.

### Methodology
1. Accessed the firewall log viewer interface.
2. Navigated to the denied connections summary.
3. Reviewed flagged IP entries.
4. Identified repeated attempts targeting Port 22.
5. Verified timestamps and action results.

### Observations
- **Source IP:** 185.123.45.67  
- **Destination Port:** 22 (SSH)  
- **Action:** Deny  
- **Geolocation:** Netherlands  
- **Timestamps:**  
  - 14:32:01  
  - 14:32:15  
  - 14:32:30  

The 14–15 second interval between attempts suggests automated credential testing rather than manual login attempts.

### Analysis
The repeated targeting of Port 22 within short intervals is consistent with automated brute-force behavior.

The firewall successfully denied all attempts, indicating:
- Proper rule configuration  
- Active enforcement  
- No successful SSH session establishment  

However, repeated attempts from a single source IP suggest the need for layered controls beyond simple blocking.

Blocking is effective. Defense-in-depth is stronger.

### Recommendations
1. Disable password-based SSH authentication.
2. Enforce key-based authentication.
3. Implement rate limiting for SSH connections.
4. Restrict SSH access to specific management IP ranges.
5. Enable alerting for repeated failed login attempts.

### Technical Summary
- Log Type: Denied Connections Summary  
- Service Targeted: SSH (Port 22)  
- Event Count: 3  
- Attack Window: 2025-01-19 14:32:01–14:32:30  
- Source Region: Netherlands  

# What Professional Reporting Looks Like

A properly documented screenshot should demonstrate:
- Evidence collection  
- Analytical reasoning  
- Control validation  
- Reproducibility  
- Risk assessment  

This is the difference between submitting images and submitting analysis.

If you are preparing for professional cybersecurity roles, begin documenting your work at this level now.

Your reports should reflect the standards of a security analyst — not just a student completing a lab.