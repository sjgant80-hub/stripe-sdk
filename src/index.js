/**
 * stripe-sdk · sovereign wrapper for Stripe
 * Payments
 *
 * Auto-generated from OpenAPI spec · 2026-07-11
 * 100 endpoints wrapped · spec version 2026-06-24.dahlia
 *
 * Docs (upstream): https://stripe.com/docs/api
 * Homepage: https://stripe.com
 */

export class Stripe {
  constructor({ apiKey, baseURL = 'https://api.stripe.com/', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      'Authorization': apiKey ? 'Bearer ' + apiKey : '',
      
      ...headers
    };
  }

  /** GET /v1/account · Retrieve account */
  async getAccount(params = {}) {
    let path = '/v1/account'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/account_links · Create an account link */
  async postAccountLinks(params = {}) {
    let path = '/v1/account_links'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/account_sessions · Create an Account Session */
  async postAccountSessions(params = {}) {
    let path = '/v1/account_sessions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts · List all connected accounts */
  async getAccounts(params = {}) {
    let path = '/v1/accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts ·  */
  async postAccounts(params = {}) {
    let path = '/v1/accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account} · Retrieve account */
  async getAccountsAccount(params = {}) {
    let path = '/v1/accounts/{account}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account} · Update an account */
  async postAccountsAccount(params = {}) {
    let path = '/v1/accounts/{account}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/accounts/{account} · Delete an account */
  async deleteAccountsAccount(params = {}) {
    let path = '/v1/accounts/{account}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/bank_accounts · Create an external account */
  async postAccountsAccountBankAccounts(params = {}) {
    let path = '/v1/accounts/{account}/bank_accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/bank_accounts/{id} · Retrieve an external account */
  async getAccountsAccountBankAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/bank_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/bank_accounts/{id} ·  */
  async postAccountsAccountBankAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/bank_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/accounts/{account}/bank_accounts/{id} · Delete an external account */
  async deleteAccountsAccountBankAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/bank_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/capabilities · List all account capabilities */
  async getAccountsAccountCapabilities(params = {}) {
    let path = '/v1/accounts/{account}/capabilities'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/capabilities/{capability} · Retrieve an Account Capability */
  async getAccountsAccountCapabilitiesCapability(params = {}) {
    let path = '/v1/accounts/{account}/capabilities/{capability}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/capabilities/{capability} · Update an Account Capability */
  async postAccountsAccountCapabilitiesCapability(params = {}) {
    let path = '/v1/accounts/{account}/capabilities/{capability}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/external_accounts · List all external accounts */
  async getAccountsAccountExternalAccounts(params = {}) {
    let path = '/v1/accounts/{account}/external_accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/external_accounts · Create an external account */
  async postAccountsAccountExternalAccounts(params = {}) {
    let path = '/v1/accounts/{account}/external_accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/external_accounts/{id} · Retrieve an external account */
  async getAccountsAccountExternalAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/external_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/external_accounts/{id} ·  */
  async postAccountsAccountExternalAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/external_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/accounts/{account}/external_accounts/{id} · Delete an external account */
  async deleteAccountsAccountExternalAccountsId(params = {}) {
    let path = '/v1/accounts/{account}/external_accounts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/login_links · Create a login link */
  async postAccountsAccountLoginLinks(params = {}) {
    let path = '/v1/accounts/{account}/login_links'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/people · List all persons */
  async getAccountsAccountPeople(params = {}) {
    let path = '/v1/accounts/{account}/people'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/people · Create a person */
  async postAccountsAccountPeople(params = {}) {
    let path = '/v1/accounts/{account}/people'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/people/{person} · Retrieve a person */
  async getAccountsAccountPeoplePerson(params = {}) {
    let path = '/v1/accounts/{account}/people/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/people/{person} · Update a person */
  async postAccountsAccountPeoplePerson(params = {}) {
    let path = '/v1/accounts/{account}/people/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/accounts/{account}/people/{person} · Delete a person */
  async deleteAccountsAccountPeoplePerson(params = {}) {
    let path = '/v1/accounts/{account}/people/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/persons · List all persons */
  async getAccountsAccountPersons(params = {}) {
    let path = '/v1/accounts/{account}/persons'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/persons · Create a person */
  async postAccountsAccountPersons(params = {}) {
    let path = '/v1/accounts/{account}/persons'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/accounts/{account}/persons/{person} · Retrieve a person */
  async getAccountsAccountPersonsPerson(params = {}) {
    let path = '/v1/accounts/{account}/persons/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/persons/{person} · Update a person */
  async postAccountsAccountPersonsPerson(params = {}) {
    let path = '/v1/accounts/{account}/persons/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/accounts/{account}/persons/{person} · Delete a person */
  async deleteAccountsAccountPersonsPerson(params = {}) {
    let path = '/v1/accounts/{account}/persons/{person}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/accounts/{account}/reject · Reject an account */
  async postAccountsAccountReject(params = {}) {
    let path = '/v1/accounts/{account}/reject'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/apple_pay/domains ·  */
  async getApplePayDomains(params = {}) {
    let path = '/v1/apple_pay/domains'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/apple_pay/domains ·  */
  async postApplePayDomains(params = {}) {
    let path = '/v1/apple_pay/domains'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/apple_pay/domains/{domain} ·  */
  async getApplePayDomainsDomain(params = {}) {
    let path = '/v1/apple_pay/domains/{domain}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /v1/apple_pay/domains/{domain} ·  */
  async deleteApplePayDomainsDomain(params = {}) {
    let path = '/v1/apple_pay/domains/{domain}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/application_fees · List all application fees */
  async getApplicationFees(params = {}) {
    let path = '/v1/application_fees'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/application_fees/{fee}/refunds/{id} · Retrieve an application fee refund */
  async getApplicationFeesFeeRefundsId(params = {}) {
    let path = '/v1/application_fees/{fee}/refunds/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/application_fees/{fee}/refunds/{id} · Update an application fee refund */
  async postApplicationFeesFeeRefundsId(params = {}) {
    let path = '/v1/application_fees/{fee}/refunds/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/application_fees/{id} · Retrieve an application fee */
  async getApplicationFeesId(params = {}) {
    let path = '/v1/application_fees/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/application_fees/{id}/refund ·  */
  async postApplicationFeesIdRefund(params = {}) {
    let path = '/v1/application_fees/{id}/refund'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/application_fees/{id}/refunds · List all application fee refunds */
  async getApplicationFeesIdRefunds(params = {}) {
    let path = '/v1/application_fees/{id}/refunds'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/application_fees/{id}/refunds · Create an application fee refund */
  async postApplicationFeesIdRefunds(params = {}) {
    let path = '/v1/application_fees/{id}/refunds'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/apps/secrets · List secrets */
  async getAppsSecrets(params = {}) {
    let path = '/v1/apps/secrets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/apps/secrets · Set a Secret */
  async postAppsSecrets(params = {}) {
    let path = '/v1/apps/secrets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/apps/secrets/delete · Delete a Secret */
  async postAppsSecretsDelete(params = {}) {
    let path = '/v1/apps/secrets/delete'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/apps/secrets/find · Find a Secret */
  async getAppsSecretsFind(params = {}) {
    let path = '/v1/apps/secrets/find'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance · Retrieve balance */
  async getBalance(params = {}) {
    let path = '/v1/balance'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance/history · List all balance transactions */
  async getBalanceHistory(params = {}) {
    let path = '/v1/balance/history'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance/history/{id} · Retrieve a balance transaction */
  async getBalanceHistoryId(params = {}) {
    let path = '/v1/balance/history/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance_settings · Retrieve balance settings */
  async getBalanceSettings(params = {}) {
    let path = '/v1/balance_settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/balance_settings · Update balance settings */
  async postBalanceSettings(params = {}) {
    let path = '/v1/balance_settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance_transactions · List all balance transactions */
  async getBalanceTransactions(params = {}) {
    let path = '/v1/balance_transactions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/balance_transactions/{id} · Retrieve a balance transaction */
  async getBalanceTransactionsId(params = {}) {
    let path = '/v1/balance_transactions/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/alerts · List billing alerts */
  async getBillingAlerts(params = {}) {
    let path = '/v1/billing/alerts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/alerts · Create a billing alert */
  async postBillingAlerts(params = {}) {
    let path = '/v1/billing/alerts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/alerts/{id} · Retrieve a billing alert */
  async getBillingAlertsId(params = {}) {
    let path = '/v1/billing/alerts/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/alerts/{id}/activate · Activate a billing alert */
  async postBillingAlertsIdActivate(params = {}) {
    let path = '/v1/billing/alerts/{id}/activate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/alerts/{id}/archive · Archive a billing alert */
  async postBillingAlertsIdArchive(params = {}) {
    let path = '/v1/billing/alerts/{id}/archive'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/alerts/{id}/deactivate · Deactivate a billing alert */
  async postBillingAlertsIdDeactivate(params = {}) {
    let path = '/v1/billing/alerts/{id}/deactivate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/credit_balance_summary · Retrieve the credit balance summary for a customer */
  async getBillingCreditBalanceSummary(params = {}) {
    let path = '/v1/billing/credit_balance_summary'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/credit_balance_transactions · List credit balance transactions */
  async getBillingCreditBalanceTransactions(params = {}) {
    let path = '/v1/billing/credit_balance_transactions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/credit_balance_transactions/{id} · Retrieve a credit balance transaction */
  async getBillingCreditBalanceTransactionsId(params = {}) {
    let path = '/v1/billing/credit_balance_transactions/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/credit_grants · List credit grants */
  async getBillingCreditGrants(params = {}) {
    let path = '/v1/billing/credit_grants'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/credit_grants · Create a credit grant */
  async postBillingCreditGrants(params = {}) {
    let path = '/v1/billing/credit_grants'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/credit_grants/{id} · Retrieve a credit grant */
  async getBillingCreditGrantsId(params = {}) {
    let path = '/v1/billing/credit_grants/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/credit_grants/{id} · Update a credit grant */
  async postBillingCreditGrantsId(params = {}) {
    let path = '/v1/billing/credit_grants/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/credit_grants/{id}/expire · Expire a credit grant */
  async postBillingCreditGrantsIdExpire(params = {}) {
    let path = '/v1/billing/credit_grants/{id}/expire'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/credit_grants/{id}/void · Void a credit grant */
  async postBillingCreditGrantsIdVoid(params = {}) {
    let path = '/v1/billing/credit_grants/{id}/void'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meter_event_adjustments · Create a billing meter event adjustment */
  async postBillingMeterEventAdjustments(params = {}) {
    let path = '/v1/billing/meter_event_adjustments'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meter_events · Create a billing meter event */
  async postBillingMeterEvents(params = {}) {
    let path = '/v1/billing/meter_events'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/meters · List billing meters */
  async getBillingMeters(params = {}) {
    let path = '/v1/billing/meters'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meters · Create a billing meter */
  async postBillingMeters(params = {}) {
    let path = '/v1/billing/meters'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/meters/{id} · Retrieve a billing meter */
  async getBillingMetersId(params = {}) {
    let path = '/v1/billing/meters/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meters/{id} · Update a billing meter */
  async postBillingMetersId(params = {}) {
    let path = '/v1/billing/meters/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meters/{id}/deactivate · Deactivate a billing meter */
  async postBillingMetersIdDeactivate(params = {}) {
    let path = '/v1/billing/meters/{id}/deactivate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing/meters/{id}/event_summaries · List billing meter event summaries */
  async getBillingMetersIdEventSummaries(params = {}) {
    let path = '/v1/billing/meters/{id}/event_summaries'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing/meters/{id}/reactivate · Reactivate a billing meter */
  async postBillingMetersIdReactivate(params = {}) {
    let path = '/v1/billing/meters/{id}/reactivate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing_portal/configurations · List portal configurations */
  async getBillingPortalConfigurations(params = {}) {
    let path = '/v1/billing_portal/configurations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing_portal/configurations · Create a portal configuration */
  async postBillingPortalConfigurations(params = {}) {
    let path = '/v1/billing_portal/configurations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/billing_portal/configurations/{configuration} · Retrieve a portal configuration */
  async getBillingPortalConfigurationsConfiguration(params = {}) {
    let path = '/v1/billing_portal/configurations/{configuration}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing_portal/configurations/{configuration} · Update a portal configuration */
  async postBillingPortalConfigurationsConfiguration(params = {}) {
    let path = '/v1/billing_portal/configurations/{configuration}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/billing_portal/sessions · Create a portal session */
  async postBillingPortalSessions(params = {}) {
    let path = '/v1/billing_portal/sessions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges · List all charges */
  async getCharges(params = {}) {
    let path = '/v1/charges'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges ·  */
  async postCharges(params = {}) {
    let path = '/v1/charges'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges/search · Search charges */
  async getChargesSearch(params = {}) {
    let path = '/v1/charges/search'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges/{charge} · Retrieve a charge */
  async getChargesCharge(params = {}) {
    let path = '/v1/charges/{charge}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge} · Update a charge */
  async postChargesCharge(params = {}) {
    let path = '/v1/charges/{charge}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/capture · Capture a payment */
  async postChargesChargeCapture(params = {}) {
    let path = '/v1/charges/{charge}/capture'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges/{charge}/dispute ·  */
  async getChargesChargeDispute(params = {}) {
    let path = '/v1/charges/{charge}/dispute'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/dispute ·  */
  async postChargesChargeDispute(params = {}) {
    let path = '/v1/charges/{charge}/dispute'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/dispute/close ·  */
  async postChargesChargeDisputeClose(params = {}) {
    let path = '/v1/charges/{charge}/dispute/close'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/refund · Create a refund */
  async postChargesChargeRefund(params = {}) {
    let path = '/v1/charges/{charge}/refund'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges/{charge}/refunds · List all refunds */
  async getChargesChargeRefunds(params = {}) {
    let path = '/v1/charges/{charge}/refunds'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/refunds · Create customer balance refund */
  async postChargesChargeRefunds(params = {}) {
    let path = '/v1/charges/{charge}/refunds'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/charges/{charge}/refunds/{refund} ·  */
  async getChargesChargeRefundsRefund(params = {}) {
    let path = '/v1/charges/{charge}/refunds/{refund}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/charges/{charge}/refunds/{refund} ·  */
  async postChargesChargeRefundsRefund(params = {}) {
    let path = '/v1/charges/{charge}/refunds/{refund}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/checkout/sessions · List all Checkout Sessions */
  async getCheckoutSessions(params = {}) {
    let path = '/v1/checkout/sessions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /v1/checkout/sessions · Create a Checkout Session */
  async postCheckoutSessions(params = {}) {
    let path = '/v1/checkout/sessions'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /v1/checkout/sessions/{session} · Retrieve a Checkout Session */
  async getCheckoutSessionsSession(params = {}) {
    let path = '/v1/checkout/sessions/{session}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('stripe ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
}

export default Stripe;
