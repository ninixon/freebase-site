var METADATA = {
  "mounts": {
    "libraries": "//2.libraries.apps.freebase.dev", 
    "site": "//33.site.www.branches.svn.freebase-site.googlecode.dev", 
    "service": "//service"
  }, 
  "app_tag": null, 
  "app_version": 37, 
  "app_key": "apps"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");
