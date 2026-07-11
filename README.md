# @ai-native-solutions/stripe-sdk

Sovereign wrapper for **Stripe** · Payments

**100 endpoints** wrapped from OpenAPI spec.

## Install
```bash
npm install @ai-native-solutions/stripe-sdk
```

## Use
```js
import Stripe from '@ai-native-solutions/stripe-sdk';
const client = new Stripe({ apiKey: process.env.STRIPE_KEY });
```

## Endpoints (100)
- `GET /v1/account` · Retrieve account
- `POST /v1/account_links` · Create an account link
- `POST /v1/account_sessions` · Create an Account Session
- `GET /v1/accounts` · List all connected accounts
- `POST /v1/accounts` · 
- `GET /v1/accounts/{account}` · Retrieve account
- `POST /v1/accounts/{account}` · Update an account
- `DELETE /v1/accounts/{account}` · Delete an account
- `POST /v1/accounts/{account}/bank_accounts` · Create an external account
- `GET /v1/accounts/{account}/bank_accounts/{id}` · Retrieve an external account
- `POST /v1/accounts/{account}/bank_accounts/{id}` · 
- `DELETE /v1/accounts/{account}/bank_accounts/{id}` · Delete an external account
- `GET /v1/accounts/{account}/capabilities` · List all account capabilities
- `GET /v1/accounts/{account}/capabilities/{capability}` · Retrieve an Account Capability
- `POST /v1/accounts/{account}/capabilities/{capability}` · Update an Account Capability
- `GET /v1/accounts/{account}/external_accounts` · List all external accounts
- `POST /v1/accounts/{account}/external_accounts` · Create an external account
- `GET /v1/accounts/{account}/external_accounts/{id}` · Retrieve an external account
- `POST /v1/accounts/{account}/external_accounts/{id}` · 
- `DELETE /v1/accounts/{account}/external_accounts/{id}` · Delete an external account
_...and 80 more_

## License
MIT · Copyright 2026 AI-Native Solutions

## Upstream
- Docs: https://stripe.com/docs/api
- Homepage: https://stripe.com
