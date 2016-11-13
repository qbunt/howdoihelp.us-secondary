var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cause = new keystone.List('Cause');

Cause.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	category: { type: Types.Select, required: true, initial: true, options: 'Healthcare, Womens Rights, LGBTQ', emptyOption: true },
	description: { type: Types.Markdown, toolbarOptions: { hiddenButtons: 'H1,H6,Code' } }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

Cause.defaultColumns = 'name, email, category';
Cause.register();
