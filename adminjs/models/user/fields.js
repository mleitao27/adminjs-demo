const fields = {
    listProperties: ["id", "name", "email", "created_at", "updated_at"], // 👈 columns in list view
    editProperties: ["name", "email"], // 👈 fields in form
    showProperties: ["id", "name", "email", "created_at", "updated_at"], // 👈 fields in detail view
    filterProperties: ["id", "name", "email", "created_at", "updated_at"], // 👈 available filters
};

export default fields;