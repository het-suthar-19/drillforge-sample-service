# Sample Runbook: User Authentication

## Purpose
This runbook describes how to handle user authentication failures.

## Symptoms
- Users receive "Invalid credentials" error
- Auth service logs show failed login attempts

## Step 1: Check Clerk Status
1. Log in to Clerk Dashboard
2. Check "Active Sessions" for any anomalies
3. Verify that the JWT secret key hasn't expired

## Step 2: Verify Database Connection
```bash
# Check if PostgreSQL is reachable
psql -h your-neon-host -U user -d database -c "SELECT 1"
