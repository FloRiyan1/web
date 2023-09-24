from sqlalchemy.orm import sessionmaker
from Data_Model.User import User
from sqlalchemy import create_engine


class DatabaseAccess:
    def __init__(self, db_url):
        self.engine = create_engine(db_url)
        User.Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)

    def create_person(self, name, age):
        session = self.Session()
        new_person = User(name=name, age=age)
        session.add(new_person)
        session.commit()
        session.close()
        return new_person

    def read_person(self, person_id):
        session = self.Session()
        person = session.query(User).filter_by(id=person_id).first()
        session.close()
        return person

    def update_person(self, person_id, new_age):
        session = self.Session()
        person = session.query(User).filter_by(id=person_id).first()
        if person:
            person.age = new_age
            session.commit()
        session.close()

    def delete_person(self, person_id):
        session = self.Session()
        person = session.query(User).filter_by(id=person_id).first()
        if person:
            session.delete(person)
            session.commit()
        session.close()
