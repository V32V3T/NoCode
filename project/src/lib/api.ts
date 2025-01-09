import { supabase } from './supabase';
import type { Account, Transaction, Category, Budget } from './types';

// Accounts
export async function getAccounts() {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as Account[];
}

export async function createAccount(account: Omit<Account, 'id' | 'user_id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('accounts')
    .insert(account)
    .select()
    .single();
  
  if (error) throw error;
  return data as Account;
}

// Transactions
export async function getTransactions(limit = 10) {
  const { data, error } = await supabase
    .from('transactions')
    .select(`
      *,
      accounts (name),
      categories (name, type)
    `)
    .order('date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data;
}

export async function createTransaction(transaction: Omit<Transaction, 'id' | 'user_id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('transactions')
    .insert(transaction)
    .select()
    .single();
  
  if (error) throw error;
  return data as Transaction;
}

// Categories
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data as Category[];
}

// Budgets
export async function getBudgets(month: string) {
  const { data, error } = await supabase
    .from('budgets')
    .select(`
      *,
      categories (name, type)
    `)
    .eq('month', month);
  
  if (error) throw error;
  return data;
}

// Dashboard Stats
export async function getDashboardStats() {
  const { data: totals, error: totalsError } = await supabase
    .rpc('get_monthly_totals');
  
  if (totalsError) throw totalsError;
  
  const { data: recent, error: recentError } = await getTransactions(5);
  if (recentError) throw recentError;
  
  return {
    totals,
    recentTransactions: recent
  };
}