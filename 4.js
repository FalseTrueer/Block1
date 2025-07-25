/* Написать функцию get(url, limit), которая пытается получить данные по указанному URL. 
Если запрос завершается ошибкой, функция должна повторить попытку до limit раз перед тем, 
как окончательно выбросить ошибку. */

function get(url, limit) {
  return new Promise((resolve, reject) => {
    const attempt = async (attemptCount) => {
      try {
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();
          resolve(data);
        } else {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
      } catch (err) {
        if (attemptCount < limit) {
          console.log(`Attempt ${attemptCount + 1} failed. Retrying...`);
          return attempt(attemptCount + 1);
        } else {
          reject(new Error(`Request failed after ${limit} attempts`));
        }
      }
    };
    attempt(0);
  });
}

// Пример использования
get("https://example.com/data", 5)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
