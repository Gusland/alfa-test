import Req from './request';

export const fetchUsers = () =>
  Req.GET({
    url: '/character',
  });

// export const fetchUser = id => {
//   const userItem = users.find(user => user.id === Number(id));

//   if (userItem) {
//     return Req.GET({
//       url: `/users/${id}`,
//       stubData: userItem,
//     });
//   }

//   return Promise.reject(new Error('Not found'));
// };

// export const fetchUsersIds = () => {
//   const usersIds = users.map(user => user.id);

//   return Req.GET({
//     url: `/users_ids`,
//     stubData: usersIds,
//   });
// };
