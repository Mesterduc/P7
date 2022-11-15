from flask import Flask, request, Response

# config = {
#     "DEBUG": True  # run app in debug mode
# }

app = Flask(__name__)

# Enable debug mode, so the server will reload on code changes.
# app.config.from_mapping(config)

sections = [
    {"id": 1, "title": "Introduction", "order": 1},
    {"id": 2, "title": "Problem analysis", "order": 3},
    {"id": 3, "title": "Method", "order": 2}
]

tasks = [
    {"id": 1, "title": "Task 1", "description": "Description 1",
        "progress": False, "done": False, "section_id": 1},
    {"id": 2, "title": "Task 1", "description": "Description 2",
        "progress": False, "done": False, "section_id": 1},
    {"id": 3, "title": "Task 1", "description": "Description 3",
        "progress": False, "done": False, "section_id": 1},
    {"id": 4, "title": "Task 1", "description": "Description 4",
        "progress": False, "done": False, "section_id": 2},
    {"id": 5, "title": "Task 1", "description": "Description 5",
        "progress": False, "done": False, "section_id": 3},
]

# CRUD / Create, Read, Update, Delete
# SECTIONS


# Get
@app.get("/sections")
def get_sections():
    return sections


# Create
@app.post("/sections")
def create_section():
    title = request.args.get('title')
    sections.append({"id": len(sections) + 1, "title": title,
                    "order": len(sections) + 1})
    return sections


# Deletes
@app.delete("/sections")
def delete_sections():
    id = request.args.get('id')
    for section in sections:
        if section['id'] == int(id):
            print("hello")
            sections.remove(section)
    # TODO decrease order number, after deleting the section

    return sections


# Update
@app.put("/sections")
def update_sections():
    # TODO: update title and order
    return "<h1>Sections</h1>"


# TASKS
# Get
@app.get("/tasks")
def get_tasks():
    return "<h1>Tasks</h1>"


# TASK
# Get
@app.get("/task")
def get_task():
    return "<h1>Task</h1>"


# Create
@app.post("/tasks")
def create_task():
    return "<h1>Create Task</h1>"


# Delete
@app.delete("/tasks")
def delete_tasks():
    return "<h1>Tasks</h1>"


# Put
@app.put("/tasks")
def update_tasks():
    return "<h1>Tasks</h1>"
