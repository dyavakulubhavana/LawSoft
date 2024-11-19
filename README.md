# LawSoft

**LawSoft** is a MERN stack-based web application designed to simplify and modernize legal processes by bringing them online. It enables clients to file petitions, search for lawyers, and attend hearings online. Lawyers and judges can manage cases, submit documents, and conduct hearings efficiently through the platform. The system ensures fairness with automatic judge assignment and offers features like eKYC, document management, and a secure case library.

---

## **Features**

- **Client Features**:
  - Search and book appointments with lawyers based on specialization.
  - File petitions online with Aadhaar-based eKYC.
  - Submit documents and evidence online.
  - Attend hearings virtually or offline.
  
- **Lawyer Features**:
  - Manage appointments, cases, and client communications.
  - Approve petitions and submit legal documents.
  - Present evidence and participate in hearings online/offline.

- **Judge Features**:
  - View case details, schedules, and hearing dates.
  - Manage documents and case status.
  - Conduct online or offline hearings securely.

- **Additional Features**:
  - **Automatic Judge Assignment**: Assigns cases based on specialization and availability.
  - **Case Library**: Provides anonymized access to past cases for research purposes.
  - **Secure Communication**: End-to-end encryption for all sensitive data.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Dependencies](#dependencies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

---

## **Prerequisites**

Before running the project, ensure you have the following installed:
- **Node.js** (v14.17.0 or later)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)
- **Git** (for version control)
- **Aadhaar Authentication API Key** (for KYC functionality)

---

## **Dependencies**

The following dependencies are required for this project:

### **Frontend**:
- **React.js**: UI framework.
- **Axios**: For HTTP requests.
- **Tailwind CSS**: For styling.
- **WebRTC**: For real-time communication (online hearings).

### **Backend**:
- **Node.js with Express.js**: Backend server.
- **Socket.io**: For real-time notifications.
- **jsonwebtoken**: For secure authentication.
- **bcrypt.js**: For password hashing.

### **Database**:
- **MongoDB**: To store user and case data.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lawsoft.git
   cd lawsoft
   ```
### Step 2: Install Dependencies

#### For Frontend:
 ```bash
 npm install
 ```

### Step 3: Configure Environment Variables
Create a `.env` file in the `backend` directory with the following:

 ```bash
 MONGO_URI=<Your MongoDB URI>
 JWT_SECRET=<Your JWT Secret>
 AADHAAR_API_KEY=<Your Aadhaar API Key>
 ```
Create a `.env` file in the `frontend` directory (if required) for API configurations.

### Step 4: Start the Servers

#### Frontend:
 ```bash
 cd ./frontend
 npm run dev
 ```
### Step 5: Access the Application
Open your browser and visit: `http://localhost:5173`


### Usage
#### 1. Client:

- Register and log in to file petitions.
- Search for lawyers based on specialization.
- Attend hearings online using real-time video conferencing.
#### 2. Lawyer:

- View and manage assigned cases.
- Upload documentation and communicate with clients.
- Attend hearings virtually or offline.
#### 3. Judge:

- Review case details and schedules.
- Conduct secure hearings and manage case statuses.

### Contributing
We welcome contributions from the community! Follow these steps to contribute:

#### Step 1: Fork the Repository
Click the **"Fork"** button on the repository page to create your copy.

#### Step 2: Clone Your Fork
```bash
git clone https://github.com/AsedAliSekh/LawSoft.git
cd lawsoft
```
#### Step 3: Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```
#### Step 4: Make Your Changes
- Follow the coding standards and project structure.
- Test your changes locally to ensure they work as expected.
#### Step 5: Commit Your Changes
```bash
git add .
git commit -m "Add feature: [brief description of feature]"
```
#### Step 6: Push Your Changes
```bash
git push origin feature/your-feature-name
```
#### Step 7: Create a Pull Request
- Navigate to the original repository and create a pull request.
- Provide a detailed explanation of your changes.

### Code of Conduct
All contributors are expected to follow our Code of Conduct. Please ensure respectful and constructive interactions.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For any queries or feedback, feel free to reach out:

- Project Maintainer: Your Name
- GitHub: [Repository Link](https://github.com/AsedAliSekh/LawSoft.git)
- Start contributing to LawSoft and help modernize the legal system for better accessibility and efficiency!
