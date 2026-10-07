module.exports = {service: "invoice"};
module.exports.lookupCustomer = id => ({id, name: 'Acme'});
// Practice PR: review this change together before approving.
module.exports.exportEnabled = true;
