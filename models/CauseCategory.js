var keystone = require('keystone');
var Types = keystone.Field.Types;

var CauseCategory = new keystone.List('CauseCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

CauseCategory.add({
	name: { type: String, required: true },
	title: { type: Types.Text, required: true, initial: true, index: true },
	description: { type: Types.Text, required: true, initial: true}
});

CauseCategory.relationship({ ref: 'Cause', path: 'categories' });

CauseCategory.register();
