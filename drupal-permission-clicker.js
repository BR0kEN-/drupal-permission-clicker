/**
 * @file
 * Script provides functionality for setting up role permissions.
 *
 * Useful for sites without access to code and features when you need to setup a bunch of specific permissions
 * for specific user roles.
 */

(function(data) {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].permissions.length; j++) {
      jQuery('input[name*="' + data[i].rid + '[' + data[i].permissions[j] + '"').attr('checked', 'checked');
    }
  }
}(DATA_ARRAY));
