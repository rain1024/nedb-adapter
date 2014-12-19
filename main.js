var Nedb = require("nedb");

function NedbAdapter(){
	this.stores = {};
};

NedbAdapter.prototype.load = function(name){
	if(!this.stores.hasOwnProperty(name)){
		this.stores[name] = new Nedb({ filename: name, autoload: true });
	}
	return this.stores[name];
}

var db = new NedbAdapter();

DatabaseAdapterTrait.test(db);

module.exports = {
	NedbAdapter: NedbAdapter
}
