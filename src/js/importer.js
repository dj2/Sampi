'use strict';

require(['/js/importers/scene_importer.js']);

class Importer {
  static importScene(file) {
    return new Promise((resolve, reject) => {
      var req = new XMLHttpRequest();
      req.open('GET', file);

      req.onload = () => {
        if (req.status === 200) {
          resolve({
            src: req.response,
            scene: (new SceneImporter(req.response)).import()
          });
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error("network error"));
      };

      req.send();
    });
  }
}
