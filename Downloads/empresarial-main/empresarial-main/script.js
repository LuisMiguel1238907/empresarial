// Funcionalidad para los íconos
document.getElementById("cartIcon").addEventListener("click", () => {
  alert("🛒 Redirigiendo al carrito de compras...");
  window.location.href = "carrito.html";
});

document.getElementById("packageIcon").addEventListener("click", () => {
  alert("📦 Mostrando productos disponibles...");
  window.location.href = "productos.html";
});

document.getElementById("moneyIcon").addEventListener("click", () => {
  alert("💰 Consultando transacciones...");
  window.location.href = "transacciones.html";
});
