function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Invalid Inputs!');
      }
    }, Math.random() * 10000);
  });
}

addPromise(1, 3).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

addPromise('asef', 5).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

addPromise(6234, 7457).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

addPromise(234, '354235').then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

addPromise(1231, 457).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});
