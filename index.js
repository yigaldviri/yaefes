exports.get = function(whom=null) {
  if (typeof(whom) == 'string' && whom.toLowerCase().includes('yigal')) {
    return -100;
  }
  else return 0;
}
