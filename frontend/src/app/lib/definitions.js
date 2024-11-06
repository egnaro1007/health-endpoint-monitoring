'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

export async function createInvoice(prevState, formData) {
  const customerId = formData.get('customerId');
  const amount = parseFloat(formData.get('amount'));
  const status = formData.get('status');
  
  if (!customerId || !amount || amount <= 0 || !status) {
    return {
      errors: {
        customerId: !customerId ? ['Please select a customer.'] : [],
        amount: !amount || amount <= 0 ? ['Please enter an amount greater than $0.'] : [],
        status: !status ? ['Please select an invoice status.'] : [],
      },
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id, prevState, formData) {
  const customerId = formData.get('customerId');
  const amount = parseFloat(formData.get('amount'));
  const status = formData.get('status');

  if (!customerId || !amount || amount <= 0 || !status) {
    return {
      errors: {
        customerId: !customerId ? ['Please select a customer.'] : [],
        amount: !amount || amount <= 0 ? ['Please enter an amount greater than $0.'] : [],
        status: !status ? ['Please select an invoice status.'] : [],
      },
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

// export async function authenticate(prevState, formData) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }
