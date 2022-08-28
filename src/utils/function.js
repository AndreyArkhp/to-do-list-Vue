export function getDateFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}.${date.getFullYear()}`;
}

export function search(todos, searchValue) {
  return todos.value.filter((todo) => {
    const todosWithStringsValue = Object.values(todo);
    todosWithStringsValue[0] = getDateFromTimestamp(todosWithStringsValue[0]);
    todosWithStringsValue[2] = todosWithStringsValue[2] ? "выполнено" : "в работе";
    let key = false;
    for (const el of todosWithStringsValue) {
      if (el.toLowerCase().includes(searchValue.value.toLowerCase())) {
        key = true;
      }
    }
    return key;
  });
}
