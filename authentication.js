const authentication = pgp({
    SID: process.env.SID,
    AUTH_TOKEN: process.env.AUTH_TOKEN
});
// ============================================

module.exports = authentication;