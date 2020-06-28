module.exports = async function (context, req) {
    context.res = {
        body: {
            code: "0123ABC@20"
        }
    };
};