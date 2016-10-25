/**
 * @file
 * Script provides functionality for setting up role permissions.
 *
 * Useful for sites without access to code and features when you need to setup a bunch of specific permissions
 * for specific user roles.
 */

/**
 * API function for determining hosted url of js file.
 */
function getScriptLocation(filename) {
  var scriptElements = document.getElementsByTagName('script');

  for (var i = 0; i < scriptElements.length; i++) {
    var source = scriptElements[i].src;

    if (source.indexOf(filename) > -1) {
      return source.substring(0, source.indexOf(filename));
    }
  }

  return false;
}

/**
 * API function for clicking permissions.
 */
function clickPermissions(mapping, profile) {
  var scriptLocation = getScriptLocation('drupal-permission-clicker.js');

  if (scriptLocation) {
    // Load profile script.
    jQuery.getScript(scriptLocation + '/master/profiles/' + profile + '.js', function() {
      // Map role id to role name.
      for (var k = 0; k < permissions.length; k++) {
        permissions[k].rid = mapping[permissions[k].name];
      }

      if (permissions) {
        // Walk through all permissions and click them.
        for (var i = 0; i < permissions.length; i++) {
          if (permissions[i].rid) {
            for (var j = 0; j < permissions[i].permissions.length; j++) {
              jQuery('input[name*="' + permissions[i].rid + '[' + permissions[i].permissions[j] + '"').attr('checked', 'checked');
            }
          }
        }

        console.log('Next permissions has been set up', permissions);
      }
    });
  }
  else {
    console.log('Error: Can not load ' + profile + '.js file');
  }
}
