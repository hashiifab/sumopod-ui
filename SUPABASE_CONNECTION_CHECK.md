# Panduan Cek Koneksi Supabase dengan Frontend

## Langkah 1: Buka Supabase SQL Editor

1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project Anda
3. Klik **SQL Editor** di sidebar kiri
4. Klik **New Query**

## Langkah 2: Jalankan Query Dasar

Copy dan paste query ini untuk mengecek struktur tabel:

```sql
-- CEK STRUKTUR TABEL
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('balances', 'transactions', 'payments')
ORDER BY table_name, ordinal_position;
```

**Expected Result:** Harus menampilkan kolom-kolom dari ketiga tabel sesuai dengan interface di kode TypeScript.

## Langkah 3: Cek Data yang Ada

```sql
-- CEK SEMUA DATA
SELECT 'balances' as table_name, COUNT(*) as total_rows FROM balances
UNION ALL
SELECT 'transactions' as table_name, COUNT(*) as total_rows FROM transactions
UNION ALL  
SELECT 'payments' as table_name, COUNT(*) as total_rows FROM payments;
```

## Langkah 4: Cek User ID yang Ada

```sql
-- LIHAT SEMUA USER ID
SELECT DISTINCT user_id, 'balances' as source FROM balances
UNION
SELECT DISTINCT user_id, 'transactions' as source FROM transactions  
UNION
SELECT DISTINCT user_id, 'payments' as source FROM payments
ORDER BY user_id;
```

**Catat user_id yang muncul** - ini yang akan kita gunakan untuk testing.

## Langkah 5: Test Query dengan User ID Spesifik

Ganti `YOUR_USER_ID_HERE` dengan user_id yang sebenarnya dari hasil langkah 4:

```sql
-- Test seperti di BalanceCard.tsx
SELECT user_balance 
FROM balances 
WHERE user_id = 'YOUR_USER_ID_HERE';

-- Test seperti di TransactionTable.tsx  
SELECT id, user_id, amount, type, date
FROM transactions 
WHERE user_id = 'YOUR_USER_ID_HERE'
ORDER BY date DESC;

-- Test seperti di TransactionTable.tsx
SELECT id, user_id, amount, status, invoice_url, created_at
FROM payments 
WHERE user_id = 'YOUR_USER_ID_HERE'
ORDER BY created_at DESC;
```

## Langkah 6: Cek RLS (Row Level Security)

```sql
-- CEK RLS STATUS
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE tablename IN ('balances', 'transactions', 'payments');
```

**Expected Result:** `rls_enabled` harus `true` untuk semua tabel.

## Langkah 7: Cek Policies

```sql
-- CEK POLICIES
SELECT 
    tablename,
    policyname,
    cmd,
    roles
FROM pg_policies 
WHERE tablename IN ('balances', 'transactions', 'payments');
```

## Langkah 8: Test Insert Data (Jika Tabel Kosong)

Jika tidak ada data, tambahkan sample data dengan user_id yang valid:

```sql
-- Ganti YOUR_USER_ID_HERE dengan user_id dari Google Auth
INSERT INTO balances (user_id, user_balance) 
VALUES ('YOUR_USER_ID_HERE', 100000)
ON CONFLICT (user_id) DO UPDATE SET user_balance = EXCLUDED.user_balance;

INSERT INTO transactions (user_id, amount, type, date) VALUES
('YOUR_USER_ID_HERE', 50000, 'credit', NOW()),
('YOUR_USER_ID_HERE', -10000, 'debit', NOW() - INTERVAL '1 day');

INSERT INTO payments (user_id, amount, status, invoice_url, created_at) VALUES
('YOUR_USER_ID_HERE', 50000, 'paid', 'https://checkout.xendit.co/web/example', NOW());
```

## Cara Mendapatkan User ID yang Benar

### Opsi 1: Dari Frontend Console
1. Buka aplikasi di browser
2. Login dengan Google
3. Buka Developer Tools (F12)
4. Di Console, ketik:
```javascript
supabase.auth.getSession().then(({data: {session}}) => console.log('User ID:', session?.user?.id))
```

### Opsi 2: Dari Supabase Auth Dashboard
1. Di Supabase Dashboard, klik **Authentication**
2. Klik **Users**
3. Lihat kolom **ID** - ini adalah user_id yang digunakan

## Troubleshooting

### Jika Query Gagal:
1. **"relation does not exist"** → Tabel belum dibuat
2. **"permission denied"** → RLS policy bermasalah
3. **"no rows returned"** → Data kosong atau user_id salah

### Jika Frontend Tidak Menampilkan Data:
1. Cek Network tab di Developer Tools
2. Lihat apakah ada error 401/403 (auth problem)
3. Pastikan user_id di database sama dengan yang login

## Expected Behavior

Setelah semua query berhasil:
- **BalanceCard** harus menampilkan balance dari tabel `balances`
- **TransactionTable** tab "Transaction" harus menampilkan data dari tabel `transactions`
- **TransactionTable** tab "Payment" harus menampilkan data dari tabel `payments`
- Semua data harus difilter berdasarkan `user_id` yang sedang login
