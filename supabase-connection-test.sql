-- ========================================
-- SUPABASE CONNECTION TEST & DATA CHECK
-- ========================================
-- Jalankan query ini di Supabase SQL Editor untuk mengecek koneksi dan data

-- 1. CEK STRUKTUR TABEL
-- Pastikan tabel-tabel yang dibutuhkan ada
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('balances', 'transactions', 'payments')
ORDER BY table_name, ordinal_position;

-- 2. CEK DATA BALANCES
-- Lihat semua data di tabel balances
SELECT 
    id,
    user_id,
    user_balance,
    created_at,
    'balances' as table_source
FROM balances
ORDER BY created_at DESC;

-- 3. CEK DATA TRANSACTIONS  
-- Lihat semua data di tabel transactions
SELECT 
    id,
    user_id,
    amount,
    type,
    date,
    'transactions' as table_source
FROM transactions
ORDER BY date DESC;

-- 4. CEK DATA PAYMENTS
-- Lihat semua data di tabel payments
SELECT 
    id,
    user_id,
    amount,
    status,
    invoice_url,
    created_at,
    'payments' as table_source
FROM payments
ORDER BY created_at DESC;

-- 5. CEK JUMLAH DATA PER USER
-- Ringkasan data per user_id
SELECT 
    user_id,
    COUNT(*) as total_records,
    'balances' as table_name
FROM balances
GROUP BY user_id
UNION ALL
SELECT 
    user_id,
    COUNT(*) as total_records,
    'transactions' as table_name
FROM transactions
GROUP BY user_id
UNION ALL
SELECT 
    user_id,
    COUNT(*) as total_records,
    'payments' as table_name
FROM payments
GROUP BY user_id
ORDER BY user_id, table_name;

-- 6. CEK USER ID YANG ADA
-- Lihat semua user_id unik di semua tabel
SELECT DISTINCT user_id, 'balances' as source FROM balances
UNION
SELECT DISTINCT user_id, 'transactions' as source FROM transactions  
UNION
SELECT DISTINCT user_id, 'payments' as source FROM payments
ORDER BY user_id;

-- 7. CEK RLS (Row Level Security) POLICIES
-- Pastikan RLS policies sudah diaktifkan
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE tablename IN ('balances', 'transactions', 'payments');

-- 8. CEK POLICIES YANG ADA
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename IN ('balances', 'transactions', 'payments');

-- ========================================
-- QUERY UNTUK TEST DENGAN USER ID SPESIFIK
-- ========================================
-- Ganti 'YOUR_USER_ID_HERE' dengan user_id yang sebenarnya

-- Test query seperti yang digunakan di frontend
-- (Uncomment dan ganti YOUR_USER_ID_HERE dengan user_id yang valid)

/*
-- Test Balance Query (seperti di BalanceCard.tsx)
SELECT user_balance 
FROM balances 
WHERE user_id = 'YOUR_USER_ID_HERE';

-- Test Transactions Query (seperti di TransactionTable.tsx)
SELECT id, user_id, amount, type, date
FROM transactions 
WHERE user_id = 'YOUR_USER_ID_HERE'
ORDER BY date DESC;

-- Test Payments Query (seperti di TransactionTable.tsx)
SELECT id, user_id, amount, status, invoice_url, created_at
FROM payments 
WHERE user_id = 'YOUR_USER_ID_HERE'
ORDER BY created_at DESC;
*/

-- ========================================
-- INSERT SAMPLE DATA (OPSIONAL)
-- ========================================
-- Uncomment untuk menambah sample data jika tabel kosong

/*
-- Sample Balance Data
INSERT INTO balances (user_id, user_balance) 
VALUES ('YOUR_USER_ID_HERE', 100000)
ON CONFLICT (user_id) DO UPDATE SET user_balance = EXCLUDED.user_balance;

-- Sample Transaction Data
INSERT INTO transactions (user_id, amount, type, date) VALUES
('YOUR_USER_ID_HERE', 50000, 'credit', NOW()),
('YOUR_USER_ID_HERE', -10000, 'debit', NOW() - INTERVAL '1 day'),
('YOUR_USER_ID_HERE', 25000, 'credit', NOW() - INTERVAL '2 days');

-- Sample Payment Data
INSERT INTO payments (user_id, amount, status, invoice_url, created_at) VALUES
('YOUR_USER_ID_HERE', 50000, 'paid', 'https://checkout.xendit.co/web/example', NOW()),
('YOUR_USER_ID_HERE', 25000, 'pending', 'https://checkout.xendit.co/web/example2', NOW() - INTERVAL '1 day');
*/

-- ========================================
-- TROUBLESHOOTING QUERIES
-- ========================================

-- Cek apakah ada error di RLS
-- Jika query ini gagal, kemungkinan ada masalah RLS
SELECT 'RLS Test' as test_name, COUNT(*) as total_rows FROM balances;
SELECT 'RLS Test' as test_name, COUNT(*) as total_rows FROM transactions;
SELECT 'RLS Test' as test_name, COUNT(*) as total_rows FROM payments;

-- Cek koneksi database
SELECT 
    current_database() as database_name,
    current_user as current_user,
    version() as postgres_version,
    NOW() as current_time;
