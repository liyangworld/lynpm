var _ = require('lodash');

var log = function(str){
	if (_) console.log('lodash加载完成！');
	console.log('传入的参数为：'+str);
}