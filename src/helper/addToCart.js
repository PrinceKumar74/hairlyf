
/**
 * Simple function to add an item to cart via API
 * 
 * @param {Object} product - The product to add to cart
 * @param {Object} selections - User selections (size, color, etc.)
 * @returns {Promise} - API request promise
 */
export const addToCart = async (product, selections) => {
  try {
    // Create payload for API
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selections.size || selections.length,
      color: selections.color?.name || selections.color,
      quantity: selections.quantity || 1,
      image: selections.image || product.mainImage,
    };

    // Send to API
    const response = await fetch('https://hairlyf-backend-api.onrender.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include auth token if user is logged in
        ...(localStorage.getItem('token') && {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      },
      body: JSON.stringify(cartItem)
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    const result = await response.json();
    
    // Show success message (you can use any notification system)
    alert(`${product.name} added to cart!`);
    
    return result;
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert('Could not add item to cart');
    return null;
  }
};

export default addToCart; 