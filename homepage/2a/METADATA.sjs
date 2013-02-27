var METADATA = {
  "app_tag": "2a", 
  "app_key": "homepage", 
  "extensions": {
    "gif": {
      "media_type": "image/gif", 
      "handler": "tagged_static"
    }, 
    "mf.css": {
      "media_type": "text/css", 
      "handler": "tagged_static"
    }, 
    "jpg": {
      "media_type": "image/jpg", 
      "handler": "tagged_static"
    }, 
    "omf.js": {
      "media_type": "text/javascript", 
      "handler": "js_manifest"
    }, 
    "mf.js": {
      "media_type": "text/javascript", 
      "handler": "tagged_static"
    }, 
    "omf.css": {
      "media_type": "text/css", 
      "handler": "css_manifest"
    }, 
    "png": {
      "media_type": "image/png", 
      "handler": "tagged_static"
    }
  }, 
  "ttl": -1, 
  "mounts": {
    "lib": "//3d.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": "2"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);