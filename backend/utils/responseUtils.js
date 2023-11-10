const success = (data = null, code = null) => ({ code: code || 201, data });
const error = (data = null, code = 501) => ({
  code: code || 501,
  data,
  message: "Server Error",
});

module.exports = { success, error };
