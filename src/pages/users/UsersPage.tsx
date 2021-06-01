import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import UsersModule from '../../modules/UsersModule';

const UsersPage = () => {
  const { Store, Service, Provider } = UsersModule;

  useEffect(() => {
    Service.getUsers().then(users => {
      Store.users.set('users', users);
    })
  }, [Service, Store.users]);

  return (
    <>
      {Store.fetch.isLoading ? 'loading' : 'loaded'}

      <Provider>
        <Filter />

        <hr />

        <UsersPageView />
      </Provider>
    </>
  );
}

const Filter = observer(() => {
  const { active, setActive } = useContext(UsersModule.Context);

  return (
    <div>
      <p>View: {active ? 'active' : 'inactive'} users</p>
      <p onClick={() => setActive(!active)}>click here to toggle view</p>
    </div>
  );
});

const UsersPageView = observer(() => {
  const { list, store } = useContext(UsersModule.Context);

  return (
    <div>
      {list.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>

          <input 
            value={user.email} 
            onChange={(ev) => {
              const email = ev.target.value;
              store.setItem('users', (u) => u.id === user.id, { email });
            }}
          />
        </div>
      ))}
    </div>
  );
});

export default observer(UsersPage);
