# 🏥 Patient Registration App

A frontend-only patient management application built with **Next.js App Router** and **PGlite** (SQLite in the browser using IndexedDB). It allows you to **Register, search, and view patients details** in a lightweight, fully client-side environment without requiring any server or external database.

---

## 🧩 Tech Stack

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PGlite (SQLite in browser)](https://electric-sql.com/docs/pglite)
- [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Features

- ✅ **Add Patient** – Register new patients with all relevant details like name, age, gender, contact info, etc.
- 🔍 **Search Patient** – Search by ID, first name, last name, or mobile number using SQL queries.
- ✏️ **Update Patient** – Edit existing patient details directly from the patient Deatil view.
- 🗑️ **Delete Patient** – Remove patient records securely with confirmation prompts.
- 💾 **Local Data Persistence** – All patient data is saved in the browser via PGlite (IndexedDB), even after page refresh, also works in different tabs synchronously.
- 🧠 **Smart Query Builder** – Dynamically builds SQL `WHERE` clauses based on input fields.
- ⚡ **Fast & Offline** – Works offline after initial load; no backend or API required.
- 🎨 **Responsive UI** – Styled with Tailwind CSS for a clean, modern interface.

---

## 🧗 Challenges Faced During Development

### Tab Synchronization Issue

Initially, I used `localStorage` along with the `storage` event to synchronize patient data across multiple browser tabs. However, this approach had a significant limitation:

- The `storage` event does **not trigger in the same tab** where the data is modified.
- This led to **inconsistent state updates**, especially when multiple tabs were open.

### ✅ Solution – BroadcastChannel API

To address this, I implemented the `BroadcastChannel` API.

- It enables **real-time communication between all browser contexts** (tabs, windows, iframes) of the same origin.
- Using this, I broadcasted a message whenever patient data was added or updated.
- Other open tabs listen for this broadcast and re-fetch the data accordingly.

This ensured **smooth and consistent data synchronization** across all tabs without any race conditions or stale data issues.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itz-srijan/Patient-Registration.git
cd Patient-Registration
```
