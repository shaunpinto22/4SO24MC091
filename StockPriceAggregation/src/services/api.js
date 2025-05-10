const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchStockData() {
  const response = await fetch(`${API_BASE_URL}/stocks`);
  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }
  return response.json();
}

export async function fetchCorrelationData() {
  const response = await fetch(`${API_BASE_URL}/correlation`);
  if (!response.ok) {
    throw new Error('Failed to fetch correlation data');
  }
  return response.json();
}