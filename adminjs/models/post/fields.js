const fields = {
    listProperties: ["id", "text", "user_id", "created_at", "updated_at"], // 👈 columns in list view
    editProperties: ["text", "user_id"], // 👈 fields in form
    showProperties: ["id", "text", "user_id", "created_at", "updated_at"], // 👈 fields in detail view
    filterProperties: ["id", "text", "user_id", "created_at", "updated_at"], // 👈 available filters
};

export default fields;