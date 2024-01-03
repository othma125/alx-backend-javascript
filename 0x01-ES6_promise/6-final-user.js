import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      console.log(`${values[0].firstName} ${values[0].lastName} ${values[1].body}`);
    })
    .catch(() => console.log('Signup system offline'));
}