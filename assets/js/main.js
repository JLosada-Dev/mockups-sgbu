// Main JavaScript for SGBU Mockups

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu =
    document.getElementById('mobile-menu') ||
    document.getElementById('mobileMenu');
  const toggleButton = document.querySelector('.navbar-toggle');

  if (!mobileMenu || !toggleButton) {
    return;
  }

  const isShowing = mobileMenu.classList.contains('show');

  if (isShowing) {
    mobileMenu.classList.remove('show');
    toggleButton.classList.remove('active');
  } else {
    mobileMenu.classList.add('show');
    toggleButton.classList.add('active');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const mobileMenu =
    document.getElementById('mobile-menu') ||
    document.getElementById('mobileMenu');
  const toggleButton = document.querySelector('.navbar-toggle');

  if (mobileMenu && mobileMenu.classList.contains('show')) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggle = toggleButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      mobileMenu.classList.remove('show');
      toggleButton.classList.remove('active');
    }
  }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', function () {
  const mobileMenu =
    document.getElementById('mobile-menu') ||
    document.getElementById('mobileMenu');
  const toggleButton = document.querySelector('.navbar-toggle');
  if (window.innerWidth > 767 && mobileMenu) {
    mobileMenu.classList.remove('show');
    if (toggleButton) {
      toggleButton.classList.remove('active');
    }
  }
});

// Toast notification function
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  toastMessage.textContent = message;
  toast.className = `toast toast-${type}`;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Modal functions
function showModal() {
  const modal = document.getElementById('example-modal');
  modal.classList.add('show');
}

function hideModal() {
  const modal = document.getElementById('example-modal');
  modal.classList.remove('show');
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('example-modal');
  if (event.target === modal) {
    modal.classList.remove('show');
  }
};

// Simulate login function (for demo purposes)
function simulateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    showToast('Inicio de sesión exitoso', 'success');
    setTimeout(() => {
      window.location.href = 'views/user/dashboard.html';
    }, 1000);
  } else {
    showToast('Por favor complete todos los campos', 'error');
  }
}

// Simulate search function
function simulateSearch() {
  const query = document.getElementById('search-input').value;
  if (query) {
    showToast(`Buscando: ${query}`, 'info');
    // In a real app, this would update the results
  }
}

// Simulate reserve function
function simulateReserve(bookTitle) {
  showToast(`Reserva solicitada para: ${bookTitle}`, 'success');
}

// Simulate renew function
function simulateRenew(bookTitle) {
  showToast(`Renovación solicitada para: ${bookTitle}`, 'success');
}

// Simulate cancel reservation
function simulateCancelReservation(bookTitle) {
  showToast(`Reserva cancelada para: ${bookTitle}`, 'warning');
}

// Simulate pay sanction
function simulatePaySanction() {
  showToast('Pago de sanción procesado', 'success');
}

// Simulate add to waitlist
function simulateAddToWaitlist(bookTitle) {
  showToast(`Añadido a lista de espera: ${bookTitle}`, 'info');
}

// Admin functions
function simulateAddBook() {
  showToast('Libro añadido al inventario', 'success');
}

function simulateEditBook() {
  showToast('Libro editado', 'success');
}

function simulateDeleteBook() {
  showToast('Libro eliminado del inventario', 'warning');
}

function simulateBlockUser() {
  showToast('Usuario bloqueado', 'warning');
}

function simulateUnblockUser() {
  showToast('Usuario desbloqueado', 'success');
}

function simulateApplySanction() {
  showToast('Sanción aplicada', 'error');
}

function simulateCondoneSanction() {
  showToast('Sanción condonada', 'success');
}

function simulateGenerateReport() {
  showToast('Reporte generado', 'success');
}

function simulateExportReport() {
  showToast('Reporte exportado', 'info');
}

// Quick loan/return simulation
function simulateQuickLoan() {
  const userCode = document.getElementById('user-code').value;
  const bookCode = document.getElementById('book-code').value;

  if (userCode && bookCode) {
    showToast('Préstamo registrado exitosamente', 'success');
  } else {
    showToast('Por favor ingrese códigos válidos', 'error');
  }
}

function simulateQuickReturn() {
  const userCode = document.getElementById('user-code-return').value;
  const bookCode = document.getElementById('book-code-return').value;

  if (userCode && bookCode) {
    showToast('Devolución registrada exitosamente', 'success');
  } else {
    showToast('Por favor ingrese códigos válidos', 'error');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Any initialization code here
  console.log('SGBU Mockups loaded');
});
