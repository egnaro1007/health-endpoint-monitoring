import axios from 'axios';
import { formatCurrency } from './utils';


export async function fetchData() {
  const apiUrl = '/api/something/idk/'; // Replace with your actual API endpoint
  
  try {
    const response = await axios.get(apiUrl);
    
    // Assuming the response data is in the format you expect
    return response.data; // This should return the data in JSON format
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function fetchCardData() {
  try {

    //dummy data
    const numberOfInvoices = 0
    const numberOfCustomers = 0;
    const totalPaidInvoices = 0;
    const totalPendingInvoices = 0;

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchLatestInvoicesData() {
  try {

    const dummyData = {
      rows: [
        { id: 1, amount: 1000, name: "HEHE", email: "just@email.com", image_url: "null"},
        { id: 2, amount: 2500.5, name: "HOHO", email: "just@email.com", image_url: "null"},
      ],
    };
    return dummyData.rows;

  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch the latest invoices data.');
  }
}

export async function fetchRevenueData() {
  try {
    const dummyData = {
      rows: [
        { month: "Jan", revenue: 1000 },
        { month: "Feb", revenue: 2500.5 },
        { month: "Mar", revenue: 5000 },
        { month: "Apr", revenue: 10000 },
        { month: "May", revenue: 15000 },
        // { month: "Jun", revenue: 20000 },
        // { month: "Jul", revenue: 25000 },
        // { month: "Aug", revenue: 30000 },
        // { month: "Sep", revenue: 35000 },
        // { month: "Oct", revenue: 40000 },
        // { month: "Nov", revenue: 45000 },
        // { month: "Dec", revenue: 50000 },
      ],
    };
    return dummyData.rows;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchCustomersData() {
  try {
    const dummyData = {
      rows: [
        {id: 1, name: "HEHE"},
        {id: 2, name: "HOHO"},
        {id: 3, name: "HAHA"},
        {id: 4, name: "HIHI"},
      ],
    };

    return dummyData.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomersData(query) {
  try {
    const dummyData = {
      rows: [
        {id: 1, name: "HEHE", email: "hehe@gmail.com", image_url: "null", total_invoices: 100, total_pending: 1000, total_paid: 1000},
        {id: 2, name: "HOHO", email: "hoho@gmail.com", image_url: "null", total_invoices: 200, total_pending: 2000, total_paid: 2000},
        {id: 3, name: "HAHA", email: "haha@gmail.com", image_url: "null", total_invoices: 300, total_pending: 3000, total_paid: 3000},
        {id: 4, name: "HIHI", email: "hihi@gmail.com", image_url: "null", total_invoices: 400, total_pending: 4000, total_paid: 4000},
      ],
    }

    return dummyData.rows;
  } catch (err) {
    console.error('API Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchInvoicesPagesData(query) {
  try {
    const dummyData = 1;

    const totalPages = Math.ceil(dummyData / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}


export async function fetchFilteredInvoicesData(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const dummyData = {
      rows: [
        {id: 1, amount: 50, date: "2022-10-29", status: "paid", name: "HEHE", email: "hehe@gmail.com", image_url: "null"},
        {id: 2, amount: 100, date: "2022-10-28", status: "paid", name: "HOHO", email: "hoho@gmail.com", image_url: "null"},
        {id: 3, amount: 150, date: "2022-10-27", status: "pending", name: "HAHA", email: "haha@gmail.com", image_url: "null"},
        {id: 4, amount: 500, date: "2022-10-26", status: "paid", name: "HIHI", email: "hihi@gmail.com", image_url: "null"},
      ],
    }

    return dummyData.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}



// export async function fetchInvoiceById(id) {
//   try {
//     const data = await sql`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }




