This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Web3 DApp Interface

This project demonstrates the creation of a simple React.js/Next.js application simulating interaction with a Web3 DApp frontend. The primary focus is on state management, routing, and child-to-parent data communication.

---

## Requirements

### Pages

1. **Home Page (Index Page)**  
   - **Header**: Display a title: **"Welcome to Web3 DApp Interface"**.  
   - **Connect Wallet Button**:  
     - Use WalletConnect or another library to connect a wallet.  
     - Fetch and save the wallet address in global state.  
   - **Next Button**:  
     - Navigates to the **Interact Page**.  
     - Ensure the wallet address is shared between pages using a global state or React Context.  

2. **Interact Page**  
   - **Header**: Display a title: **"Interact with Smart Contract"**.  
   - **Wallet Address Display**:  
     - Display the wallet address retrieved from the Home page.  
   - **Transaction Form**:  
     - Fields:
       - **Transaction Amount**: Input for the amount to send.  
       - **Recipient Address**: Input for the recipient's wallet address.  
       - **Message**: Optional input field for a message.  
     - **Submit Transaction Button**:  
       - Submit the form data from the child component (`TransactionForm`) to the parent component on this page.  
       - Display the submitted data in the parent component after submission.  
   - **Return Button**:  
     - Navigate back to the Home page.

---

## Implementation Details

### Functional Requirements

1. **State Management**  
   - Use React Context or Next.js's global state management to persist and share the wallet address between pages.  
   - Centralize wallet address state for accessibility across the application.  

2. **Child-to-Parent Communication**  
   - The `TransactionForm` component manages form inputs and sends the data to its parent component using a callback function.  

3. **Routing**  
   - Use Next.js routing for navigation between pages.  

4. **Error Handling**  
   - Prevent navigation to the Interact page without a connected wallet.  
   - Validate form inputs before submission, ensuring all required fields are filled.  

---

## Task Breakdown

### Home Page

- **Connect Wallet Button**:
  - Trigger wallet connection using a Web3 library.
  - Save the wallet address in global state.  

- **Next Button**:
  - Validate that the wallet is connected before navigating to the Interact page.  

### Interact Page

- **Wallet Address Display**:
  - Retrieve and display the wallet address stored in the global state.  

- **Transaction Form**:
  - Implement a `TransactionForm` component to:
    - Collect input values for the transaction.  
    - Validate the inputs.  
    - Send form data back to the parent component for display.  

- **Return Button**:
  - Navigate back to the Home page.

---

## Evaluation Criteria

1. **UI Development**  
   - Basic and functional UI elements as per requirements.  

2. **State Management**  
   - Effective use of React Context or global state to maintain and share wallet address between pages.  

3. **Child-to-Parent Data Flow**  
   - Proper communication of data from the `TransactionForm` child component to its parent.  

4. **Routing and Navigation**  
   - Proper implementation of Next.js’s routing system for navigation between pages.  

5. **Web3 Context**  
   - Integrate wallet connection functionality and manage Web3 interactions.

---

## Guidelines

- Prioritize completing functional requirements before improving design.  
- Test wallet address sharing between pages and data flow between components.  
- Ensure all fields are validated, and provide user feedback for errors.  

---

## Libraries & Tools

- **Next.js** for routing and server-side rendering.  
- **React Context** for state management.  
- **WalletConnect** (or similar) for Web3 wallet integration.  
- **Tailwind CSS** (optional) for styling.

---

## Run Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/isreallee82/next_app

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
