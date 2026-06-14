body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

/* HEADER */
.header {
  text-align: center;
  padding: 30px 20px;
}

.header h1 {
  margin: 0;
  font-size: 32px;
}

.header p {
  opacity: 0.7;
}

/* SEARCH */
.search-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

#search {
  width: 60%;
  padding: 12px;
  border-radius: 8px;
  border: none;
}

/* CATEGORIES */
.categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 70%;
  margin: 20px auto;
}

.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  background: #334155;
  transform: scale(1.03);
}

/* PANELS */
.panel {
  width: 70%;
  margin: 30px auto;
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
}

/* SYSTEM INFO */
#systemInfo {
  list-style: none;
  padding: 0;
}

#systemInfo li {
  padding: 5px 0;
}

/* DASHBOARD */
.dashboard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.dashboard div {
  background: #0f172a;
  padding: 10px;
  border-radius: 8px;
}
