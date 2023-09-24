from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = 'tb_credentials'
    id = Column(Integer, primary_key=True)
    user_name = Column(String)
    user_password = Column(Integer)
