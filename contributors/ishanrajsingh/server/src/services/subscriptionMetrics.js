import { BILLING_CYCLES, SUBSCRIPTION_STATUS } from '../constants/subscription.constants.js';

export const getMonthlyAmount = (subscription) => {
  if (!subscription) return 0;

  const { amount, billingCycle, status } = subscription;

  if (status !== SUBSCRIPTION_STATUS.ACTIVE) return 0;
  if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) return 0;

  switch (billingCycle) {
    case BILLING_CYCLES.MONTHLY:
      return amount;

    case BILLING_CYCLES.YEARLY:
      return amount / 12;

    default:
      return 0;
  }
};

export const calculateMonthlySpend = (subscriptions = []) => {
  const total = subscriptions.reduce((sum, sub) => {
    return sum + getMonthlyAmount(sub);
  }, 0);
  return Math.round(total * 100) / 100;
};
