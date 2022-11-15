from flask import Flask, request, Response

# Download python. mac download python with homebrews
# Setting flask guide: https://flask.palletsprojects.com/en/2.2.x/installation/

# to start the backend server use the script under in the teminal, be in the right folder:
# flask --app app --debug run
# fyi: debug mode reruns the server when making changes

app = Flask(__name__)
# order: what order should the section order be
sections = [
    {"id": 1, "title": "Introduction", "order": 1},
    {"id": 3, "title": "Method", "order": 3},
    {"id": 2, "title": "Problem analysis", "order": 2},
]

# maybe we don't need section_id
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
    # Gets the title name passed from the frontend
    section_title = request.args.get('title')
    # append a new scention to scentions. Give a new id and order number as the last element in the array lengtg
    sections.append({"id": len(sections) + 1, "title": section_title,
                    "order": len(sections) + 1})
    return sections


# Delete
@app.delete("/sections")
def delete_sections():
    # Gets the id passed from the frontend
    id = request.args.get('id')
    # loops the sections array
    for section in sections:
        # If object id ( "id": 1 ) is equal to the id passed from the frontend
        # Casting id from a string to a int
        if section['id'] == int(id):
            # Removes the object from array
            sections.remove(section)

    # TODO after deleting the section, decrease order number from the reminding sections

    return sections


# Update
@app.put("/sections")
def update_sections():
    # TODO: posible to update title and order
    return "<h1>Sections</h1>"


# TASKS
# Get all tasks
@app.get("/tasks")
def get_tasks():
    return "<h1>Tasks</h1>"


# TASK
# Get
@app.get("/task")
def get_task():
    return "<h1>Task</h1>"


# Create
@app.post("/task")
def create_task():
    return "<h1>Create Task</h1>"


# Delete
@app.delete("/task")
def delete_task():
    return "<h1>Delete Task</h1>"


# Put
@app.put("/tasks")
def update_task():
    return "<h1>Update Task</h1>"
