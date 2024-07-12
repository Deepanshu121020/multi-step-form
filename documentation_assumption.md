Assumptions or Decisions:

Form Validation Strategy:
Decision: Implemented basic client-side form validation using local state and error handling.
Reason: Chose this approach for simplicity and immediate user feedback without relying on third-party libraries.

Persistence Mechanism:
Decision: Used local storage to persist form data across steps and sessions.
Assumption: Assuming the form data doesn't contain sensitive information and local storage provides a quick and easy solution for this demonstration.

Component Structure:
Decision: Structured the project with separate components (PersonalInfo, AddressInfo, Confirmation) for each form step.
Reason: Promotes reusability and modularity, making each component focused on a specific task.

Styling Framework:
Decision: Utilized Material-UI for styling and UI components.
Reason: Material-UI offers a rich set of pre-built components and styles that align well with modern design standards and ease of use.
