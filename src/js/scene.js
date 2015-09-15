class Scene {
  constructor(data) {
    this.data_ = JSON.parse(data);
  }

  width() {
    return this.data_.width;
  }

  height() {
    return this.data_.height;
  }

  createRenderer() {
    return {
      render: function(data) {
        return new Promise((resolve, reject) => {
          resolve('whee');
//          reject(Error('blah'));
        });
      }
    };
  }
}
