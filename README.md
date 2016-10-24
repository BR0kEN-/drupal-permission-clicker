# Drupal permission clicker
Simple scripts for setting up Drupal user roles.

## drupal-permission-clicker.js
Script provides functionality for setting up role permissions. Useful for sites without access to code and features when you need to setup a bunch of specific permissions for specific user roles.

### How to use
Copy-paste next script into browser console:
```
var mapping = {
  anonymous: 1,
  authenticated: 2,
  admin: ROLE_ID,
  diff: ROLE_ID,
  editor: ROLE_ID,
  approver: ROLE_ID,
  reviewer: ROLE_ID
};
(function(d, script) {script = d.createElement('script');script.src = 'https://rawgit.com/pavelfluffy/drupal-permission-clicker/master/drupal-permission-clicker.js';script.onload = function(){clickPermissions(getDefaultPermissions(mapping));};  d.getElementsByTagName('head')[0].appendChild(script);}(document));
```
where `ROLE_ID` - rid of a given role.

### Dependencies
Jquery is needed for running this script.

## drupal-permission-getter.js
Script provides functionality for getting role permissions. Useful when you need to dump permissions from standard site.

### How to use
Copy-paste next script into browser console:
```
(function(d, script) {script = d.createElement('script');script.src = 'https://rawgit.com/pavelfluffy/drupal-permission-clicker/master/drupal-permission-getter.js';script.onload = function(){getPermissions();};  d.getElementsByTagName('head')[0].appendChild(script);}(document));
```

### Dependencies
Jquery is needed for running this script.
