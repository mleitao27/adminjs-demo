const fields = {
    listProperties: ["id", "post_id", "number", "created_at", "updated_at"], // 👈 columns in list view
    editProperties: ["number", "post_id"], // 👈 fields in form
    showProperties: ["id", "post_id", "number", "created_at", "updated_at"], // 👈 fields in detail view
    filterProperties: ["id", "post_id", "number", "created_at", "updated_at"], // 👈 available filters
};

export default fields;