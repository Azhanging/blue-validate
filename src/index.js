import Validate from './validate';

(function (global, factory) {
  module.exports = factory();
})(typeof window !== 'undefined' ? window : this, function () {
  return new Validate();
});
