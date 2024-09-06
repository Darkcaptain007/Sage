class apiError extends Error {
	constructor(
		statusCode,
		message = "Something went wrong!",
		errors = [],
		stack = ""
	) {
		super(message);
		this.statusCode = statusCode;
		this.message = message;
		this.data = null;
		this.success = false;
		this.errors = errors;

		stack
			? (this.stack = stack)
			: Error.captureStackTrace(this, this.constructor);
	}
}

export default apiError;
