from DataAccess.DataAccess import DatabaseAccess

# Replace 'your_database_url' with the actual database URL
db_url = 'postgresql://postgres:123@localhost/HogrefeFlorianWebServer'
db_access = DatabaseAccess(db_url)

# Example usage
# Creating a new person
new_person = db_access.create_person('Alice', 25)

# Reading a person
retrieved_person = db_access.read_person(new_person.id)
print(
    f"Retrieved Person: {retrieved_person.name}, Age: {retrieved_person.age}")

# Updating a person
db_access.update_person(new_person.id, 26)

# Deleting a person
db_access.delete_person(new_person.id)
