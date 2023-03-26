exports.responseUtil = {
    wrapSuccess: (data, message) => {
        return { status: "success", message, data };
    },
    wrapError: (message) => {
        return { status: "error", message };
    },
};