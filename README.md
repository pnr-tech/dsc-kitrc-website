# DEVELOPER STUDENT CLUBS - KITRC

![DSC-Fullname](https://user-images.githubusercontent.com/41849970/68694056-72f74200-059e-11ea-85fe-76b37be8e5d5.png)


This Website is developed using GatsbyJS and deployed on Netlify.   [![Netlify Status](https://api.netlify.com/api/v1/badges/01d5b321-ca03-4eb0-b326-c2afa8f159c9/deploy-status)](https://app.netlify.com/sites/dsckitrc/deploys)

## Want To Contribute, Here's How to do it:

### Clone The Repo using the following command:

    git clone https://github.com/kalol-institute-of-technology/dsc-kitrc-website
    
### Change Directory:
  
    cd dsc-kitrc-website
    
### Install the dependencies:

    yarn install

### Run the development server:

    yarn dev

### Production build to `/public`:

    yarn build

### Cleanup cache (often fixes misc errors when run before `yarn dev`):

    yarn clean

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
