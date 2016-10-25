# Drupal permission clicker
Simple scripts for setting up Drupal user roles.

## drupal-permission-clicker.js
Script provides functionality for setting up role permissions. Useful for sites without access to code and features when you need to setup a bunch of specific permissions for specific user roles.

### How to use

1. Open /admin/people/permissions page.
2. Copy-paste next script into browser console:
```
var mapping = {
  anonymous: 1,
  authenticated: 2,
  admin: ROLE_ID,
  diff: ROLE_ID,
  editor: ROLE_ID,
  approver: ROLE_ID,
  reviewer: ROLE_ID
}, profile = 'custom';
(function(d, script) {script = d.createElement('script');script.src = 'https://rawgit.com/pavelfluffy/drupal-permission-clicker/master/drupal-permission-clicker.js';script.onload = function(){clickPermissions(mapping, profile);};  d.getElementsByTagName('head')[0].appendChild(script);}(document));
```
where `ROLE_ID` - rid of a given role, `profile` - profile with permissions.

Available profiles for now are:

1. custom - contains common permissions for custom sites.
2. gardens - contains common permissions for gardens sites.

### Dependencies
Jquery is needed for running this script.

## drupal-permission-getter.js
Script provides functionality for getting role permissions. Useful when you need to dump permissions from standard site.

### How to use

1. Open /admin/people/permissions page.
2. Copy-paste next script into browser console:
```
(function(d, script) {script = d.createElement('script');script.src = 'https://rawgit.com/pavelfluffy/drupal-permission-clicker/master/drupal-permission-getter.js';script.onload = function(){getPermissions();};  d.getElementsByTagName('head')[0].appendChild(script);}(document));
```

### Dependencies
Jquery is needed for running this script.
