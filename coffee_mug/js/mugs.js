// Sample mug data
const mugs = [
  {
    id: 'mug001',
    name: 'Classic White Mug',
    description: 'A timeless white ceramic mug, perfect for any beverage.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mug002',
    name: 'Modern Black Mug',
    description: 'Sleek and stylish black mug for your modern kitchen.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mug003',
    name: 'Speckled Blue Mug',
    description: 'A blue mug with artistic speckles for a unique look.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  }
];

function renderMugList() {
  const list = document.getElementById('mug-list');
  list.innerHTML = '';
  mugs.forEach(mug => {
    const card = document.createElement('div');
    card.className = 'mug-card';
    card.onclick = () => showMugDetail(mug.id);
    card.innerHTML = `
      <img src="${mug.image}" alt="${mug.name}">
      <h3>${mug.name}</h3>
      <div class="qr-code" id="qrcode-${mug.id}"></div>
    `;
    list.appendChild(card);
    new QRCode(document.getElementById(`qrcode-${mug.id}`), {
      text: window.location.origin + window.location.pathname + `#${mug.id}`,
      width: 80,
      height: 80
    });
  });
}

function showMugDetail(mugId) {
  const mug = mugs.find(m => m.id === mugId);
  if (!mug) return;
  document.getElementById('main-view').style.display = 'none';
  const detail = document.getElementById('mug-detail');
  detail.style.display = 'block';
  detail.innerHTML = `
    <img src="${mug.image}" alt="${mug.name}">
    <h2>${mug.name}</h2>
    <p>${mug.description}</p>
    <div class="qr-code" id="qrcode-detail"></div>
  `;
  new QRCode(document.getElementById('qrcode-detail'), {
    text: window.location.origin + window.location.pathname + `#${mug.id}`,
    width: 140,
    height: 140
  });
  document.getElementById('back-link').style.display = 'inline-block';
}

document.getElementById('back-link').onclick = function(e) {
  e.preventDefault();
  document.getElementById('mug-detail').style.display = 'none';
  document.getElementById('main-view').style.display = 'block';
  this.style.display = 'none';
};

// Handle navigation via hash (for barcode scanning)
function handleHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    showMugDetail(hash);
  } else {
    document.getElementById('mug-detail').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('back-link').style.display = 'none';
  }
}

window.addEventListener('hashchange', handleHash);
window.onload = function() {
  renderMugList();
  handleHash();
};
