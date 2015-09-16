'use strict';

require(['/js/scene.js']);

class Importer {
  static importScene(data) {
    return new Scene(data);
  }
}
