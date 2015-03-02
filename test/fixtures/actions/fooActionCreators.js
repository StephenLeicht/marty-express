var Marty = require('marty');
var FooConstants = require('../constants/fooConstants');

var FooActionCreators = Marty.createActionCreators({
  id: 'foo',
  types: {
    recieveFoo: FooConstants.RECIEVE_FOO
  }
});

module.exports = FooActionCreators;