const chai = require('chai');
const  jsdom = require('jsdom');
const  fs = require('fs');

describe('our first test', () =>{
  it('should pass', () => {
    chai.expect(true).to.equal(true);
  });
});

describe('index.html', () =>{
  it('should say hello',(done) => {
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      chai.expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});
