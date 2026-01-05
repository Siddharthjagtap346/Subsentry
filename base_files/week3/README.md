# Week 3 Base Files (Issues 8–9)

This folder is the Week 3 snapshot. It starts from Week 2 and focuses on UI integration with the backend APIs.

## Week 3 Goal

Week 3 is about turning the dashboard into a usable product interface. Compared to Week 2, the difficulty is higher because you must connect UI to live APIs and handle real user input and state. Expect more edge cases and validation work than the previous week.

## ✅ Issues Covered (Current)

### Issue 8: Subscription Listing UI (Frontend/UI)
- Fetch subscription data from the GET API.
- Show name, amount, billing cycle, category, and renewal date.
- Clearly distinguish trial vs paid subscriptions.
- Responsive layout for smaller screens.

### Issue 9: Add Subscription Form UI (Frontend/Forms)
- Controlled inputs with basic validation.
- Clear labels and placeholders.
- Submit to POST API without full page reload.

## 📌 Structure

- `client/` — Next.js UI based on Week 2, now ready for listing and form integration.
- `server/` — Week 2 backend APIs used by the UI.

## ▶ How It Works

- The UI should call `/api/subscriptions` for listing.
- The form should POST to `/api/subscriptions`.
- Data should be scoped to the authenticated user.

If you are implementing Week 3 issues, use this folder as the reference snapshot.
