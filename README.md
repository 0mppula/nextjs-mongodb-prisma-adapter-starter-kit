# Nextjs Mongodb Prisma Adapter Starter Kit

<div>
    <a href="https://www.omarkraidie.com/projects">
        <img src="https://img.shields.io/badge/✨%20portfolio-1b1b1b?style=for-the-badge" />
    </a>
    <a href="https://www.linkedin.com/in/omarkraidie/">
        <img src="https://img.shields.io/badge/LinkedIn-%230073b1?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
</div>

## Nextjs Mongodb Prisma Adapter Starter Kit?

This application is a Next.js 14 starter kit for authentication, featuring NextAuth, Prisma Adapter, and MongoDB. It utilizes TypeScript, React, and Shadcn-UI, with styling provided by Tailwind CSS. Additionally, the starter kit includes protected routes, theme toggling, and a user account nav in the nav bar. Follow the instructions below to quickly get started with this repository and begin developing your app. If you find this project helpful, please consider starring ⭐ this repository!

---

## How to Set Up the Project Locally

### Prerequisites

-   Node.js version 18.18 or higher
-   MongoDB database
-   Google Provider: [Google Cloud](https://console.cloud.google.com/) project with an OAuth consent screen created.
-   GitHub Provider: GitHub [OAuth App](https://github.com/settings/developers)

### Cloning the repository

```shell
git clone https://github.com/0mppula/nextjs-mongodb-prisma-adapter-starter-kit.git
```

### Clone and rename the project as your own

```shell
git clone https://github.com/0mppula/nextjs-mongodb-prisma-adapter-starter-kit.git <new-repo-name>
```

```shell
cd <new-repo-name>
```

```shell
rm -rf .git
```

```shell
git init
```

Add the `<new-repo-name>` to your `package.json` files top level `name` before installing node modules.

```json
{
    "name": <new-repo-name>,
    ...
}
```

### Install packages

```shell
npm i
```

### `.env` File Configuration

In the root of the project create an `.env` file and declare the following variables:

```ts
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
NEXTAUTH_SECRET=
```

Populate the variables with the corresponding data.

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                                                                      |
| :------ | :----------------------------------------------------------------------------------------------- |
| `dev`   | Starts a development instance of the app                                                         |
| `lint`  | Runs ESLint to check for errors and warnings. Errors will fail the build, but warnings will not. |

---

## Tech Stack

### Technologies

-   **Next.js**: A React framework enabling server-side rendering and static site generation for high-performance web applications.
-   **Tailwind CSS**: A utility-first CSS framework for rapidly creating custom designs directly in your markup.
-   **MongoDB**: MongoDB is an open-source NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable, high-performance data management and real-time data processing.
-   **Prisma**: A next-generation ORM for Node.js and TypeScript that simplifies database access and management with an intuitive query API.
-   **NextAuth**: A complete open-source authentication solution for Next.js applications.
-   **Shadcn**: Different component/UI libraries used for design

### Framework

-   **Front-end Framework:** Next.js (v13.4.12)

### UI

-   **UI Library:** shadcn-ui
-   **UI Styling:** tailwindcss (v3.4.1) with tailwindcss-animate (v1.0.7)
-   **Theming:** next-themes (v0.3.0)
-   **Icons:** react-icons (v5.3.0) & lucide-react (v0.434.0)
-   **CSS Utility:** clsx (v2.1.1)
-   **Class Variance Management:** class-variance-authority (v0.7.0)

### Backend & Authentication

-   **Prisma ORM:** @prisma/client (v5.18.0) with prisma (v5.18.0) as a dev dependency
-   **User Authentication:** next-auth (v4.24.7) with prisma-adapter (v1.0.7)
-   **TypeScript:** (v^5)
-   **Type Definitions:** @types/node (v^20), @types/react (^18), @types/react-dom (v^18)

---

## License

This project is licensed under the MIT License.
