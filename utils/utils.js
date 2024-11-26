// export function passwordCheck(passFromWeb, passStoredInDb) {
//   let count = 0;
//   if (passFromWeb.length !== passStoredInDb.length) {
//     return count + 1;
//   }

//   for (let i = 0; i < passFromWeb.length; i++) {
//     if (passFromWeb[i] === passStoredInDb[i]) {
//       count = 0;
//     } else {
//       count++;
//     }
//   }
//   return count;
// }

import bcrypt from 'bcryptjs';

export async function passwordCheck(passFromWeb, passStoredInDb) {
  const isMatch = await bcrypt.compare(passFromWeb, passStoredInDb);
  return isMatch;
}
