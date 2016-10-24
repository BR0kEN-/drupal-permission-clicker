# Drupal permission clicker
Simple scripts for setting up Drupal user roles.

## drupal-permission-clicker.js
Script provides functionality for setting up role permissions. Useful for sites without access to code and features when you need to setup a bunch of specific permissions for specific user roles.

### How to use
1. Open /admin/people/permissions page on a given Drupal site.
2. Open js console in your browser.
3. Copy-paste script into your browser.
4. Replace DATA_ARRAY placeholder with array of objects described in "Parameters" section.
5. Evaluate script in your browser's js console (hit "Enter" button).

### Parameters
You need to define one parameter for a script - data array. This is an array of objects like
```
{
  rid: ROLE_ID,
  permissions: [
    'some permission',
    ...
  ]
}
```

where:
1. `ROLE_ID` - integer, rid of needed user role,
2. `permissions` - array, bunch of needed permissions for a given role.

### Example
```
(function(data) {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].permissions.length; j++) {
      jQuery('input[name*="' + data[i].rid + '[' + data[i].permissions[j] + '"').attr('checked', 'checked');
    }
  }
}([
{
  rid: 1, // Anonymous.
  permissions: [
    "view files",
    "access content"
  ]
}, { // Authenticated.
  rid: 2,
  permissions: [
    "skip CAPTCHA",
    "view files",
    "access content",
    "edit webform components",
    "view encrypted values"
  ]
}]));
```

### Predefined permissions
Some of predefined roles with permissions you can find at `profiles` folder.

The only one difference between this two profiles is permission "access navbar" and "access toolbar". In custom sites usually navbar is used instead of default "toolbar" (which is used on gardens sites).

### Dependencies
Jquery is needed for running this script.

## drupal-permission-getter.js
Script provides functionality for getting role permissions. Useful when you need to dump permissions from standard site.

### How to use
1. Open /admin/people/permissions page on a given Drupal site.
2. Open js console in your browser.
3. Copy-paste this script into your browser.
4. Evaluate script in your browser's js console (hit "Enter" button).
After that you wil get a dump of set up roles and permissions.

### Dependencies
Jquery is needed for running this script.
