# Instructions for Claude-Dev

1. Use globby to locate .cshtml.ts files in the views folder
2. Append each of these as an entry point in vite.config.ts
3. Define this function and any necessary types in vite.utils.ts
4. Preserve existing entry points in vite.config.ts
5. Build the project with the build:dev script using pnpm, fix any issues until the build is clean and the entry points are created

* Append a log of your priorities, considerations and operations here as you go along.

# Log of Operations

1. Analyzed the task and set clear goals.
2. Examined the vite.config.ts file to understand the current configuration.
3. Examined the vite.utils.ts file and found that the necessary function for locating .cshtml.ts files was already implemented.
4. Modified vite.config.ts to include new entry points while preserving existing ones:
   - Imported the getViewEntryPoints function from vite.utils.ts
   - Added viewEntryPoints to the input object in rollupOptions
5. Attempted to run the build:dev script, encountered an error due to missing 'globby' package.
6. Installed the 'globby' package using pnpm.
7. Attempted to run the build:dev script again, encountered an error with 'globby' import.
8. Modified vite.utils.ts to use a named import for 'globby' instead of a default import.
9. Successfully ran the build:dev script, confirming that all entry points were created and the build was clean.
10. Updated the getViewEntryPoints function in vite.utils.ts to incorporate the parent folder name into the entry point key.
11. Tested the build process again to ensure the changes work correctly.
12. Further updated the getViewEntryPoints function to generate lowercase entry point names with hyphens separating the segments and place them in a 'razor' folder.
13. Ran the build:dev script to verify the latest changes, confirming that the entry points are now created in the correct format (e.g., razor/home-index.js).

## Priorities and Considerations

1. Ensuring that all .cshtml.ts files in the Views folder were included as entry points.
2. Preserving the existing 'main' entry point in vite.config.ts.
3. Maintaining the structure and functionality of the vite.config.ts file while adding new features.
4. Resolving dependency issues (installing and correctly importing 'globby').
5. Verifying the successful build of the project with all required entry points.
6. Addressing the potential issue of multiple views with the same name by incorporating the parent folder name into the entry point key.
7. Ensuring that the updated entry point discovery process works correctly and generates unique keys for each view.
8. Modifying the entry point naming convention to use lowercase names with hyphens separating segments.
9. Placing the bundled files associated with dotnet views in a 'razor' folder in the output.

The project now successfully builds with all the required entry points, including the .cshtml.ts files from the Views folder. The entry point keys now incorporate the parent folder name, use lowercase names with hyphens, and are placed in a 'razor' folder, allowing for clear organization and differentiation between views with the same name in different folders.
