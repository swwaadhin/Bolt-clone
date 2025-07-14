# 📦 Changelog

All notable changes to the **Bolt** project will be documented in this file.

---

## [1.0.0] — 2025-04-25

### 🎉 Initial Release

🚀 First public release of **Bolt**, a modern prompt-to-code generator with instant live preview and downloadable boilerplate.

---

### ✨ Features

#### 🧠 Prompt-to-Code Generation
- Accepts natural language prompts from users.
- Sends them securely to the **Gemini LLM**.
- Returns and displays complete code snippets based on the prompt.

#### ⚡ Live Code Preview (via WebContainers)
- Executes code **entirely in-browser** using **StackBlitz WebContainers**.
- Enables instant testing without any local setup.

#### 📝 Rich Code Editor
- Built on **Monaco Editor** (same as VS Code).
- Includes syntax highlighting, real-time updates, and formatting.
- Enhances developer experience with responsive layout.

#### 📦 Export Options
- Allows users to **download** the generated codebase as a `.zip` file with a single click.

#### 🎨 UI/UX and Animations
- Built using:
  - **React**
  - **TypeScript**
  - **TailwindCSS**
  - **Framer Motion** (for smooth transitions and animations)
- Fully responsive, optimized for all major browsers and devices.

#### 🔧 Backend Services
- **Express.js** backend handles:
  - Prompt submission to Gemini API.
  - Result parsing, formatting, and error handling.

#### 🔐 Environment Configuration
- Requires a single environment variable in `.env`:
  - `GEMINI_API_KEY`: Your Gemini LLM API key.

---

🧪 **Tested & Verified on**:
- Chrome, Firefox, and Edge (latest versions)
- Mobile and tablet responsiveness
- Real-world prompts with varied complexity

---

📌 For future changes, enhancements, or fixes, follow semantic versioning: `MAJOR.MINOR.PATCH`.

