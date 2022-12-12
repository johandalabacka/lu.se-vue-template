# Vue components for LU web template

This is the source for the node module @lu.se/vue-template https://www.npmjs.com/package/@lu.se/vue-template
For an example using this module see https://github.com/johandalabacka/vue-template-test

![Example page](media/components.png)


## Example

App.vue
```html
<template>
  <div>
    <lu-header
      :navbarmenu="menu"
      :topmenu="menu"
      :mobilemenu="menu"
      has-login
      logo-url="https://www.lth.se"
      :logo-path="`${baseUrl}lumall/images/logo/logo_lth_${$root.$i18n.locale}@1x.png`"
      :logo-title="$t('lthFull')"/>

    <!-- key is hack to redraw component then locale changes -->
    <lu-bread-crumb :key="$i18n.locale"/>

    <lu-main :leftmenu="menu" lastUpdated="2019-06-25" pageManagerMail="john.doe@lth.lu.se">
          <router-view/>
    </lu-main>
    <lu-to-top />
    <lu-footer
      :contact="{name: $t('lthFull'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se'}"
      :socialMedia="{
        facebook: 'https://www.facebook.com/lundstekniskahogskola',
        linkedin: 'https://www.linkedin.com/school/lunds-tekniska-högskola',
        instagram: 'https://www.instagram.com/lth_lunduniversity',
        twitter: 'https://twitter.com/lthinfo',
        youtube: 'https://www.youtube.com/user/LunduniversityLTH/featured'
        }"/>
      :logo-path="`${baseUrl}lumall/images/logo/logo_lth_footer_${$root.$i18n.locale}@1x.png`"
      :logo-title="$t('lthFull')"/>
  </div>
</template>

<script>
import '@lu.se/vue-template/icons'
import '@lu.se/vue-template/iconsSocialMedia'
import {LuHeader, LuBreadCrumb, LuMain, LuFooter, LuToTop} from '@lu.se/vue-template'

import menu from './menu.js'

export default {
  name: 'App',
  data () {
    return {
      menu: [],
      baseUrl: process.env.BASE_URL
    }
  },
  components: {
    LuHeader,
    LuBreadCrumb,
    LuMain,
    LuFooter
  },
  mounted () {
    this.menu = menu
  },
  i18n: {
    messages: {
      sv: {
        lthFull: 'Lunds Tekniska Högskola, LTH'
      },
      en: {
        lthFull: 'Faculty of engineering, LTH'
      }
    }
  }
}
</script>
```


## Components

LuHeader, LuBredCrumb, LuMain, LuFooter is to be at toplevel in your app.
The other components are used by them and you don't need to import them.

### LuHeader

This is the header of the page containing logo, search field, language switcher.
Optional menus one on the top and one below logo and search field.
Language switcher sets the key language in local storage to *sv* or *en*.

#### props

Name|Description|Default value
----|-----------|-------------
topmenu | menu on top of the page. If not set, will the menu not show| undefined
navbarmenu | menu below header. If not set, will the menu not show| undefined
mobilemenu | menu shown on mobile narrow pages | false
hasLogin | A login/logout button is added | false
isLoggedIn | Is user logged in (show login or logout) | false
avatar | show first two letters of string instead of logout icon
hasSearch | A search field is added | false
emptySearch | Search field is emptied after search | false
searchPlaceholder | Placeholder for search field | undefined
logoSrc | URL for the image | ""
logoTitle | title and alt text | ""
logoUrl | URL then clicking the logo  | ""
compact | Less padding on height | false

### events

Name|Payload|Description
----|-----------|-------------
@login | -- | User has clicked log in
@logout | -- | User has clicked log out
@search | "search string" | User has made a search

### LuBreadCrumb

Uses router to create a bredcrump of current and all parent pages. This component is optional.
It uses no props and takes all information from the router.

### LuMain

#### props

Name|Description|Default value
----|-----------|-------------
leftmenu | Menu to the left. If not set will the menu not show and content will use the whole width. | undefined
lastUpdated | Date of last update | undefined
pageManagerMail | Mail address of page manager | undefined
pageManagerNotice | Notice under the page manager / date | undefined
compact | Less padding on top | false

#### slots

Name|Description
----|-----------
default | content of page

### LuRow

A row with space for an optional right column. Is used inside LuMain. You can have several rows stacked on eachother.

#### slots

Name|Description
----|-----------
default | central content
right-column | content to the right. Goes below default content on smaller screens

### LuFooter

#### props

Name|Description|Default value
----|-----------|-------------
contact | Object with the following properties name, box (number), zip, phone and mail | undefined
socialMedia | object with possible attributes. null if not shown {facebook: "https://facebook...", instagram: ..., linkedin: twitter: ..., youtube: ... } | undefined
logoSrc | URL for the image | ""
logoTitle | title and alt text | ""
shortCuts | menu of shortcuts. Allways contain change language | null


### LuInfobox

A box which is usually inside the right-column slot of a LuRow

#### props

Name|Description|Default value
----|-----------|-------------
title | The title of the box | undefined

#### slots

Name|Description
----|-----------
default | content of the box

### LuSpinner

A spinner

#### props

Name|Description|Default value
----|-----------|-------------
text | text to show | undefined

### LuToTop

A button which is shown if page is scrolled a bit down (pageYOffset > 500).
No props or events.

## Menu example

Path is vue-router paths and url is an ordinary a href:s

```javascript
export default [{
  id: 'start',
  label: 'Start',
  path: '/'
},
{
  id: 'lu',
  label: 'LU',
  url: 'http://www.lu.se'
},
{
  id: 'page1',
  label: 'Page 1',
  path: '/page1'
},
{
  id: 'page2',
  label: 'Page 2',
  path: '/page2',
  children: [{
    id: 'page3',
    label: 'Page 3',
    path: '/page2/page3'
  },
  {
    id: 'page4',
    label: 'Page 4',
    path: '/page2/page4'
  },
  {
    id: 'google',
    label: 'Google',
    url: 'https://www.google.com'
  }]
}]
```

All items in menu should have a unique id, a label and a path (internal page) or url (external page).
In router definition if meta.title for a route is defined is it used as title of page instead of route's name.

## How-to

To use it in a project

### Install
yarn add '@lu.se/vue-template' or
npm add '@lu.se/vue-template'

### Install lu-template
Download https://samwebb.lu.se/bundle.zip unpack it and rename folder to lumall and put it in the public folder.

### index.html

```html
<!DOCTYPE html>
<html lang="sv">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Article Page: Default | Lunds universitet</title>
  <link media="all" rel="stylesheet" href="/lumall/styles/main.css">
  <link rel="apple-touch-icon" sizes="180x180" href="/lumall/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/lumall/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/lumall/favicon-16x16.png">
  <link rel="manifest" href="/lumall/site.webmanifest">
  <link rel="mask-icon" href="/lumall/safari-pinned-tab.svg" color="#875e29">
  <meta name="msapplication-TileColor" content="#875e29">
  <meta name="theme-color" content="#875e29">
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</body>
</html>


```