# PremiumDeluxeMotorsport Angular Frontend

Welcome to the PremiumDeluxeMotorsport Angular frontend. This frontend is designed to interact seamlessly with the PremiumDeluxeMotorsport car dealer backend developed in .NET.

## Features

- **Catalog Viewing**: Browse through a variety of cars in our collection.
- **Purchase a Car**: Found something you like? Make it yours with our hassle-free purchase process.
- **Loan a Car**: Not ready to buy? Loan a car for a specified period.
- **User Registration**: Create your own account to track your interactions, purchases, and loans.
- **Admin Account**: Special administrative functionalities to manage the catalog and monitor user interactions.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Angular CLI: `npm install -g @angular/cli`
- A running instance of the PremiumDeluxeMotorsport .NET backend.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo-link/PremiumDeluxeMotorsport-Angular-Frontend.git
```

2. Navigate to the project directory:
```bash
cd PremiumDeluxeMotorsport-Angular-Frontend
```

3. Install the dependencies:
```bash
npm install
```

### Configuration

1. Update the `src/environments/environment.ts` file with the appropriate API endpoint to the .NET backend.

```javascript
export const environment = {
  production: false,
  apiEndpoint: 'http://your-dotnet-backend-url/api'
};
```

### Running the App

1. Launch the frontend:
```bash
ng serve
```

2. Open your browser and navigate to `http://localhost:4200`.

## Contribution

If you'd like to contribute to this project, please create a pull request. For major changes, please open an issue to discuss what you'd like to change.

## License

This project is licensed under the MIT License. See `LICENSE` file for details.
