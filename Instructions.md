# 🏥 Patient Registration App

A frontend-only patient management application built with **Next.js App Router** and **PGlite** (SQLite in the browser using IndexedDB). It allows you to **Register, search, and view patients details** in a lightweight, fully client-side environment without requiring any server or external database.

---

## ✨ Features

- ✅ **Add Patient** – Register new patients with all relevant details like name, age, gender, contact info, etc.
- 🔍 **Search Patient** – Search by ID, first name, last name, or mobile number using SQL queries.
- 💾 **Local Data Persistence** – All patient data is saved in the browser via PGlite (IndexedDB), even after page refresh, also works in different tabs synchronously.
- 🧠 **Smart Query Builder** – Dynamically builds SQL `WHERE` clauses based on input fields.
- ⚡ **Fast & Offline** – Works offline after initial load; no backend or API required.
- 🎨 **Responsive UI** – Styled with Tailwind CSS for a clean, modern interface.

---

## 🧩 Tech Stack

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PGlite (SQLite in browser)](https://electric-sql.com/docs/pglite)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itz-srijan/Patient-Registration.git
cd Patient-Registration
