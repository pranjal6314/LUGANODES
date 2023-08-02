<p align="center">
  <a href="https://luganodes-sab8.vercel.app/">
    <img src="https://github.com/pranjal6314/UseCaseofApiHub/assets/77271332/2de85cc8-52fd-49f0-9d9d-cdbfc52b524f" alt="LUGANODES">
  </a>

  <p align="center">
     <a href="https://luganodes-sab8.vercel.app/"><strong>WebSite</strong></a>
  </p>
  <p align="center">
  ·
  <a href="https://github.com/pranjal6314/LUGANODES/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D%3A+">Report a bug</a> 
  ·
  <a href="https://github.com/pranjal6314/LUGANODES/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFeat%5D%3A+">Request a feature</a>
  ·
  </p>
</p>

<!-- <p align="center">
    <a href="https://github.com/LUGANODES-org/LUGANODES/actions/workflows/build.yml"><img src="https://github.com/LUGANODES-org/LUGANODES/actions/workflows/build.yml/badge.svg" alt="Build"></a>
    <a href="https://github.com/LUGANODES-org/LUGANODES/actions/workflows/lint.yml"><img src="https://github.com/LUGANODES-org/LUGANODES/actions/workflows/lint.yml/badge.svg" alt="Lint"></a>
    <a href="https://github.com/pranjal6314/LUGANODES/deployments/activity_log?environment=Production"><img src="https://img.shields.io/github/deployments/pranjal6314/LUGANODES/production?label=Vercel%20Deploy&logo=vercel" alt="Deploy"></a>
   <a href="https://github.com/pranjal6314/LUGANODES/releases/latest"><img src="https://img.shields.io/github/v/release/pranjal6314/LUGANODES?label=Release" alt="Release"></a>
  </p> -->

<p align="center">
  <a href="https://github.com/pranjal6314/LUGANODES/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/pranjal6314/LUGANODES.svg?style=flat">
  </a>
  <a href="https://github.com/pranjal6314/LUGANODES/network/members">
    <img src="https://img.shields.io/github/forks/pranjal6314/LUGANODES?style=flat">
  </a>  
  <a href="https://github.com/pranjal6314/LUGANODES/stargazers">
    <img src="https://img.shields.io/github/stars/pranjal6314/LUGANODES?style=flat">
  </a>
  <a href="https://github.com/pranjal6314/LUGANODES/issues">
    <img src="https://img.shields.io/github/issues/pranjal6314/LUGANODES?style=flat">
  </a>
</p>

<details open="open">
  <summary><h3 style="display: inline-block">Table of Contents</h3></summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a>
      <ul>
        <li><a href="#-features">Features</a></li>
        <li><a href="#-tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## <img src="https://openclipart.org/download/307315/1538154643.svg" width="32" height="32"> About the project

The project aims to develop a web application that provides a flexible authentication system for users. The application allows users to sign up and log in using two different authentication methods

## 🛡️Features

### User Registration and Login:

- User-friendly registration and login interfaces for email/password authentication.
- Secure password hashing and encryption to protect user credentials.
- Account creation with verification emails to ensure valid email addresses.

### Web3 Authentication Integration:

- Seamless integration with Web3 wallets (e.g., MetaMask, Trust Wallet) for user login.
- Secure communication with the Ethereum network to verify wallet ownership.
- Ability for users to log in with a single click from their Ethereum wallets.

### JWT-Based Session Management:

- Implementation of a JSON Web Token (JWT) system to manage user sessions.
- Issuance of JWT tokens upon successful authentication for secure session handling.
- Token expiration and refreshing to maintain session security.

### Secure Storage of Credentials:

- Utilization of robust encryption techniques to securely store user credentials.
- Safe handling and storage of Web3 authentication-related data to protect user privacy.

### Authentication Portability:

- Easy switching between email/password and Web3 authentication methods.
- Users can choose their preferred authentication method and switch as needed.

### User Dashboard:

- Creation of an interactive and personalized user dashboard.
- Display user-specific information, such as profile details, account settings, and preferences.
- Options for users to manage their account information and update settings.

### Account Recovery Mechanism:

- Implementation of an email-based account recovery mechanism for email/password authentication.
- Secure password reset functionality through email verification.

### Google OAuth Integration:

- Integration of Google OAuth for additional authentication options.
- Users can choose to log in using their Google accounts for added convenience.

### Responsive Design:

- Ensuring the website is responsive and accessible across various devices and screen sizes.
- Mobile-friendly interface for users on smartphones and tablets.

### Security and Privacy:

- Adherence to best practices for data security and user privacy.
- Protection against common security vulnerabilities such as cross-site scripting (XSS) and cross-site request forgery (CSRF).

### Error Handling and User Feedback:

- Proper error handling and informative messages for users during authentication processes.
- User-friendly feedback to guide users through the registration and login processes.

### User Profile and Customization:

- Allow users to customize their profiles with avatars, usernames, and other optional details.
- Personalization options for users to enhance their experience on the website.

## ⚒⚙️ Tech Stack

<ul>
<li>Next.js</li>
<li>Tailwind CSS</li>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>

</ul>

## <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" width="32" height="32"> Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.

### Installation

Open the terminal in the folder in which you wish to clone the repository and enter the following command:

```
git clone https://github.com/pranjal6314/LUGANODES.git
cd LUGANODES
```

Install all the NPM packages:

```
npm i
```

In order to run the project in development mode use:

```
npm run dev
```

In order to build the project and run it, use:

```
npm run build
npm start
```

#### 1. Using Docker
In order to test our service we first need to build and run docker-compose. Docker-compose will automate the build and the run of our two Dockerfile.
To run these commands you must be in the repository’s root.
1. Build the Image
```bash
docker-compose build
```
2. Start the service
```bash
docker-compose up -d
```


> **Note that you will have to add your own `.env` file at the root directory and add your own environment variables for the project to build.**
> Following are the environment variables used:

- `MONGO_URI` - The MongoDB connection string
- `AUTH_SECRET` - The secret used when creating a session
- `NEXT_PUBLIC_HOST` - The domain name (usually http://localhost:3000)
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` - The Google OAuth Client ID and Client secret obtained from the [Google Cloud Console](https://console.cloud.google.com/)

## <img src="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2020/3/git-icon-1788c-1590702885345.png" width=32 height=32> Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project. [(Refer the get started instructions)](#-getting-started)
2. Create your Feature Branch. (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes. (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch. (`git push origin feature/AmazingFeature`)
5. Open a Pull Request.


###Screenshot🖼️
### For Docker
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/dc1c0e54-ec02-48ab-91eb-fd5f6f0d897c)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/70f17653-7b52-4fa4-a6c9-254669fe2c43)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/9ef0efa2-dd6b-4c52-b893-8f6591908e43)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/ff375b2e-79e5-4d0c-9686-72eccf381ef9)

### login with Metamask
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/ec08ef63-d926-41ad-a4d6-205258359275)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/01964a68-ac77-43c4-b63a-09d86f2b6ae1)

### With Google Auth
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/8491acd7-5ea9-4efb-b0d2-5aa054b8b6d2)

### Home Page
![image](https://github.com/pranjal6314/LUGANODES/assets/77271332/34d00d48-b44c-41b7-9563-44991e92bad1)

### After login with Metamask
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/28803fd4-4a38-4852-ae83-118b736188ab)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/a5d3af5c-ea7f-4dcf-b1dd-5f4ec8951a55)

![image](https://github.com/pranjal6314/ApiHub/assets/77271332/bf54fc77-f69b-43cb-8275-c9f462304a57)

### Again visit the profile - the password section disappear because the password was already put in, now only we can update the password
![image](https://github.com/pranjal6314/LUGANODES/assets/77271332/1d9e764a-c72d-4aab-8dc7-ac4220d197f5)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/5898fcb6-1fad-43ae-8a58-ca850f59f3a7)


### Now we can log in with the same email and password and the Metamask address is also connected to this account
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/1033fe9a-1f0d-47f8-a5e9-89d09d122a2a)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/7c0dc76c-0cb7-4424-bd12-4e7542d12d2b)
![image](https://github.com/pranjal6314/ApiHub/assets/77271332/ccebd83f-2bb8-4ffe-ab40-dffd24c9275e)

### The above-used account is only for demonstration purposes so don't try using the same credentials.❌
## License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/Team-Fourth-Dimension/FFCSeZ/blob/master/LICENSE) for more information.
