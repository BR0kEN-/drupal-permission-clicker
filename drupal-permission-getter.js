/**
 * @file
 * Script provides functionality for getting role permissions.
 *
 * Useful when you need to dump permissions from standard site.
 */

function getPermissions() {
  var result = [];

  jQuery('input:checked').each(function() {
    var data = this.name.replace(']', '').split('[');

    if (data[0]) {
      if (!result[data[0]]) {
        result[data[0]] = {
          rid: data[0],
          permissions: []
        };
      }

      if (data[1]) {
        result[data[0]].permissions.push(data[1]);
      }
    }
  });

  console.log(JSON.stringify(result));
}
