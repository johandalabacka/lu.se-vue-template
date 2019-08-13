# Vue components for LU web template

## Example

```html
<template>
  <div>
    <lu-nav-mobile :menu="menu"/>
    <lu-header :navbarmenu="menu" :topmenu="menu"/>

    <lu-bread-crumb/>

    <lu-main :leftmenu="menu" lastUpdated="2019-06-25"
      pageManagerMail="john.doe@some.lu.se">
          <router-view/>
    </lu-main>
    <lu-footer/>
  </div>
</template>

<script>
import LuNavMobile from '@lu.se/vue-template/LuNavMobile'
import LuHeader from '@lu.se/vue-template/LuHeader'
import LuBreadCrumb from '@lu.se/vue-template/LuBreadCrumb'
import LuMain from '@lu.se/vue-template/LuMain'
import LuFooter from '@lu.se/vue-template/LuFooter'

import menu from './menu.js'

export default {
  name: 'App',
  data () {
    return {
      menu: []
    }
  },
  components: {
    LuNavMobile,
    LuHeader,
    LuBreadCrumb,
    LuMain,
    LuFooter
  },
  mounted () {
    this.menu = menu
  }
}
</script>
```
## Components

### LuNavMobile

props
    menu -- se menu example below

### LuHeader

props
    topmenu -- menu on top of page
    navbarmenu -- menu below header

### LuBreadCrumb

Uses router to create a bredcrump of current and all parent pages. This component is optional.

### LuMain

props
    leftmenu -- menu to the left (optional)
    lastUpdated -- date of last update
    pageManagerMail -- mail address of page manager

slots
    default -- content of page

### LuFooter

props
    contact -- Object
        name --
        box -- 
        zip --
        phone --
        mail -- 

    socialMedia - object with possible attributes. null if not shown
        {facebook: "https://facebook...", instagram: ..., linkedin: twitter: ..., youtube: ... }
    

## Menu example

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

## How-to

To use it in a project

### Install
yarn add '@lu.se/vue-template' or
npm add '@lu.se/vue-template'

### Install lu-template
Download https://samwebb.lu.se/bundle.zip unpack it and rename folder to lumall and put it in the same folder as index.html (public)

### index.html

```html
<!DOCTYPE html>
<html lang="sv">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Article Page: Default | Lunds universitet</title>
  <link media="all" rel="stylesheet" href="./lumall/styles/main.css">
  <link rel="apple-touch-icon" sizes="180x180" href="./lumall/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./lumall/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./lumall/favicon-16x16.png">
  <link rel="manifest" href="./lumall/site.webmanifest">
  <link rel="mask-icon" href="./lumall/safari-pinned-tab.svg" color="#875e29">
  <meta name="msapplication-TileColor" content="#875e29">
  <meta name="theme-color" content="#875e29">
</head>

<body>
  <div id="app"></div>

  <script src="./lumall/scripts/bootstrap.js" defer></script>
  <script src="./lumall/scripts/main.js" defer></script>
  <script src="./lumall/scripts/fontawesome.js" defer></script>
</body>
</html>


```