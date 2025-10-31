# Stroke Rehabilitation Planner

This project is an educational web application designed to demonstrate how a stroke patient's rehabilitation plan can be structured based on their impairment level. It is a non-functional, educational tool that uses pre-set, simulated data.

The application allows users to load one of three patient profiles (Mild, Moderate, or Severe Stroke) to see a sample weekly therapy schedule and a breakdown of recommended therapy hours.

## ✨ Features

- **Rule-Based Plans:** A simple rule-based system in JavaScript generates a unique plan for each of the 3 scenarios.
- **Dynamic Patient Profile:** The main status card changes color (Green, Yellow, Red) and text to reflect the patient's impairment level and care focus.
- **Therapy Visualization:** A horizontal bar chart (using Chart.js) provides a clear visual breakdown of the recommended weekly hours for Physical, Occupational, and Speech therapy.
- **Dynamic Schedule:** A sample 5-day weekly schedule is dynamically generated and displayed in a list.
- **Responsive Design:** The layout is mobile-friendly and centers content correctly on all screen sizes.
- **Modern Tech Stack:** Built with HTML, CSS, and JavaScript, and bundled with Webpack.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and npm (which comes with Node.js) installed on your system.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd stroke-rehab-planner
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages defined in `package.json`, including `chart.js`.
    ```bash
    npm install
    ```

### Running the Application

- **For Development:**
  This command starts a live development server and automatically opens the calculator in your browser.

  ```bash
  npm run start
  ```

- **For Production:**
  This command builds an optimized version of the application, ready for deployment. The optimized files will be placed in the `/dist` directory.
  ```bash
  npm run build
  ```
