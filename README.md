# DotnetVite Demo App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This demo application showcases the integration of ASP.NET Core with Vite and Vue.js, demonstrating a powerful approach to modern web development using .NET.

## 🚀 Features

- **ASP.NET Core** backend
- **Vue.js** frontend with **Vite** for blazing fast builds
- **TypeScript** support
- **Razor Pages** integration
- **cshtml.ts files** as entry points for Razor views

## 🌟 Key Highlight: cshtml.ts Integration

One of the standout features of this demo is the ability to use `cshtml.ts` files as entry points for Razor views. This innovative approach offers several benefits:

1. **Type Safety**: Leverage TypeScript's strong typing in your Razor views.
2. **Modern JavaScript**: Use the latest ECMAScript features in your view-specific scripts.
3. **Bundling**: Vite automatically bundles your `cshtml.ts` files, optimizing performance.
4. **Hot Module Replacement (HMR)**: Enjoy fast, efficient development with HMR support.

### How it works:

1. Create a `[ViewName].cshtml.ts` file alongside your Razor view.
2. Write your TypeScript code in this file.
3. The build process will automatically bundle this file and make it available to your Razor view.

Example:
```typescript
// Index.cshtml.ts
console.log('This script is specific to the Index view!');
```

## 🛠️ Setup and Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `dotnet restore` to restore .NET dependencies
4. Run `npm install` or `pnpm install` to install frontend dependencies
5. Use `dotnet run` to start the application

## 📚 Learn More

For more information on the technologies used in this demo:

- [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).