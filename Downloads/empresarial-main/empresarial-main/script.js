const mainContent = document.getElementById("main-content");

document.getElementById("cartIcon").addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>🛒 Carrito de Compras</h2>
    <div class="cards">
      <div class="card">
        <img src="https://i.imgur.com/xdbHo4E.png" alt="Producto 1">
        <h3>Plan Premium</h3>
        <p>$29.99 / mes</p>
      </div>
      <div class="card">
        <img src="https://i.imgur.com/5lH1ZzF.png" alt="Producto 2">
        <h3>Suscripción Básica</h3>
        <p>$9.99 / mes</p>
      </div>
    </div>
  `;
});

document.getElementById("packageIcon").addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>📦 Productos Disponibles</h2>
    <div class="cards">
      <div class="card">
        <img src="https://i.imgur.com/7yUVEbm.png" alt="Producto">
        <h3>Tarjeta FintechOne</h3>
        <p>Ideal para tus compras online.</p>
      </div>
      <div class="card">
        <img src="https://i.imgur.com/5f2QzBd.png" alt="Producto">
        <h3>Cuenta Digital</h3>
        <p>Administra tu dinero fácilmente.</p>
      </div>
    </div>
  `;
});

document.getElementById("moneyIcon").addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>💰 Transacciones Recientes</h2>
    <ul class="transactions">
      <li>Pago recibido - $120.000</li>
      <li>Suscripción FintechOne - $29.99</li>
      <li>Transferencia enviada - $45.000</li>
    </ul>
  `;
});
