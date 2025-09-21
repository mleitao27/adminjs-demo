import onTestButton from "./Posts.js";

const actions = {
    runCustomFunction: {
        actionType: "record", // or "resource"
        icon: "Play",
        label: "Run Custom Function",
        guard: "Are you sure you want to run this?",
        isAccessible: true,
        component: false,
        handler: (request, response, context) => {
            const { record, currentAdmin } = context
            console.log(record)
            onTestButton()
            return {
                record: record.toJSON(currentAdmin),
                msg: 'Hello world',
            }
        },
    },
};

export default actions;