# Angular Supabase Auth Boilerplate

This project is a boilerplate for Angular applications using Supabase for authentication. It provides a basic setup for user registration, login, and toast notifications.

## Features

- User registration
- User login
- Toast notifications for success and error messages
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or later)
- Angular CLI
- Supabase account and project

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/angular-supabase-auth-boilerplate.git
   cd angular-supabase-auth-boilerplate
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your Supabase project:
   - Create a new project in Supabase
   - Go to Project Settings > API and copy your `URL` and `anon` public API key
   - Create a `src/environments/environment.ts` file with the following content:
     ```typescript
     export const environment = {
       production: false,
       supabaseUrl: 'YOUR_SUPABASE_URL',
       supabaseKey: 'YOUR_SUPABASE_ANON_KEY'
     };
     ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## Project Structure

- `src/app/auth`: Contains the authentication component for user registration
- `src/app/login`: Contains the login component
- `src/app/toast`: Contains the toast notification component
- `src/app/supabase.service.ts`: Service for Supabase interactions
- `src/app/toast.service.ts`: Service for managing toast notifications

## Usage

1. Register a new user using the sign-up form
2. Log in with the registered user credentials
3. Use the application features (to be implemented)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Buy me a coffee☕️

buymeacoffee.com/mrtembo  
If you find this project useful, consider buying me a coffee (CursorAi Subscription)

## Contact

almaguero95@gmail.com
[www.linkedin.com/in/oliveralmaguer](https://www.linkedin.com/in/oliveralmaguer/)
