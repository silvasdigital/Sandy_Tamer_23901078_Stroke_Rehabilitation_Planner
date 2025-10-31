import '../css/styles.css';
import Chart from 'chart.js/auto';

// --- MOCK REHAB DATA ---
const rehabData = {
  mild: {
    profile: 'Mild Stroke Impairment',
    summary: 'Focus: Regaining fine motor skills and high-level balance. Independent in daily living.',
    statusClass: 'status-mild',
    therapyHours: { Physical: 3, Occupational: 5, Speech: 2 },
    weeklyPlan: [
      '<strong>Mon:</strong> Occupational Therapy (AM)',
      '<strong>Tue:</strong> Physical Therapy (AM)',
      '<strong>Wed:</strong> Speech Therapy (AM)',
      '<strong>Thu:</strong> Occupational Therapy (AM)',
      '<strong>Fri:</strong> Physical Therapy (AM) & Occupational Therapy (PM)'
    ]
  },
  moderate: {
    profile: 'Moderate Stroke Impairment',
    summary: 'Focus: Regaining mobility and self-care skills. Moderate assist needed.',
    statusClass: 'status-moderate',
    therapyHours: { Physical: 6, Occupational: 6, Speech: 4 },
    weeklyPlan: [
      '<strong>Mon:</strong> Physical Therapy (AM), Occupational Therapy (PM)',
      '<strong>Tue:</strong> Speech Therapy (AM), Physical Therapy (PM)',
      '<strong>Wed:</strong> Occupational Therapy (AM)',
      '<strong>Thu:</strong> Physical Therapy (AM), Speech Therapy (PM)',
      '<strong>Fri:</strong> Physical Therapy (AM), Occupational Therapy (PM)'
    ]
  },
  severe: {
    profile: 'Severe Stroke Impairment',
    summary: 'Focus: Basic mobility, swallowing, and communication. High level of care required.',
    statusClass: 'status-severe',
    therapyHours: { Physical: 8, Occupational: 5, Speech: 7 },
    weeklyPlan: [
      '<strong>Mon:</strong> Physical Therapy (AM), Speech Therapy (PM)',
      '<strong>Tue:</strong> Occupational Therapy (AM), Physical Therapy (PM)',
      '<strong>Wed:</strong> Speech Therapy (AM), Physical Therapy (PM)',
      '<strong>Thu:</strong> Occupational Therapy (AM), Speech Therapy (PM)',
      '<strong>Fri:</strong> Physical Therapy (AM), Speech Therapy (PM)'
    ]
  }
};

// --- DOM ELEMENT SELECTORS ---
const elements = {
  statusCard: document.getElementById('status-card'),
  patientProfile: document.getElementById('patient-profile'),
  planSummary: document.getElementById('plan-summary'),
  weeklyPlanList: document.getElementById('weekly-plan-list'),
  btnMild: document.getElementById('btn-mild'),
  btnModerate: document.getElementById('btn-moderate'),
  btnSevere: document.getElementById('btn-severe')
};

let therapyChart; // To hold the chart instance

// --- FUNCTIONS ---

/**
 * Updates the entire dashboard with data from a rehab plan object.
 * @param {object} plan - The rehab plan data object.
 */
function updateDashboard(plan) {
  // 1. Update the status card
  elements.statusCard.className = `card ${plan.statusClass}`;
  elements.patientProfile.textContent = plan.profile;
  elements.planSummary.textContent = plan.summary;

  // 2. Update the Weekly Plan list
  elements.weeklyPlanList.innerHTML = ''; // Clear old plan
  plan.weeklyPlan.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    elements.weeklyPlanList.appendChild(li);
  });

  // 3. Update the Bar Chart
  updateChart(plan.therapyHours);
}

/**
 * Creates or updates the therapy hours bar chart.
 * @param {object} hours - The therapy hours data.
 */
function updateChart(hours) {
  const ctx = document.getElementById('therapyChart').getContext('2d');
  const labels = Object.keys(hours);
  const data = Object.values(hours);

  if (therapyChart) {
    therapyChart.data.labels = labels;
    therapyChart.data.datasets[0].data = data;
    therapyChart.update();
  } else {
    therapyChart = new Chart(ctx, {
      type: 'bar', // Horizontal bar chart
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Hours per Week',
            data: data,
            backgroundColor: ['rgba(0, 123, 255, 0.6)', 'rgba(30, 135, 85, 0.6)', 'rgba(245, 156, 0, 0.6)'],
            borderColor: ['rgba(0, 123, 255, 1)', 'rgba(30, 135, 85, 1)', 'rgba(245, 156, 0, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y', // This makes the bar chart horizontal
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            max: 10 // Set a max of 10 hours
          }
        },
        plugins: {
          legend: {
            display: false // Hide the legend
          }
        }
      }
    });
  }
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Load the moderate profile by default
  updateDashboard(rehabData.moderate);

  // Set up buttons to load different scenarios
  elements.btnMild.addEventListener('click', () => updateDashboard(rehabData.mild));
  elements.btnModerate.addEventListener('click', () => updateDashboard(rehabData.moderate));
  elements.btnSevere.addEventListener('click', () => updateDashboard(rehabData.severe));
});
