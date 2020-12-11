async function updateLocalStorage(key, value) {
  localStorage.setItem(key, value)
}

async function resetLocalStorage() {
  localStorage.clear()
}

export { updateLocalStorage, resetLocalStorage }
