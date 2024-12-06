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

## Contributing
### Team Contribution Guide

Welcome to the **LawSoft** project! This guide is designed to help team members contribute to the repository smoothly and efficiently. Please follow the steps outlined below for contributing to the project.

---

### Table of Contents
1. [Clone the Repository](#clone-the-repository)
2. [Navigate to the Project Directory](#navigate-to-the-project-directory)
3. [Install Dependencies](#install-dependencies)
4. [Create a New Branch](#create-a-new-branch)
5. [Branch Naming Conventions](#branch-naming-conventions)
6. [Making Changes Locally](#making-changes-locally)
7. [Push Changes to Remote](#push-changes-to-remote)
8. [Create a Pull Request](#create-a-pull-request)
9. [Pull Updates from Main](#pull-updates-from-main)
10. [Resolve Merge Conflicts](#resolve-merge-conflicts)
11. [Code Reviews and Merging](#code-reviews-and-merging)


---

### Clone the Repository
Before you start working, clone the repository to your local machine:
```bash
git clone https://github.com/Project-LawSoft/LawSoft.git
```

---
### Navigate to the Project Directory
After cloning the repo, navigate to the project directory:

```bash
cd <project-directory>
```

###Install Dependencies
If the project requires dependencies, run the following command to install them:

```bash
npm install
```

---
### Create a New Branch
It is important to create a new branch before making any changes to the codebase:

```bash
git checkout -b <branch-name>

#### Example:

git checkout -b feature-add-login
```

---
### Branch Naming Conventions
Follow these naming conventions for your branches:

1. `feature-<feature-name>` - for new features.
2. `fix-<issue-name>` - for bug fixes.
3. `docs-<documentation-update>` - for documentation

`Branch Type`	`Example Name`
**New Feature**	`feature-add-login`
**Bug Fix**	`fix-login-error`
**Documentation Update**	`docs-update-readme`


---
### Making Changes Locally
Make necessary changes or add new features to the codebase.
After editing, stage the changes using the following command:

```bash
git add .

#### Commit your changes with a clear message:
git commit -m "Give a clear and detailed commit massage"
```

---
### Push Changes to Remote
Once you have committed your changes locally, push the branch to the remote repository:

```bash
git push origin <branch-name>

#### Example:
git push origin feature-add-login
```

---
### Create a Pull Request

1. Navigate to the GitHub repository.
2. Go to the Pull Requests section and click on New Pull Request.
3. Select the base branch as main and compare branch as your working branch.
4. Provide a description of your changes and submit the pull request.


---
### Pull Updates from Main
Every Time before start working on the project run this comment to ensure you have the latest changes from the main branch, run the following:

```bash
git pull origin main
```

---
### Resolve Merge Conflicts
If there are any merge conflicts, Git will notify you. Follow Git instructions to resolve these conflicts and continue with your changes.


---
### Code Reviews and Merging
1. Once your pull request is submitted, team members will review your changes.
2. Address any feedback provided.
3. Once approved, your pull request can be merged into the main branch.

----

### Code of Conduct
All contributors are expected to follow our Code of Conduct. Please ensure respectful and constructive interactions.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For any queries or feedback, feel free to reach out:

- Project Maintainer: Your Name
- GitHub: [Repository Link](https://github.com/AsedAliSekh/LawSoft.git)
- Start contributing to LawSoft and help modernize the legal system for better accessibility and efficiency!
