import React, { useState, useEffect } from 'react';
import './OrderPage.css';

// Sample menu data - in production this would come from Firebase
const sampleMenu = [
  { id: '1', name: 'Lavender Honey Latte', nameKh: 'ឡាវេនឌ័រ ហានី ឡាតេ', price: 4.50, priceHot: 4.00, priceFrappe: 5.00, category: 'Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop', popular: true, inStock: true, hasHot: true, hasIce: true, hasFrappe: true },
  { id: '2', name: 'Midnight Cold Brew', nameKh: 'កូលប្រូ មីដនាយ', price: 3.75, category: 'Coffee', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop', popular: true, inStock: true, hasHot: false, hasIce: true, hasFrappe: false },
  { id: '3', name: 'Artisan Flat White', nameKh: 'ហ្វ្លែត វ៉ាយ អាទីសាន់', price: 4.25, priceHot: 3.75, category: 'Coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop', popular: false, inStock: true, hasHot: true, hasIce: true, hasFrappe: false },
  { id: '4', name: 'Matcha Oat Latte', nameKh: 'ម៉ាឆា អូត ឡាតេ', price: 5.00, priceHot: 4.50, priceFrappe: 5.50, category: 'Tea', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop', popular: true, inStock: true, hasHot: true, hasIce: true, hasFrappe: true },
  { id: '5', name: 'Classic Espresso', nameKh: 'អេសប្រេសូ ក្លាស៊ិក', price: 2.50, priceHot: 2.50, category: 'Coffee', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop', popular: false, inStock: true, hasHot: true, hasIce: false, hasFrappe: false },
  { id: '6', name: 'Caramel Macchiato', nameKh: 'ខារ៉ាម៉េល ម៉ាឈីអាតូ', price: 4.75, priceHot: 4.25, priceFrappe: 5.25, category: 'Coffee', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop', popular: true, inStock: true, hasHot: true, hasIce: true, hasFrappe: true },
  { id: '7', name: 'Thai Milk Tea', nameKh: 'តែទឹកដោះគោ ថៃ', price: 3.50, priceFrappe: 4.00, category: 'Tea', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop', popular: false, inStock: true, hasHot: false, hasIce: true, hasFrappe: true },
  { id: '8', name: 'Croissant', nameKh: 'គ្រ័រសង់', price: 3.25, category: 'Pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop', popular: false, inStock: true },
  { id: '9', name: 'Blueberry Muffin', nameKh: 'មាហ្វីន ប្លូបឺរី', price: 2.75, category: 'Pastry', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop', popular: false, inStock: false },
  { id: '10', name: 'Vanilla Bean Frappe', nameKh: 'វ៉ានីឡា ប៊ីន ហ្វ្រាប៉េ', price: 5.25, category: 'Coffee', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop', popular: false, inStock: true, hasHot: false, hasIce: false, hasFrappe: true },
];

const sampleToppings = [
  { id: 't1', name: 'Boba Pearls', nameKh: 'គុជ បុបា', price: 0.75 },
  { id: 't2', name: 'Coffee Jelly', nameKh: 'ចាហួយ កាហ្វេ', price: 0.50 },
  { id: 't3', name: 'Cheese Foam', nameKh: 'ហ្វូម ឈីស', price: 1.00 },
  { id: 't4', name: 'Oat Milk', nameKh: 'ទឹកដោះគោ អូត', price: 0.50 },
];

const translations = {
  en: {
    order: 'Order',
    cart: 'Cart',
    myOrders: 'My Orders',
    all: 'All',
    popular: 'Popular',
    yourOrder: 'Your Order',
    reviewOrder: 'Review before placing',
    tableNo: 'Table No.',
    note: 'Note',
    anyRequests: 'Any special requests?',
    promoCode: 'Promo code',
    apply: 'Apply',
    subtotal: 'Subtotal',
    discount: 'Discount',
    total: 'Total',
    placeOrder: 'Place Order',
    clearCart: 'Clear cart',
    emptyCart: 'Your cart is empty',
    addItems: 'Add items to get started',
    customize: 'Customize',
    temperature: 'Temperature',
    iced: 'Iced',
    hot: 'Hot',
    frappe: 'Frappe',
    sugarLevel: 'Sugar Level',
    iceLevel: 'Ice Level',
    addToppings: 'Add Toppings',
    addToCart: 'Add to Cart',
    outOfStock: 'Out of Stock',
    orderPlaced: 'Order Placed!',
    preparingOrder: 'We are preparing your order',
    orderNumber: 'Order',
    done: 'Done',
    pending: 'Preparing',
    completed: 'Ready',
    cancelled: 'Cancelled',
    noOrders: 'No orders yet',
    viewOrder: 'View',
    cancelOrder: 'Cancel Order',
  },
  kh: {
    order: 'បញ្ជាទិញ',
    cart: 'កន្ត្រក',
    myOrders: 'ការបញ្ជា',
    all: 'ទាំងអស់',
    popular: 'ពេញនិយម',
    yourOrder: 'ការបញ្ជាទិញ',
    reviewOrder: 'ពិនិត្យមុនបញ្ជា',
    tableNo: 'លេខតុ',
    note: 'ចំណាំ',
    anyRequests: 'សំណើពិសេស?',
    promoCode: 'កូដបញ្ចុះតម្លៃ',
    apply: 'ប្រើប្រាស់',
    subtotal: 'សរុបរង',
    discount: 'បញ្ចុះតម្លៃ',
    total: 'សរុប',
    placeOrder: 'ដាក់ការបញ្ជា',
    clearCart: 'លុបកន្ត្រក',
    emptyCart: 'កន្ត្រករបស់អ្នកទទេ',
    addItems: 'បន្ថែមទំនិញដើម្បីចាប់ផ្តើម',
    customize: 'កំណត់',
    temperature: 'សីតុណ្ហភាព',
    iced: 'ទឹកកក',
    hot: 'ក្តៅ',
    frappe: 'ហ្វ្រាប៉េ',
    sugarLevel: 'កម្រិតស្ករ',
    iceLevel: 'កម្រិតទឹកកក',
    addToppings: 'បន្ថែម Toppings',
    addToCart: 'បន្ថែមទៅកន្ត្រក',
    outOfStock: 'អស់ស្តុក',
    orderPlaced: 'បានដាក់ការបញ្ជា!',
    preparingOrder: 'យើងកំពុងរៀបចំការបញ្ជារបស់អ្នក',
    orderNumber: 'ការបញ្ជា',
    done: 'រួចរាល់',
    pending: 'រង់ចាំ',
    completed: 'រួចរាល់',
    cancelled: 'បានលុប',
    noOrders: 'មិនទាន់មានការបញ្ជា',
    viewOrder: 'មើល',
    cancelOrder: 'លុបការបញ្ជា',
  }
};

function OrderPage() {
  const [lang, setLang] = useState('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [customizeModal, setCustomizeModal] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);
  const [myOrders, setMyOrders] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Customization state
  const [selectedTemp, setSelectedTemp] = useState('ice');
  const [selectedSugar, setSelectedSugar] = useState('100%');
  const [selectedIce, setSelectedIce] = useState('100%');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [itemQty, setItemQty] = useState(1);

  const t = translations[lang];
  const categories = ['All', 'Coffee', 'Tea', 'Pastry'];

  const filteredMenu = selectedCategory === 'All' 
    ? sampleMenu 
    : sampleMenu.filter(item => item.category === selectedCategory);

  const popularItems = sampleMenu.filter(item => item.popular && item.inStock);

  const cartTotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.qty), 0);
  const discount = appliedPromo ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal - discount;
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    // Load saved data
    const savedLang = localStorage.getItem('chafe_lang');
    const savedTable = localStorage.getItem('chafe_table');
    const savedOrders = localStorage.getItem('chafe_orders');
    
    if (savedLang) setLang(savedLang);
    if (savedTable) setTableNumber(savedTable);
    if (savedOrders) setMyOrders(JSON.parse(savedOrders));

    // Check URL for table parameter
    const params = new URLSearchParams(window.location.search);
    const urlTable = params.get('table');
    if (urlTable) {
      setTableNumber(urlTable);
      localStorage.setItem('chafe_table', urlTable);
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('chafe_lang', newLang);
    setShowLangDropdown(false);
  };

  const openCustomize = (item) => {
    const defaultTemp = item.hasIce ? 'ice' : item.hasHot ? 'hot' : 'frappe';
    setSelectedTemp(defaultTemp);
    setSelectedSugar('100%');
    setSelectedIce('100%');
    setSelectedToppings([]);
    setItemQty(1);
    setCustomizeModal(item);
  };

  const getItemPrice = (item, temp) => {
    if (temp === 'hot' && item.priceHot) return item.priceHot;
    if (temp === 'frappe' && item.priceFrappe) return item.priceFrappe;
    return item.price;
  };

  const calculateCustomTotal = () => {
    if (!customizeModal) return 0;
    const basePrice = getItemPrice(customizeModal, selectedTemp);
    const toppingsPrice = selectedToppings.reduce((sum, t) => {
      const topping = sampleToppings.find(top => top.id === t);
      return sum + (topping?.price || 0);
    }, 0);
    return (basePrice + toppingsPrice) * itemQty;
  };

  const addToCart = () => {
    if (!customizeModal) return;
    
    const basePrice = getItemPrice(customizeModal, selectedTemp);
    const toppingsPrice = selectedToppings.reduce((sum, t) => {
      const topping = sampleToppings.find(top => top.id === t);
      return sum + (topping?.price || 0);
    }, 0);

    const cartItem = {
      id: Date.now(),
      itemId: customizeModal.id,
      name: customizeModal.name,
      nameKh: customizeModal.nameKh,
      image: customizeModal.image,
      temperature: selectedTemp,
      sugar: selectedSugar,
      ice: selectedIce,
      toppings: selectedToppings.map(t => sampleToppings.find(top => top.id === t)),
      basePrice,
      toppingsPrice,
      totalPrice: basePrice + toppingsPrice,
      qty: itemQty,
    };

    setCart([...cart, cartItem]);
    setCustomizeModal(null);
  };

  const removeFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.id !== cartItemId));
  };

  const updateCartQty = (cartItemId, delta) => {
    setCart(cart.map(item => {
      if (item.id === cartItemId) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const placeOrder = () => {
    if (cart.length === 0 || !tableNumber) return;

    const order = {
      id: 'ORD' + Date.now().toString(36).toUpperCase(),
      items: cart,
      tableNumber,
      note: orderNote,
      subtotal: cartTotal,
      discount,
      total: finalTotal,
      promoCode: appliedPromo,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const updatedOrders = [order, ...myOrders];
    setMyOrders(updatedOrders);
    localStorage.setItem('chafe_orders', JSON.stringify(updatedOrders));
    
    setCart([]);
    setOrderNote('');
    setAppliedPromo(null);
    setPromoCode('');
    setCartOpen(false);
    setConfirmModal(order);
  };

  const applyPromo = () => {
    if (promoCode.toLowerCase() === 'chafe10') {
      setAppliedPromo(promoCode);
    }
  };

  const getDisplayName = (item) => lang === 'kh' && item.nameKh ? item.nameKh : item.name;

  return (
    <div className="order-page">
      {/* Header */}
      <header className="order-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-container">
              <span className="logo-text">CHAFE</span>
            </div>
            <span className="header-divider">|</span>
            <span className="header-subtitle">{t.order}</span>
          </div>
          
          <div className="header-right">
            <div className="lang-selector">
              <button 
                className="lang-btn"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
              >
                <span>{lang === 'en' ? '🇬🇧' : '🇰🇭'}</span>
                <span className="lang-label">{lang.toUpperCase()}</span>
                <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showLangDropdown && (
                <div className="lang-dropdown">
                  <button onClick={() => changeLang('en')} className={lang === 'en' ? 'active' : ''}>
                    <span>🇬🇧</span> English
                  </button>
                  <button onClick={() => changeLang('kh')} className={lang === 'kh' ? 'active' : ''}>
                    <span>🇰🇭</span> ភាសាខ្មែរ
                  </button>
                </div>
              )}
            </div>

            <button className="orders-btn" onClick={() => setOrdersOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="btn-label">{t.myOrders}</span>
            </button>

            <button className="cart-btn" onClick={() => setCartOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="btn-label">{t.cart}</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Category Pills */}
      <div className="category-bar">
        <div className="category-pills">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? t.all : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      {selectedCategory === 'All' && popularItems.length > 0 && (
        <section className="popular-section">
          <div className="section-header">
            <span className="fire-icon">🔥</span>
            <h2>{t.popular}</h2>
          </div>
          <div className="popular-scroll">
            {popularItems.map(item => (
              <div key={item.id} className="popular-card" onClick={() => openCustomize(item)}>
                <img src={item.image} alt={item.name} />
                <div className="popular-info">
                  <span className="popular-name">{getDisplayName(item)}</span>
                  <span className="popular-price">${item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Menu Grid */}
      <main className="menu-section">
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <div 
              key={item.id} 
              className={`menu-card ${!item.inStock ? 'out-of-stock' : ''}`}
              onClick={() => item.inStock && openCustomize(item)}
            >
              <div className="card-image-container">
                <img src={item.image} alt={item.name} />
                {item.popular && <span className="popular-badge">Popular</span>}
                {!item.inStock && (
                  <div className="stock-overlay">
                    <span>{t.outOfStock}</span>
                  </div>
                )}
              </div>
              <div className="card-content">
                <h3 className="card-name">{getDisplayName(item)}</h3>
                <div className="card-footer">
                  <span className="card-price">${item.price.toFixed(2)}</span>
                  {item.inStock && (
                    <button className="add-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Panel */}
      {cartOpen && (
        <>
          <div className="overlay" onClick={() => setCartOpen(false)} />
          <aside className="cart-panel">
            <div className="panel-header">
              <div>
                <h2>{t.yourOrder}</h2>
                <p>{t.reviewOrder}</p>
              </div>
              <button className="close-btn" onClick={() => setCartOpen(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="empty-title">{t.emptyCart}</p>
                <p className="empty-subtitle">{t.addItems}</p>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{lang === 'kh' && item.nameKh ? item.nameKh : item.name}</h4>
                      <p className="item-options">
                        {item.temperature === 'hot' ? '☕ Hot' : item.temperature === 'frappe' ? '🥤 Frappe' : '🧊 Iced'} · {item.sugar} sugar
                      </p>
                      {item.toppings.length > 0 && (
                        <p className="item-toppings">
                          + {item.toppings.map(t => lang === 'kh' && t.nameKh ? t.nameKh : t.name).join(', ')}
                        </p>
                      )}
                    </div>
                    <div className="item-actions">
                      <span className="item-price">${(item.totalPrice * item.qty).toFixed(2)}</span>
                      <div className="qty-controls">
                        <button onClick={() => updateCartQty(item.id, -1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateCartQty(item.id, 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-footer">
              <div className="promo-section">
                {!appliedPromo ? (
                  <div className="promo-input">
                    <input
                      type="text"
                      placeholder={t.promoCode}
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    />
                    <button onClick={applyPromo}>{t.apply}</button>
                  </div>
                ) : (
                  <div className="promo-applied">
                    <span>✓ {appliedPromo}</span>
                    <button onClick={() => setAppliedPromo(null)}>Remove</button>
                  </div>
                )}
              </div>

              <div className="table-note-row">
                <div className="table-select">
                  <label>{t.tableNo}</label>
                  <select 
                    value={tableNumber} 
                    onChange={(e) => {
                      setTableNumber(e.target.value);
                      localStorage.setItem('chafe_table', e.target.value);
                    }}
                  >
                    <option value="">—</option>
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="note-input">
                  <label>{t.note}</label>
                  <input
                    type="text"
                    placeholder={t.anyRequests}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                  />
                </div>
              </div>

              <div className="totals">
                {appliedPromo && (
                  <>
                    <div className="total-row">
                      <span>{t.subtotal}</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="total-row discount">
                      <span>{t.discount}</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  </>
                )}
                <div className="total-row final">
                  <span>{t.total}</span>
                  <span className="final-amount">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                className="place-order-btn"
                onClick={placeOrder}
                disabled={cart.length === 0 || !tableNumber}
              >
                {t.placeOrder}
              </button>

              {cart.length > 0 && (
                <button className="clear-cart-btn" onClick={() => setCart([])}>
                  {t.clearCart}
                </button>
              )}
            </div>
          </aside>
        </>
      )}

      {/* My Orders Panel */}
      {ordersOpen && (
        <>
          <div className="overlay" onClick={() => setOrdersOpen(false)} />
          <aside className="orders-panel">
            <div className="panel-header">
              <h2>{t.myOrders}</h2>
              <button className="close-btn" onClick={() => setOrdersOpen(false)}>×</button>
            </div>

            <div className="orders-list">
              {myOrders.length === 0 ? (
                <div className="empty-orders">
                  <p>{t.noOrders}</p>
                </div>
              ) : (
                myOrders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header-row">
                      <span className="order-id">#{order.id.slice(-6)}</span>
                      <span className={`order-status ${order.status}`}>
                        {order.status === 'pending' && '⏳'}
                        {order.status === 'completed' && '✓'}
                        {order.status === 'cancelled' && '✗'}
                        {t[order.status]}
                      </span>
                    </div>
                    <div className="order-meta">
                      <span>Table {order.tableNumber}</span>
                      <span>{order.items.length} items</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </aside>
        </>
      )}

      {/* Customize Modal */}
      {customizeModal && (
        <div className="modal-overlay" onClick={() => setCustomizeModal(null)}>
          <div className="customize-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{getDisplayName(customizeModal)}</h3>
                <p>{t.customize}</p>
              </div>
              <button className="close-btn" onClick={() => setCustomizeModal(null)}>×</button>
            </div>

            <div className="modal-content">
              {/* Temperature */}
              {(customizeModal.hasHot || customizeModal.hasIce || customizeModal.hasFrappe) && (
                <div className="option-group">
                  <label>{t.temperature}</label>
                  <div className="temp-options">
                    {customizeModal.hasIce && (
                      <button 
                        className={`temp-btn ${selectedTemp === 'ice' ? 'active' : ''}`}
                        onClick={() => setSelectedTemp('ice')}
                      >
                        🧊 {t.iced}
                      </button>
                    )}
                    {customizeModal.hasHot && (
                      <button 
                        className={`temp-btn ${selectedTemp === 'hot' ? 'active' : ''}`}
                        onClick={() => setSelectedTemp('hot')}
                      >
                        ☕ {t.hot}
                      </button>
                    )}
                    {customizeModal.hasFrappe && (
                      <button 
                        className={`temp-btn ${selectedTemp === 'frappe' ? 'active' : ''}`}
                        onClick={() => setSelectedTemp('frappe')}
                      >
                        🥤 {t.frappe}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Sugar Level */}
              <div className="option-group">
                <label>{t.sugarLevel}</label>
                <div className="level-options">
                  {['0%', '30%', '50%', '70%', '100%'].map(level => (
                    <button
                      key={level}
                      className={`level-btn ${selectedSugar === level ? 'active' : ''}`}
                      onClick={() => setSelectedSugar(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ice Level */}
              {selectedTemp === 'ice' && (
                <div className="option-group">
                  <label>{t.iceLevel}</label>
                  <div className="level-options">
                    {['0%', '50%', '100%'].map(level => (
                      <button
                        key={level}
                        className={`level-btn ${selectedIce === level ? 'active' : ''}`}
                        onClick={() => setSelectedIce(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Toppings */}
              <div className="option-group">
                <label>{t.addToppings}</label>
                <div className="toppings-list">
                  {sampleToppings.map(topping => (
                    <button
                      key={topping.id}
                      className={`topping-btn ${selectedToppings.includes(topping.id) ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedToppings(prev => 
                          prev.includes(topping.id)
                            ? prev.filter(t => t !== topping.id)
                            : [...prev, topping.id]
                        );
                      }}
                    >
                      <span className="topping-name">
                        {lang === 'kh' && topping.nameKh ? topping.nameKh : topping.name}
                      </span>
                      <span className="topping-price">+${topping.price.toFixed(2)}</span>
                      {selectedToppings.includes(topping.id) && <span className="check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="option-group qty-group">
                <label>Quantity</label>
                <div className="qty-selector">
                  <button onClick={() => setItemQty(Math.max(1, itemQty - 1))}>−</button>
                  <span>{itemQty}</span>
                  <button onClick={() => setItemQty(itemQty + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="add-to-cart-btn" onClick={addToCart}>
                <span>{t.addToCart}</span>
                <span className="modal-total">${calculateCustomTotal().toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmModal && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <div className="confirm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3>{t.orderPlaced}</h3>
            <p>{t.preparingOrder}</p>
            <p className="order-number">{t.orderNumber} #{confirmModal.id.slice(-6)}</p>
            <button className="done-btn" onClick={() => setConfirmModal(null)}>
              {t.done}
            </button>
          </div>
        </div>
      )}

      {/* Toast - would be controlled by state in real implementation */}
      <div id="toast" className="toast"></div>
    </div>
  );
}

export default OrderPage;
