# Sitebuilder

Website builder with Next.js and Contentful

## Folder Structure

- **components**: reusable components
  - **_wrappers_**: components that are used like intermediates between Contentful data and components from Labs UI
- **contentful**: functions related to contentful data fetching
  - **_generated-types_**: types generated in Contentful web app
  - **_parsers_**: functions that parse the response of contentful to reduce amount of data
- **fonts**: global and custom typographies
- **pages**: all pages of the website
- **public**: static files
- **styles**: styling files
- **types**: types files
- **utils**: utils functions

## Documentation

[Migration Guide](#)

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

`CONTENTFUL_SPACE_ID`

`CONTENTFUL_ACCESS_TOKEN`

`CONTENTFUL_SPACE_ENV`

## Tech Stack

**Client:** Next.js, React

**Styling:** TailwindCSS, ABRA, Labs UI

**CMS:** Contentful
