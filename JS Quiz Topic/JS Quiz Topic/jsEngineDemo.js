 function baz() {
    console.log( 'Hello from baz' );
  }
  
  function bar() {
    baz();
  }
  
  function foo() {
    bar();
  }
  
  foo();