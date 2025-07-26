/*Написать полифиллы статических методов (Promise.all, Promise.allSettled, Promise.race, Promise.any).*/

//Promise.all
const myPromiseAll = (promises) => {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }

    const results = new Array(promises.length);
    let completedCount = 0;

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          results[i] = value;
          completedCount++;

          if (completedCount === promises.length) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};

myPromiseAll([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
  .then(console.log)
  .catch(console.log);

//Promise.allSettled
const myPromiseAllSettled = (promises) => {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }

    const results = new Array(promises.length);
    let completedCount = 0;

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          results[i] = { status: "fulfilled", value };
          completedCount++;
        })
        .catch((err) => {
          results[i] = { status: "rejected", reason: err };
          completedCount++;
        })
        .finally(() => {
          if (completedCount === promises.length) {
            res(results);
          }
        });
    }
  });
};

myPromiseAllSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resole, reject) => setTimeout(() => reject(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
  .then(console.log)
  .catch(console.log);

//Promise.race
const myPromiseRace = (promises) => {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }

    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          res(value);
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};

myPromiseRace([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 1000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
])
  .then(console.log)
  .catch(console.log);

//Promise.any
const myPromiseAny = (promises) => {
  return new Promise((res, rej) => {
    if (promises.length === 0) {
      return res([]);
    }

    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          res(value);
        })
        .catch((err) => {});
    }
  });
};

myPromiseAny([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 2000)), // 3
])
  .then(console.log)
  .catch(console.log);
