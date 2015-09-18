angular.module('DemandSources_mp').factory('HelperService', [function() {

  this.getAlphabet = function getAlphabet() {
    var a = 97, alphabet = [];

    for (var i = 0; i < 26; i++) {
      alphabet.push(String.fromCharCode(a + i).toUpperCase());
    }

    return alphabet;
  };

  return this;

}]);
