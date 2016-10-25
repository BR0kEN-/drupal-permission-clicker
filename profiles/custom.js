/**
 * @file
 * Custom permissions.
 */

var permissions = [{
  name: 'anonymous',
  permissions: [
    "view files",
    "access content"
  ]
}, {
  name: 'authenticated',
  permissions: [
    "skip CAPTCHA",
    "view files",
    "access content",
    "edit webform components",
    "view encrypted values"
  ]
}, {
  name: 'admin',
  permissions: [
    "use text format full_html",
    "administer menu",
    "access navbar",
    "administer nodes",
    "view own unpublished content",
    "view revisions",
    "revert revisions",
    "delete revisions",
    "edit own",
    "edit any",
    "delete own",
    "delete any",
    "view the administration theme",
    "access workbench",
    "view all unpublished content",
    "view moderation history",
    "view moderation messages",
    "use workbench_moderation my drafts tab",
    "use workbench_moderation needs review tab"
  ]
}, {
  name: 'diff',
  permissions: [
    'diff deployment plans',
    'view files',
    'access content',
    'view the administration theme'
  ]
}, {
  name: 'editor',
  permissions: [
    "view files",
    "use text format full_html",
    "administer menu",
    "access navbar",
    "access content",
    "view own unpublished content",
    "view revisions",
    "revert revisions",
    "create",
    "edit own",
    "edit any",
    "view the administration theme",
    "access workbench",
    "view all unpublished content",
    "view moderation history",
    "view moderation messages",
    "use workbench_moderation my drafts tab",
    "use workbench_moderation needs review tab",
    "moderate content from published to draft",
    "moderate content from draft to needs_review",
    "moderate content from needs_review to draft",
    "moderate content from unpublished to draft"
  ]
}, {
  name: 'approver',
  permissions: [
    "view files",
    "use text format full_html",
    "administer menu",
    "access navbar",
    "access content",
    "view own unpublished content",
    "view revisions",
    "revert revisions",
    "edit own",
    "edit any",
    "view the administration theme",
    "access workbench",
    "view all unpublished content",
    "view moderation history",
    "view moderation messages",
    "use workbench_moderation needs review tab",
    "moderate content from published to unpublished",
    "moderate content from needs_review to draft",
    "moderate content from needs_review to published"
  ]
}, {
  name: 'reviewer',
  permissions: [
    "administer menu",
    "access navbar",
    "view own unpublished content",
    "view revisions",
    "view the administration theme",
    "access workbench",
    "view all unpublished content",
    "view moderation history",
    "view moderation messages",
    "use workbench_moderation needs review tab"
  ]
}];
