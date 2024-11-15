export const formatCurrency = (amount) => {
  const numericAmount = parseFloat(amount.toString().replace(/,/g, ''));

  if (isNaN(numericAmount)) {
    return ''; 
  }

  return numericAmount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export const formatDateToLocal = (dateStr, locale = 'vi-VN') => {
  const date = new Date(dateStr);
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const timeAgo = (date) => {
  const now = new Date();
  const diff = now - new Date(date);
  const seconds = Math.floor(diff / 1000); 

  if (seconds < 60) {
    return `Updated ${seconds} second(s) ago`; 
  } else {
    const minutes = Math.floor(seconds / 60);
    return `Updated ${minutes} minute(s) ago`;
  }
};

