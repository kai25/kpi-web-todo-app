db.createUser(
  {
    user: 'kisa',
    pwd: 'kisa',
    roles: {
      role: 'readWrite',
      db: 'todo_app',
    }
  }
);
