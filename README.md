# React CRUD Application with Next.js, TypeScript, Prisma, and SQLite

This project is a CRUD (Create, Read, Update, Delete) application built using React, Next.js, TypeScript, Prisma, and SQLite. It demonstrates a user registration system where users can be created, listed, updated, and deleted.

## Features

- **React** for building the user interface.
- **Next.js** for server-side rendering and routing.
- **TypeScript** for type safety and improved developer experience.
- **Prisma** as the ORM (Object-Relational Mapping) tool for database operations.
- **SQLite** as the database.
- **Dynamic Avatars** for users with randomly generated avatars using `randomuser.me`.


## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn installed

### Installation

1. Clone the repository:
 ```bash
 git clone https://github.com/allandefranca/app-bd.git
 cd app-bd
 ```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up Prisma:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

