var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cause = new keystone.List('Cause',{
	autokey: { from: 'title', path: 'key', unique: true }
});

Cause.add({
	title: { type: Types.Text, required: true, initial: true, index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	categories: { type: Types.Relationship, ref: 'CauseCategory', many: true },
	description: { type: Types.Markdown, toolbarOptions: { hiddenButtons: 'Code' } },
	location: { type: Types.Location, defaults: { country: 'USA' } }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
	
});

Cause.defaultColumns = 'title, author, categories';
Cause.register();
