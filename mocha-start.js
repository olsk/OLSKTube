const mod = {

	uConfig (inputData = {}) {
		return Object.assign({
			ParamParent: {},
			ParamPlaylist: Math.random().toString(),
		}, inputData);
	},

};

Object.entries(mod).map(function (e) {
	return global[e.shift()] = e.pop();
});

Object.assign(exports, mod);
