//a datastore used to manage application state
let Display = {
  locations: [],
  informations: [],
  modal: {},
  information: function (callback) {
    this.informations.push(callback);
  },

  updateInfos: function () {
    this.informations.forEach((callback) => {
      callback();
    });
  },

  updateModal: function (location) {
    this.modal = location;
    this.locations.find((obj, i) => {
      if (obj.id === location.id) {
        return true;
      } else {
        return false;
      }
    });
    this.updateInfos();
  }
};

export { Display };
