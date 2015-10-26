if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to determine the location of an item in an array', function() {
    var b = a.indexOf(2)
    
  });

  it('you should be able to add the values of an array', function() {
    alert(eval(a.join('+')));
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    var result = arraysAnswers.remove(a, 2);

    
  });

  it('you should be able to remove all instances of a value from an array, returning the original array', function() {
    a.push( 2 );

    var result = arraysAnswers.removeWithoutCopy(a, 2);

    
  });

  it('you should be able to add an item to the end of an array', function() {
    var result = arraysAnswers.append(a, 10);

    
  });

  it('you should be able to remove the last item of an array', function() {
    var result = arraysAnswers.truncate(a);

    
  });

  it('you should be able to add an item to the beginning of an array', function () {
    var result = arraysAnswers.prepend(a, 10);

    
  });

  it('you should be able to remove the first item of an array', function () {
    var result = arraysAnswers.curtail(a);

    
  });

  it('you should be able to join together two arrays', function() {
    var c = [ 'a', 'b', 'c', 1 ];
    var result = arraysAnswers.concat(a, c);

  });

  it('you should be able to add an item anywhere in an array', function() {
    var result = arraysAnswers.insert(a, 'z', 2);

  });

  it('you should be able to count the occurences of an item in an array', function() {
    var result = arraysAnswers.count([ 1, 2, 4, 4, 3, 4, 3 ], 4);

  });

  it('you should be able to find duplicates in an array', function() {
    var result = arraysAnswers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

  });

  it('you should be able to square each number in an array', function() {
    var result = arraysAnswers.square(a);

    expect(result).to.have.length(4);
    expect(result.join(' ')).to.eql('1 4 9 16');
  });

  it('you should be able to find all occurrences of an item in an array', function() {
    var result = arraysAnswers.findAllOccurrences('abcdefabc'.split(''), 'a');

    expect(result.sort().join(' ')).to.eql('0 6');
  });

});
