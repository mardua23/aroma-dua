body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f7f7f7;
  color: #333;
  animation: fadeIn 1s ease;
}

header {
  background: linear-gradient(90deg, #00b09b, #96c93d);
  padding: 20px;
  text-align: center;
  color: white;
}

header h1 {
  margin: 0;
  font-size: 3em;
  animation: float 3s infinite;
}

nav button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background: white;
  color: #00b09b;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

nav button:hover {
  background: #00b09b;
  color: white;
  transform: scale(1.1);
}

main {
  text-align: center;
  padding: 30px;
}

main img {
  width: 80%;
  max-width: 700px;
  border-radius: 10px;
  margin-bottom: 20px;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
