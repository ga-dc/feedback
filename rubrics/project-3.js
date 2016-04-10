module.exports = {
  header: "# Project 3 Evaluation\n",
  labels: [
    "Incomplete",
    "Progressing",
    "Performing",
    "Excelling"
  ],
  criteria: {
    "Back-end Technology": [
      "No back-end present, or unable to persist data and return JSON.",
      "Lacking more than one model",
      "Includes 2 models",
      "Includes many well-structured models, and advanced functionality such as authorization, 3rd-party API integration, or other technology not covered in class"
    ],
    "Front-end Technology":[
      "No use of Angular code",
      "Basic front-end with at least 1 Angular controller",
      "Front-end makes appropriate use of Angular controllers and states with ui-router. Includes 1 custom directive",
      "In addition to appropriate Angular use, includes 1 Angular topic not covered in class. Makes use of multiple custom directives"
    ],
    "Code Quality": [
      "Minimal functional code is present",
      "Code lacks proper formatting, includes commented out, non-functional code, or otherwise contains major issues of quality (DRY, naming, etc)",
      "Code is well-formatted, well-named, and contains few style / quality issues",
      "No major code quality issues, makes use of Ruby best practices appropriately, and follows techniques such as separation of concerns, abstraction, and encapsulation"
    ],
    "Deployment and Functionality":[
      "Application is not deployed, and contains minimal functionality",
      "Application contains minimal functionality, but deployment is non-functional, or application contains major errors when used",
      "Application contains no major errors, is deployed correctly, and contains a custom Heroku app name appropriate for the app.",
      "App has advanced functionality that works with minimal errors, and may make use of advanced tools such as APIs, plugins, etc. App may be deployed to a service other than Heroku (e.g. Digital Ocean)."
    ],
    "Planning / Process / Submission":[
      "No submission received, or submission does not contain basic documentation of planning (ERD, wireframes, commit history, etc)",
      "App is submitted, with basic evidence of planning. Documentation exists, but lacks common areas such as setup instructions, description of application functionality and link to deployed application",
      "Submission contains clear evidence of planning, adequate documentation, include all from previous category, as well as additional information such as unsolved issues.",
      "Submission includes everything in previous category, as well as evidence of proper teamwork, such as feature branching, code review, github issue / user story tracking, and justification of technical decisions."
    ]
  }
}
