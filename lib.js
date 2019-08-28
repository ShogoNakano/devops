function calc(height) {
    return (height - 100) * 0.9;
  }
  
  // there is test script
  
  const t1 = calc(180);
  
  if (t1 !== 70) {
    throw new Error('test failed');
  }
